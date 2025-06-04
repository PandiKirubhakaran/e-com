import { getAllProducts } from "@/lib/api/products";
import ProductList from "@/components/PLP/ProductList";

type Props = {
  searchParams?: {
    category?: string;
  };
};

export default async function ProductsPage({ searchParams }: Props) {
  const category = searchParams?.category || "";
  const allProducts = await getAllProducts();

  const filteredProducts = category
    ? allProducts.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      )
    : allProducts;

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <ProductList products={filteredProducts} />
    </main>
  );
}
