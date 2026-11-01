# Design Movement & Extracted Token Specification

- **Movement ID:** `Movement G — Split-Screen Architectural Magazine`
- **Archetype:** 50/50 Sticky Split-Screen Luxury Penthouse Dossier (25 Residences / Aman / Sotheby's)
- **Primary Reference URL:** `https://25residences.com`
- **Secondary References:** `https://www.aman.com/residences`, `https://www.sothebysrealty.com`
- **Scrape Status:** `live-scraped (https://25residences.com)`
- **Anti-Clone Rule (R8 / C5):** Structural DOM layout and CSS tokens are unique to Movement G — zero shared HTML skeleton with `kakabyeliza.com`.

## 1. Typography Scale & Pairings
- **Primary UI / Body Font (`--font-primary`):** `'Plus Jakarta Sans', sans-serif`
- **Display / Editorial Font (`--font-accent`):** `'Cormorant Garamond', serif`
- **Technical / Telemetry Monospace (`--font-mono`):** `'IBM Plex Mono', monospace`
- **Google Fonts Import:** `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (`--color-primary` / `--brand-primary`):** `#B88644`
- **Dark Surface / Contrast (`--color-dark` / `--brand-dark`):** `#121814`
- **Primary Canvas (`--bg-main`):** `#F7F4EE`
- **Secondary Section Canvas (`--bg-canvas`):** `#EFEAE0`
- **Border Hairline / Frame (`--border-color`):** `#DCD3C2`
- **Detected Reference Palette Swatches:** `#1F1F1F, #32373C, #1A1A1A, #C8B89A, #ABB8C3, #F78DA7, #CF2E2E, #FF6900`

## 3. Structural Layout Blueprint (DOM Architecture)
- **Navigation Chrome:** Minimalist architectural masthead with Roman numerals (I · II · III · IV) and RERA Registration badge
- **Hero / Entry Zone:** 50/50 Split-Screen Viewport: Left scrolling narrative dossier; Right pinned full-height residence visualizer
- **Primary Content Grid / Matrix:** Interactive Residence Wing & Floorplate Stack (3BHK Sky Villa / 4BHK Duplex / Penthouse) with Sq.Ft <-> Sq.M toggle
- **Signature Interactive Component:** Live EMI / Rental Yield Calculator + Private Helicopter/Chauffeur Site-Visit Scheduler
- **Border Weight (`--border-structural`):** `1px solid #DCD3C2`
- **Shadow Physics (`--shadow-token`):** `0 24px 48px rgba(18, 24, 20, 0.08)`
- **Border Radius (`--radius`):** `0px`
