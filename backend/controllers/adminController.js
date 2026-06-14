import User from "../models/User.js";
import Help from "../models/Help.js";
import HelpRequest from "../models/HelpRequest.js";
import ChatRoom from "../models/ChatRoom.js";
import Message from "../models/Message.js";

export const getStats = async (req, res) => {
  try {
    const [totalUsers, totalPosts, openPosts, resolvedPosts, spamPosts, totalRequests, acceptedRequests, totalMessages, totalRooms] = await Promise.all([
      User.countDocuments(),
      Help.countDocuments(),
      Help.countDocuments({ status: "open" }),
      Help.countDocuments({ status: "resolved" }),
      Help.countDocuments({ isSpam: true }),
      HelpRequest.countDocuments(),
      HelpRequest.countDocuments({ status: "accepted" }),
      Message.countDocuments(),
      ChatRoom.countDocuments(),
    ]);

    const since = new Date();
    since.setDate(since.getDate() - 14);

    const [signupAgg, postsAgg] = await Promise.all([
      User.aggregate([
        { $match: { createdAt: { $gte: since } } },
        { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, count: { $sum: 1 } } },
        { $sort: { _id: 1 } },
      ]),
      Help.aggregate([
        { $match: { createdAt: { $gte: since } } },
        { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, count: { $sum: 1 } } },
        { $sort: { _id: 1 } },
      ]),
    ]);

    res.json({
      totalUsers, totalPosts, openPosts, resolvedPosts, spamPosts,
      totalRequests, acceptedRequests, totalMessages, totalRooms,
      signupsOverTime: signupAgg.map((d) => ({ date: d._id, count: d.count })),
      postsOverTime: postsAgg.map((d) => ({ date: d._id, count: d.count })),
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch stats", error: err.message });
  }
};

export const listUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

export const setUserBanStatus = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { isBanned: !!req.body.isBanned }, { new: true }).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to update user" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete user" });
  }
};

export const listPosts = async (req, res) => {
  try {
    const { status, isSpam } = req.query;
    const query = {};
    if (status) query.status = status;
    if (isSpam !== undefined) query.isSpam = isSpam === "true";
    const posts = await Help.find(query).populate("user", "name email").sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch posts" });
  }
};

export const deletePostAdmin = async (req, res) => {
  try {
    const post = await Help.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete post" });
  }
};

export const setPostSpamStatus = async (req, res) => {
  try {
    const post = await Help.findByIdAndUpdate(req.params.id, { isSpam: !!req.body.isSpam }, { new: true });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Failed to update post" });
  }
};

export const listChatRooms = async (req, res) => {
  try {
    const rooms = await ChatRoom.find()
      .populate("helpPost", "title type")
      .populate("participants", "name email")
      .sort({ _id: -1 });

    const roomsWithCounts = await Promise.all(
      rooms.map(async (room) => {
        const count = await Message.countDocuments({ room: room._id });
        return { ...room.toObject(), messageCount: count };
      })
    );

    res.json(roomsWithCounts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch chat rooms" });
  }
};

export const getRoomMessagesAdmin = async (req, res) => {
  try {
    const messages = await Message.find({ room: req.params.roomId })
      .populate("sender", "name email")
      .sort("timestamp");
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch messages" });
  }
};

export const listHelpRequests = async (req, res) => {
  try {
    const requests = await HelpRequest.find()
      .populate("post", "title type")
      .populate("requester", "name email")
      .populate("poster", "name email")
      .sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch requests" });
  }
};