import { motion } from "framer-motion";
import { ContactForm } from "../component/contact/ContactForm";
import { ContactInfo } from "../component/contact/ContactInfo";
import LocationSection from "../component/contact/LocationSection";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#1a120e] to-black flex flex-col items-center justify-center p-20 gap-y-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-y-1 text-center"
      >
        <h4 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
          Get in Touch with <span className="text-[#a36a4f]">Luna.</span>
        </h4>

        <p className="mt-4 max-w-xl text-lg md:text-xl text-white/80 leading-relaxed">
          We’re here to help. Whether you have questions about our coffee,
          blends, or your order, reach out and we’ll respond quickly.
        </p>
      </motion.div>

      <motion.div
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <ContactInfo />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <LocationSection />
      </motion.div>
    </section>
  );
}
