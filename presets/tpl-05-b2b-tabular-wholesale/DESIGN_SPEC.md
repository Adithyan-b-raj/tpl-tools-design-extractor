# Design Movement & Extracted Token Specification

- **Movement ID:** `Movement E — Industrial Tabular Data-First Order Sheet`
- **Archetype:** B2B Industrial Fastener & Wholesale SKU Matrix (McMaster-Carr / Uline / DigiKey)
- **Primary Reference URL:** `https://www.mcmaster.com`
- **Secondary References:** `https://www.uline.com`, `https://www.digikey.com`
- **Scrape Status:** `live-scraped (https://www.mcmaster.com)`
- **Anti-Clone Rule (R8 / C5):** Structural DOM layout and CSS tokens are unique to Movement E — zero shared HTML skeleton with `kakabyeliza.com`.

## 1. Typography Scale & Pairings
- **Primary UI / Body Font (`--font-primary`):** `'Inter', sans-serif`
- **Display / Editorial Font (`--font-accent`):** `'IBM Plex Mono', monospace`
- **Technical / Telemetry Monospace (`--font-mono`):** `'IBM Plex Mono', monospace`
- **Google Fonts Import:** `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (`--color-primary` / `--brand-primary`):** `#D97706`
- **Dark Surface / Contrast (`--color-dark` / `--brand-dark`):** `#0F172A`
- **Primary Canvas (`--bg-main`):** `#F8FAFC`
- **Secondary Section Canvas (`--bg-canvas`):** `#FFFFFF`
- **Border Hairline / Frame (`--border-color`):** `#CBD5E1`
- **Detected Reference Palette Swatches:** `#FED700, #D6D6D6, #CBCBCB, #3C773C, #1D591D, #FEC914, #FEEC00, #FFE600`

## 3. Structural Layout Blueprint (DOM Architecture)
- **Navigation Chrome:** Dense industrial catalog header with Part# / DIN / ISO parametric search bar and Credit Limit meter
- **Hero / Entry Zone:** Zero hero banner — immediate parametric specification filter strip + CSV bulk paste toolbar
- **Primary Content Grid / Matrix:** Dense tabular spreadsheet matrix (SKU | DIN Spec | Material | MOQ | 3 Volume Price Tiers | Stock | Carton Qty)
- **Signature Interactive Component:** Sticky Right-Hand Proforma Invoice / PO Builder with GST 18% & Net-30 Credit Approval
- **Border Weight (`--border-structural`):** `1px solid #CBD5E1`
- **Shadow Physics (`--shadow-token`):** `none`
- **Border Radius (`--radius`):** `2px`
