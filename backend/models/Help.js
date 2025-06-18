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
  type: {
    type: String,
    enum: ["need", "offer"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Help", helpSchema);
