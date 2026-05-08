import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Coffee } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen flex items-center justify-center bg-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center py-24">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-coffee-caramel/10 rounded-full flex items-center justify-center">
              <Coffee className="h-12 w-12 text-coffee-caramel" />
            </div>
          </div>
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-coffee-dark mb-6">
            404
          </h1>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="font-lora text-lg text-text-muted mb-8 max-w-md mx-auto">
            Sepertinya halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-coffee-caramel text-coffee-dark px-8 py-4 rounded-md hover:bg-coffee-medium hover:text-coffee-cream transition-colors font-semibold"
            >
              Kembali ke Beranda
            </Link>
            <Link
              href="/branches"
              className="bg-transparent border-2 border-coffee-dark text-coffee-dark px-8 py-4 rounded-md hover:bg-coffee-dark hover:text-coffee-cream transition-colors font-semibold"
            >
              Lihat Cabang
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
