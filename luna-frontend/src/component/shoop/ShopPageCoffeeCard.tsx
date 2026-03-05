import type { Coffee } from "../../api/type/coffees";
import { CoffeeCard } from "../coffees/CoffeeCard";

type Props = {
  allCoffees: Coffee[];
};

export const ShopPageCoffeeCard = ({ allCoffees }: Props) => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {allCoffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </section>
  );
};
