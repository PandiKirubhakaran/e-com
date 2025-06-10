import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DisplayProduct } from "@/types/product";
import { MessageLabels, UILable } from "@/constants/enums";

interface ShopByCategoryProps {
  categoryEntries: [string, DisplayProduct][];
}

const ShopByCategory: React.FC<ShopByCategoryProps> = ({ categoryEntries }) => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl text-center font-bold mb-8">
        {UILable.SHOP_CATEGORY}
      </h1>

      {categoryEntries.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categoryEntries.map(([categoryName, product]) => (
            <Link
              key={categoryName}
              href={`/products?category=${encodeURIComponent(categoryName)}`}
              aria-label={`Shop ${categoryName} products`}
              className="rounded-lg overflow-hidden"
            >
              <div className="w-full h-20 relative">
                <Image
                  src={product.image}
                  alt={`Image representing ${categoryName}`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4 text-center text-2xl font-semibold capitalize hover:text-[#ca9618]">
                {categoryName}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg py-10">
          {MessageLabels.NO_CATEGORIES}
        </div>
      )}
    </div>
  );
};

export default ShopByCategory;
