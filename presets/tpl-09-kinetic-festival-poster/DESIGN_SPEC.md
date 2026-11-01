# Design Movement & Extracted Token Specification

- **Movement ID:** `Movement I — Kinetic Poster & Festival Schedule Matrix`
- **Archetype:** Swiss Kinetic Typographic Poster & Multi-Stage Summit Pass (Figma Config / Boiler Room)
- **Primary Reference URL:** `https://config.figma.com`
- **Secondary References:** `https://boilerroom.tv`, `https://vercel.com/ship`
- **Scrape Status:** `live-scraped (https://config.figma.com)`
- **Anti-Clone Rule (R8 / C5):** Structural DOM layout and CSS tokens are unique to Movement I — zero shared HTML skeleton with `kakabyeliza.com`.

## 1. Typography Scale & Pairings
- **Primary UI / Body Font (`--font-primary`):** `'Space Grotesk', sans-serif`
- **Display / Editorial Font (`--font-accent`):** `'Syne', sans-serif`
- **Technical / Telemetry Monospace (`--font-mono`):** `'JetBrains Mono', monospace`
- **Google Fonts Import:** `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800&display=swap`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (`--color-primary` / `--brand-primary`):** `#FF007A`
- **Dark Surface / Contrast (`--color-dark` / `--brand-dark`):** `#07070C`
- **Primary Canvas (`--bg-main`):** `#07070C`
- **Secondary Section Canvas (`--bg-canvas`):** `#11111C`
- **Border Hairline / Frame (`--border-color`):** `#292940`
- **Detected Reference Palette Swatches:** `#131313, #24CB71, #697485, #808080, #A1A1A1`

## 3. Structural Layout Blueprint (DOM Architecture)
- **Navigation Chrome:** High-voltage festival wristband bar with live countdown, venue coordinates, and neon stage indicator
- **Hero / Entry Zone:** Oversized Swiss kinetic poster typography + diagonal counter-scrolling ticker bands
- **Primary Content Grid / Matrix:** Time-coded 3-Stage Agenda Matrix (Day 01 / Day 02 / Day 03) + Perforated QR Pass Cards with barcode
- **Signature Interactive Component:** Interactive Personal Schedule Builder + QR Wristband Pass Generator
- **Border Weight (`--border-structural`):** `2px solid #292940`
- **Shadow Physics (`--shadow-token`):** `5px 5px 0px #00F0FF`
- **Border Radius (`--radius`):** `4px`
