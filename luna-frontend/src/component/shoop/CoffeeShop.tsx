import { useState } from "react";
import { FilterPanel } from "./FilterPanel";
import { ShopPageCoffeeCard } from "./ShopPageCoffeeCard";
import { useCoffees } from "../../api/api /hooks/useData";
import { useSearch } from "@tanstack/react-router";

export const CoffeeShop = () => {
  const { q } = useSearch({ from: "/shop" });

  const [search, setSearch] = useState(q ?? "");
  const [price, setPrice] = useState<[number, number]>([0, 20]);
  const [tag, setTag] = useState("all");

  const { data: coffees = [] } = useCoffees({
    search,
    price,
    tag,
  });

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
