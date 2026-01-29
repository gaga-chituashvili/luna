import coffeeimg from "../../assets/coffeeimg.png";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/paths";

type Coffees = {
  id: number;
  image: string;
  name: string;
  price: number;
  tag: string;
};

const Coffeess: Coffees[] = [
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
    name: "Luna Classic",
    price: 28.5,
    tag: "Balanced & Smooth",
  },
  {
    id: 3,
    image: coffeeimg,
    name: "Luna Classic",
    price: 28.5,
    tag: "Balanced & Smooth",
  },
];

export const Coffees = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-20">
      <div className="text-center max-w-xl mx-auto mb-14">
        <h2 className="text-3xl font-semibold">
          Our Most Loved <span className="text-amber-500">Coffees</span>
        </h2>
        <p className="text-gray-400 mt-3 text-sm">
          Carefully selected blends, chosen by our customers for everyday
          moments of calm.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {Coffeess.map((coffee) => (
          <section
            key={coffee.id}
            className="bg-neutral-900 rounded-3xl p-6 text-center flex flex-col"
          >
            <img
              src={coffee.image}
              alt={coffee.name}
              className="w-full h-full mx-auto  object-cover"
            />

            <h3 className="text-lg font-medium mb-2 bg text-[#825444]">
              {coffee.name}
            </h3>

            <div className="text-sm text-gray-400 mb-4">
              <div className="flex justify-between">
                <span>PRICE:</span>
                <span className="text-[#825444]">GEL {coffee.price}</span>
              </div>
              <div className="flex justify-between">
                <span>TAG:</span>
                <span className="text-[#825444]">{coffee.tag}</span>
              </div>
            </div>

            <div className="mt-auto flex gap-3 justify-center">
              <Button variant="outline">View details</Button>
              <Button variant="default">Add to cart</Button>
            </div>
          </section>
        ))}
      </section>

      <div className="flex justify-center mt-14">
        <Button variant="default" onClick={() => navigate(ROUTES.shop)}>
          View All Coffee
        </Button>
      </div>
    </section>
  );
};
