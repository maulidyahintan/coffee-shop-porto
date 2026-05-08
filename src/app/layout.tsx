import type { Metadata } from "next";
import { Playfair_Display, Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coffeshop.id"),
  title: {
    default: "Coffee Shop - Kopi yang Menginspirasi Setiap Teguk",
    template: "%s | Coffee Shop",
  },
  description:
    "Coffee Shop adalah Coffee Shop chain premium dengan 5 cabang di Indonesia. Nikmati kopi berkualitas, suasana nyaman, dan ruang kerja ideal di Jakarta, Bandung, Surabaya, Yogyakarta, dan Bali.",
  keywords: [
    "kopi",
    "Coffee Shop",
    "cafe Indonesia",
    "kopi Jakarta",
    "Coffee Shop Bandung",
    "cafe Surabaya",
    "kopi Yogyakarta",
    "cafe Bali",
    "manual brew",
    "espresso",
    "working space",
    "coworking cafe",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://coffeshop.id",
    siteName: "Coffee Shop",
    title: "Coffee Shop - Kopi yang Menginspirasi Setiap Teguk",
    description:
      "Coffee Shop chain premium dengan 5 cabang di Indonesia. Nikmati kopi berkualitas dan suasana nyaman untuk bekerja atau bersantai.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&h=630&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Coffee Shop Coffee Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee Shop - Kopi yang Menginspirasi Setiap Teguk",
    description:
      "Coffee Shop chain premium dengan 5 cabang di Indonesia. Nikmati kopi berkualitas dan suasana nyaman.",
    images: [
      "https://images.unsplash.com/photo-453614512568-c4024d13c247?w=1200&h=630&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Coffee Shop",
  url: "https://coffeshop.id",
  logo: "https://coffeshop.id/logo.png",
  description:
    "Coffee Shop chain premium dengan 5 cabang di seluruh Indonesia",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-21-7199-8888",
    contactType: "customer service",
    areaServed: "ID",
    availableLanguage: ["Indonesian", "English"],
  },
  sameAs: [
    "https://instagram.com/coffeshop",
    "https://facebook.com/coffeshop",
    "https://twitter.com/coffeshop",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Coffee Shop",
  url: "https://coffeshop.id",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://coffeshop.id/branches?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${lora.variable} ${jakarta.variable}`}
    >
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="min-h-screen flex flex-col font-jakarta">
        {children}
      </body>
    </html>
  );
}
