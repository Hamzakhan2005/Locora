import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, phone, password, location } = req.body;
  try {
    // Check if user exists with either email or phone
    const query = {};
    if (email) query.email = email;
    if (phone) query.phone = phone;

    const existing = await User.findOne(query);
    if (existing)
      return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const userData = { name, password: hashed, location };
    if (email) userData.email = email;
    if (phone) userData.phone = phone;

    const user = await User.create(userData);
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: err.message || "Server error" });
  }
};

export const login = async (req, res) => {
  const { email, phone, password } = req.body;
  try {
    // Find user by email or phone
    const query = {};
    if (email) query.email = email;
    if (phone) query.phone = phone;

    const user = await User.findOne(query);
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
