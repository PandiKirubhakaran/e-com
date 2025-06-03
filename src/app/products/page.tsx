import React from "react";
import ProductList from "@/components/PLP/ProductList";
import { getAllProducts } from "@/lib/api/products";

export default async function ProductsPage() {
  const products = await getAllProducts();
  return (
    <div className="container mx-auto p-4">
      <ProductList products={products} />
    </div>
  );
}
