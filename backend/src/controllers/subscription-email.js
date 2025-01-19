import SubscriptionEmail from "../models/subscription-email.js";
import { subscriptionEmailSchema } from "../middlewares/validator.js";

export const PostSubscriptionEmail = async(req, res) =>{
    try {
        const { subscriptionEmail } = subscriptionEmailSchema.parse(req.body);

        const existingEmail = await SubscriptionEmail.findOne({ subscriptionEmail });
        if (existingEmail) {
            res.status(401).json({ message: "User already subscribed!" })
        }

        const email = await SubscriptionEmail.create({
            subscriptionEmail
        })
        res.status(201).json({ message: "Subscription successful" })
    } catch (error) {
        console.error("Error processing subscription:", error.message);
        res.status(400).json({ error: error.message })
    }
}

export const GetSubscriptionEmails = async(req, res) =>{
    try {
        const subscriptionEmails = await SubscriptionEmail.find({});
        res.status(200).json({ subscriptionEmails })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}