import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string(),
});

export type ContactFormData = z.infer<typeof contactSchema>;