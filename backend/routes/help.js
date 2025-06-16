import express from "express";
import { createHelp, getHelp } from "../controllers/helpController.js";
import { protect } from "../middleware/auth.js";
const router = express.Router();

router.post("/", protect, createHelp);
router.get("/", getHelp);

export default router;
