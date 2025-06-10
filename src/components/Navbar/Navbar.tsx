"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import CartIcon from "./CartIcon";
import RecentlyViewedButton from "./RecentlyViewedButton";
import RecentlyViewedDialog from "./RecentlyViewedDialog";
import { UILable } from "@/constants/enums";
import SearchWithDropdown from "./SearchDropdown";

const Navbar = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          {UILable.E_COM}
        </Link>

        {/* SearchBar - Desktop */}
        <SearchWithDropdown mode="desktop" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link href="/products" className="text-gray-700 hover:text-blue-600">
              {UILable.PRODUCTS}
            </Link>
          </li>
          <li>
            <RecentlyViewedButton onClick={() => setShowDialog(true)} />
          </li>
          <li>
            <CartIcon />
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 border-t bg-white space-y-4">
          <SearchWithDropdown
            mode="mobile"
            closeMobileMenu={() => setMobileMenuOpen(false)}
          />

          <div className="flex justify-between items-center">
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {UILable.PRODUCTS}
            </Link>
            <RecentlyViewedButton
              onClick={() => {
                setShowDialog(true);
                setMobileMenuOpen(false);
              }}
            />
            <CartIcon />
          </div>
        </div>
      )}

      {/* Recently Viewed Dialog */}
      <RecentlyViewedDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
      />
    </header>
  );
};

export default Navbar;
