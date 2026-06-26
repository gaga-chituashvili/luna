import { useState, type ChangeEvent } from "react";
import type { FormData } from "@/types/register.types";

type InputFieldProps = {
  label: string;
  name: keyof FormData;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  rightSlot?: React.ReactNode;
};

export function InputField({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  required,
  rightSlot,
}: InputFieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm" style={{ color: "#d4c5bb" }}>
        {label}
        {required && <span style={{ color: "#c87941" }}> *</span>}
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
