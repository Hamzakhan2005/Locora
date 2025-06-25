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
router.get("/:roomId/messages", protect, getMessages);
router.get("/room/:postId", protect, getOrCreateRoom);

router.post("/:postId", protect, sendMessage); // send message per post

export default router;
