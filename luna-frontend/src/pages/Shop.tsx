import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { CoffeeShop } from "../component/shoop/CoffeeShop";
import { useCoffees } from "../hooks/useRates";
import { Header } from "../component/shoop/Header";

export const Shop = () => {
  const { data: coffees = [], isLoading } = useCoffees();

  if (isLoading) {
    return <ClimbingBoxLoader color="#cfbfbf" size={20} />;
  }

  return (
    <>
      <Header />
      <CoffeeShop coffees={coffees} />
    </>
  );
};
