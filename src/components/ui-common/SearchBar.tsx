"use client";
import React from "react";
import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  ariaLabel?: string;
  maxWidth?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search products...",
  ariaLabel = "Search",
  maxWidth = "max-w-md",
}) => {
  return (
    <div className={`relative w-full ${maxWidth}`}>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search
        className="absolute left-3 top-2.5 h-5 w-5 text-gray-500"
        aria-hidden="true"
      />
    </div>
  );
};

export default SearchBar;
