import { useState } from "react";
import { FilterPanel } from "./FilterPanel";
import { ShopPageCoffeeCard } from "./ShopPageCoffeeCard";
import { useCoffeeFilter } from "./useCoffeeFilter";
import type { Coffee } from "../../api/type/coffees";

type Props = {
  coffees: Coffee[];
};

export const CoffeeShop = ({ coffees }: Props) => {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState<[number, number]>([0, 20]);
  const [tag, setTag] = useState("all");

  const filtered = useCoffeeFilter({
    coffees,
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
        results={filtered.length}
      />
      <ShopPageCoffeeCard allCoffees={filtered} />
    </section>
  );
};
