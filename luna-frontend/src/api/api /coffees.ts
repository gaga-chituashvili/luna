import type { Coffee } from "../type/coffees";

const API_URL = "https://luna-fya4.onrender.com/v1/products/";

type ApiResponse = {
  success: boolean;
  data: Coffee[];
};

const CoffeesApi = async (): Promise<Coffee[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch coffee data");
  }

  const result: ApiResponse = await response.json();

  return result.data;
};

export default CoffeesApi;
