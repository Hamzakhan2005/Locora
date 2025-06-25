import mongoose from "mongoose";

const chatRoomSchema = new mongoose.Schema({
  helpPost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Help",
    required: true,
  },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export default mongoose.model("ChatRoom", chatRoomSchema);
