"use client";

import { useState } from "react";
import type { Branch } from "@/lib/data/branches";
import { BranchesMapClient } from "./BranchesMapClient";
import { BranchLocationList } from "./BranchLocationList";

interface BranchesLocatorProps {
  branches: Branch[];
}

export function BranchesLocator({ branches }: BranchesLocatorProps) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-coffee-dark mb-3">
            Temukan Lokasi Kami
          </h2>
          <p className="font-lora text-text-muted max-w-2xl mx-auto">
            Klik pin di peta atau pilih cabang dari daftar untuk melihat detail lokasi
          </p>
        </div>

        {/* Map + List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
          {/* Map */}
          <div className="h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
            <BranchesMapClient
              branches={branches}
              selectedSlug={selectedSlug}
              onSelectBranch={setSelectedSlug}
            />
          </div>

          {/* Sidebar List */}
          <div className="lg:h-[600px] max-h-[600px]">
            <BranchLocationList
              branches={branches}
              selectedSlug={selectedSlug}
              onSelectBranch={setSelectedSlug}
            />
          </div>
        </div>

        {/* Noscript Fallback for SEO */}
        <noscript>
          <div className="mt-8 border-t border-coffee-medium/20 pt-8">
            <h3 className="font-playfair text-2xl font-bold text-coffee-dark mb-6">
              Semua Lokasi Cabang
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {branches.map((branch) => (
                <div key={branch.id} className="border border-coffee-medium/20 rounded-lg p-6 bg-white">
                  <h4 className="font-playfair text-xl font-bold text-coffee-dark mb-2">
                    {branch.name}
                  </h4>
                  <p className="text-sm text-text-muted mb-3">{branch.address}</p>
                  <p className="text-sm text-text-muted mb-3">Telepon: {branch.phone}</p>
                  <a
                    href={`/branches/${branch.slug}`}
                    className="inline-block px-4 py-2 bg-coffee-caramel text-coffee-dark rounded-md text-sm font-semibold hover:bg-coffee-medium hover:text-coffee-cream transition-colors"
                  >
                    Lihat Detail
                  </a>
                </div>
              ))}
            </div>
          </div>
        </noscript>
      </div>
    </section>
  );
}
