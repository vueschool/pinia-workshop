export type Uid = string;
export interface Product {
  id: Uid;
  name: string;
  image: string;
  price: number;
  inStock: number;
}
export interface CartItem {
  id: Uid;
  count: number;
}
