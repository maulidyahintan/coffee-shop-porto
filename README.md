# Coffee Shop Web

Website marketing dan pemesanan sederhana untuk jaringan kedai kopi Coffee Shop (5 cabang di Indonesia).

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Leaflet + React Leaflet
- Lucide React

## Menjalankan Project

Install dependency:

```bash
npm install
```

Jalankan mode development:

```bash
npm run dev
```

Build production:

```bash
npm run build
npm start
```

Lint:

```bash
npm run lint
```

## Struktur Utama

```text
src/
   app/
      layout.tsx
      page.tsx
      about/page.tsx
      branches/page.tsx
      branches/[slug]/page.tsx
      branches/[slug]/menu/page.tsx
      contact/page.tsx
      order/page.tsx
      not-found.tsx
      robots.ts
      sitemap.ts
   components/
      navbar.tsx
      footer.tsx
      hero.tsx
      branches-grid.tsx
      menu-grid.tsx
      branches/
      digital-menu-order.tsx
      ...
   lib/
      data/branches.ts
      data/menu-items.ts
      utils.ts
```

## Fitur yang Ada di Web

1. Homepage marketing lengkap
- Hero, brand statement, section keunggulan, highlight cabang, highlight menu, testimoni, dan CTA.

2. Navigasi responsif
- Navbar desktop/mobile dengan menu Beranda, Cabang, Order Digital, Cerita, dan Kontak.

3. Halaman daftar cabang
- Menampilkan semua cabang.
- Ada locator peta interaktif untuk melihat lokasi.

4. Detail cabang (dynamic route)
- Informasi cabang: alamat, jam operasional, fasilitas, galeri, dan embed Google Maps.
- CTA ke halaman menu cabang.

5. Halaman menu per cabang
- Menampilkan item menu sesuai cabang.
- Kategori menu: espresso, manual brew, signature, non-coffee, dan food.

6. Order digital via WhatsApp
- Pilih item menu dan quantity.
- Hitung total otomatis.
- Pilih cabang (atau otomatis dari halaman cabang).
- Input nama pemesan, nomor meja, catatan umum, dan note per item.
- Generate pesan order otomatis ke WhatsApp cabang.
- Menampilkan notifikasi bahwa pembayaran tetap manual di kasir.

7. Halaman order khusus
- Route terpisah di `/order` dengan hero section dan komponen order digital.

8. SEO dasar
- Metadata per halaman.
- Open Graph dan Twitter card.
- JSON-LD.
- `robots.ts` dan `sitemap.ts`.

9. Responsif dan animasi
- Layout mobile-first.
- Animasi ringan dengan Framer Motion.

## Data dan Konfigurasi

Sumber data utama:

- `src/lib/data/branches.ts`: data cabang, jam operasional, fasilitas, dan relasi menu.
- `src/lib/data/menu-items.ts`: data semua item menu.

Nomor WhatsApp order dapat dikontrol melalui:

- Field `whatsapp` per cabang di `branches.ts`.
- Fallback env `NEXT_PUBLIC_WHATSAPP_ORDER_NUMBER`.

## Catatan Penggunaan

- Website ini ditujukan sebagai web promosi + alur order sederhana.
- Flow pembayaran belum online gateway, masih diarahkan manual ke kasir.

## License

Proprietary - Coffee Shop 2026
