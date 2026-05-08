"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/branches", label: "Cabang" },
  { href: "/order", label: "Order Digital" },
  { href: "/about", label: "Cerita" },
  { href: "/contact", label: "Kontak" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-bg-primary/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "text-2xl font-playfair font-bold transition-colors",
              isScrolled
                ? "text-coffee-dark hover:text-coffee-caramel"
                : "text-coffee-cream hover:text-coffee-caramel"
            )}
          >
            Coffee Shop
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors font-medium",
                  isScrolled
                    ? "text-coffee-dark hover:text-coffee-caramel"
                    : "text-coffee-cream hover:text-coffee-caramel"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-coffee-caramel text-coffee-dark px-6 py-2 rounded-md hover:bg-coffee-medium hover:text-coffee-cream transition-colors font-medium"
            >
              Reservasi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-2",
              isScrolled ? "text-coffee-dark" : "text-coffee-cream"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-bg-primary border-t border-coffee-medium/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-coffee-dark hover:text-coffee-caramel transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-coffee-caramel text-coffee-dark px-6 py-3 rounded-md hover:bg-coffee-medium hover:text-coffee-cream transition-colors font-medium mx-4 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reservasi
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
