import { getProductById } from "@/lib/api/products";
import ProductDetails from "@/components/PDP/ProductDetails";
import { MessageLabels } from "@/constants/enums";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) {
    return <div>{MessageLabels.NO_PRODUCT}</div>;
  }

  return <ProductDetails product={product} />;
}
