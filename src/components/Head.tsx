//* components
import BasketButton from "./BasketButton";

export default function Head() {
  return (
    <div className="bg-orange-400 h-25 rounded-md border-2 border-green-600 mb-3 flex items-center justify-between px-4 shadow-md">
      <h1 className="font-bold text-white text-5xl underline underline-offset-5 decoration-green-600 text-shadow-2xs text-shadow-green-600">
        Shopik
      </h1>
      <BasketButton />
    </div>
  );
}
