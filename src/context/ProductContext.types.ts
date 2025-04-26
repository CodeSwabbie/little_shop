import {
  CartItemType,
  ProductType,
  SetCartType,
  SetProductsType,
} from "../types/ProductType";

//? Defines the child components that the provider will wrap (React.ReactNode includes anything renderable in React)
export type ProductProviderProps = {
  children: React.ReactNode;
};

export type ProductContextType = {
  addToCart: (id: number, setCart: SetCartType) => void;
  products: ProductType[];
  setProducts: SetProductsType;
  setCart: SetCartType;
  cart: CartItemType[];
};
