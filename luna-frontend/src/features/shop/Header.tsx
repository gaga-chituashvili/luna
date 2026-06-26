import { motion } from "framer-motion";
import shopheader from "@/assets/shopheader.png";
import { Wrapper } from "@/components/shared/wrapper";

export const Header = () => {
  return (
    <section className="relative w-full h-[18.75rem] md:h-[25rem] lg:h-[31.25rem] overflow-hidden">
      <motion.img
        src={shopheader}
        alt="shop header"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <Wrapper className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          Discover <span className="text-orange-400">Your</span> Perfect Blend
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-lg lg:text-xl max-w-2xl text-gray-200"
        >
          Carefully selected blends, chosen by our customers for everyday
          moments of calm.
        </motion.p>
      </Wrapper>
    </section>
  );
};
