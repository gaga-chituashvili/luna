import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TIMELINE } from "@/constants/ourStoryData";

export const Timeline = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <section className="py-24 bg-gradient-to-b from-[#0f0f0f] to-[#1a1410]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#B8735A] via-white "
        >
          Our Journey
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b text-[#B8735A] via-white  to-transparent hidden md:block"></div>

          <div className="space-y-16">
            {TIMELINE.map((event, index) => {
              return (
                <motion.div
                  key={event.year}
                  ref={ref}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-[#8b6947] border-4 border-[#1a1410] z-10"
                  >
                    <span className="text-white font-bold text-sm">
                      {event.year}
                    </span>
                  </motion.div>

                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#2d1f1a] rounded-2xl p-8 border border-[#8b6947]/20 hover:border-[#B8735A]/40 transition-all"
                    >
                      <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold bg-[#B8735A]/20 text-[#B8735A] via-white  rounded-full md:hidden">
                        {event.year}
                      </span>
                      <h3 className="text-2xl font-bold mb-3 text-[#B8735A] via-white ">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
