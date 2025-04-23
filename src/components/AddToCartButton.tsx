import { useProducts } from "../context/ProductContext";

export default function AddToCartButton({ productId }: { productId: number }) {
  const { addProduct, setProducts } = useProducts();
  return (
    <button
      className="bg-green-600 w-32 h-10 ml-8 rounded-md text-white text-shadow-2xs text-shadow-amber-950 border-1 border-black cursor-pointer self-center transition duration-300 hover:bg-green-700"
      onClick={() => addProduct(productId, setProducts)}
    >
      Add to cart
    </button>
  );
}
