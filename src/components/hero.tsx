"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1920&auto=format"
          alt="Coffee Shop atmosphere"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/60 via-coffee-dark/40 to-coffee-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-coffee-cream mb-6 leading-tight">
            Kopi yang Menginspirasi
            <br />
            Setiap Teguk
          </h1>
          <p className="font-lora text-lg sm:text-xl md:text-2xl text-coffee-cream/90 mb-10 max-w-3xl mx-auto">
            Nikmati kopi berkualitas premium dari biji pilihan terbaik, dalam
            suasana yang nyaman dan menginspirasi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/branches"
              className="bg-coffee-caramel text-coffee-dark px-8 py-4 rounded-md hover:bg-coffee-cream transition-colors font-semibold text-lg"
            >
              Lihat Cabang Kami
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-coffee-cream text-coffee-cream px-8 py-4 rounded-md hover:bg-coffee-cream hover:text-coffee-dark transition-colors font-semibold text-lg"
            >
              Reservasi Sekarang
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-coffee-cream/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-coffee-cream/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
