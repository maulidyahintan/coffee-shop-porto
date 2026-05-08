# Coffee Shop - Marketing Website

Marketing website for Coffee Shop, an Indonesian Coffee Shop chain with 5 branches across Indonesia.

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- Google Fonts (Playfair Display, Lora, Plus Jakarta Sans)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

Build for production:

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with fonts & metadata
│   ├── page.tsx                 # Homepage
│   ├── about/page.tsx           # About page
│   ├── branches/                # Branches section
│   │   ├── page.tsx            # Branches list
│   │   └── [slug]/             # Dynamic branch pages
│   │       ├── page.tsx        # Branch detail
│   │       └── menu/page.tsx   # Branch menu
│   ├── contact/page.tsx         # Contact page
│   ├── not-found.tsx           # 404 page
│   ├── sitemap.ts              # Dynamic sitemap
│   └── robots.ts               # Robots.txt
├── components/                  # React components
│   ├── navbar.tsx              # Navigation (client component)
│   ├── footer.tsx              # Footer
│   ├── hero.tsx                # Homepage hero
│   ├── branches-grid.tsx       # Branches with filters
│   ├── menu-grid.tsx           # Menu display with tabs
│   └── ...                     # Other components
└── lib/
    ├── utils.ts                # cn() helper
    └── data/                   # Static data
        ├── branches.ts         # Branch data (5 locations)
        └── menu-items.ts       # Menu data

```

## Features

- Fully responsive (mobile-first)
- SEO optimized with Next.js Metadata API
- JSON-LD structured data for all pages
- Dynamic sitemap and robots.txt
- 5 branch locations with individual pages and menus
- Framer Motion animations
- Image optimization with next/image
- Accessibility (WCAG compliant)

## Data Structure

All branch and menu data is centralized in `/src/lib/data/`:

- **`branches.ts`** - Contains all 5 branches with addresses, lat/lng, phone, hours, features, and menu item IDs
- **`menu-items.ts`** - Contains all menu items with categories, prices, descriptions, and images

### Updating Branch Data

To replace placeholder data with real Google Maps data:

1. Open `/src/lib/data/branches.ts`
2. Update each branch object with:
   - Real address
   - Correct lat/lng coordinates
   - Actual phone numbers
   - Real opening hours
   - Real photo URLs (replace Unsplash placeholders)
   - Real video URL (if available)

Example:
```typescript
{
  address: "Real address from Google Maps",
  lat: -6.2634,  // From Google Maps
  lng: 106.8166, // From Google Maps
  phone: "+62 21 XXXX XXXX",
  heroImage: "https://your-cdn.com/branch-photo.jpg",
  // ...
}
```

## Mengganti Foto Cabang

Foto saat ini adalah placeholder SVG. Untuk mengganti dengan foto asli:

### Cara Replace Foto:

1. **Siapkan foto untuk setiap cabang:**
   - `hero.svg` atau `hero.jpg` - Hero image untuk halaman detail (1920×1080px ideal)
   - `gallery-1.svg` s/d `gallery-4.svg` atau `.jpg` - Foto galeri (1200×800px ideal)

2. **Lokasi file per cabang:**
   ```
   public/branches/
   ├── jakarta-selatan/
   │   ├── hero.svg (replace with hero.jpg)
   │   ├── gallery-1.svg (replace with gallery-1.jpg)
   │   ├── gallery-2.svg
   │   ├── gallery-3.svg
   │   └── gallery-4.svg
   ├── bandung-dago/
   ├── surabaya-pakuwon/
   ├── yogyakarta-prawirotaman/
   └── bali-canggu/
   ```

3. **Format file yang didukung:**
   - JPG/JPEG (recommended, kompres dulu)
   - WebP (lebih kecil, modern browsers)
   - PNG (hindari untuk foto, file besar)
   - Target ukuran: <300KB per file

4. **Update path di code (jika ganti format):**
   - Buka `/src/lib/data/branches.ts`
   - Ganti `.svg` jadi `.jpg` atau `.webp`:
   ```typescript
   heroImage: "/branches/jakarta-selatan/hero.jpg", // was .svg
   galleryImages: [
     "/branches/jakarta-selatan/gallery-1.jpg", // was .svg
     // ...
   ]
   ```

### Sumber Foto Legal:

- **Foto sendiri** - Ambil foto langsung di cabang
- **Hire fotografer** - Professional photography shoot
- **Google My Business** - Jika Anda owner, bisa export dari GMB dashboard
- **JANGAN**: Copy foto user dari Google Maps Reviews (melanggar hak cipta)

### Foto dari Google Maps (Legal Way):

Website sudah dilengkapi Google Maps iframe embed di halaman detail cabang. User bisa:
- Lihat foto Google Maps langsung di iframe
- Klik "Buka di Google Maps" untuk lihat semua foto & reviews
- Street View & 360° photos otomatis tampil

Ini cara legal "menggunakan" foto Google Maps tanpa copy paste.

## TODOs for Production

1. Replace Unsplash placeholder images with real branch photos
2. Update branch data in `/src/lib/data/branches.ts` with actual Google Maps data
3. Add real video URLs to branch data (currently placeholder)
4. Connect contact form to backend API or email service
5. Add analytics (Google Analytics, etc.)
6. Test on real devices at all breakpoints
7. Run Lighthouse audit and optimize

## License

Proprietary - Coffee Shop 2026
