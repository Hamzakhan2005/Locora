import Help from "../models/Help.js";

export const createHelp = async (req, res) => {
  const { title, description, category, location } = req.body;
  try {
    const help = await Help.create({
      title,
      description,
      category,
      location,
      user: req.user.id,
    });
    res.status(201).json(help);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getHelp = async (req, res) => {
  try {
    const helpPosts = await Help.find().populate("user", "name location");
    res.status(200).json(helpPosts);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
