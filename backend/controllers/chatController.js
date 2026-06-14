import ChatRoom from "../models/ChatRoom.js";
import Message from "../models/Message.js";
import HelpRequest from "../models/HelpRequest.js";
import { connectedUsers } from "../server.js";

// 💬 Get all chat rooms for current user (only accepted requests)
export const getMyChatRooms = async (req, res) => {
  try {
    const acceptedRequests = await HelpRequest.find({
      status: "accepted",
      $or: [{ poster: req.user.id }, { requester: req.user.id }],
      chatRoom: { $ne: null },
    }).select("chatRoom");

    const roomIds = acceptedRequests.map((r) => r.chatRoom);

    const rooms = await ChatRoom.find({
      _id: { $in: roomIds },
      participants: req.user.id,
    })
      .populate("helpPost", "title type")
      .populate("participants", "name");

    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch chat rooms", error: err.message });
  }
};

// Get a chat room for a post — only if there's an accepted HelpRequest between these users
export const getOrCreateRoom = async (req, res) => {
  const { postId } = req.params;
  const userId = req.user.id;

  try {
    // Find an accepted request where this user is either poster or requester
    const request = await HelpRequest.findOne({
      post: postId,
      status: "accepted",
      $or: [{ poster: userId }, { requester: userId }],
    }).populate("post");

    if (!request || !request.chatRoom) {
      return res.status(403).json({
        message: "Chat not available. Help request must be accepted first.",
      });
    }

    const room = await ChatRoom.findById(request.chatRoom);
    if (!room) {
      return res.status(404).json({ message: "Chat room not found" });
    }

    res.json(room);
  } catch (err) {
    console.error("❌ Error in getOrCreateRoom:", err.message);
    res.status(500).json({ message: "Failed to fetch chat room" });
  }
};

// 💬 Get messages for a room (only if participant)
export const getMessages = async (req, res) => {
  const { roomId } = req.params;

  try {
    const room = await ChatRoom.findById(roomId);
    if (!room) return res.status(404).json({ message: "Room not found" });

    if (!room.participants.map((p) => p.toString()).includes(req.user.id)) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const messages = await Message.find({ room: roomId })
      .populate("sender", "name")
      .sort("timestamp");

    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Failed to get messages", error: err.message });
  }
};