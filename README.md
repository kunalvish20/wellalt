# XYZ — React D2C Ecommerce Storefront

A responsive Vite + React storefront for a kids' wellness brand, with a warm editorial visual system and a three-slide homepage carousel.

## Run

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Included

- Responsive homepage with announcement ticker, sticky header and an animated three-slide hero
- 4 product cards + dedicated product pages
- High-CRO product page: rating area, benefit bullets, pack selector, quantity, trust line, payment badges, accordions, social proof area, related products and mobile sticky ATC
- Shopify-style slide cart with localStorage persistence
- Demo checkout UI with prepaid/COD options (no real payment or backend)
- Short-form video/UGC section with local MP4 demo reels
- Shop page, About, FAQ, Contact, Shipping, Returns, Privacy, Terms, and 404
- Responsive mobile menu + search overlay
- Product JSON-LD, dynamic meta title/description, robots.txt and sitemap.xml starter
- Original local SVG product packshots
- Footer with candy/wrapper-inspired decorative details and payment badges

## Important launch notes

This is a frontend ecommerce prototype. Before accepting real orders:

1. Replace placeholder contact details, domain, policies and product data in `src/data/store.js` and info pages.
2. Replace demo UGC videos and sample review copy with verified customer content.
3. Replace mock checkout with Shopify Checkout, a backend, or your payment provider.
4. Validate ingredients, nutrition, age suitability, warnings and all wellness/health claims against your actual formulation and applicable Indian regulations.
5. Replace `https://example.com` in `public/sitemap.xml` and `public/robots.txt` with the live domain.
6. Add analytics, consent/cookie handling, real inventory, order status, transactional email/SMS and server-side validation as required.

## Key files

- `src/pages/Home.jsx` — homepage sections
- `src/pages/Product.jsx` — CRO-focused PDP
- `src/components/CartDrawer.jsx` — Shopify-style cart drawer
- `src/data/store.js` — products + main store settings
- `src/components/HeroSlider.jsx` — accessible carousel controls and timing
- `src/styles/app.css` — base component styles
- `src/styles/premium.css` — warm XYZ design system and responsive refinements
- `public/products/` — editable SVG packshots
- `public/videos/` — demo short-form reels

## Visual system

- Outfit is bundled locally with the site, including the glyphs used for rupee prices.
- Cream backgrounds, vivid purple surfaces and lime accents run through all pages.
- The first hero slide uses `banner-w.png`; the lower edge is a smooth lime curve into cream.
- The hero carousel advances automatically, supports manual controls and respects reduced-motion settings.
