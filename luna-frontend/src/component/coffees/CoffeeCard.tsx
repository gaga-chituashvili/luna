import { Button } from "../ui/Button";

type Coffee = {
  id: number;
  image: string;
  name: string;
  price: number;
  tag: string;
};

type Props = {
  coffee: Coffee;
};

export const CoffeeCard = ({ coffee }: Props) => {
  return (
    <section className="bg-neutral-900 rounded-3xl p-6 text-center flex flex-col">
      <img
        src={coffee.image}
        alt={coffee.name}
        className="w-full h-full mx-auto object-cover"
      />

      <h3 className="text-lg font-medium mb-2 text-[#825444]">{coffee.name}</h3>

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
  );
};
