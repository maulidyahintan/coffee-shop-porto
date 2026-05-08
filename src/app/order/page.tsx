import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DigitalMenuOrder } from "@/components/digital-menu-order";

export const metadata: Metadata = {
  title: "Order Digital",
  description:
    "Pesan menu online melalui fitur menu digital, hitung total otomatis, dan kirim pesanan ke WhatsApp cabang.",
};

export default function OrderPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80&auto=format&fit=crop"
            alt="Order digital coffee shop"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/80 via-coffee-dark/65 to-coffee-dark/55" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex items-center justify-center text-center pt-16">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-cream mb-4">
                Order Digital
              </h1>
              <p className="font-lora text-lg md:text-xl text-coffee-cream/90 max-w-2xl mx-auto">
                Pilih menu favorit, kirim pesanan ke WhatsApp cabang, lalu
                lakukan pembayaran manual di kasir.
              </p>
            </div>
          </div>
        </section>
        <DigitalMenuOrder sectionId="menu-order-digital" title="Order Menu Digital" />
      </main>
      <Footer />
    </>
  );
}
