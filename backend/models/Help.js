import mongoose from "mongoose";

const helpSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  location: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Help", helpSchema);
