import { useEffect, useState } from "react";
import { ShopPageCoffeeCard } from "../component/coffees/ShopPageCoffeeCard";
import CoffeesApi from "../api/api /coffees";
import type { Coffee } from "../api/type/coffees";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export const Shop = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CoffeesApi().then((data) => {
      setCoffees(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <ClimbingBoxLoader color="#cfbfbf" size={20} />;
  }

  return <ShopPageCoffeeCard allCoffees={coffees} />;
};
