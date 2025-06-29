import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  console.log("🔐 protect middleware - Raw Header:", authHeader);
  console.log("🔐 Token extracted:", token);

  if (!token) {
    console.log("❌ No token provided");
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("✅ Token verified, user:", decoded);
    next();
  } catch (err) {
    console.log("❌ Invalid token:", err.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};
