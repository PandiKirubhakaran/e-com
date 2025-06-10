"use client";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/types/cart";
import { DisplayProduct } from "@/types/product";
import React from "react";
import Button from "../ui-common/Button";
import Link from "next/link";
import { BUTTON_LABELS } from "@/constants/enums";
import { useRecentlyViewedContext } from "@/context/RecentlyViewedProvider";

type IProductCardProps = {
  product: DisplayProduct;
};

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const { addRecentlyViewed } = useRecentlyViewedContext();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const item: CartItem = {
      ...product,
      quantity: 1,
    };
    addToCart(item);
  };

  return (
    <article className="flex flex-col justify-between border rounded-md p-4 shadow hover:shadow-lg h-full">
      <Link href={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={`Image of ${product.name}`}
          className="w-full h-40 object-contain mb-4"
        />
        <h3
          id={`product-${product.id}-title`}
          className="text-lg font-semibold mb-2"
        >
          {product.name}
        </h3>
        <p className="mb-4 text-gray-700">${product.price.toFixed(2)}</p>
      </Link>

      <div className="flex justify-between items-center gap-2 mt-auto">
        <Button onClick={handleAddToCart}>{BUTTON_LABELS.ADD_TO_CART}</Button>
        <Link
          href={`/products/${product.id}`}
          onClick={() => addRecentlyViewed(product)}
        >
          <Button variant="secondary">{BUTTON_LABELS.VIEW_DETAILS}</Button>
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
