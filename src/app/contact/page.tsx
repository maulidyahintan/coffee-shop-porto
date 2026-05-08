import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { branches } from "@/lib/data/branches";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Coffee Shop untuk reservasi, pertanyaan, atau kerjasama. Kami siap melayani Anda di 5 cabang kami.",
  keywords: [
    "kontak kopi insight",
    "reservasi kopi insight",
    "telepon cafe",
    "alamat Coffee Shop",
    "customer service",
  ],
  openGraph: {
    title: "Kontak | Coffee Shop",
    description:
      "Hubungi kami untuk reservasi atau pertanyaan. Tersedia di 5 cabang.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&h=630&auto=format&fit=crop",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80&auto=format&fit=crop"
            alt="Kontak Coffee Shop"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/80 via-coffee-dark/65 to-coffee-dark/55" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex items-center justify-center text-center pt-16">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-cream mb-6">
                Hubungi Kami
              </h1>
              <p className="font-lora text-lg md:text-xl text-coffee-cream/90 max-w-2xl mx-auto">
                Ada pertanyaan atau ingin melakukan reservasi? Kami siap membantu
                Anda
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-playfair text-3xl font-bold text-coffee-dark mb-6">
                  Informasi Kontak
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-coffee-caramel/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-coffee-caramel" />
                    </div>
                    <div>
                      <h3 className="font-bold text-coffee-dark mb-1">Telepon</h3>
                      <p className="text-text-muted">+62 21 7199 8888</p>
                      <p className="text-sm text-text-muted">
                        Senin - Jumat: 08.00 - 17.00 WIB
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-coffee-caramel/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-coffee-caramel" />
                    </div>
                    <div>
                      <h3 className="font-bold text-coffee-dark mb-1">Email</h3>
                      <a
                        href="mailto:hello@kopiinsight.id"
                        className="text-text-muted hover:text-coffee-caramel transition-colors"
                      >
                        hello@kopiinsight.id
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-coffee-caramel/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-coffee-caramel" />
                    </div>
                    <div>
                      <h3 className="font-bold text-coffee-dark mb-1">
                        Kantor Pusat
                      </h3>
                      <p className="text-text-muted">
                        Jl. Kemang Raya No. 88
                        <br />
                        Jakarta Selatan 12730
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-bold text-coffee-dark mb-4">
                    Ikuti Kami
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com/kopiinsight"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-coffee-caramel/10 rounded-full flex items-center justify-center hover:bg-coffee-caramel hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com/kopiinsight"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-coffee-caramel/10 rounded-full flex items-center justify-center hover:bg-coffee-caramel hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-bg-primary p-8 rounded-lg">
                <h2 className="font-playfair text-3xl font-bold text-coffee-dark mb-6">
                  Kirim Pesan
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Branch Quick Contact */}
        <section className="py-16 bg-bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-coffee-dark mb-8 text-center">
              Kontak Cabang
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="font-bold text-xl text-coffee-dark mb-2">
                    {branch.city}
                  </h3>
                  <p className="text-text-muted text-sm mb-4">{branch.address}</p>
                  <div className="space-y-2">
                    <a
                      href={`tel:${branch.phone}`}
                      className="flex items-center space-x-2 text-coffee-caramel hover:text-coffee-dark transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{branch.phone}</span>
                    </a>
                    <Link
                      href={`/branches/${branch.slug}`}
                      className="inline-block text-sm text-coffee-dark hover:text-coffee-caramel transition-colors font-semibold"
                    >
                      Lihat Detail →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
