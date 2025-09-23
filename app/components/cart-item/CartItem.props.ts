export interface CartItemProps {
  id: number;
  quantity: number;
  product: {
    id: number;
    name: string;
    slug: string;
    price: number;
    imageUrl: string;
    discount: number;
    inStock: boolean;
  };
}
