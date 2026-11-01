# Design Movement & Extracted Token Specification

- **Movement ID:** `Movement O — High-Contrast Darkroom KDS SLA Board`
- **Archetype:** Cloud Kitchen Multi-Brand KDS Kanban & Mobile QR Ordering (Toast KDS / FreshKDS)
- **Primary Reference URL:** `https://pos.toasttab.com/products/kitchen-display-system`
- **Secondary References:** `https://www.freshkds.com`
- **Scrape Status:** `live-scraped (https://www.freshkds.com)`
- **Anti-Clone Rule (R8 / C5):** Structural DOM layout and CSS tokens are unique to Movement O — zero shared HTML skeleton with `kakabyeliza.com`.

## 1. Typography Scale & Pairings
- **Primary UI / Body Font (`--font-primary`):** `'Inter', sans-serif`
- **Display / Editorial Font (`--font-accent`):** `'JetBrains Mono', monospace`
- **Technical / Telemetry Monospace (`--font-mono`):** `'JetBrains Mono', monospace`
- **Google Fonts Import:** `https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (`--color-primary` / `--brand-primary`):** `#10B981`
- **Dark Surface / Contrast (`--color-dark` / `--brand-dark`):** `#090D16`
- **Primary Canvas (`--bg-main`):** `#090D16`
- **Secondary Section Canvas (`--bg-canvas`):** `#111827`
- **Border Hairline / Frame (`--border-color`):** `#1F2937`
- **Detected Reference Palette Swatches:** `#00953B, #DD2447, #4D65FF`

## 3. Structural Layout Blueprint (DOM Architecture)
- **Navigation Chrome:** High-contrast darkroom KDS telemetry header with Aggregator Channel Filter (Zomato / Swiggy / Direct QR), Avg Prep SLA timer, and Audio Buzzer toggle
- **Hero / Entry Zone:** Dual-Mode Workspace: 4-Column Kitchen Display Kanban (NEW -> WOK/GRILL -> PACKING -> RIDER HANDOFF) + Direct Customer QR Ordering Simulator
- **Primary Content Grid / Matrix:** Color-coded SLA Ticket Cards (Green <5m, Amber 5-10m, Flashing Red >10m breach) with line-item strike-off checkboxes
- **Signature Interactive Component:** One-Tap BUMP Ticket Station Controls + Aggregator Rider OTP Verification Bar
- **Border Weight (`--border-structural`):** `2px solid #1F2937`
- **Shadow Physics (`--shadow-token`):** `0 8px 20px rgba(0, 0, 0, 0.5)`
- **Border Radius (`--radius`):** `8px`
