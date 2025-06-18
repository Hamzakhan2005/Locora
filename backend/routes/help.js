import express from "express";
import {
  createHelp,
  geMyHelp,
  getHelp,
} from "../controllers/helpController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, createHelp);
router.get("/", getHelp);
router.get("/my-posts", protect, geMyHelp);

export default router;
