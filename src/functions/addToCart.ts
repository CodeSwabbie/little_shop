import { useProducts } from "../context/ProductContext";

export default function addToCart(id: number) {
  const { setCart } = useProducts();
  setCart((prevCart) => {
    const existingItem = prevCart.find((item) => item.id === id);
    if (existingItem) {
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    return [...prevCart, { id, quantity: 1 }];
  });
}
