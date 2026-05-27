import { z } from "zod";
import type { LoginFormErrors } from "@/api/type/login.types";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export function validateLoginForm(form: {
  email: string;
  password: string;
}): LoginFormErrors {
  const result = loginSchema.safeParse(form);

  if (result.success) return {};

  return result.error.issues.reduce<LoginFormErrors>((acc, issue) => {
    const field = issue.path[0] as keyof LoginFormErrors;
    if (field && !acc[field]) acc[field] = issue.message;
    return acc;
  }, {});
}
