export type ProductType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  quantity: number;
};

export type SetProducts = React.Dispatch<React.SetStateAction<ProductType[]>>;
