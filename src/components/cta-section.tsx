"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 md:py-32 bg-coffee-dark text-coffee-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Siap Merasakan Pengalaman Kopi Terbaik?
          </h2>
          <p className="font-lora text-lg md:text-xl text-coffee-cream/90 mb-10">
            Kunjungi salah satu cabang kami atau lakukan reservasi untuk
            memastikan tempat favorit Anda tersedia
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href="/branches"
              className="inline-flex items-center space-x-2 bg-coffee-caramel text-coffee-dark px-8 py-4 rounded-md hover:bg-coffee-cream transition-colors font-semibold text-lg"
            >
              <MapPin className="h-5 w-5" />
              <span>Cari Cabang Terdekat</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-transparent border-2 border-coffee-cream text-coffee-cream px-8 py-4 rounded-md hover:bg-coffee-cream hover:text-coffee-dark transition-colors font-semibold text-lg"
            >
              <Phone className="h-5 w-5" />
              <span>Hubungi Kami</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-playfair text-5xl font-bold text-coffee-caramel mb-2">
                5+
              </div>
              <div className="text-coffee-cream/80">Cabang di Indonesia</div>
            </div>
            <div>
              <div className="font-playfair text-5xl font-bold text-coffee-caramel mb-2">
                10K+
              </div>
              <div className="text-coffee-cream/80">Pelanggan Setia</div>
            </div>
            <div>
              <div className="font-playfair text-5xl font-bold text-coffee-caramel mb-2">
                30+
              </div>
              <div className="text-coffee-cream/80">Varian Menu</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
