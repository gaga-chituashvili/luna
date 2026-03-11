import { Formik, Form, Field } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { contactSchema } from "../../component/schemas/contactSchema";
import { useContactForm } from "../../hooks/useContactForm";
import { FormField } from "./FormField";
import { PhoneField } from "./PhoneField";
import { SubmitButton } from "./SubmitButton";

export function ContactForm() {
  const { handleSubmit } = useContactForm();

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={toFormikValidationSchema(contactSchema)}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Full Name" required name="fullName">
              <Field
                name="fullName"
                className="mt-2 h-[48px] w-full rounded-full bg-[#e9e5e3] px-5 text-[#6f4a3a] outline-none border border-[#a16a54] focus:border-[#7a4e3a] transition-colors"
                placeholder="e.g giorgi giorgidze"
              />
            </FormField>

            <FormField label="Email address" required name="email">
              <Field
                name="email"
                type="email"
                className="mt-2 h-[48px] w-full rounded-full bg-[#e9e5e3] px-5 text-[#6f4a3a] outline-none border border-[#a16a54] focus:border-[#7a4e3a] transition-colors"
                placeholder="e.g g.giorgidze@gmail.com"
              />
            </FormField>
          </div>

          <PhoneField
            value={values.phone}
            onChange={(value) => setFieldValue("phone", value)}
          />

          <FormField label="Text message" name="message">
            <Field
              as="textarea"
              name="message"
              className="mt-2 w-full min-h-[160px] rounded-3xl bg-[#e9e5e3] px-5 py-4 text-[#6f4a3a] outline-none border border-[#a16a54] resize-none focus:border-[#7a4e3a] transition-colors"
              placeholder="Text message"
            />
          </FormField>

          <SubmitButton isSubmitting={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
}
