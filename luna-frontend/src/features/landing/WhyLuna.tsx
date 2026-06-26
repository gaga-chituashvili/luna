import { Wrapper } from "@/components/shared/wrapper";
import { motion } from "framer-motion";
import { WHY_LUNA } from "@/constants/homeData";

export const WhyLuna = () => {
  return (
    <section className="w-full bg-black py-24 text-center">
      <Wrapper className="flex flex-col items-center">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light text-white mb-4"
        >
          Why <span className="text-[#B8735A]">Luna?</span>
        </motion.h4>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mb-16"
        >
          Carefully selected blends, chosen by our customers for everyday
          moments of calm.
        </motion.p>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
          {WHY_LUNA.map((card, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                type: "spring",
                stiffness: 80,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative w-full aspect-[4/5] max-h-[28rem] md:max-h-none rounded-3xl overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-black shadow-[0_0_3rem_rgba(184,115,90,0.15)]"
            >
              <motion.img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover opacity-90"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-[#3b231b] via-[#3b231bcc] to-transparent backdrop-blur-sm">
                <span className="block text-lg text-white mb-2">
                  {card.title}
                </span>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
