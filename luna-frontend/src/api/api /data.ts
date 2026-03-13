import type { Coffee } from "../type/coffees.types";
import type { Rate } from "../type/rate";

const API_URL = "https://luna-fya4.onrender.com";

type ProductApiResponse = {
  success: boolean;
  data: Coffee[];
};

type RateApiResponse = {
  success: boolean;
  data: Rate[];
};

type CoffeeFilters = {
  search?: string;
  price?: [number, number];
  tag?: string;
};

const CoffeesApi = async (filters?: CoffeeFilters): Promise<Coffee[]> => {
  const params = new URLSearchParams();

  if (filters?.search) {
    params.append("search", filters.search);
  }

  if (filters?.price) {
    params.append("minPrice", filters.price[0].toString());
    params.append("maxPrice", filters.price[1].toString());
  }

  if (filters?.tag && filters.tag !== "all") {
    params.append("tag", filters.tag);
  }

  const response = await fetch(`${API_URL}/v1/products?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch coffee data");
  }

  const result: ProductApiResponse = await response.json();

  return result.data;
};

const RateApi = async (): Promise<Rate[]> => {
  const response = await fetch(`${API_URL}/v1/rates`);

  if (!response.ok) {
    throw new Error("Failed to fetch rate data");
  }

  const result: RateApiResponse = await response.json();

  return result.data;
};

export { CoffeesApi, RateApi };
