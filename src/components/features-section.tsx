"use client";

import { Music, Laptop, Home, Factory, Leaf, Wifi } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Music,
    title: "Live Music",
    description: "Nikmati pertunjukan live music setiap weekend",
  },
  {
    icon: Laptop,
    title: "Working Space",
    description: "Ruang kerja nyaman dengan WiFi kencang",
  },
  {
    icon: Home,
    title: "Indoor & Outdoor",
    description: "Pilihan tempat sesuai preferensi Anda",
  },
  {
    icon: Factory,
    title: "In-House Roastery",
    description: "Sangrai biji kopi sendiri untuk kesegaran maksimal",
  },
  {
    icon: Leaf,
    title: "Locally Sourced",
    description: "Biji kopi pilihan dari petani lokal Indonesia",
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "Koneksi internet cepat dan stabil",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-dark mb-6">
            Mengapa Memilih Kami
          </h2>
          <p className="font-lora text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            Lebih dari sekadar kopi, kami menawarkan pengalaman yang lengkap
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-coffee-medium/10"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-coffee-caramel/10 rounded-full flex items-center justify-center group-hover:bg-coffee-caramel/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-coffee-caramel" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3 text-coffee-dark">
                {feature.title}
              </h3>
              <p className="font-lora text-text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
