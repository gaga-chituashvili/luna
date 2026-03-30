import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Check, Coffee } from "lucide-react";
import { MISSION } from "@/constants/ourStoryData";

export const Mission = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="py-24 bg-gradient-to-br from-[#1a1410] to-[#0f0f0f] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8b6947]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#8b6947] to-[#6b4423] p-1">
              <div className="w-full h-full rounded-3xl bg-[#2d1f1a] flex flex-col items-center justify-center p-8 space-y-8">
                <Coffee size={80} className="text-[#B8735A] via-white " />

                <div className="text-center">
                  <div className="text-6xl font-bold text-[#B8735A] via-white mb-2">
                    {inView && <CountUp end={6} duration={2} />}+
                  </div>
                  <p className="text-gray-300">Years of Excellence</p>
                </div>

                <div className="grid grid-cols-2 gap-6 w-full">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#B8735A] via-white mb-1">
                      {inView && <CountUp end={50} duration={2} />}K+
                    </div>
                    <p className="text-sm text-gray-400">Happy Customers</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#B8735A] via-white mb-1">
                      {inView && <CountUp end={15} duration={2} />}+
                    </div>
                    <p className="text-sm text-gray-400">Coffee Blends</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#B8735A] via-white">
              {MISSION.title}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {MISSION.description}
            </p>

            <ul className="space-y-4">
              {MISSION.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#B8735A]/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-[#B8735A]" />
                  </span>
                  <span className="text-gray-300 text-lg">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
