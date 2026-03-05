import { useMemo } from "react";
import type { Coffee } from "../../api/type/coffees";

type Params = {
  coffees: Coffee[];
  search: string;
  price: [number, number];
  tag: string;
};

export const useCoffeeFilter = ({ coffees, search, price, tag }: Params) => {
  return useMemo(() => {
    return coffees.filter((coffee) => {
      const matchSearch = coffee.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchPrice = coffee.price >= price[0] && coffee.price <= price[1];

      const matchTag = tag === "all" || coffee.tag === tag;

      return matchSearch && matchPrice && matchTag;
    });
  }, [coffees, search, price, tag]);
};
