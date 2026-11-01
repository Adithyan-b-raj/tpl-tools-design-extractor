# Design Movement & Extracted Token Specification

- **Movement ID:** `Movement M — Tactile App-Shell Touch POS & Thermal KOT`
- **Archetype:** 3-Column Touch POS Register, Table Map & Thermal KOT Ticket (Square POS / Toast)
- **Primary Reference URL:** `https://squareup.com/us/en/point-of-sale/restaurants`
- **Secondary References:** `https://pos.toasttab.com`
- **Scrape Status:** `live-scraped (https://squareup.com/us/en/point-of-sale/restaurants)`
- **Anti-Clone Rule (R8 / C5):** Structural DOM layout and CSS tokens are unique to Movement M — zero shared HTML skeleton with `kakabyeliza.com`.

## 1. Typography Scale & Pairings
- **Primary UI / Body Font (`--font-primary`):** `'Plus Jakarta Sans', sans-serif`
- **Display / Editorial Font (`--font-accent`):** `'Plus Jakarta Sans', sans-serif`
- **Technical / Telemetry Monospace (`--font-mono`):** `'JetBrains Mono', monospace`
- **Google Fonts Import:** `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (`--color-primary` / `--brand-primary`):** `#EA580C`
- **Dark Surface / Contrast (`--color-dark` / `--brand-dark`):** `#111827`
- **Primary Canvas (`--bg-main`):** `#E2E8F0`
- **Secondary Section Canvas (`--bg-canvas`):** `#FFFFFF`
- **Border Hairline / Frame (`--border-color`):** `#CBD5E1`
- **Detected Reference Palette Swatches:** `#1A1A1A, #006AFF, #D9D9D9, #7B61FF, #004CFF, #737373, #232425, #707070`

## 3. Structural Layout Blueprint (DOM Architecture)
- **Navigation Chrome:** Fixed 52px POS terminal status header with Cashier PIN badge, Table Floor Selector (T-01 to T-12), and Dine-In/Takeaway/Delivery switch
- **Hero / Entry Zone:** Zero marketing hero — 100vh 3-column hardware touch terminal (Left Category Rail + Center Touch Dish Tiles + Right Perforated Thermal KOT Bill)
- **Primary Content Grid / Matrix:** High-speed touch dish tiles with Veg/Non-Veg FSSAI dot, spice/addon modifiers, and instant tap-to-punch
- **Signature Interactive Component:** Perforated Monospace Thermal KOT & GST 5% Split Bill Printer + Table Floor Occupancy Map
- **Border Weight (`--border-structural`):** `1px solid #CBD5E1`
- **Shadow Physics (`--shadow-token`):** `0 4px 12px rgba(15, 23, 42, 0.08)`
- **Border Radius (`--radius`):** `8px`
