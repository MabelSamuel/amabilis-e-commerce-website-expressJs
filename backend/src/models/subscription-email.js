import { Schema, model } from "mongoose";

const SubscriptionEmailSchema = new Schema({
  subscriptionEmail: {
    type: String,
    required: true,
  },
});

const SubscriptionEmail = model("SubscriptionEmail", SubscriptionEmailSchema)
export default SubscriptionEmail
