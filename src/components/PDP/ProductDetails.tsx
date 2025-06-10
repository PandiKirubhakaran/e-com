"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import Button from "../ui-common/Button";
import { CartItem } from "@/types/cart";
import { useCart } from "@/context/CartContext";
import { BUTTON_LABELS, CartActionType, UISubTitles } from "@/constants/enums";

type IProductDetailsProps = {
  product: Product;
};

const ProductDetails: React.FC<IProductDetailsProps> = ({ product }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    const item: CartItem = {
      id: product.id.toString(),
      name: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
    };
    addToCart(item);
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className="max-w-5xl mx-auto p-6">
      <Button
        onClick={handleGoBack}
        variant="secondary"
        aria-label="Go back to previous page"
      >
        {CartActionType.Back}
      </Button>

      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="w-full h-auto object-contain rounded border"
          />
        </div>

        <div className="md:flex-1 space-y-4">
          <p className="text-gray-500 text-sm">
            {UISubTitles.CATEGORY} {product.category}
          </p>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-lg font-semibold text-green-700">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500">
            {UISubTitles.RATING}
            {product.rating.rate} ⭐ ({product.rating.count}{" "}
            {UISubTitles.REVIEWS})
          </p>

          <Button onClick={handleAddToCart}>{BUTTON_LABELS.ADD_TO_CART}</Button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
