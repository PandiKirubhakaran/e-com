"use client";
import React, { createContext, useContext } from "react";
import { DisplayProduct } from "@/types/product";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed"; // ✅ Use your custom hook here

type RecentlyViewedContextType = {
  recentItems: DisplayProduct[];
  addRecentlyViewed: (product: DisplayProduct) => void;
};

const RecentlyViewedContext = createContext<RecentlyViewedContextType | null>(null);

export const RecentlyViewedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { recentItems, addRecentlyViewed } = useRecentlyViewed();

  return (
    <RecentlyViewedContext.Provider value={{ recentItems, addRecentlyViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
};

export const useRecentlyViewedContext = () => {
  const context = useContext(RecentlyViewedContext);
  if (!context) throw new Error("useRecentlyViewedContext must be used inside RecentlyViewedProvider");
  return context;
};
