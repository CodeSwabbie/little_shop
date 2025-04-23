import { ProductType } from "../types/ProductType";

export const fetchProducts = async (): Promise<ProductType[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};
