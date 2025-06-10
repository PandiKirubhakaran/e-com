import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar/Navbar";
import CategoryDropdownNav from "@/components/Navbar/CategoryDropdownNav";
import { ProductProvider } from "@/context/ProductContext";
import { RecentlyViewedProvider } from "@/context/RecentlyViewedProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Add to Cart and Buy the Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <RecentlyViewedProvider> 
            <ProductProvider>
              <Navbar />
              <CategoryDropdownNav />
              {children}
            </ProductProvider>
          </RecentlyViewedProvider>
        </CartProvider>
      </body>
    </html>
  );
}
