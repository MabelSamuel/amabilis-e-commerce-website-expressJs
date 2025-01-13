import ContactUs from "../models/contact-us.js";
import { contactSchema } from "../middlewares/validator.js";

export const Contact = async (req, res) =>{
    try {
        const { name, email, subject, message } = contactSchema.parse(req.body);

        const contactUs = await ContactUs.create({
            name,
            email, 
            subject, 
            message
        });

        res.status(201).json({ message: "Thank you for contacting us" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}