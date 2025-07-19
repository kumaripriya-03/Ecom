import { ReactNode } from "react";

export interface IProduct {
  quantity: ReactNode;
  category: string;
  id: number;
  title: string;
  price: number;
  images: string[];
  brand: string;
  rating: number;
  stock: number;
}

export interface ICategorisedProduct {
  category: string;
  data: IProduct[];
}

export interface IProductResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export type categorisedCartItem = {
  cartItem?: IProduct;
  quantity: number;
  totalPrice: number;
};
