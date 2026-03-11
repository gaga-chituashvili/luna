import { useQuery } from "@tanstack/react-query";
import { CoffeesApi, RateApi } from "../../api /data";

export const useRates = () => {
  return useQuery({
    queryKey: ["rates"],
    queryFn: RateApi,
  });
};

export const useCoffees = () => {
  return useQuery({
    queryKey: ["coffees"],
    queryFn: CoffeesApi,
  });
};
