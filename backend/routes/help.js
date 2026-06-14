import express from "express";
import {
  createHelp,
  deletePost,
  geMyHelp,
  getHelp,
  spamPost,
  acceptHelp,
  respondToRequest,
  getIncomingRequests,
  getOutgoingRequests,
} from "../controllers/helpController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, createHelp);
router.get("/", getHelp);
router.get("/my-posts", protect, geMyHelp);
router.get("/requests/incoming", protect, getIncomingRequests);
router.get("/requests/outgoing", protect, getOutgoingRequests);
router.delete("/:id", protect, deletePost);
router.patch("/:id/mark-spam", protect, spamPost);
router.post("/:id/accept", protect, acceptHelp);
router.post("/requests/:requestId/respond", protect, respondToRequest);

export default router;