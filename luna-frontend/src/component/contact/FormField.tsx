import { ErrorMessage } from "formik";

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  name: string;
}

export function FormField({ label, required, children, name }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs md:text-sm text-white/70 flex items-center gap-1"
      >
        {label}
        {required && <span className="text-red-400">*</span>}
      </label>

      {children}

      <ErrorMessage
        name={name}
        component="p"
        className="text-xs md:text-sm text-red-400"
      />
    </div>
  );
}
