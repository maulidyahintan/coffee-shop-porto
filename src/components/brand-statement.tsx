"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function BrandStatement() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-dark mb-6 leading-tight">
              Lebih dari Sekadar
              <br />
              Secangkir Kopi
            </h2>
            <div className="space-y-6 font-lora text-lg text-text-muted">
              <p>
                Sejak 2018, Coffee Shop hadir dengan misi membawa pengalaman
                kopi berkualitas tinggi yang dapat dinikmati setiap orang.
                Kami percaya bahwa setiap tegukan kopi bisa memberikan
                inspirasi dan energi untuk menjalani hari.
              </p>
              <p>
                Dari pemilihan biji kopi yang teliti dari petani lokal
                terbaik, proses roasting yang sempurna, hingga penyajian oleh
                barista berpengalaman — setiap detail kami perhatikan untuk
                memberikan yang terbaik.
              </p>
              <p>
                Coffee Shop bukan hanya tempat menikmati kopi, tetapi juga
                ruang untuk bertemu, berkreasi, dan menemukan inspirasi baru
                setiap harinya.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&auto=format"
              alt="Coffee Shop brewing process"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
