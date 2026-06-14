import mongoose from "mongoose";

const helpSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: String,
  description: String,
  category: String,
  location: String,
  lat: { type: Number, default: null },
  lng: { type: Number, default: null },
  status: {
    type: String,
    enum: ["open", "in-progress", "resolved"],
    default: "open",
  },
  type: {
    type: String,
    enum: ["need", "offer"],
    required: true,
  },
  isSpam: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Help", helpSchema);
