import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, sparse: true },
  phone: { type: String, sparse: true },
  password: String,
  location: String,
});

// Ensure user has either email or phone
userSchema.pre('save', function(next) {
  if (!this.email && !this.phone) {
    return next(new Error('User must have either email or phone'));
  }
  next();
});

export default mongoose.model("User", userSchema);
