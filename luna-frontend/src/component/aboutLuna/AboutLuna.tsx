import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ABOUT_LUNA } from "../../constants/homeData";

export const AboutLuna = () => {
  return (
    <section
      className="
        relative
        flex flex-col items-center
        gap-y-6
        py-24 px-6
        text-white
        bg-gradient-to-br from-black via-[#1a0f0a] to-[#2b1a12]
      "
    >
      {/* Title animation */}
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          text-center
          text-2xl sm:text-3xl lg:text-4xl
          font-medium
        "
      >
        {ABOUT_LUNA.title}{" "}
        <span className="text-[#a36a4f]">{ABOUT_LUNA.highlight}</span>
      </motion.h4>

      {/* Description animation */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="
          text-center
          max-w-xl
          text-sm sm:text-base lg:text-lg
          text-gray-300
        "
      >
        {ABOUT_LUNA.description}
      </motion.p>

      {/* Button animation */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Button variant="default">{ABOUT_LUNA.buttonText}</Button>
      </motion.div>

      {/* Image animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="
          mt-16
          w-full
          max-w-6xl
          rounded-3xl
          overflow-hidden
          shadow-2xl
        "
      >
        <motion.img
          src={ABOUT_LUNA.image}
          alt={ABOUT_LUNA.imageAlt}
          className="w-full h-auto object-cover"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </section>
  );
};
