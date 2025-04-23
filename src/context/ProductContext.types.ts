import { ProductType, SetCart, SetProducts } from "../types/ProductType";

//? Defines the child components that the provider will wrap (React.ReactNode includes anything renderable in React)
export type ProductProviderProps = {
  children: React.ReactNode;
};

export type ProductContext = {
  addToCart: (id: number) => void;
  products: ProductType[];
  setProducts: SetProducts;
  setCart: SetCart;
};
