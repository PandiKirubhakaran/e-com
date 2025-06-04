"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DisplayProduct } from "@/types/product";
import { MessageLabels, UILable } from "@/constants/enums";

type HomeProps = {
  categoryMap: Map<string, DisplayProduct>;
};

const Home: React.FC<HomeProps> = ({ categoryMap }) => {
  const entries = [...categoryMap.entries()];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">{UILable.SHOP_CATEGORY}</h1>

      {entries.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {entries.map(([category, product]) => (
            <Link
              key={category}
              href={`/products?category=${encodeURIComponent(category)}`}
              aria-label={`Shop ${category} products`}
              className="rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white focus:outline focus:ring focus:ring-blue-500"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={product.image}
                  alt={`Image representing ${category}`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4 text-center font-semibold capitalize">
                {category}
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

export default Home;
