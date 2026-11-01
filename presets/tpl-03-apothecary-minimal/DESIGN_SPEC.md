# Design Movement & Extracted Token Specification

- **Movement ID:** `Movement C — Quiet Apothecary Minimalism`
- **Archetype:** Clinical Botanical & Quiet Luxury Apothecary (Aesop / Byredo / Le Labo)
- **Primary Reference URL:** `https://www.aesop.com`
- **Secondary References:** `https://www.byredo.com`, `https://www.lelabofragrances.com`
- **Scrape Status:** `live-scraped (https://www.byredo.com)`
- **Anti-Clone Rule (R8 / C5):** Structural DOM layout and CSS tokens are unique to Movement C — zero shared HTML skeleton with `kakabyeliza.com`.

## 1. Typography Scale & Pairings
- **Primary UI / Body Font (`--font-primary`):** `'Plus Jakarta Sans', sans-serif`
- **Display / Editorial Font (`--font-accent`):** `'Cormorant Garamond', serif`
- **Technical / Telemetry Monospace (`--font-mono`):** `'IBM Plex Mono', monospace`
- **Google Fonts Import:** `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500&display=swap`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (`--color-primary` / `--brand-primary`):** `#2C3527`
- **Dark Surface / Contrast (`--color-dark` / `--brand-dark`):** `#1C1917`
- **Primary Canvas (`--bg-main`):** `#FAF7F2`
- **Secondary Section Canvas (`--bg-canvas`):** `#F2ECE1`
- **Border Hairline / Frame (`--border-color`):** `#E2D9C8`
- **Detected Reference Palette Swatches:** `#2C3527, #1C1917, #FAF7F2, #F2ECE1`

## 3. Structural Layout Blueprint (DOM Architecture)
- **Navigation Chrome:** Ultra-thin 1px hairline header + fixed left vertical formulation index on desktop
- **Hero / Entry Zone:** Asymmetric 60/40 literary apothecary essay + clinical amber-glass specimen panel
- **Primary Content Grid / Matrix:** 1px hairline specimen ledger with typewriter batch numbers, pH levels, and botanical notes
- **Signature Interactive Component:** 3-Step Skin Diagnostic & AM/PM Regimen Builder Drawer
- **Border Weight (`--border-structural`):** `1px solid #E2D9C8`
- **Shadow Physics (`--shadow-token`):** `none`
- **Border Radius (`--radius`):** `0px`
