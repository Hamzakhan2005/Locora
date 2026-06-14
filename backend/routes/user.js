import express from "express";
import { protect } from "../middleware/auth.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.patch("/location", protect, async (req, res) => {
  try {
    const { location, lat, lng } = req.body;
    const update = {};
    if (location !== undefined) update.location = location;
    if (typeof lat === "number") update.lat = lat;
    if (typeof lng === "number") update.lng = lng;
    const user = await User.findByIdAndUpdate(req.user.id, update, { new: true }).select("-password");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to update location" });
  }
});

export default router;