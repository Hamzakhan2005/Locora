import Comment from "../models/Comment.js";
import Help from "../models/Help.js";

export const addComment = async (req, res) => {
  const { text } = req.body;
  const helpId = req.params.helpId;

  if (!text)
    return res.status(400).json({ message: "Comment text is required" });

  try {
    const helpPost = await Help.findById(helpId);
    if (!helpPost) return res.status(404).json({ message: "Post not found" });

    const comment = new Comment({
      user: req.user._id,
      help: helpId,
      text,
    });

    await comment.save();

    res.status(201).json({ message: "Comment added", comment });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to add comment", error: err.message });
  }
};

export const getCommentsForPost = async (req, res) => {
  const helpId = req.params.helpId;

  try {
    const comments = await Comment.find({ help: helpId })
      .populate("user", "name email") // Include user details
      .sort({ createdAt: -1 });

    res.status(200).json({ comments });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch comments", error: err.message });
  }
};
