import jwt from "jsonwebtoken";

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};

export const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    const userId = verifyToken(token);
    req.userId = userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
