import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MenuGrid } from "@/components/menu-grid";
import { JsonLd } from "@/components/json-ld";
import {
  getBranchBySlug,
  getAllBranchSlugs,
} from "@/lib/data/branches";
import { ChevronRight } from "lucide-react";

interface BranchMenuPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBranchSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BranchMenuPageProps): Promise<Metadata> {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);

  if (!branch) {
    return {
      title: "Menu Not Found",
    };
  }

  return {
    title: `Menu ${branch.name}`,
    description: `Jelajahi menu kopi, manual brew, signature drinks, dan makanan yang tersedia di ${branch.name}.`,
    keywords: [
      `menu ${branch.city}`,
      `harga kopi ${branch.city}`,
      "menu kopi insight",
      "espresso",
      "manual brew",
      "signature drinks",
    ],
    openGraph: {
      title: `Menu ${branch.name} | Coffee Shop`,
      description: `Menu lengkap ${branch.name}`,
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

export default async function BranchMenuPage({ params }: BranchMenuPageProps) {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);

  if (!branch) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "https://coffeshop.id",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cabang",
        item: "https://coffeshop.id/branches",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: branch.name,
        item: `https://coffeshop.id/branches/${branch.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Menu",
        item: `https://coffeshop.id/branches/${branch.slug}/menu`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-bg-primary border-b border-coffee-medium/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm mb-6 text-text-muted">
              <Link href="/" className="hover:text-coffee-caramel transition-colors">
                Beranda
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link
                href="/branches"
                className="hover:text-coffee-caramel transition-colors"
              >
                Cabang
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link
                href={`/branches/${branch.slug}`}
                className="hover:text-coffee-caramel transition-colors"
              >
                {branch.city}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-coffee-dark font-semibold">Menu</span>
            </nav>

            <div className="text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-dark mb-4">
                Menu {branch.name}
              </h1>
              <p className="font-lora text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
                Dari espresso klasik hingga signature blend dengan sentuhan lokal
              </p>
            </div>
          </div>
        </section>

        {/* Menu Grid */}
        <MenuGrid menuItemIds={branch.menuItemIds} />
      </main>
      <Footer />
    </>
  );
}
