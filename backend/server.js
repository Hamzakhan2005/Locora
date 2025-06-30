import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";
dotenv.config();
import authRoutes from "./routes/auth.js";
import helpRoutes from "./routes/help.js";
import userRoutes from "./routes/user.js";
import commentRoutes from "./routes/comment.js";
import chatRoutes from "./routes/chat.js";
import ChatRoom from "./models/ChatRoom.js";
import Message from "./models/Message.js";
import Help from "./models/Help.js";

const app = express();
dotenv.config();

const server = http.createServer(app); // <-- wrap Express in HTTP server
const io = new Server(server, {
  cors: {
    origin: "locora-git-main-mohammad-hamza-khans-projects.vercel.app", // frontend origin
    credentials: true,
  },
});

// Middleware
app.use(
  cors({
    origin: "locora-git-main-mohammad-hamza-khans-projects.vercel.app",
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/help", helpRoutes);
app.use("/api/user", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/chat", chatRoutes);

const connectedUsers = new Map();

io.use((socket, next) => {
  const token = socket.handshake.auth?.token;
  if (!token) return next(new Error("No token"));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = decoded;
    next();
  } catch (err) {
    next(new Error("Invalid token"));
  }
});

io.on("connection", (socket) => {
  const userId = socket.user.id;
  connectedUsers.set(userId, socket);
  console.log(`User connected: ${userId}`);

  // 🧠 JOIN ROOM
  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    console.log(`User ${userId} joined room ${roomId}`);
  });

  // ❌ Leave room
  socket.on("leaveRoom", (roomId) => {
    socket.leave(roomId);
    console.log(`User ${userId} left room ${roomId}`);
  });

  // 📜 Get message history
  socket.on("getMessages", async (roomId) => {
    try {
      const messages = await Message.find({ room: roomId })
        .populate("sender", "name")
        .sort("timestamp");

      const formatted = messages.map((msg) => ({
        _id: msg._id,
        text: msg.content,
        sender: msg.sender,
        timestamp: msg.timestamp,
        fromSelf: msg.sender._id.toString() === userId,
      }));

      socket.emit("messageHistory", formatted);
    } catch (err) {
      console.error("getMessages error:", err.message);
    }
  });

  // 💬 Send message
  socket.on("sendMessage", async ({ roomId, postId, text }) => {
    try {
      const helpPost = await Help.findById(postId).populate("user");
      if (!helpPost) return;

      const room = await ChatRoom.findById(roomId);
      if (!room) return;

      const message = new Message({
        room: roomId,
        sender: userId,
        content: text,
      });
      await message.save();

      const formattedMessage = {
        _id: message._id,
        text: message.content,
        sender: { _id: userId },
        timestamp: message.timestamp,
        fromSelf: false,
      };

      // 🔔 Notify all other participants in the room
      room.participants.forEach((participantId) => {
        const pid = participantId.toString();
        const socketToNotify = connectedUsers.get(pid);

        if (pid !== userId && socketToNotify) {
          socketToNotify.emit("message", {
            ...formattedMessage,
            fromSelf: false,
          });
        }

        if (pid === userId) {
          socket.emit("message", {
            ...formattedMessage,
            fromSelf: true,
          });
        }
      });
    } catch (err) {
      console.error("sendMessage error:", err.message);
    }
  });

  socket.on("disconnect", () => {
    connectedUsers.delete(userId);
    console.log(`User disconnected: ${userId}`);
  });
});

// Export io to use in controllers
export { io, connectedUsers };

// Connect DB and start server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log("MongoDB connection error:", error));
