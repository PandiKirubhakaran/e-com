"use client";
import { DisplayProduct } from "@/types/product";
import { useLocalStorage } from "./useLocalStorage";
import { STORAGE_KEYS } from "@/constants/storageKeys";

const MAX_RECENT_ITEMS = 5;

export const useRecentlyViewed = () => {
  const [recentItems, setRecentItems] = useLocalStorage<DisplayProduct[]>(
    STORAGE_KEYS.RECENTLY_VIEWED,
    []
  );

  const addRecentlyViewed = (product: DisplayProduct) => {
    setRecentItems((prev) => {
      const filtered = prev.filter((item) => item.id !== product.id);
      const updated = [product, ...filtered].slice(0, MAX_RECENT_ITEMS);
      return updated;
    });
  };

  return { recentItems, addRecentlyViewed };
};
