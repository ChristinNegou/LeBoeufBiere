"use client";

import { MenuCategory } from "@/lib/types";
import { Leaf, WheatOff } from "lucide-react";

const CATEGORIES: { value: MenuCategory | "all"; label: string }[] = [
  { value: "all", label: "Tout le menu" },
  { value: "entrees", label: "Entrées" },
  { value: "plats", label: "Plats" },
  { value: "grillades", label: "Grillades" },
  { value: "bieres", label: "Bières" },
  { value: "desserts", label: "Desserts" },
  { value: "boissons", label: "Boissons" },
];

interface MenuFiltersProps {
  activeCategory: MenuCategory | "all";
  onCategoryChange: (cat: MenuCategory | "all") => void;
  vegetarian: boolean;
  onVegetarianToggle: () => void;
  glutenFree: boolean;
  onGlutenFreeToggle: () => void;
}

export default function MenuFilters({
  activeCategory,
  onCategoryChange,
  vegetarian,
  onVegetarianToggle,
  glutenFree,
  onGlutenFreeToggle,
}: MenuFiltersProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat.value
                ? "bg-[#2C1810] text-white shadow-sm"
                : "bg-white text-gray-600 hover:bg-[#2C1810]/10 border border-gray-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Diet filters */}
      <div className="flex gap-3">
        <button
          onClick={onVegetarianToggle}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
            vegetarian
              ? "bg-green-600 text-white"
              : "bg-white text-green-600 border border-green-300 hover:bg-green-50"
          }`}
        >
          <Leaf size={12} />
          Végétarien
        </button>
        <button
          onClick={onGlutenFreeToggle}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
            glutenFree
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-300 hover:bg-blue-50"
          }`}
        >
          <WheatOff size={12} />
          Sans gluten
        </button>
      </div>
    </div>
  );
}
