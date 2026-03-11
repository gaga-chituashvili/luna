import { useState, useEffect } from "react";
import { FilterPanel } from "./FilterPanel";
import { ShopPageCoffeeCard } from "./ShopPageCoffeeCard";
import { CoffeesApi } from "../../api/api /data";
import type { Coffee } from "../../api/type/coffees";

export const CoffeeShop = () => {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState<[number, number]>([0, 20]);
  const [tag, setTag] = useState("all");
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await CoffeesApi({
        search,
        price,
        tag,
      });

      setCoffees(data);
    };

    loadProducts();
  }, [search, price, tag]);

  return (
    <section className="bg-black text-white py-20 px-6">
      <FilterPanel
        search={search}
        setSearch={setSearch}
        price={price}
        setPrice={setPrice}
        tag={tag}
        setTag={setTag}
        results={coffees.length}
      />

      <ShopPageCoffeeCard allCoffees={coffees} />
    </section>
  );
};
