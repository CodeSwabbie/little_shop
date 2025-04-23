export type ProductType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  quantity: number;
};

export type CartItem = {
  id: number;
  quantity: number;
};

export type SetProducts = React.Dispatch<React.SetStateAction<ProductType[]>>;
export type SetCart = React.Dispatch<React.SetStateAction<CartItem[]>>;
