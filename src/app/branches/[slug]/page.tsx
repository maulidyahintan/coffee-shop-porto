import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { DigitalMenuOrder } from "@/components/digital-menu-order";
import {
  getBranchBySlug,
  getAllBranchSlugs,
  type Branch,
} from "@/lib/data/branches";
import {
  MapPin,
  Phone,
  Clock,
  Music,
  Laptop,
  Home as HomeIcon,
  Factory,
  Wifi,
  Car,
  ArrowRight,
} from "lucide-react";

interface BranchPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBranchSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BranchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);

  if (!branch) {
    return {
      title: "Branch Not Found",
    };
  }

  return {
    title: branch.name,
    description: branch.description,
    keywords: [
      `kopi ${branch.city}`,
      `cafe ${branch.city}`,
      `Coffee Shop ${branch.city}`,
      branch.name,
      "working space",
      "coffee",
    ],
    openGraph: {
      title: `${branch.name} | Coffee Shop`,
      description: branch.description,
      images: [
        {
          url: `${branch.heroImage}&w=1200&h=630&fit=crop`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

function generateBranchSchema(branch: Branch) {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: branch.name,
    image: branch.heroImage,
    description: branch.description,
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
    priceRange: "$$",
    servesCuisine: "Coffee",
    hasMenu: `https://kopiinsight.id/branches/${branch.slug}/menu`,
  };
}

export default async function BranchPage({ params }: BranchPageProps) {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);

  if (!branch) {
    notFound();
  }

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${branch.lat},${branch.lng}`;

  return (
    <>
      <JsonLd data={generateBranchSchema(branch)} />
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px]">
          <Image
            src={branch.heroImage}
            alt={branch.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-coffee-dark/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 pb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="text-white">
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="h-5 w-5 text-coffee-caramel" />
                  <span className="text-coffee-caramel font-semibold">
                    {branch.city}
                  </span>
                </div>
                <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {branch.name}
                </h1>
                <p className="font-lora text-lg md:text-xl text-coffee-cream/90 max-w-3xl">
                  {branch.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact & Hours */}
              <div className="lg:col-span-2 space-y-8">
                {/* Address & Contact */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="font-playfair text-2xl font-bold text-coffee-dark mb-6">
                    Informasi Kontak
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-6 w-6 text-coffee-caramel mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-coffee-dark mb-1">
                          Alamat
                        </p>
                        <p className="text-text-muted">{branch.address}</p>
                        <a
                          href={mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-coffee-caramel hover:text-coffee-dark transition-colors mt-2 font-semibold"
                        >
                          <span>Buka di Google Maps</span>
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="h-6 w-6 text-coffee-caramel mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-coffee-dark mb-1">
                          Telepon
                        </p>
                        <a
                          href={`tel:${branch.phone}`}
                          className="text-text-muted hover:text-coffee-caramel transition-colors"
                        >
                          {branch.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="h-6 w-6 text-coffee-caramel" />
                    <h2 className="font-playfair text-2xl font-bold text-coffee-dark">
                      Jam Operasional
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(branch.openingHours).map(([day, hours]) => (
                      <div
                        key={day}
                        className="flex items-center justify-between py-2 border-b border-coffee-medium/10 last:border-0"
                      >
                        <span className="font-semibold text-coffee-dark capitalize">
                          {day === "monday" && "Senin"}
                          {day === "tuesday" && "Selasa"}
                          {day === "wednesday" && "Rabu"}
                          {day === "thursday" && "Kamis"}
                          {day === "friday" && "Jumat"}
                          {day === "saturday" && "Sabtu"}
                          {day === "sunday" && "Minggu"}
                        </span>
                        <span className="text-text-muted">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white p-8 rounded-lg shadow-md h-fit">
                <h2 className="font-playfair text-2xl font-bold text-coffee-dark mb-6">
                  Fasilitas
                </h2>
                <div className="space-y-4">
                  {branch.features.liveMusic && (
                    <div className="flex items-center space-x-3">
                      <Music className="h-5 w-5 text-coffee-caramel" />
                      <span className="text-text-muted">Live Music</span>
                    </div>
                  )}
                  {branch.features.workingSpace && (
                    <div className="flex items-center space-x-3">
                      <Laptop className="h-5 w-5 text-coffee-caramel" />
                      <span className="text-text-muted">Working Space</span>
                    </div>
                  )}
                  {branch.features.indoor && (
                    <div className="flex items-center space-x-3">
                      <HomeIcon className="h-5 w-5 text-coffee-caramel" />
                      <span className="text-text-muted">Indoor Seating</span>
                    </div>
                  )}
                  {branch.features.outdoor && (
                    <div className="flex items-center space-x-3">
                      <HomeIcon className="h-5 w-5 text-coffee-caramel" />
                      <span className="text-text-muted">Outdoor Seating</span>
                    </div>
                  )}
                  {branch.features.roastery && (
                    <div className="flex items-center space-x-3">
                      <Factory className="h-5 w-5 text-coffee-caramel" />
                      <span className="text-text-muted">In-House Roastery</span>
                    </div>
                  )}
                  {branch.features.wifi && (
                    <div className="flex items-center space-x-3">
                      <Wifi className="h-5 w-5 text-coffee-caramel" />
                      <span className="text-text-muted">Free WiFi</span>
                    </div>
                  )}
                  {branch.features.parking && (
                    <div className="flex items-center space-x-3">
                      <Car className="h-5 w-5 text-coffee-caramel" />
                      <span className="text-text-muted">Parking Available</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-coffee-dark mb-8 text-center">
              Suasana {branch.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {branch.galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-lg overflow-hidden group"
                >
                  <Image
                    src={image}
                    alt={`${branch.name} gallery ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="py-16 bg-bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-coffee-dark mb-8 text-center">
              Lokasi Kami
            </h2>
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
                <iframe
                  src={`https://www.google.com/maps?q=${branch.lat},${branch.lng}&hl=id&z=16&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Peta lokasi ${branch.name}`}
                  className="w-full h-full"
                />
              </div>
              <div className="text-center">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-coffee-caramel hover:text-coffee-dark transition-colors font-semibold"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Buka di Google Maps</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <DigitalMenuOrder
          branchSlug={branch.slug}
          hideBranchSelector
          title={`Order Online ${branch.name}`}
        />

        {/* CTA */}
        <section className="py-16 bg-coffee-dark text-coffee-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Lihat Menu Kami
            </h2>
            <p className="font-lora text-lg mb-8 text-coffee-cream/90">
              Jelajahi berbagai pilihan kopi dan makanan yang tersedia di cabang
              ini
            </p>
            <Link
              href={`/branches/${branch.slug}/menu`}
              className="inline-flex items-center space-x-2 bg-coffee-caramel text-coffee-dark px-8 py-4 rounded-md hover:bg-coffee-cream transition-colors font-semibold text-lg"
            >
              <span>Lihat Menu Lengkap</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
