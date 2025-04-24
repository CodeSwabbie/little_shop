import { useContext, createContext, useState, useEffect } from "react";
//* Funtions
import { fetchProducts } from "../functions/fetchProducts";
import addToCart from "../functions/addToCart";
//* Types
import { ProductType, CartItemType } from "../types/ProductType";
import {
  ProductProviderProps,
  ProductContextType,
} from "./ProductContext.types";

//? Create the context with an initial empty value
const ProductContext = createContext({} as ProductContextType);

//? Custom hook
export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
}

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<CartItemType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.log("Error while downloading data:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, addToCart, setCart, cart }}
    >
      {children}
    </ProductContext.Provider>
  );
}
