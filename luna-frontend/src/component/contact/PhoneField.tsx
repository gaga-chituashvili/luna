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
      <div className="mt-2 h-[48px] flex items-center rounded-full border border-[#a16a54] bg-[#e9e5e3] px-5 focus-within:border-[#7a4e3a] transition-colors">
        <PhoneInput
          international
          defaultCountry="GE"
          value={value}
          onChange={(val) => onChange(val || "")}
          placeholder="e.g +995 555 123 456"
          className="flex items-center gap-3 w-full h-full"
          inputClassName="bg-transparent outline-none text-[#6f4a3a] w-full"
          countrySelectProps={{
            className:
              "bg-transparent outline-none text-[#6f4a3a] cursor-pointer",
          }}
        />
      </div>
    </FormField>
  );
}
