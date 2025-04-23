//* components
import AddToCartButton from "./AddToCartButton";
//* types
import { ProductType } from "../types/ProductType";

export default function Product({
  id,
  title,
  description,
  price,
  image,
  quantity,
}: ProductType) {
  return (
    <div className="flex border-2 border-lime-600 my-5 mx-10 p-10 rounded-md shadow-md">
      <li className="flex w-full">
        <img
          src={image}
          alt={title}
          className="w-24 h-auto object-contain mr-10 my-3"
        ></img>
        <div>
          <h2 className="font-bold mb-3">{title}</h2>
          <p>{description}</p>
          <p className="font-bold mt-5">{price}$</p>
          <p className="font-bold mt-5">Quantity: {quantity}</p>
        </div>
      </li>
      <AddToCartButton productId={id} />
    </div>
  );
}
