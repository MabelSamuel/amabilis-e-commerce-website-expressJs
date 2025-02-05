import { z } from "zod";

export const adminLoginValidations = z.object({
    password: z.string()
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password must not exceed 20 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, 'Password must contain at least one lower letter, one uppercase letter, one number, and one special character'),
    email: z.string()
    .email('Please enter a valid email address')
})