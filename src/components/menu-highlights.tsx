"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { menuItems } from "@/lib/data/menu-items";
import { ArrowRight } from "lucide-react";

export function MenuHighlights() {
  const highlights = menuItems.filter((item) => item.isSignature).slice(0, 4);
  const espressoHighlights = menuItems
    .filter((item) => item.category === "espresso")
    .slice(0, 2);
  const manualHighlights = menuItems
    .filter((item) => item.category === "manual-brew")
    .slice(0, 2);

  const displayItems = [
    ...highlights,
    ...espressoHighlights,
    ...manualHighlights,
  ].slice(0, 8);

  return (
    <section className="py-24 md:py-32 bg-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-dark mb-6">
            Menu Favorit Kami
          </h2>
          <p className="font-lora text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            Dari espresso klasik hingga signature blend dengan sentuhan lokal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {displayItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {item.isSignature && (
                  <div className="absolute top-4 right-4 bg-coffee-caramel text-coffee-dark px-3 py-1 rounded-full text-xs font-bold">
                    Signature
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-coffee-dark">
                  {item.name}
                </h3>
                <p className="font-lora text-text-muted text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-coffee-caramel text-lg">
                    Rp {item.price.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/branches"
            className="inline-flex items-center space-x-2 text-coffee-dark hover:text-coffee-caramel transition-colors font-semibold text-lg group"
          >
            <span>Lihat Menu Lengkap</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
