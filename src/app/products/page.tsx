import { getAllProducts } from "@/lib/api/products";
import ProductList from "@/components/PLP/ProductList";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const allProducts = await getAllProducts();

  const filteredProducts = category
    ? allProducts.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      )
    : allProducts;

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <ProductList products={filteredProducts} title={category} />
    </main>
  );
}
