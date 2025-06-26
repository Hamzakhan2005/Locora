import express from "express";
import {
  getMyChatRooms,
  getMessages,
  sendMessage,
  getOrCreateRoom,
} from "../controllers/chatController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/rooms", protect, getMyChatRooms);
router.get("/room/:postId", protect, getOrCreateRoom); // More specific FIRST
router.get("/:roomId/messages", protect, getMessages); // Less specific second

router.post("/:postId", protect, sendMessage); // send message per post

export default router;
