"use client";

import { useState, useMemo } from "react";
import { MenuItem, MenuCategory } from "@/lib/types";
import MenuFilters from "./MenuFilters";
import MenuItemCard from "./MenuItemCard";
import { motion, AnimatePresence } from "framer-motion";

interface MenuGridProps {
  items: MenuItem[];
}

export default function MenuGrid({ items }: MenuGridProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "all">("all");
  const [vegetarian, setVegetarian] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      if (activeCategory !== "all" && item.category !== activeCategory) return false;
      if (vegetarian && !item.is_vegetarian) return false;
      if (glutenFree && !item.is_gluten_free) return false;
      return item.is_available;
    });
  }, [items, activeCategory, vegetarian, glutenFree]);

  return (
    <div>
      <MenuFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        vegetarian={vegetarian}
        onVegetarianToggle={() => setVegetarian((v) => !v)}
        glutenFree={glutenFree}
        onGlutenFreeToggle={() => setGlutenFree((g) => !g)}
      />

      <div className="mt-8">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">Aucun item ne correspond à vos filtres.</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuItemCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
