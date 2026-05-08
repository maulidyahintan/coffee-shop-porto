"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";
import type { Branch } from "@/lib/data/branches";
import { cn } from "@/lib/utils";

interface BranchLocationListProps {
  branches: Branch[];
  selectedSlug: string | null;
  onSelectBranch: (slug: string) => void;
}

// Get today's opening hours
function getTodayOpeningHours(openingHours: Branch["openingHours"]): string {
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const today = days[new Date().getDay()] as keyof typeof openingHours;
  return openingHours[today];
}

export function BranchLocationList({
  branches,
  selectedSlug,
  onSelectBranch,
}: BranchLocationListProps) {
  return (
    <div className="space-y-3 h-full overflow-y-auto">
      <h2 className="font-playfair text-2xl font-bold text-coffee-dark mb-4 px-1">
        Pilih Lokasi
      </h2>

      {branches.map((branch) => {
        const isSelected = selectedSlug === branch.slug;

        return (
          <button
            key={branch.id}
            onClick={() => onSelectBranch(branch.slug)}
            className={cn(
              "w-full text-left p-4 rounded-lg border-2 transition-all duration-200",
              "hover:shadow-md hover:border-coffee-caramel/50",
              "focus:outline-none focus:ring-2 focus:ring-coffee-caramel focus:ring-offset-2",
              isSelected
                ? "bg-coffee-caramel/10 border-coffee-caramel shadow-md"
                : "bg-white border-coffee-medium/20"
            )}
            aria-pressed={isSelected}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-playfair font-bold text-coffee-dark text-lg mb-1 line-clamp-1">
                  {branch.name}
                </h3>

                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-coffee-caramel flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-text-muted line-clamp-2">{branch.address}</p>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-coffee-caramel flex-shrink-0" />
                  <p className="text-xs text-text-muted">
                    Hari ini: <span className="font-semibold">{getTodayOpeningHours(branch.openingHours)}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-coffee-caramel flex-shrink-0" />
                  <p className="text-xs text-text-muted">{branch.phone}</p>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    isSelected ? "bg-coffee-caramel" : "bg-coffee-medium/20"
                  )}
                />
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-coffee-medium/10">
              <Link
                href={`/branches/${branch.slug}`}
                className="text-sm font-semibold text-coffee-caramel hover:text-coffee-dark transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Lihat Detail →
              </Link>
            </div>
          </button>
        );
      })}
    </div>
  );
}
