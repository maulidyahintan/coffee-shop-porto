"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Music, Laptop, Home as HomeIcon } from "lucide-react";
import { branches } from "@/lib/data/branches";

const cities = ["Semua", "Jakarta Selatan", "Bandung", "Surabaya", "Yogyakarta", "Bali"];

export function BranchesGrid() {
  const [selectedCity, setSelectedCity] = useState("Semua");

  const filteredBranches =
    selectedCity === "Semua"
      ? branches
      : branches.filter((branch) => branch.city === selectedCity);

  return (
    <div>
      {/* Filter Chips */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCity === city
                ? "bg-coffee-caramel text-coffee-dark shadow-md"
                : "bg-white text-coffee-dark hover:bg-coffee-cream border border-coffee-medium/20"
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Branches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBranches.map((branch, index) => (
          <motion.div
            key={branch.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
          >
            <Link href={`/branches/${branch.slug}`}>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={branch.heroImage}
                  alt={branch.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-coffee-dark/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-coffee-caramel text-coffee-dark px-3 py-1 rounded-full text-sm font-bold">
                  {branch.city}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-coffee-dark mb-2">
                      {branch.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-text-muted text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{branch.city}</span>
                    </div>
                  </div>
                </div>
                <p className="font-lora text-text-muted mb-4 line-clamp-3">
                  {branch.description}
                </p>

                {/* Features Icons */}
                <div className="flex items-center space-x-4 mb-4 text-coffee-caramel">
                  {branch.features.liveMusic && (
                    <div className="flex items-center space-x-1 text-xs">
                      <Music className="h-4 w-4" />
                      <span>Live Music</span>
                    </div>
                  )}
                  {branch.features.workingSpace && (
                    <div className="flex items-center space-x-1 text-xs">
                      <Laptop className="h-4 w-4" />
                      <span>Working</span>
                    </div>
                  )}
                  {branch.features.outdoor && (
                    <div className="flex items-center space-x-1 text-xs">
                      <HomeIcon className="h-4 w-4" />
                      <span>Outdoor</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2 text-coffee-dark hover:text-coffee-caramel transition-colors font-semibold group">
                  <span>Lihat Detail</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
