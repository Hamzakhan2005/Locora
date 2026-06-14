import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, sparse: true },
  phone: { type: String, sparse: true },
  password: String,
  location: String,
  lat: { type: Number, default: null },
  lng: { type: Number, default: null },
  isBanned: { type: Boolean, default: false },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Ensure user has either email or phone
userSchema.pre("save", function (next) {
  if (!this.email && !this.phone) {
    return next(new Error("User must have either email or phone"));
  }

  // Hardcoded admin logic
  if (this.email === "mohdhamzakhan2005@gmail.com") {
    this.role = "admin";
  }

  next();
});

export default mongoose.model("User", userSchema);
