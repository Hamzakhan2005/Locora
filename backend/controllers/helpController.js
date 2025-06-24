import Help from "../models/Help.js";
import User from "../models/User.js";
import { connectedUsers } from "../server.js"; // import socket map

// CREATE A HELP POST
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

    // 🔔 Notify users in same location except the poster
    const users = await User.find({ location }); // users in same location

    users.forEach((user) => {
      if (user._id.toString() !== req.user.id) {
        const socket = connectedUsers.get(user._id.toString());
        if (socket) {
          socket.emit("notification", {
            type: "nearby",
            message: `New ${type} request posted near you.`,
            postId: newPost._id,
          });
        }
      }
    });

    res.status(201).json({ message: "Post created", post: newPost });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// GET ALL HELP POSTS
export const getHelp = async (req, res) => {
  try {
    const helps = await Help.find().populate("user", "name email");
    res.status(200).json({ helps });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch helps" });
  }
};

// GET MY HELP POSTS
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

// DELETE POST
export const deletePost = async (req, res) => {
  const help = await Help.findById(req.params.id);

  if (!help) return res.status(404).json({ message: "Post not found" });

  if (
    req.user.role === "admin" ||
    help.user.toString() === req.user._id.toString()
  ) {
    await help.deleteOne();
    return res.json({ message: "Post deleted" });
  }

  res.status(403).json({ message: "You can only delete your own posts" });
};

// MARK POST AS SPAM
export const spamPost = async (req, res) => {
  try {
    const post = await Help.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.isSpam = true;
    await post.save();
    res.json({ message: "Post marked as spam" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ ACCEPT HELP
export const acceptHelp = async (req, res) => {
  const postId = req.params.id;

  try {
    const helpPost = await Help.findById(postId).populate("user");

    if (!helpPost) return res.status(404).json({ message: "Post not found" });

    // 🔔 Notify the post creator that someone accepted their request
    const postOwnerId = helpPost.user._id.toString();
    if (postOwnerId !== req.user.id) {
      const socket = connectedUsers.get(postOwnerId);
      if (socket) {
        socket.emit("notification", {
          type: "accept",
          message: `${req.user.name} accepted your help request.`,
          postId: helpPost._id,
        });
      }
    }

    res.json({ message: "You accepted this help request" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error accepting help", error: err.message });
  }
};
