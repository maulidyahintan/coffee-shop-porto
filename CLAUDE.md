# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

The note above is load-bearing: this is **Next.js 16** with **React 19** and **Tailwind v4**, all of which postdate most training data. Before writing non-trivial framework code, check `node_modules/next/dist/docs/` for the current API. The README still says "Next.js 14+" — trust `package.json`, not the README.

## Commands

- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — production build (uses `output: "standalone"` from `next.config.ts`)
- `npm start` — run the standalone production server
- `npm run lint` — ESLint via flat config (`eslint-config-next`)

There is no test runner configured.

## Architecture

This is a static marketing site for an Indonesian coffee chain. All content is in Indonesian; keep that locale when adding copy.

**Data layer (`src/lib/data/`)** is the single source of truth:
- `branches.ts` exports a typed `Branch[]` (5 entries, keyed by `slug`). Each branch lists `menuItemIds` referencing entries in `menu-items.ts`. Both files are imported directly by pages — there is no DB, CMS, or fetch layer.
- Adding a branch means: add to `branches.ts`, add a folder under `public/branches/<slug>/`, and the dynamic route `/branches/[slug]` and its `/menu` child render automatically.

**Routing (App Router, `src/app/`)** — pages are server components by default; only `navbar.tsx` and the Leaflet map components opt into `"use client"`. Branch detail and branch menu live under `branches/[slug]/page.tsx` and `branches/[slug]/menu/page.tsx`. SEO infra is co-located: `sitemap.ts`, `robots.ts`, `not-found.tsx`, plus per-page `metadata` exports and `<JsonLd>` injections (see `src/components/json-ld.tsx` and the schemas in `layout.tsx`).

**Maps** use `react-leaflet` v5 + Leaflet, which require browser globals. Anything touching Leaflet must be in a `"use client"` file and is typically split into a client wrapper (e.g. `BranchesMapClient.tsx`) so server components can `dynamic()`-import it without SSR. `leaflet/dist/leaflet.css` is imported inside the map module, not globally.

**Styling** uses **Tailwind v4** with the new `@theme inline` block in `src/app/globals.css` — *not* `tailwind.config.{js,ts}`. Custom tokens live there:
- Colors: `coffee-dark`, `coffee-medium`, `coffee-warm`, `coffee-caramel`, `coffee-cream`, `bg-primary`, `text-primary`, `text-muted`, `text-on-dark`
- Fonts: `font-playfair` (headings), `font-lora` (serif body), `font-jakarta` (default UI) — wired up in `layout.tsx` via `next/font/google` as CSS variables
- Use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional class composition.

**Images** — remote images from `images.unsplash.com` are whitelisted in `next.config.ts`; any new remote host must be added to `remotePatterns`. Local branch photos live under `public/branches/<slug>/` (currently SVG placeholders; see README "Mengganti Foto Cabang" for the replacement workflow).

## Conventions worth knowing

- Path alias `@/*` maps to `src/*`.
- Branch identity is the `slug` field — use it for URLs and as the React `key` when iterating.
- The site's canonical URL is `https://kopiinsight.id` (see `metadataBase` in `layout.tsx` and the structured-data schemas).
