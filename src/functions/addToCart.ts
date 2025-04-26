import { SetCartType } from "../types/ProductType";

export default function addToCart(id: number, setCart: SetCartType) {
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
