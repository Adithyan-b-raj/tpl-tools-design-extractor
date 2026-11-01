# Design Movement & Extracted Token Specification

- **Movement ID:** `Movement D — High-Density Hyperlocal 3-Pane Utility`
- **Archetype:** 12-Minute Hyperlocal Grocery & Dark-Store App Shell (Zepto / Blinkit / Getir)
- **Primary Reference URL:** `https://www.zeptonow.com`
- **Secondary References:** `https://blinkit.com`, `https://getir.com`
- **Scrape Status:** `live-scraped (https://www.zeptonow.com)`
- **Anti-Clone Rule (R8 / C5):** Structural DOM layout and CSS tokens are unique to Movement D — zero shared HTML skeleton with `kakabyeliza.com`.

## 1. Typography Scale & Pairings
- **Primary UI / Body Font (`--font-primary`):** `'Plus Jakarta Sans', sans-serif`
- **Display / Editorial Font (`--font-accent`):** `'Plus Jakarta Sans', sans-serif`
- **Technical / Telemetry Monospace (`--font-mono`):** `'JetBrains Mono', monospace`
- **Google Fonts Import:** `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (`--color-primary` / `--brand-primary`):** `#0C831F`
- **Dark Surface / Contrast (`--color-dark` / `--brand-dark`):** `#0F172A`
- **Primary Canvas (`--bg-main`):** `#F1F5F9`
- **Secondary Section Canvas (`--bg-canvas`):** `#FFFFFF`
- **Border Hairline / Frame (`--border-color`):** `#E2E8F0`
- **Detected Reference Palette Swatches:** `#0C831F, #0F172A, #F1F5F9, #FFFFFF`

## 3. Structural Layout Blueprint (DOM Architecture)
- **Navigation Chrome:** Sticky hyperlocal top bar with pulsing 11-MIN ETA badge, Pincode selector, and instant search
- **Hero / Entry Zone:** Zero marketing hero — opens directly into 3-pane app shell (Left Category Rail + Center 5-Col Shelf + Right Live Rider Cart)
- **Primary Content Grid / Matrix:** High-density 5-column micro-cards with weight pills (250g/500g/1kg) and instant [- 1 +] green steppers
- **Signature Interactive Component:** Dark-Store Picker Bin Queue & Rider Dispatch Map Telemetry
- **Border Weight (`--border-structural`):** `1px solid #E2E8F0`
- **Shadow Physics (`--shadow-token`):** `0 2px 8px rgba(15, 23, 42, 0.06)`
- **Border Radius (`--radius`):** `12px`
