
import { CoffeeCard } from "./CoffeeCard";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/paths";
import { useCoffees } from "../../hooks/useRates";
import { MoonLoader } from "react-spinners";

export const Coffees = () => {

  const navigate = useNavigate();

  const { data: coffees = [], isLoading, isError } = useCoffees();


  if (isLoading) {
    return <MoonLoader color="#000000" size={70} />;
  }

  if (isError) {
    return <p className="text-red-500 text-center">Failed to load coffees</p>;
  }

  return (
    <section className="bg-black text-white py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {coffees.slice(0, 3).map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <Button onClick={() => navigate(ROUTES.shop)}>View All Coffee</Button>
      </div>
    </section>
  );
};
