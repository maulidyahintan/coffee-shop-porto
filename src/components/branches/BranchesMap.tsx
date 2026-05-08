"use client";

import { useEffect, useMemo, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Branch } from "@/lib/data/branches";
import "leaflet/dist/leaflet.css";

// Custom marker icon using Lucide MapPin
const createCustomIcon = () => {
  const iconHtml = `
    <div style="position: relative; width: 32px; height: 32px;">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="#c68642"
        stroke="#1a0a00"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3" fill="#1a0a00"/>
      </svg>
    </div>
  `;

  return L.divIcon({
    html: iconHtml,
    className: "custom-marker-icon",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

interface MapControllerProps {
  selectedSlug: string | null;
  branches: Branch[];
}

function MapController({ selectedSlug, branches }: MapControllerProps) {
  const map = useMap();

  useEffect(() => {
    if (selectedSlug) {
      const branch = branches.find((b) => b.slug === selectedSlug);
      if (branch) {
        map.flyTo([branch.lat, branch.lng], 14, {
          duration: 1,
        });
      }
    }
  }, [selectedSlug, branches, map]);

  return null;
}

interface BranchesMapProps {
  branches: Branch[];
  selectedSlug: string | null;
  onSelectBranch: (slug: string) => void;
}

export function BranchesMap({ branches, selectedSlug, onSelectBranch }: BranchesMapProps) {
  const mapRef = useRef<LeafletMap | null>(null);
  const customIcon = useMemo(() => createCustomIcon(), []);

  // Calculate bounds to fit all markers
  const bounds = useMemo(() => {
    if (branches.length === 0) return undefined;

    const latLngs = branches.map((b) => [b.lat, b.lng] as [number, number]);
    return L.latLngBounds(latLngs).pad(0.2);
  }, [branches]);

  // Center of Indonesia as fallback
  const center: [number, number] = [-2.5, 118.0];

  return (
    <MapContainer
      ref={mapRef}
      center={center}
      zoom={5}
      bounds={bounds}
      className="w-full h-full rounded-lg z-0"
      scrollWheelZoom={true}
      aria-label="Peta lokasi cabang Coffee Shop"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapController selectedSlug={selectedSlug} branches={branches} />

      {branches.map((branch) => (
        <Marker
          key={branch.id}
          position={[branch.lat, branch.lng]}
          icon={customIcon}
          eventHandlers={{
            click: () => {
              onSelectBranch(branch.slug);
            },
          }}
        >
          <Popup>
            <div className="p-2 min-w-[200px]">
              <h3 className="font-playfair font-bold text-coffee-dark text-lg mb-2">
                {branch.name}
              </h3>
              <p className="text-sm text-text-muted mb-3 line-clamp-2">
                {branch.address}
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href={`/branches/${branch.slug}`}
                  className="inline-flex items-center justify-center px-3 py-1.5 bg-coffee-caramel text-coffee-dark rounded-md text-sm font-semibold hover:bg-coffee-medium hover:text-coffee-cream transition-colors"
                >
                  Lihat Detail
                </Link>
                <Link
                  href={`/branches/${branch.slug}/menu`}
                  className="inline-flex items-center justify-center px-3 py-1.5 border border-coffee-medium text-coffee-dark rounded-md text-sm font-semibold hover:bg-coffee-cream transition-colors"
                >
                  Lihat Menu
                </Link>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
