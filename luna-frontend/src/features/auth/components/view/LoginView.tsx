import { useState, type ChangeEvent } from "react";
import { LoginForm } from "@/features/auth/LoginForm";
import { validateLoginForm } from "@/utils/login.validate";
import type { LoginFormData, LoginFormErrors } from "@/types/login.types";
import { useAuthStore } from "@/store/authStore";
import { Wrapper } from "@/components/shared/wrapper";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

const INITIAL_FORM: LoginFormData = {
  email: "",
  password: "",
};

export function LoginView() {
  const [form, setForm] = useState<LoginFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const fetchUser = useAuthStore((state) => state.fetchUser);

  const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setServerError("");
  };

  const handleSubmit = async () => {
    const errs = validateLoginForm(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setServerError("");
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.message ?? "Invalid email or password");
        return;
      }
      localStorage.setItem("token", data.token);
      await fetchUser();
      window.location.href = "/";
    } catch {
      setServerError("Could not connect to the server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12"
      style={{
        background:
          "radial-gradient(ellipse at 60% 20%, #2a1208 0%, #0d0704 60%, #000 100%)",
      }}
    >
      <Wrapper>
        <div className="mx-auto max-w-md">
          <div className="text-center mb-10">
            <h1
              className="text-4xl font-bold text-white mb-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Welcome back to <span style={{ color: "#c87941" }}>Luna.</span>
            </h1>
            <p style={{ color: "#7a6055" }} className="text-sm">
              Sign in to your account
            </p>
          </div>
          <LoginForm
            form={form}
            errors={errors}
            serverError={serverError}
            loading={loading}
            showPassword={showPassword}
            onChangeField={handleChangeField}
            onTogglePassword={() => setShowPassword((v) => !v)}
            onSubmit={handleSubmit}
          />
        </div>
      </Wrapper>
    </div>
  );
}
