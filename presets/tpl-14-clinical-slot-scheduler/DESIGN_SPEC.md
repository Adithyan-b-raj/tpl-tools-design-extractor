# Design Movement & Extracted Token Specification

- **Movement ID:** `Movement N — Clinical Swiss Trust & Live Queue Token Board`
- **Archetype:** 4-Step Medical/Aesthetic Slot Wizard & Waiting-Room Token TV (Cal.com / One Medical)
- **Primary Reference URL:** `https://cal.com`
- **Secondary References:** `https://www.onemedical.com`, `https://www.zocdoc.com`
- **Scrape Status:** `live-scraped (https://cal.com)`
- **Anti-Clone Rule (R8 / C5):** Structural DOM layout and CSS tokens are unique to Movement N — zero shared HTML skeleton with `kakabyeliza.com`.

## 1. Typography Scale & Pairings
- **Primary UI / Body Font (`--font-primary`):** `'Plus Jakarta Sans', sans-serif`
- **Display / Editorial Font (`--font-accent`):** `'Instrument Serif', serif`
- **Technical / Telemetry Monospace (`--font-mono`):** `'JetBrains Mono', monospace`
- **Google Fonts Import:** `https://fonts.googleapis.com/css2?family=Instrument+Serif&family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (`--color-primary` / `--brand-primary`):** `#0D9488`
- **Dark Surface / Contrast (`--color-dark` / `--brand-dark`):** `#0F172A`
- **Primary Canvas (`--bg-main`):** `#F0FDFA`
- **Secondary Section Canvas (`--bg-canvas`):** `#FFFFFF`
- **Border Hairline / Frame (`--border-color`):** `#CCFBF1`
- **Detected Reference Palette Swatches:** `#242424, #898989, #141414, #E1E2E3, #343434, #F4F4F4, #6349EA, #4285F4`

## 3. Structural Layout Blueprint (DOM Architecture)
- **Navigation Chrome:** Clinical daylight trust bar with Live OPD Token Status ticker, NABH/ISO badge, and Emergency hotline
- **Hero / Entry Zone:** Split Clinical Booking Workbench: Left 4-Step Guided Appointment Wizard; Right Live Waiting-Room Token Queue TV Display
- **Primary Content Grid / Matrix:** Interactive Specialist Credential Cards + 7-Day Date Strip + 15-Minute Time-Slot Pill Matrix (Morning / Afternoon / Evening)
- **Signature Interactive Component:** Instant OPD Queue Token Generator (e.g. TOKEN #A-14) + Doctor Chair Roster & Chair Turnaround Console
- **Border Weight (`--border-structural`):** `1px solid #99F6E4`
- **Shadow Physics (`--shadow-token`):** `0 10px 25px rgba(13, 148, 136, 0.07)`
- **Border Radius (`--radius`):** `10px`
