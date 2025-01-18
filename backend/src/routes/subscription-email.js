import express from "express"
import { GetSubscriptionEmails, PostSubscriptionEmail } from "../controllers/subscription-email";

const router = express.Router();
router.post("/subscribe", PostSubscriptionEmail);
router.get("/subscribe", GetSubscriptionEmails)

export default router 