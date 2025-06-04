export interface Product {
  id: number | string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface DisplayProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
}
