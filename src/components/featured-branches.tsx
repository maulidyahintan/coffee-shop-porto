"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { getFeaturedBranches } from "@/lib/data/branches";

export function FeaturedBranches() {
  const branches = getFeaturedBranches();

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-dark mb-6">
            Kunjungi Cabang Kami
          </h2>
          <p className="font-lora text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            Hadir di 5 kota besar Indonesia dengan suasana unik di setiap lokasi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/branches/${branch.slug}`}
                className="group block overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={branch.heroImage}
                    alt={branch.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-coffee-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-5 w-5 text-coffee-caramel" />
                      <span className="font-semibold text-coffee-caramel">
                        {branch.city}
                      </span>
                    </div>
                    <h3 className="font-playfair text-2xl font-bold mb-2">
                      {branch.name}
                    </h3>
                    <p className="font-lora text-sm text-coffee-cream/80 line-clamp-2">
                      {branch.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/branches"
            className="inline-flex items-center space-x-2 text-coffee-dark hover:text-coffee-caramel transition-colors font-semibold text-lg group"
          >
            <span>Lihat Semua Cabang</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
