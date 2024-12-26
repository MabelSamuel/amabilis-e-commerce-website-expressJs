import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const RegisterUser = async(req, res) =>{
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPassword });
        res.status(201).json({ user })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const LoginUser = async(req, res) =>{
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user){
            res.status(400).json({ message: "User does not exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ message: "Invalid Credentials" })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}