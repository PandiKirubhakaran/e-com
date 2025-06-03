import React from "react";
import ProductCard from "./ProductCard";
import { DisplayProduct } from "@/types/product";

type IProductListProps = {
  products: DisplayProduct[];
  title?: string;
};

const ProductList: React.FC<IProductListProps> = ({
  products,
  title = "Products",
}) => {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        aria-label={title}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default ProductList;
