import { z } from "zod";

export const registerUserSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long.")
    .max(20, "Username must not exceed 20 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores."
    )
    .refine(
      (username) => !/^[0-9]/.test(username),
      "Username cannot start with a number."
    ),
  email: z
    .string()
    .min(6, "Email must be at least 6 characters long.")
    .max(60, "Email must not exceed 60 characters.")
    .email("Invalid email format.")
    .refine(
      (email) => email.endsWith(".com") || email.endsWith(".net"),
      "Email domain must be .com or .net"
    ),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Password must have at least 8 characters, including one uppercase letter, one lowercase letter, and one number."
    ),
});

export const loginUserSchema = z.object({
  username: z.string().min(3, "Username is required."),
  password: z.string().min(8, "Password is required."),
  rememberMe: z.boolean().optional(),
});

export const contactSchema = z.object({
  name: z.string().min(3, "Username is required."),
  email: z
    .string()
    .min(6, "Email must be at least 6 characters long.")
    .max(60, "Email must not exceed 60 characters.")
    .email("Invalid email format.")
    .refine(
      (email) => email.endsWith(".com") || email.endsWith(".net"),
      "Email domain must be .com or .net"
    ),
  subject: z.string().min(5, "Subject must be at least 5 characters long"),
  message: z.string().min(10, "Message must be at least 10 charcters long"),
});
