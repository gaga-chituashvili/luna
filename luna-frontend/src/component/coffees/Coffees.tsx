import { useEffect, useState } from "react";
import { CoffeeCard } from "./CoffeeCard";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/paths";
import CoffeesApi from "../../api/api /coffees";
import { MoonLoader } from "react-spinners";
import type { Coffee } from "../../api/type/coffees";

export const Coffees = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    CoffeesApi()
      .then((data) => {
        setCoffees(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err as Error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <MoonLoader color="#000000" size={70} />;
  }

  if (error) {
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
