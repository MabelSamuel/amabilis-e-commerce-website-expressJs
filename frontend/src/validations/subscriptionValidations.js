import { z } from "zod"

export const subscriptionValidations = z.object({
    subscriptionEmail: z.string()
    .email('Please enter a valid email address')
})