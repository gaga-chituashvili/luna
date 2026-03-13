import { motion } from "framer-motion";
import { HERO_DATA } from "../../constants/ourStoryData";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#1a1410] via-[#2d1f1a] to-[#1a1410] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/coffee-pattern.svg')] bg-repeat"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-[#8b6947]/20 text-white rounded-full border border-[#8b6947]/30"
        >
          {HERO_DATA.subtitle}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r text-[#B8735A] via-white  bg-clip-text text-transparent"
        >
          {HERO_DATA.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          {HERO_DATA.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 mx-auto text-[#B8735A] via-white " />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
