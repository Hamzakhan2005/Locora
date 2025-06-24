import express from "express";
import {
  createHelp,
  deletePost,
  geMyHelp,
  getHelp,
  spamPost,
  acceptHelp,
} from "../controllers/helpController.js";
import { protect } from "../middleware/auth.js";
import { requireRole } from "../middleware/requireRole.js";

const router = express.Router();

router.post("/", protect, createHelp);
router.get("/", getHelp);
router.get("/my-posts", protect, geMyHelp);
router.delete("/:id", protect, deletePost);
router.patch("/:id/mark-spam", protect, spamPost);
router.post("/:id/accept", protect, acceptHelp);

export default router;
