import ProductDetails from "@/components/PDP/ProductDetails";
import { getProductById } from "@/lib/api/products";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default async function ProductPage({ params }: Props) {
  const product = await getProductById(params.id);

  if (!product) return notFound();

  return <ProductDetails product={product} />;
}
