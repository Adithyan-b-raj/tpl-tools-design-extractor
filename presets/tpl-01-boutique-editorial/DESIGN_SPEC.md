# Design Movement & Extracted Token Specification

- **Movement ID:** `Movement A — Editorial Luxury Warmth`
- **Archetype:** Editorial Boutique & Ethnic Couture (Kaka by Eliza / Khaite / Jacquemus)
- **Primary Reference URL:** `https://kakabyeliza.com`
- **Secondary References:** `https://khaite.com`, `https://www.jacquemus.com`
- **Scrape Status:** `live-scraped (https://kakabyeliza.com)`
- **Anti-Clone Rule (R8 / C5):** Structural DOM layout and CSS tokens are unique to Movement A — zero shared HTML skeleton with `kakabyeliza.com`.

## 1. Typography Scale & Pairings
- **Primary UI / Body Font (`--font-primary`):** `'Jost', sans-serif`
- **Display / Editorial Font (`--font-accent`):** `'GFS Didot', serif`
- **Technical / Telemetry Monospace (`--font-mono`):** `'JetBrains Mono', monospace`
- **Google Fonts Import:** `https://fonts.googleapis.com/css2?family=GFS+Didot&family=JetBrains+Mono:wght@400;500&family=Jost:wght@300;400;500;600;700&display=swap`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (`--color-primary` / `--brand-primary`):** `#f76b6a`
- **Dark Surface / Contrast (`--color-dark` / `--brand-dark`):** `#161616`
- **Primary Canvas (`--bg-main`):** `#FFFDF9`
- **Secondary Section Canvas (`--bg-canvas`):** `#FAF6F2`
- **Border Hairline / Frame (`--border-color`):** `#EAE3DC`
- **Detected Reference Palette Swatches:** `#32373C, #ABB8C3, #F78DA7, #CF2E2E, #FF6900, #FCB900, #7BDCB5, #00D084`

## 3. Structural Layout Blueprint (DOM Architecture)
- **Navigation Chrome:** Centered serif wordmark + minimal utility links
- **Hero / Entry Zone:** Editorial lookbook banner + horizontal category circles
- **Primary Content Grid / Matrix:** 4-column portrait editorial product cards (3:4 aspect)
- **Signature Interactive Component:** Slide-over bag + WhatsApp concierge checkout
- **Border Weight (`--border-structural`):** `1px solid #EAE3DC`
- **Shadow Physics (`--shadow-token`):** `0 10px 30px rgba(22, 22, 22, 0.05)`
- **Border Radius (`--radius`):** `2px`
