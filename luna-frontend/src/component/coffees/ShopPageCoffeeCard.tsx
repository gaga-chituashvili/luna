import coffeeimg from "../../assets/coffeeimg.png";
import { CoffeeCard } from "../coffees/CoffeeCard";

const allCoffees = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  image: coffeeimg,
  name: `Luna Coffee ${i + 1}`,
  price: 25 + i,
  tag: "Premium Blend",
}));

export const ShopPageCoffeeCard = () => {
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
