import { motion } from "framer-motion";
import { useState } from "react";
import { FilterPanel } from "@/features/shop/FilterPanel";
import { ShopPageCoffeeCard } from "@/features/shop/ShopPageCoffeeCard";
import { useCoffees } from "@/hooks/useData";
import { useSearch } from "@tanstack/react-router";
import { Wrapper } from "@/components/shared/wrapper";

export const CoffeeShop = () => {
  const { q } = useSearch({ from: "/shop" });
  const [search, setSearch] = useState(q ?? "");
  const [price, setPrice] = useState<[number, number]>([0, 20]);
  const [tag, setTag] = useState("all");
  const { data: coffees = [] } = useCoffees({ search, price, tag });

  return (
    <section className="bg-black text-white py-20">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FilterPanel
            search={search}
            setSearch={setSearch}
            price={price}
            setPrice={setPrice}
            tag={tag}
            setTag={setTag}
            results={coffees.length}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <ShopPageCoffeeCard allCoffees={coffees} />
        </motion.div>
      </Wrapper>
    </section>
  );
};
