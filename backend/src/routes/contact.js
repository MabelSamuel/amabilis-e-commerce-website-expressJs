import { Contact } from "../controllers/contact-us.js";
import express from "express";

const router = express.Router();

router.post("/contact", Contact);

export default router