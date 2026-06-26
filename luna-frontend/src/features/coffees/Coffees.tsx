import { motion } from "framer-motion";
import { CoffeeCard } from "@/features/coffees/CoffeeCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ROUTES } from "@/lib/paths";
import { useCoffees } from "@/hooks/useData";
import { MoonLoader } from "react-spinners";
import { Wrapper } from "@/components/shared/wrapper";

export const Coffees = () => {
  const navigate = useNavigate();
  const { data: coffees = [], isLoading, isError } = useCoffees();

  if (isLoading) {
    return (
      <div className="flex justify-center py-24 bg-black">
        <MoonLoader color="#B8735A" size={60} />
      </div>
    );
  }

  if (isError) {
    return <p className="text-red-500 text-center">Failed to load coffees</p>;
  }

  return (
    <section className="bg-black text-white py-20">
      <Wrapper>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {coffees.slice(0, 3).map((coffee) => (
            <motion.div
              key={coffee.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <CoffeeCard coffee={coffee} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button onClick={() => navigate({ to: ROUTES.shop })}>
            View All Coffee
          </Button>
        </motion.div>
      </Wrapper>
    </section>
  );
};
