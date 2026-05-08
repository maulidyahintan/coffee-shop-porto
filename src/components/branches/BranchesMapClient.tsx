"use client";

import dynamic from "next/dynamic";
import type { Branch } from "@/lib/data/branches";

interface BranchesMapProps {
  branches: Branch[];
  selectedSlug: string | null;
  onSelectBranch: (slug: string) => void;
}

// Load map with SSR disabled to prevent Leaflet window errors
const BranchesMapDynamic = dynamic(
  () => import("./BranchesMap").then((mod) => ({ default: mod.BranchesMap })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-coffee-cream/30 rounded-lg">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-coffee-caramel mb-2" />
          <p className="text-sm text-text-muted">Memuat peta...</p>
        </div>
      </div>
    ),
  }
);

export function BranchesMapClient(props: BranchesMapProps) {
  return <BranchesMapDynamic {...props} />;
}
