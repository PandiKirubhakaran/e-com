"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import categoriesData from "@/components/mock/categories.json";

const CategoryDropdownNav = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <nav
      className="hidden md:block bg-gray-100 border-b border-gray-300 w-full"
      role="navigation"
      aria-label="Category Navigation"
    >
      <ul className="flex gap-8 px-6 py-3 max-w-7xl mx-auto w-full">
        {categoriesData.map((category, index) => {
          const isActive = clickedIndex === index;

          return (
            <li key={category.label} className="relative">
              <button
                onClick={() => handleClick(index)}
                aria-haspopup="true"
                aria-expanded={isActive}
                className={`flex items-center gap-1 px-2 py-1 font-medium rounded transition-colors duration-200 focus:outline-none ${
                  isActive
                    ? "bg-[#ca9618] text-white"
                    : "text-gray-800 hover:bg-gray-200"
                }`}
              >
                {category.label}
                <ChevronDown className="w-4 h-4" />
              </button>

              {isActive && (
                <div
                  className="absolute top-full left-0 w-screen bg-white py-6 shadow-xl border-t border-gray-300 z-50"
                  role="region"
                  aria-label={`${category.label} dropdown content`}
                >
                  <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-10">
                    {category.content.map((section, secIdx) => (
                      <div key={secIdx}>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {section.title}
                        </h4>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default CategoryDropdownNav;
