# Design Movement & Extracted Token Specification

- **Movement ID:** `Movement P — ESD Service Workbench & Public IMEI/AWB Tracker`
- **Archetype:** Device Repair Job-Sheet Workbench & 5-Stage Live Status Tracker (iFixit / Linear Triage / Stripe)
- **Primary Reference URL:** `https://www.ifixit.com`
- **Secondary References:** `https://linear.app`, `https://onfleet.com`
- **Scrape Status:** `live-scraped (https://www.ifixit.com)`
- **Anti-Clone Rule (R8 / C5):** Structural DOM layout and CSS tokens are unique to Movement P — zero shared HTML skeleton with `kakabyeliza.com`.

## 1. Typography Scale & Pairings
- **Primary UI / Body Font (`--font-primary`):** `'Inter', sans-serif`
- **Display / Editorial Font (`--font-accent`):** `'JetBrains Mono', monospace`
- **Technical / Telemetry Monospace (`--font-mono`):** `'JetBrains Mono', monospace`
- **Google Fonts Import:** `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (`--color-primary` / `--brand-primary`):** `#0284C7`
- **Dark Surface / Contrast (`--color-dark` / `--brand-dark`):** `#0B1120`
- **Primary Canvas (`--bg-main`):** `#F8FAFC`
- **Secondary Section Canvas (`--bg-canvas`):** `#FFFFFF`
- **Border Hairline / Frame (`--border-color`):** `#CBD5E1`
- **Detected Reference Palette Swatches:** `#1F2937, #0071CE, #5BBAD5, #11161A, #4B5563, #9CA3AF, #1975F1, #4280EF`

## 3. Structural Layout Blueprint (DOM Architecture)
- **Navigation Chrome:** Technical service-center telemetry bar with quick Ticket/IMEI/Serial lookup input and Bench ESD status indicator
- **Hero / Entry Zone:** Interactive Job-Ticket Lookup Console + 5-Stage Visual Diagnostic Stepper (Intake -> Bench Diagnostics -> Spare Parts -> QA Burn-In -> Ready for Pickup)
- **Primary Content Grid / Matrix:** Component-level Pre-Intake Checklist (Screen, Battery mAh, Liquid Sensor, FaceID) + Spare Parts BOM & Labor Approval Table
- **Signature Interactive Component:** Technician Bench Kanban Board + One-Click Customer WhatsApp Approval & Invoice Link
- **Border Weight (`--border-structural`):** `1px solid #CBD5E1`
- **Shadow Physics (`--shadow-token`):** `0 4px 14px rgba(15, 23, 42, 0.05)`
- **Border Radius (`--radius`):** `6px`
