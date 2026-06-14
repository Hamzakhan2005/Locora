import express from "express";
import {
  getMyChatRooms,
  getMessages,
  getOrCreateRoom,
} from "../controllers/chatController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/rooms", protect, getMyChatRooms);
router.get("/room/:postId", protect, getOrCreateRoom);
router.get("/:roomId/messages", protect, getMessages);

export default router;