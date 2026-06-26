import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface ContactData {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
}

export const sendContactEmail = async (data: ContactData) => {
  try {
    const templateParams = {
      from_name: data.fullName, 
      from_email: data.email, 
      phone: data.phone, 
      message: data.message || "No message provided", 
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY,
    );

    console.log("✅ Email sent:", response);
    return response;
  } catch (error) {
    console.error("❌ Email error:", error);
    throw error;
  }
};
