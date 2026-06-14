import express from "express";
import { protect } from "../middleware/auth.js";
import { requireRole } from "../middleware/requireRole.js";
import {
  getStats, listUsers, setUserBanStatus, deleteUser,
  listPosts, deletePostAdmin, setPostSpamStatus,
  listChatRooms, getRoomMessagesAdmin, listHelpRequests,
} from "../controllers/adminController.js";

const router = express.Router();
router.use(protect, requireRole("admin"));

router.get("/stats", getStats);
router.get("/users", listUsers);
router.patch("/users/:id/ban", setUserBanStatus);
router.delete("/users/:id", deleteUser);
router.get("/posts", listPosts);
router.delete("/posts/:id", deletePostAdmin);
router.patch("/posts/:id/spam", setPostSpamStatus);
router.get("/chats", listChatRooms);
router.get("/chats/:roomId/messages", getRoomMessagesAdmin);
router.get("/requests", listHelpRequests);

export default router;