import { useQuery } from "@tanstack/react-query";
import { CoffeesApi, RateApi } from "@/api/data";

type CoffeeFilters = {
  search?: string;
  price?: [number, number];
  tag?: string;
};

export const useRates = () => {
  return useQuery({
    queryKey: ["rates"],
    queryFn: RateApi,
  });
};

export const useCoffees = (filters?: CoffeeFilters) => {
  return useQuery({
    queryKey: ["coffees", filters],
    queryFn: () => CoffeesApi(filters),
  });
};
