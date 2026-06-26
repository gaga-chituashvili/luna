
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { CoffeeShop } from "@/features/shop/CoffeeShop";
import { useCoffees } from "@/hooks/useData";
import { Header } from "@/features/shop/Header";

export function ShopView() {
  const { isLoading } = useCoffees();

  if (isLoading) {
    return <ClimbingBoxLoader color="#cfbfbf" size={20} />;
  }

  return (
    <>
      <Header />
      <CoffeeShop />
    </>
  );
};
