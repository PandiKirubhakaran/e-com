"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SearchBar from "@/components/ui-common/SearchBar";
import ProductCard from "../PLP/ProductCard";
import { useProducts } from "@/context/ProductContext";
import Image from "next/image";

type Props = {
  mode: "desktop" | "mobile";
  closeMobileMenu?: () => void;
};

const SearchWithDropdown = ({ mode, closeMobileMenu }: Props) => {
  const { products } = useProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    setIsDropdownOpen(searchQuery.length > 0 && filteredProducts.length > 0);
  }, [searchQuery, filteredProducts]);

  const isDesktop = mode === "desktop";

  return (
    <div
      ref={wrapperRef}
      className={`${
        isDesktop ? "hidden md:flex flex-1 mx-8" : "md:hidden"
      } relative`}
    >
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      {isDropdownOpen && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-2 z-40 max-h-[500px] overflow-y-auto rounded-md shadow-lg p-4">
          {isDesktop ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  onClick={() => {
                    setSearchQuery("");
                    setIsDropdownOpen(false);
                  }}
                >
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  onClick={() => {
                    setSearchQuery("");
                    setIsDropdownOpen(false);
                    if (closeMobileMenu) closeMobileMenu();
                  }}
                  className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-md"
                >
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-md"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-600">₹{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchWithDropdown;
