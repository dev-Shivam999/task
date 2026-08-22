export interface Product {
  id: number;
  title: string;
  price: number;
  rating: number; // 1-5, can include .5
  image: string;  // local image path
}
