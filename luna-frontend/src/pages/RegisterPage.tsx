import { useState, type ChangeEvent } from "react";
import { RegisterForm } from "@/component/register/RegisterForm";
import { SuccessState } from "@/component/register/SuccessState";
import { validateRegisterForm } from "@/api/utils/validate";
import type { FormData, FormErrors } from "@/api/type/register.types";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

const INITIAL_FORM: FormData = {
  fullName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  birthDate: "",
};

export default function RegisterPage() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setServerError("");
  };

  const handleSubmit = async () => {
    const errs = validateRegisterForm(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    setServerError("");

    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          username: form.username,
          email: form.email,
          password: form.password,
          birthDate: form.birthDate || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.message ?? "Something went wrong");
        return;
      }

      setSuccess(true);
    } catch {
      setServerError("Could not connect to the server");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return <SuccessState firstName={form.fullName.split(" ")[0]} />;
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        background:
          "radial-gradient(ellipse at 60% 20%, #2a1208 0%, #0d0704 60%, #000 100%)",
      }}
    >
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className="text-4xl font-bold text-white mb-2"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Join <span style={{ color: "#c87941" }}>Luna.</span>
          </h1>
          <p style={{ color: "#7a6055" }} className="text-sm">
            Create an account and enjoy the full experience
          </p>
        </div>

        <RegisterForm
          form={form}
          errors={errors}
          serverError={serverError}
          loading={loading}
          showPassword={showPassword}
          showConfirm={showConfirm}
          onChangeField={handleChangeField}
          onTogglePassword={() => setShowPassword((v) => !v)}
          onToggleConfirm={() => setShowConfirm((v) => !v)}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
