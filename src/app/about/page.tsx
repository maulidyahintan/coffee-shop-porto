import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Coffee, Users, Leaf, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Coffee Shop dimulai dengan misi sederhana: memberikan pengalaman kopi berkualitas tinggi yang menginspirasi. Pelajari lebih lanjut tentang cerita, nilai, dan roastery kami.",
  keywords: [
    "tentang kopi insight",
    "sejarah kopi insight",
    "filosofi kopi",
    "roastery Indonesia",
    "specialty coffee",
  ],
  openGraph: {
    title: "Tentang Kami | Coffee Shop",
    description:
      "Cerita Coffee Shop - dari misi hingga roastery kami yang passionate tentang kopi berkualitas.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&h=630&auto=format&fit=crop",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const values = [
  {
    icon: Coffee,
    title: "Kualitas Premium",
    description:
      "Kami hanya menggunakan biji kopi arabica pilihan dari petani terpercaya dengan standar specialty grade.",
  },
  {
    icon: Users,
    title: "Komunitas",
    description:
      "Membangun ruang untuk bertemu, berkolaborasi, dan saling menginspirasi antar pecinta kopi.",
  },
  {
    icon: Leaf,
    title: "Berkelanjutan",
    description:
      "Mendukung petani lokal dengan harga yang adil dan praktik pertanian yang ramah lingkungan.",
  },
  {
    icon: Award,
    title: "Keunggulan",
    description:
      "Komitmen pada keunggulan di setiap aspek, dari roasting hingga brewing dan service.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920&auto=format"
            alt="About Coffee Shop"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/80 via-coffee-dark/65 to-coffee-dark/55" />
          <div className="absolute inset-0 flex items-center justify-center pt-16">
            <div className="text-center text-white">
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                Cerita Kami
              </h1>
              <p className="font-lora text-xl md:text-2xl text-coffee-cream/90">
                Passion untuk kopi yang menginspirasi
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 md:py-32 bg-bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
                  Dimulai dari Passion
                </h2>
                <div className="space-y-4 font-lora text-lg text-text-muted">
                  <p>
                    Coffee Shop lahir pada tahun 2018 dari passion sederhana
                    terhadap kopi berkualitas. Kami percaya bahwa kopi bukan
                    sekadar minuman, tetapi pengalaman yang dapat menginspirasi
                    dan memberi energi.
                  </p>
                  <p>
                    Dimulai dari satu kedai kecil di Kemang, Jakarta Selatan,
                    kami fokus pada satu hal: memberikan kopi terbaik dengan
                    atmosfer yang nyaman. Setiap biji dipilih dengan teliti,
                    setiap cup diseduh dengan presisi, dan setiap pelanggan
                    dilayani dengan keramahan.
                  </p>
                  <p>
                    Kini, dengan 5 cabang di seluruh Indonesia, kami terus
                    berkomitmen pada misi awal kami: membuat kopi berkualitas
                    tinggi dapat diakses dan dinikmati oleh semua orang.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&auto=format"
                  alt="Coffee Shop roasting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Values */}
            <div className="mb-24">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee-dark mb-12 text-center">
                Nilai-Nilai Kami
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="bg-white p-8 rounded-lg shadow-md text-center"
                  >
                    <div className="w-16 h-16 bg-coffee-caramel/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-coffee-caramel" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-coffee-dark">
                      {value.title}
                    </h3>
                    <p className="font-lora text-text-muted">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Roastery */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&auto=format"
                  alt="Coffee Shop roastery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
                  Roastery Kami
                </h2>
                <div className="space-y-4 font-lora text-lg text-text-muted">
                  <p>
                    Di Jakarta Selatan, kami memiliki roastery sendiri di mana
                    setiap batch biji kopi di-roast dengan sempurna. Tim roaster
                    kami yang berpengalaman memastikan setiap profil rasa
                    berkembang optimal.
                  </p>
                  <p>
                    Kami bekerja langsung dengan petani kopi lokal dari berbagai
                    daerah di Indonesia - dari Aceh hingga Papua. Setiap
                    partnership dibangun atas dasar keadilan, transparansi, dan
                    mutual respect.
                  </p>
                  <p>
                    Hasilnya? Kopi single origin dan blend yang konsisten, fresh,
                    dan penuh karakter - dari light roast yang fruity hingga dark
                    roast yang bold.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-coffee-dark text-coffee-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Bergabunglah dengan Komunitas Kami
            </h2>
            <p className="font-lora text-lg md:text-xl text-coffee-cream/90 mb-8 max-w-2xl mx-auto">
              Kunjungi salah satu cabang kami dan rasakan sendiri passion kami
              terhadap kopi
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
