import { z } from "zod"

export const subscriptionValidations = z.object({
    email: z.string()
    .email('Please enter a valid email address')
})