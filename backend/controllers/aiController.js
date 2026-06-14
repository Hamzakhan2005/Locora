import Help from "../models/Help.js";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.1-8b-instant";

const callGroq = async (messages) => {
  if (!process.env.GROQ_API_KEY) throw new Error("GROQ_API_KEY not configured");

  const response = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages,
      temperature: 0.3,
      max_tokens: 400,
      response_format: { type: "json_object" },
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Groq error: ${response.status} ${errText}`);
  }

  const data = await response.json();
  return JSON.parse(data.choices?.[0]?.message?.content || "{}");
};

export const suggestHelpsForUser = async (req, res) => {
  try {
    const userId = req.user.id;

    const myPosts = await Help.find({ user: userId }).sort({ createdAt: -1 }).limit(10)
      .select("title description category type");

    const candidates = await Help.find({ user: { $ne: userId }, isSpam: false, status: "open", type: "need" })
      .sort({ createdAt: -1 }).limit(25).select("title description category");

    if (candidates.length === 0) return res.json({ suggestions: [] });

    const profileSummary = myPosts.length > 0
      ? myPosts.map((p) => `- (${p.type}) [${p.category}] ${p.title}: ${p.description}`).join("\n")
      : "No post history. Make a general guess based on common helpful categories.";

    const candidateList = candidates
      .map((c, i) => `${i}. [${c.category}] ${c.title}: ${c.description}`)
      .join("\n");

    const result = await callGroq([
      {
        role: "system",
        content:
          'You are a matching assistant for a community help platform. Given a user\'s past posts and a list of open help requests, pick up to 5 requests this user would likely be a good fit to help with. Respond ONLY with JSON: {"matches": [{"index": number, "reason": "short reason under 15 words"}]}',
      },
      { role: "user", content: `User's past posts:\n${profileSummary}\n\nOpen help requests:\n${candidateList}` },
    ]);

    const matches = (result.matches || [])
      .filter((m) => candidates[m.index])
      .slice(0, 5)
      .map((m) => ({ post: candidates[m.index], reason: m.reason }));

    res.json({ suggestions: matches });
  } catch (err) {
    res.status(500).json({ message: "AI suggestion failed", error: err.message });
  }
};