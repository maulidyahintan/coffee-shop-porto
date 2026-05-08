"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "site-entry-notice-shown";

export function SiteEntryNoticeModal() {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return sessionStorage.getItem(SESSION_KEY) !== "true";
  });

  useEffect(() => {
    if (isOpen) {
      sessionStorage.setItem(SESSION_KEY, "true");
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-coffee-dark/70 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="site-entry-notice-title"
    >
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-lg rounded-xl bg-white border border-coffee-medium/20 shadow-2xl p-6 md:p-8">
          <h2
            id="site-entry-notice-title"
            className="font-playfair text-3xl font-bold text-coffee-dark mb-3"
          >
            Pemberitahuan
          </h2>
          <p className="font-lora text-base md:text-lg text-text-muted leading-relaxed">
            Web ini hanya dummy. Apabila ingin melakukan pembelian hubungi
            085785741046.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-end">
            <a
              href="https://wa.me/6285785741046"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#25D366] text-white px-4 py-2 font-semibold hover:bg-[#1ebe5d] transition-colors"
            >
              Hubungi via WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-coffee-caramel text-coffee-dark px-4 py-2 font-semibold hover:bg-coffee-medium hover:text-coffee-cream transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
