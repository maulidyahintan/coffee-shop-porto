"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - no backend implementation
    alert("Terima kasih! Pesan Anda telah diterima. (UI demo only)");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-coffee-dark mb-2"
        >
          Nama Lengkap
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md border border-coffee-medium/20 focus:outline-none focus:ring-2 focus:ring-coffee-caramel"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-coffee-dark mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md border border-coffee-medium/20 focus:outline-none focus:ring-2 focus:ring-coffee-caramel"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-coffee-dark mb-2"
        >
          Nomor Telepon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-coffee-medium/20 focus:outline-none focus:ring-2 focus:ring-coffee-caramel"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-coffee-dark mb-2"
        >
          Subjek
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-md border border-coffee-medium/20 focus:outline-none focus:ring-2 focus:ring-coffee-caramel"
        >
          <option value="">Pilih Subjek</option>
          <option value="reservation">Reservasi</option>
          <option value="catering">Catering & Event</option>
          <option value="partnership">Kerjasama Bisnis</option>
          <option value="feedback">Feedback</option>
          <option value="other">Lainnya</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-coffee-dark mb-2"
        >
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-md border border-coffee-medium/20 focus:outline-none focus:ring-2 focus:ring-coffee-caramel resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-coffee-caramel text-coffee-dark px-8 py-4 rounded-md hover:bg-coffee-medium hover:text-coffee-cream transition-colors font-semibold text-lg"
      >
        Kirim Pesan
      </button>
    </form>
  );
}
