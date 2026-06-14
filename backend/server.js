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
import adminRoutes from "./routes/admin.js";
import aiRoutes from "./routes/ai.js";
import ChatRoom from "./models/ChatRoom.js";
import Message from "./models/Message.js";

const app = express();
dotenv.config();

const server = http.createServer(app); // <-- wrap Express in HTTP server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // frontend origin
    credentials: true,
  },
});

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
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
app.use("/api/admin", adminRoutes);
app.use("/api/ai", aiRoutes);

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
  socket.on("sendMessage", async ({ roomId, text }) => {
    console.log(`📨 sendMessage from ${userId} -> room ${roomId}: "${text}"`);
    try {
      if (!roomId || !text || !text.trim()) {
        console.log("❌ sendMessage: missing roomId or text");
        return;
      }

      const room = await ChatRoom.findById(roomId);
      if (!room) {
        console.log("❌ sendMessage: room not found", roomId);
        return;
      }

      const isParticipant = room.participants
        .map((p) => p.toString())
        .includes(userId);

      if (!isParticipant) {
        console.log("❌ sendMessage: user not a participant of room", userId);
        return;
      }

      const message = new Message({
        room: roomId,
        sender: userId,
        content: text,
      });
      await message.save();
      console.log("✅ message saved:", message._id);

      // Emit to ALL participants with correct fromSelf per recipient
      room.participants.forEach((participantId) => {
        const pid = participantId.toString();
        const recipientSocket = connectedUsers.get(pid);
        if (!recipientSocket) return;

        recipientSocket.emit("message", {
          _id: message._id,
          text: message.content,
          sender: { _id: userId },
          timestamp: message.timestamp,
          fromSelf: pid === userId,
        });
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