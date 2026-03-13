import { motion } from "framer-motion";
import type { Coffee } from "../../api/type/coffees";
import { CoffeeCard } from "../coffees/CoffeeCard";

type Props = {
  allCoffees: Coffee[];
};

export const ShopPageCoffeeCard = ({ allCoffees }: Props) => {
  return (
    <section className="bg-black text-white py-20">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {allCoffees.map((coffee) => (
          <motion.div
            key={coffee.id}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.96 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
          >
            <CoffeeCard coffee={coffee} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
