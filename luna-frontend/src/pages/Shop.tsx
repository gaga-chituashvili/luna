import { useEffect, useState } from "react";
import type { Coffee } from "../api/type/coffees";
import CoffeesApi from "../api/api /coffees";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { CoffeeShop } from "../component/shoop/CoffeeShop";

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

  return <CoffeeShop coffees={coffees} />;
};
