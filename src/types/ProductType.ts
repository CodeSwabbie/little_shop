export type ProductType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
};

export type CartItemType = {
  id: number;
  quantity: number;
};

export type SetProductsType = React.Dispatch<
  React.SetStateAction<ProductType[]>
>;
export type SetCartType = React.Dispatch<React.SetStateAction<CartItemType[]>>;
