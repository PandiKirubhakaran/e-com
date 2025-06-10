"use client";
import React from "react";
import Image from "next/image";
import { MessageLabels, UILable } from "@/constants/enums";
import Dropdown from "@/components/ui-common/Dropdown";
import { useRecentlyViewedContext } from "@/context/RecentlyViewedProvider"; 

type Props = {
  open: boolean;
  onClose: () => void;
};

const RecentlyViewedDialog: React.FC<Props> = ({ open, onClose }) => {
  const { recentItems } = useRecentlyViewedContext(); 

  return (
    <Dropdown open={open} onClose={onClose} title="Recently Viewed">
      {recentItems.length === 0 ? (
        <p className="text-gray-500">{MessageLabels.NO_RECENTLY_VIEWED}</p>
      ) : (
        <ul className="space-y-3 max-h-64 overflow-y-auto">
          {recentItems.map((item) => (
            <li key={item.id} className="flex items-center gap-3">
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="rounded"
              />
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">
                  {UILable.PRICE} {item.price}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Dropdown>
  );
};

export default RecentlyViewedDialog;
