import { ErrorMessage } from "formik";

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  name: string;
}

export function FormField({ label, required, children, name }: FormFieldProps) {
  return (
    <div>
      <label className="text-sm text-white/70">
        {label} {required && "*"}
      </label>
      {children}
      <ErrorMessage
        name={name}
        component="p"
        className="mt-1 text-sm text-red-400"
      />
    </div>
  );
}
