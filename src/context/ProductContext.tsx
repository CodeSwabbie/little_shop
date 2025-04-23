import { useContext, createContext, useState, useEffect } from "react";
//* Funtions
import { fetchProducts } from "../functions/fetchProducts";
import addProduct from "../functions/addProduct";
//* Types
import { ProductType } from "../types/ProductType";
import type {
  ProductProviderProps,
  ProductContext,
} from "./ProductContext.types";

//? Create the context with an initial empty value
const ProductContext = createContext({} as ProductContext);

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

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsWithQuantity = await fetchProducts();
        setProducts(productsWithQuantity);
      } catch (error) {
        console.log("Error while downloading data:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
