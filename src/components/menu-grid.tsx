"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getMenuItemsByIds, type MenuItem } from "@/lib/data/menu-items";

interface MenuGridProps {
  menuItemIds: string[];
}

const categories = [
  { id: "all", label: "Semua" },
  { id: "espresso", label: "Espresso" },
  { id: "manual-brew", label: "Manual Brew" },
  { id: "signature", label: "Signature" },
  { id: "non-coffee", label: "Non-Coffee" },
  { id: "food", label: "Makanan" },
];

export function MenuGrid({ menuItemIds }: MenuGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const allMenuItems = getMenuItemsByIds(menuItemIds);

  const filteredItems =
    selectedCategory === "all"
      ? allMenuItems
      : allMenuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? "bg-coffee-caramel text-coffee-dark shadow-md"
                  : "bg-bg-primary text-coffee-dark hover:bg-coffee-cream border border-coffee-medium/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-bg-primary rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-coffee-medium/10"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {item.isSignature && (
                  <div className="absolute top-3 right-3 bg-coffee-caramel text-coffee-dark px-3 py-1 rounded-full text-xs font-bold">
                    Signature
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 text-coffee-dark">
                  {item.name}
                </h3>
                <p className="font-lora text-text-muted text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-coffee-caramel text-xl">
                    Rp {item.price.toLocaleString("id-ID")}
                  </span>
                  <span className="text-xs text-text-muted capitalize">
                    {item.category === "espresso" && "Espresso"}
                    {item.category === "manual-brew" && "Manual Brew"}
                    {item.category === "signature" && "Signature"}
                    {item.category === "non-coffee" && "Non-Coffee"}
                    {item.category === "food" && "Makanan"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="font-lora text-text-muted">
              Tidak ada menu dalam kategori ini
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
