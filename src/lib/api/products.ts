import {
  API_BASE_URL,
  GET_ALL_PRODUCTS_ENDPOINT,
  GET_PRODUCT_BY_ID_ENDPOINT,
} from "@/constants/api";
import { Product, DisplayProduct } from "@/types/product";

export async function getAllProducts(limit = 20): Promise<DisplayProduct[]> {
  try {
    const res = await fetch(
      `${API_BASE_URL}${GET_ALL_PRODUCTS_ENDPOINT}${limit}`,
      {
        cache: "no-store",
      }
    );
    const data: Product[] = await res.json();

    return data.map((item) => ({
      id: item.id.toString(),
      name: item.title,
      image: item.image,
      price: item.price,
    }));
  } catch (error) {
    console.error("Failed to fetch products", error);
    return [];
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`${API_BASE_URL}${GET_PRODUCT_BY_ID_ENDPOINT}/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Product with ID ${id} not found`);
    }

    const item: Product = await res.json();
    return item;
  } catch (error) {
    console.error(`Failed to fetch product with ID ${id}`, error);
    return null;
  }
}
