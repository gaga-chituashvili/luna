import { z } from "zod";
import type { FormErrors } from "@/api/type/register.types";

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(4, "Min. 4 characters")
      .max(96, "Max. 96 characters"),
    username: z
      .string()
      .min(3, "Min. 3 characters")
      .max(32, "Max. 32 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Min. 8 characters")
      .max(64, "Max. 64 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    birthDate: z.string().nullable(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function validateRegisterForm(form: {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
}): FormErrors {
  const result = registerSchema.safeParse({
    ...form,
    birthDate: form.birthDate || null,
  });

  if (result.success) return {};

  return result.error.issues.reduce<FormErrors>((acc, issue) => {
    const field = issue.path[0] as keyof FormErrors;
    if (field && !acc[field]) acc[field] = issue.message;
    return acc;
  }, {});
}
