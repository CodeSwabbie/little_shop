import { ProductType, SetProducts } from "../types/ProductType";

//? Defines the child components that the provider will wrap (React.ReactNode includes anything renderable in React)
export type ProductProviderProps = {
  children: React.ReactNode;
};

export type ProductContext = {
  addProduct: (id: number, setProducts: SetProducts) => void;
  products: ProductType[];
  setProducts: SetProducts;
};
