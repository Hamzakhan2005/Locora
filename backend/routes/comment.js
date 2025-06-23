import express from "express";
import {
  addComment,
  getCommentsForPost,
} from "../controllers/commentController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Add a comment to a help post
router.post("/:helpId", protect, addComment);

// Get all comments for a help post
router.get("/:helpId", getCommentsForPost);

export default router;
