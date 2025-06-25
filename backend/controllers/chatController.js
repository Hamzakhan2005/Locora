import ChatRoom from "../models/ChatRoom.js";
import Message from "../models/Message.js";
import Help from "../models/Help.js";
import { connectedUsers } from "../server.js";

// 📥 GET all chat rooms of current user
export const getMyChatRooms = async (req, res) => {
  try {
    const rooms = await ChatRoom.find({
      participants: req.user.id,
    }).populate("helpPost participants", "title name");

    res.json(rooms);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch chat rooms", error: err.message });
  }
};

export const getOrCreateRoom = async (req, res) => {
  const { postId } = req.params;
  const userId = req.user.id;

  try {
    const helpPost = await Help.findById(postId).populate("user");
    if (!helpPost) {
      return res.status(404).json({ message: "Help post not found" });
    }

    const posterId = helpPost.user._id.toString();

    let room = await ChatRoom.findOne({
      helpPost: postId,
      participants: { $all: [posterId, userId] },
    });

    if (!room) {
      room = new ChatRoom({
        helpPost: postId,
        participants: [posterId, userId],
      });
      await room.save();
    }

    res.json(room);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch or create room", error: err.message });
  }
};

// 💬 GET messages from a specific room
export const getMessages = async (req, res) => {
  const { roomId } = req.params;

  try {
    const messages = await Message.find({ room: roomId })
      .populate("sender", "name")
      .sort("timestamp");

    res.json(messages);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to get messages", error: err.message });
  }
};

export const sendMessage = async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;
  const senderId = req.user.id;

  try {
    const helpPost = await Help.findById(postId).populate("user");
    if (!helpPost) {
      return res.status(404).json({ message: "Help post not found" });
    }

    const posterId = helpPost.user._id.toString();

    // Find or create the chat room
    let room = await ChatRoom.findOne({
      helpPost: postId,
      participants: { $all: [posterId, senderId] },
    });

    if (!room) {
      room = new ChatRoom({
        helpPost: postId,
        participants: [posterId, senderId],
      });
      await room.save();
    }

    // Create the new message
    const message = new Message({
      room: room._id,
      sender: senderId,
      content,
    });

    await message.save();

    // 🔔 Notify the creator if they are not the sender
    if (posterId !== senderId) {
      const posterSocket = connectedUsers.get(posterId);
      if (posterSocket) {
        posterSocket.emit("notification", {
          type: "chat-started",
          message: `${req.user.name} started a chat on your help post "${helpPost.title}"`,
          postId: helpPost._id,
          roomId: room._id,
        });
      }
    }

    // 📡 Emit real-time message to all other participants
    room.participants.forEach((userId) => {
      if (userId.toString() !== senderId) {
        const socket = connectedUsers.get(userId.toString());
        if (socket) {
          socket.emit("new_message", {
            roomId: room._id,
            postId: helpPost._id,
            message: {
              _id: message._id,
              sender: { _id: senderId },
              content,
              timestamp: message.timestamp,
            },
          });
        }
      }
    });

    res.status(201).json({ message: "Sent", data: message });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to send message", error: err.message });
  }
};
