import express from "express";
import { RegisterUser, LoginUser, LogOut } from "../controllers/user.js";

const router = express.Router();

router.post('/register', RegisterUser);
router.post('/login', LoginUser);
router.post('/logout', LogOut)

export default router;