import { useState, type ChangeEvent } from "react";
import type { LoginFormData, LoginFormErrors } from "@/types/login.types";

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
}

// ─── InputField ───────────────────────────────────────────────────────────────

type InputFieldProps = {
  label: string;
  name: keyof LoginFormData;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  rightSlot?: React.ReactNode;
};

function InputField({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  rightSlot,
}: InputFieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm" style={{ color: "#d4c5bb" }}>
        {label} <span style={{ color: "#c87941" }}>*</span>
      </label>
      <div
        className="flex items-center rounded-xl overflow-hidden transition-all duration-200"
        style={{
          backgroundColor: "#160c07",
          border: error
            ? "1px solid #ef4444"
            : focused
              ? "1px solid #c87941"
              : "1px solid #2e1a0e",
        }}
      >
        <input
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          type={type}
          placeholder={placeholder}
          className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder-gray-600"
          style={{ color: "#f0e6de" }}
        />
        {rightSlot && (
          <span className="pr-3 text-gray-500 cursor-pointer select-none">
            {rightSlot}
          </span>
        )}
      </div>
      {error && (
        <p className="text-xs" style={{ color: "#f87171" }}>
          {error}
        </p>
      )}
    </div>
  );
}

// ─── LoginForm ────────────────────────────────────────────────────────────────

type LoginFormProps = {
  form: LoginFormData;
  errors: LoginFormErrors;
  serverError: string;
  loading: boolean;
  showPassword: boolean;
  onChangeField: (e: ChangeEvent<HTMLInputElement>) => void;
  onTogglePassword: () => void;
  onSubmit: () => void;
};

export function LoginForm({
  form,
  errors,
  serverError,
  loading,
  showPassword,
  onChangeField,
  onTogglePassword,
  onSubmit,
}: LoginFormProps) {
  return (
    <div
      className="rounded-2xl p-8 space-y-5"
      style={{
        backgroundColor: "#0f0805",
        border: "1px solid #2e1a0e",
        boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
      }}
    >
      <InputField
        label="Email address"
        name="email"
        value={form.email}
        onChange={onChangeField}
        error={errors.email}
        placeholder="giorgi@gmail.com"
        type="email"
      />

      <InputField
        label="Password"
        name="password"
        value={form.password}
        onChange={onChangeField}
        error={errors.password}
        placeholder="••••••••"
        type={showPassword ? "text" : "password"}
        rightSlot={
          <span onClick={onTogglePassword}>
            <EyeIcon open={showPassword} />
          </span>
        }
      />

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
        className="w-full py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
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
            Signing in...
          </>
        ) : (
          "Sign In"
        )}
      </button>

      <p className="text-center text-sm" style={{ color: "#5a4035" }}>
        Don't have an account?{" "}
        <a
          href="/register"
          className="font-medium hover:opacity-80 transition-opacity"
          style={{ color: "#c87941" }}
        >
          Create one
        </a>
      </p>
    </div>
  );
}
