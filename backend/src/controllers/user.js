import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  registerUserSchema,
  loginUserSchema,
} from "../middlewares/validator.js";

export const RegisterUser = async (req, res) => {
  try {
    const { username, email, password } = registerUserSchema.parse(req.body);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(401).json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    user.password = undefined;
    res
      .status(201)
      .json({ message: "Your account has been created successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const LoginUser = async (req, res) => {
  try {
    const { username, password, rememberMe } = loginUserSchema.parse(req.body);

    const user = await User.findOne({ username }).select('+password');
    if (!user) {
      res.status(401).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: rememberMe ? "30d" : "1h",
    });
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const LogOut = (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
};
