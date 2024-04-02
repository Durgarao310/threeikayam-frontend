import { z } from "zod";

const registerSchema = z.object({
  fullName: z.string().min(3, {
    message: "FullName must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Invalid email.",
  }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password must be at most 32 characters long")
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
    ),
});
export default registerSchema;
