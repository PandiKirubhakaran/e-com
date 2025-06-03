"use client";
import Link from "next/link";
import { useCart } from "@/context/useCart";
import { ShoppingCart } from "lucide-react";
import { UILable } from "@/constants/enums";

const Navbar = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          {UILable.E_COM}
        </Link>

        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-600"
            >
              {UILable.PRODUCTS}
            </Link>
          </li>
          <li>
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
