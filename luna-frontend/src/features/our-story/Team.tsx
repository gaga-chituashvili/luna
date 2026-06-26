import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User } from "lucide-react";
import { TEAM } from "@/constants/ourStoryData";
import { useState } from "react";
import { Wrapper } from "@/components/shared/wrapper";

export const Team = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1410] to-[#0f0f0f]">
      <Wrapper>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#B8735A]"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.id}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#2d1f1a] rounded-2xl overflow-hidden border border-[#8b6947]/20 hover:border-[#B8735A]/40 transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-[#8b6947] to-[#6b4423] relative overflow-hidden">
                {member.image ? (
                  <>
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                          <User size={60} className="text-white/50" />
                        </motion.div>
                      </div>
                    )}
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      onLoad={() => setImageLoaded(true)}
                      initial={{ opacity: 0, scale: 1.2 }}
                      animate={imageLoaded ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <User size={120} strokeWidth={1.5} />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#B8735A]">{member.name}</h3>
                <p className="text-[#B8735A] mb-4 font-medium">{member.role}</p>
                <p className="text-gray-300 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
