# Design Movement & Extracted Token Specification

- **Movement ID:** `Movement K — Darkroom Lightbox & Client Proofing Vault`
- **Archetype:** Fine-Art Photography Masonry Lightbox & Contact-Sheet Proofing (Magnum / Pixieset / Leica)
- **Primary Reference URL:** `https://pixieset.com`
- **Secondary References:** `https://www.magnumphotos.com`, `https://www.format.com`
- **Scrape Status:** `live-scraped (https://pixieset.com)`
- **Anti-Clone Rule (R8 / C5):** Structural DOM layout and CSS tokens are unique to Movement K — zero shared HTML skeleton with `kakabyeliza.com`.

## 1. Typography Scale & Pairings
- **Primary UI / Body Font (`--font-primary`):** `'Plus Jakarta Sans', sans-serif`
- **Display / Editorial Font (`--font-accent`):** `'Cormorant Garamond', serif`
- **Technical / Telemetry Monospace (`--font-mono`):** `'IBM Plex Mono', monospace`
- **Google Fonts Import:** `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500&display=swap`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (`--color-primary` / `--brand-primary`):** `#D4A373`
- **Dark Surface / Contrast (`--color-dark` / `--brand-dark`):** `#0D0C0B`
- **Primary Canvas (`--bg-main`):** `#0D0C0B`
- **Secondary Section Canvas (`--bg-canvas`):** `#161412`
- **Border Hairline / Frame (`--border-color`):** `#262320`
- **Detected Reference Palette Swatches:** `#D4A373, #0D0C0B, #0D0C0B, #161412`

## 3. Structural Layout Blueprint (DOM Architecture)
- **Navigation Chrome:** Ultra-minimal darkroom contact-sheet bar with Gallery Light/Darkroom toggle and Client Proofing Favorites counter
- **Hero / Entry Zone:** Cinematic quiet monograph title plate with shoot metadata (Location, Film Stock, Frame Count, Delivery Status)
- **Primary Content Grid / Matrix:** Variable-aspect-ratio masonry contact sheet with EXIF camera strip (35mm · f/1.4 · 1/500s · ISO 160) and ♥ Select button
- **Signature Interactive Component:** Client Album Proofing Lightbox + Retouch Notes & Print Release Approval Drawer
- **Border Weight (`--border-structural`):** `1px solid #262320`
- **Shadow Physics (`--shadow-token`):** `none`
- **Border Radius (`--radius`):** `0px`
