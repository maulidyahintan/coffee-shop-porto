import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BranchesGrid } from "@/components/branches-grid";
import { JsonLd } from "@/components/json-ld";
import { BranchesLocator } from "@/components/branches/BranchesLocator";
import { branches } from "@/lib/data/branches";

export const metadata: Metadata = {
  title: "Cabang Kami",
  description:
    "Coffee Shop hadir di 5 kota besar Indonesia: Jakarta Selatan, Bandung, Surabaya, Yogyakarta, dan Bali. Temukan cabang terdekat Anda.",
  keywords: [
    "cabang kopi insight",
    "lokasi cafe",
    "Coffee Shop Jakarta",
    "cafe Bandung",
    "kopi Surabaya",
    "cafe Yogyakarta",
    "Coffee Shop Bali",
  ],
  openGraph: {
    title: "Cabang Kami | Coffee Shop",
    description: "Temukan cabang Coffee Shop terdekat di 5 kota besar Indonesia.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&h=630&auto=format&fit=crop",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: "https://kopiinsight.id",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Cabang",
      item: "https://kopiinsight.id/branches",
    },
  ],
};

// JSON-LD for location list with geo coordinates
const branchesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: branches.map((branch, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CafeOrCoffeeShop",
      "@id": `https://kopiinsight.id/branches/${branch.slug}`,
      name: branch.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: branch.address,
        addressLocality: branch.city,
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: branch.lat,
        longitude: branch.lng,
      },
      telephone: branch.phone,
      url: `https://kopiinsight.id/branches/${branch.slug}`,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Monday",
          opens: branch.openingHours.monday.split(" - ")[0],
          closes: branch.openingHours.monday.split(" - ")[1],
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Tuesday",
          opens: branch.openingHours.tuesday.split(" - ")[0],
          closes: branch.openingHours.tuesday.split(" - ")[1],
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Wednesday",
          opens: branch.openingHours.wednesday.split(" - ")[0],
          closes: branch.openingHours.wednesday.split(" - ")[1],
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Thursday",
          opens: branch.openingHours.thursday.split(" - ")[0],
          closes: branch.openingHours.thursday.split(" - ")[1],
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: branch.openingHours.friday.split(" - ")[0],
          closes: branch.openingHours.friday.split(" - ")[1],
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: branch.openingHours.saturday.split(" - ")[0],
          closes: branch.openingHours.saturday.split(" - ")[1],
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: branch.openingHours.sunday.split(" - ")[0],
          closes: branch.openingHours.sunday.split(" - ")[1],
        },
      ],
    },
  })),
};

export default function BranchesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={branchesListSchema} />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1920&q=80&auto=format&fit=crop"
            alt="Cabang Coffee Shop"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/80 via-coffee-dark/65 to-coffee-dark/55" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex items-center justify-center pt-16">
            <div className="text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-cream mb-6">
                Cabang Coffee Shop
              </h1>
              <p className="font-lora text-lg md:text-xl text-coffee-cream/90 max-w-2xl mx-auto">
                Hadir di 5 kota besar Indonesia dengan suasana unik di setiap
                lokasi
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Map + Location List */}
        <BranchesLocator branches={branches} />

        {/* Branches Grid */}
        <section className="py-16 md:py-24 bg-bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <BranchesGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
