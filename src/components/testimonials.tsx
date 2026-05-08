"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Wijaya",
    role: "Digital Nomad",
    content:
      "Coffee Shop adalah tempat favorit saya untuk bekerja. WiFi cepat, kopinya enak, dan suasananya super nyaman. Signature blend mereka benar-benar the best!",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "Coffee Enthusiast",
    content:
      "Sebagai pecinta kopi, saya sangat appreciate kualitas manual brew di sini. Barista-nya sangat knowledgeable dan passionate tentang kopi.",
    rating: 5,
  },
  {
    name: "Amanda Chen",
    role: "Interior Designer",
    content:
      "Desain interiornya aesthetic banget! Setiap cabang punya karakteristik unik tapi tetap mempertahankan brand identity yang kuat. Perfect spot untuk hangout.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-dark mb-6">
            Kata Mereka
          </h2>
          <p className="font-lora text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            Ribuan pelanggan telah merasakan pengalaman Coffee Shop
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-bg-primary p-8 rounded-lg border border-coffee-medium/10"
            >
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-coffee-caramel text-coffee-caramel"
                  />
                ))}
              </div>
              <p className="font-lora text-text-muted mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div>
                <p className="font-bold text-coffee-dark">{testimonial.name}</p>
                <p className="text-text-muted text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
