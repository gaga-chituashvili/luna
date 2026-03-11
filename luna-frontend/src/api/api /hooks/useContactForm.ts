import { toast } from "sonner";
import type { ContactFormData } from "../../../component/schemas/contactSchema";
import type { FormikHelpers } from "formik";
import { sendContactEmail } from "../../../component/services/emailService";

export function useContactForm() {
  const handleSubmit = async (
    values: ContactFormData,
    { setSubmitting, resetForm }: FormikHelpers<ContactFormData>,
  ) => {
    try {
      console.log("Form Data:", values);

      await sendContactEmail(values);

      toast.success("Message sent successfully!", {
        description: "We'll get back to you soon.",
      });

      resetForm();
    } catch (error) {
      console.error("Error:", error);

      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return { handleSubmit };
}
