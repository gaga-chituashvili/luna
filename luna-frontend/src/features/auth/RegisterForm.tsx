import { type ChangeEvent } from "react";
import { InputField } from "@/features/auth/InputField";
import { EyeIcon } from "@/features/auth/EyeIcon";
import type { FormData, FormErrors } from "@/types/register.types";

type RegisterFormProps = {
  form: FormData;
  errors: FormErrors;
  serverError: string;
  loading: boolean;
  showPassword: boolean;
  showConfirm: boolean;
  onChangeField: (e: ChangeEvent<HTMLInputElement>) => void;
  onTogglePassword: () => void;
  onToggleConfirm: () => void;
  onSubmit: () => void;
};

export function RegisterForm({
  form,
  errors,
  serverError,
  loading,
  showPassword,
  showConfirm,
  onChangeField,
  onTogglePassword,
  onToggleConfirm,
  onSubmit,
}: RegisterFormProps) {
  return (
    <div
      className="rounded-2xl p-8 space-y-5"
      style={{
        backgroundColor: "#0f0805",
        border: "1px solid #2e1a0e",
        boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
      }}
    >
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Full Name"
          name="fullName"
          value={form.fullName}
          onChange={onChangeField}
          error={errors.fullName}
          placeholder="Giorgi Giorgidze"
          required
        />
        <InputField
          label="Username"
          name="username"
          value={form.username}
          onChange={onChangeField}
          error={errors.username}
          placeholder="giorgi99"
          required
        />
      </div>

      {/* Email */}
      <InputField
        label="Email address"
        name="email"
        value={form.email}
        onChange={onChangeField}
        error={errors.email}
        placeholder="giorgi@gmail.com"
        type="email"
        required
      />

      <InputField
        label="Password"
        name="password"
        value={form.password}
        onChange={onChangeField}
        error={errors.password}
        placeholder="Min. 8 characters"
        type={showPassword ? "text" : "password"}
        required
        rightSlot={
          <span onClick={onTogglePassword}>
            <EyeIcon open={showPassword} />
          </span>
        }
      />

      <InputField
        label="Confirm Password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={onChangeField}
        error={errors.confirmPassword}
        placeholder="••••••••"
        type={showConfirm ? "text" : "password"}
        required
        rightSlot={
          <span onClick={onToggleConfirm}>
            <EyeIcon open={showConfirm} />
          </span>
        }
      />

      <div className="flex flex-col gap-1.5">
        <label className="text-sm" style={{ color: "#d4c5bb" }}>
          Date of Birth{" "}
          <span style={{ color: "#5a4035" }} className="text-xs">
            (optional)
          </span>
        </label>
        <input
          name="birthDate"
          value={form.birthDate}
          onChange={onChangeField}
          type="date"
          className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
          style={{
            backgroundColor: "#160c07",
            border: "1px solid #2e1a0e",
            color: form.birthDate ? "#f0e6de" : "#4b3328",
            colorScheme: "dark",
          }}
          onFocus={(e) => (e.currentTarget.style.border = "1px solid #c87941")}
          onBlur={(e) => (e.currentTarget.style.border = "1px solid #2e1a0e")}
        />
      </div>

      {serverError && (
        <div
          className="rounded-xl px-4 py-3 text-sm"
          style={{
            backgroundColor: "#2a0a0a",
            color: "#f87171",
            border: "1px solid #7f1d1d",
          }}
        >
          {serverError}
        </div>
      )}

      <button
        onClick={onSubmit}
        disabled={loading}
        className="w-full py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 mt-2 disabled:opacity-60"
        style={{ backgroundColor: "#7a3e1e" }}
        onMouseEnter={(e) => {
          if (!loading) e.currentTarget.style.backgroundColor = "#9b5230";
        }}
        onMouseLeave={(e) => {
          if (!loading) e.currentTarget.style.backgroundColor = "#7a3e1e";
        }}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="white"
                strokeWidth="3"
                strokeOpacity="0.25"
              />
              <path
                d="M12 2a10 10 0 0 1 10 10"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            Creating account...
          </>
        ) : (
          "Create Account"
        )}
      </button>

      <p className="text-center text-sm" style={{ color: "#5a4035" }}>
        Already have an account?{" "}
        <a
          href="/login"
          className="font-medium transition-colors hover:opacity-80"
          style={{ color: "#c87941" }}
        >
          Sign in
        </a>
      </p>
    </div>
  );
}
