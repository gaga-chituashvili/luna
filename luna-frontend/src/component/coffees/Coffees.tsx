import coffeeimg from "../../assets/coffeeimg.png";
import { CoffeeCard } from "./CoffeeCard";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/paths";

const coffees = [
  {
    id: 1,
    image: coffeeimg,
    name: "Luna Classic",
    price: 28.5,
    tag: "Balanced & Smooth",
  },
  {
    id: 2,
    image: coffeeimg,
    name: "Luna Dark",
    price: 30,
    tag: "Bold & Intense",
  },
  {
    id: 3,
    image: coffeeimg,
    name: "Luna Mild",
    price: 26,
    tag: "Soft & Light",
  },
];

export const Coffees = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <Button onClick={() => navigate(ROUTES.shop)}>View All Coffee</Button>
      </div>
    </section>
  );
};
