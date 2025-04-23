import { SetProducts } from "../types/ProductType";

export default function addProduct(id: number, setProducts: SetProducts) {
  setProducts((prevProducts) =>
    prevProducts.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    )
  );
}
