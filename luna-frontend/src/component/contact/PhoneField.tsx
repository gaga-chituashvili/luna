import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FormField } from "./FormField";

interface PhoneFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function PhoneField({ value, onChange }: PhoneFieldProps) {
  return (
    <FormField label="Phone number" required name="phone">
      <div className="mt-2 flex items-center h-12 rounded-full border border-[#a16a54] bg-[#e9e5e3] px-4 gap-3 focus-within:border-[#7a4e3a] transition-colors">
        <PhoneInput
          international
          defaultCountry="GE"
          value={value}
          onChange={(val) => onChange(val || "")}
          placeholder="+995 555 123 456"
          className="flex items-center w-full"
          inputClassName=" flex-1 bg-transparent outline-none text-[#6f4a3a] text-base placeholder:text-[#6f4a3a]/60"
        />
      </div>
    </FormField>
  );
}
