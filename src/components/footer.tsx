import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { branches } from "@/lib/data/branches";

export function Footer() {
  return (
    <footer className="bg-coffee-dark text-coffee-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Coffee Shop
            </h3>
            <p className="text-coffee-cream/80 mb-6 font-lora">
              Kopi yang menginspirasi setiap teguk. Hadir di 5 kota besar
              Indonesia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/coffeshop"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-coffee-caramel transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/coffeshop"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-coffee-caramel transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="mailto:hello@coffeshop.id"
                className="hover:text-coffee-caramel transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Jelajahi</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-coffee-cream/80 hover:text-coffee-caramel transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/branches"
                  className="text-coffee-cream/80 hover:text-coffee-caramel transition-colors"
                >
                  Lokasi Cabang
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-coffee-cream/80 hover:text-coffee-caramel transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Cabang Kami</h4>
            <ul className="space-y-3">
              {branches.slice(0, 5).map((branch) => (
                <li key={branch.id}>
                  <Link
                    href={`/branches/${branch.slug}`}
                    className="text-coffee-cream/80 hover:text-coffee-caramel transition-colors"
                  >
                    {branch.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Hubungi Kami</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-2 text-coffee-cream/80">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>85123456789</span>
              </div>
              <div className="flex items-start space-x-2 text-coffee-cream/80">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>hello@coffeshop.id</span>
              </div>
              <div className="flex items-start space-x-2 text-coffee-cream/80">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>5 cabang di Indonesia</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-3 py-2 rounded bg-coffee-medium text-coffee-cream placeholder:text-coffee-cream/50 border border-coffee-cream/20 focus:outline-none focus:border-coffee-caramel"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-coffee-caramel text-coffee-dark rounded font-medium hover:bg-coffee-cream transition-colors"
                >
                  Kirim
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-coffee-cream/20 text-center text-coffee-cream/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.
          </p>
          <p className="mt-2 text-coffee-cream/70">
            Info: Website ini adalah mockup/dummy. Untuk pembelian, hubungi
            85123456789.
          </p>
        </div>
      </div>
    </footer>
  );
}
