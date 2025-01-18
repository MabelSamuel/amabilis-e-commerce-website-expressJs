import SubscriptionEmail from "../models/subscription-email";
import { subscriptionEmailSchema } from "../middlewares/validator";

export const PostSubscriptionEmail = async(req, res) =>{
    try {
        const { subscriptionEmail } = subscriptionEmailSchema.parse(req.body);

        const email = await SubscriptionEmail.Create({
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
        const emails = SubscriptionEmail.find({});
        res.status(200).json({ emails })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}