import Help from "../models/Help.js";

export const createHelp = async (req, res) => {
  try {
    const { title, description, category, location, type } = req.body;

    if (!title || !description || !category || !type) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPost = new Help({
      user: req.user.id,
      title,
      description,
      category,
      location,
      type,
    });

    await newPost.save();
    res.status(201).json({ message: "Post created", post: newPost });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const getHelp = async (req, res) => {
  try {
    const helps = await Help.find().populate("user", "name email");
    res.status(200).json({ helps }); // 👈 Must return `helps` array inside object
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch helps" });
  }
};

export const geMyHelp = async (req, res) => {
  try {
    const posts = await Help.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user posts", error });
  }
};
