import { SetCartType } from "../types/ProductType";

export default function removeFromCart(id: number, setCart: SetCartType) {
  setCart((prevCart) => prevCart.filter((item) => item.id !== id));
}
