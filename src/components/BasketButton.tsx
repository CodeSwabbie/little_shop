import { ShoppingCart } from "lucide-react";
import { useProducts } from "../context/ProductContext";

export default function BasketButton() {
  const { cart } = useProducts();
  return (
    <div className="flex rounded-md px-3 py-2 bg-green-700 cursor-pointer transition duration-300 hover:bg-green-900">
      <h1 className="mr-2 text-white text-shadow-2xs">Basket</h1>
      <div className="relative">
        <ShoppingCart className="w-5 h-5 text-white" />
        {cart.length > 0 && (
          <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-orange-400 border-1"></div>
        )}
      </div>
    </div>
  );
}
