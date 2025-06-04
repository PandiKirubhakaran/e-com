import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/lib/api/products";
import Home from "@/components/Home/Home";

export default async function HomePage() {
  const allProducts = await getAllProducts();

  const categoryMap = new Map<string, (typeof allProducts)[0]>();

  for (const product of allProducts) {
    if (!categoryMap.has(product.category)) {
      categoryMap.set(product.category, product);
    }
  }

  return <Home categoryMap={categoryMap} />;
}
