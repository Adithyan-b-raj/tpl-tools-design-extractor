# Design Movement & Extracted Token Specification

- **Movement ID:** `Movement J — Kinetic Typography Studio Index`
- **Archetype:** Awwwards Studio Numbered Case-Study Index & Scope Estimator (Locomotive / Studio Freight / Malvah)
- **Primary Reference URL:** `https://locomotive.ca`
- **Secondary References:** `https://studiofreight.com`, `https://malvah.co`, `https://www.basicagency.com`
- **Scrape Status:** `live-scraped (https://studiofreight.com)`
- **Anti-Clone Rule (R8 / C5):** Structural DOM layout and CSS tokens are unique to Movement J — zero shared HTML skeleton with `kakabyeliza.com`.

## 1. Typography Scale & Pairings
- **Primary UI / Body Font (`--font-primary`):** `'Plus Jakarta Sans', sans-serif`
- **Display / Editorial Font (`--font-accent`):** `'Syne', sans-serif`
- **Technical / Telemetry Monospace (`--font-mono`):** `'JetBrains Mono', monospace`
- **Google Fonts Import:** `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (`--color-primary` / `--brand-primary`):** `#FF3300`
- **Dark Surface / Contrast (`--color-dark` / `--brand-dark`):** `#0B0B0B`
- **Primary Canvas (`--bg-main`):** `#F5F3EE`
- **Secondary Section Canvas (`--bg-canvas`):** `#0B0B0B`
- **Border Hairline / Frame (`--border-color`):** `#D4D0C8`
- **Detected Reference Palette Swatches:** `#DADADA, #F9F9F9, #9ACD32, #FEFDFC`

## 3. Structural Layout Blueprint (DOM Architecture)
- **Navigation Chrome:** Corner-anchored studio index header with live local studio clock, availability pill, and discipline counter
- **Hero / Entry Zone:** Monumental display statement (clamp(3.2rem, 8vw, 7.5rem)) with discipline tags and showreel modal trigger
- **Primary Content Grid / Matrix:** Zero cards — full-width horizontal numbered index rows (01–08) expanding inline case-study dossiers on click/hover
- **Signature Interactive Component:** Interactive Project Scope, Timeline & Retainer Budget Calculator
- **Border Weight (`--border-structural`):** `1px solid #1A1A1A`
- **Shadow Physics (`--shadow-token`):** `none`
- **Border Radius (`--radius`):** `0px`
