import mongoose from "mongoose";

const helpRequestSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Help",
      required: true,
    },
    requester: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    poster: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
    chatRoom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChatRoom",
      default: null,
    },
  },
  { timestamps: true }
);

// Prevent duplicate pending requests from the same user on the same post
helpRequestSchema.index({ post: 1, requester: 1 }, { unique: true });

export default mongoose.model("HelpRequest", helpRequestSchema);