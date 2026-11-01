# Design Movement & Extracted Token Specification

- **Movement ID:** `Movement H — Swiss Technical CAD Blueprint`
- **Archetype:** Industrial Engineering Schematic & Hardware Crowdfund (Teenage Engineering / Nothing / Analogue)
- **Primary Reference URL:** `https://teenage.engineering`
- **Secondary References:** `https://nothing.tech`, `https://www.analogue.co`, `https://frame.work`
- **Scrape Status:** `live-scraped (https://teenage.engineering)`
- **Anti-Clone Rule (R8 / C5):** Structural DOM layout and CSS tokens are unique to Movement H — zero shared HTML skeleton with `kakabyeliza.com`.

## 1. Typography Scale & Pairings
- **Primary UI / Body Font (`--font-primary`):** `'Space Grotesk', sans-serif`
- **Display / Editorial Font (`--font-accent`):** `'JetBrains Mono', monospace`
- **Technical / Telemetry Monospace (`--font-mono`):** `'JetBrains Mono', monospace`
- **Google Fonts Import:** `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (`--color-primary` / `--brand-primary`):** `#FF4F00`
- **Dark Surface / Contrast (`--color-dark` / `--brand-dark`):** `#141413`
- **Primary Canvas (`--bg-main`):** `#ECECE6`
- **Secondary Section Canvas (`--bg-canvas`):** `#E2E2DA`
- **Border Hairline / Frame (`--border-color`):** `#B8B8AE`
- **Detected Reference Palette Swatches:** `#F1F2F2, #E5E5E5, #121114, #231F20, #ED2024, #C5C6CD`

## 3. Structural Layout Blueprint (DOM Architecture)
- **Navigation Chrome:** Technical CAD title block header with drawing number (DWG-08-REV-C), scale 1:1, and live funding telemetry bar
- **Hero / Entry Zone:** Exposed engineering blueprint grid with crosshair (+) markers, interactive exploded hardware callout pins (01-06)
- **Primary Content Grid / Matrix:** Monospace parametric acoustic/mechanical spec sheet + interactive reward tier punch-cards
- **Signature Interactive Component:** Live Backer Funding Goal Progress Bar + Serial-Numbered Early-Bird Pledge Configurator
- **Border Weight (`--border-structural`):** `1px solid #B8B8AE`
- **Shadow Physics (`--shadow-token`):** `none`
- **Border Radius (`--radius`):** `0px`
