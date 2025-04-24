import {
  CartItemType,
  ProductType,
  SetCart,
  SetProducts,
} from "../types/ProductType";

//? Defines the child components that the provider will wrap (React.ReactNode includes anything renderable in React)
export type ProductProviderProps = {
  children: React.ReactNode;
};

export type ProductContextType = {
  addToCart: (id: number, setCart: SetCart) => void;
  products: ProductType[];
  setProducts: SetProducts;
  setCart: SetCart;
  cart: CartItemType[];
};
