import express from "express";
import { protect } from "../middleware/auth.js";
import { suggestHelpsForUser } from "../controllers/aiController.js";

const router = express.Router();
router.get("/suggestions", protect, suggestHelpsForUser);

export default router;