import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { VALUES } from "../../constants/ourStoryData";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Values = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-24 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#B8735A] via-white "
        >
          Our Values
        </motion.h2>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {VALUES.map((value, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-gradient-to-br from-[#2d1f1a] to-[#1a1410] rounded-2xl p-8 border border-[#8b6947]/20 hover:border-[#B8735A]/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-6xl mb-6"
              >
                {value.icon}
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 text-[#B8735A] via-white ">
                {value.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-[#B8735A]/0 to-[#B8735A]/0 group-hover:from-[#B8735A]/5 group-hover:to-[#B8735A]/10 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
