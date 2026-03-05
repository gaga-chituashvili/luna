import type { Coffee } from "../type/coffees";
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



const CoffeesApi = async (): Promise<Coffee[]> => {
  const response = await fetch(`${API_URL}/v1/products`);

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
