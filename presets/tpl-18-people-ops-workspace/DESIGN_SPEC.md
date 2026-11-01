# Design Movement & Extracted Token Specification

- **Movement ID:** `Movement R — People-Ops Attendance HeatGrid & Payslip Workspace`
- **Archetype:** Unified CRM Pipeline, Geo-Fenced Attendance Matrix & Statutory Payroll Suite (Attio / Frappe HR / Rippling)
- **Primary Reference URL:** `https://attio.com`
- **Secondary References:** `https://frappe.io/hr`, `https://www.rippling.com`, `https://www.deel.com`
- **Scrape Status:** `live-scraped (https://attio.com)`
- **Anti-Clone Rule (R8 / C5):** Structural DOM layout and CSS tokens are unique to Movement R — zero shared HTML skeleton with `kakabyeliza.com`.

## 1. Typography Scale & Pairings
- **Primary UI / Body Font (`--font-primary`):** `'Plus Jakarta Sans', sans-serif`
- **Display / Editorial Font (`--font-accent`):** `'IBM Plex Mono', monospace`
- **Technical / Telemetry Monospace (`--font-mono`):** `'IBM Plex Mono', monospace`
- **Google Fonts Import:** `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (`--color-primary` / `--brand-primary`):** `#4F46E5`
- **Dark Surface / Contrast (`--color-dark` / `--brand-dark`):** `#111827`
- **Primary Canvas (`--bg-main`):** `#F8FAFC`
- **Secondary Section Canvas (`--bg-canvas`):** `#FFFFFF`
- **Border Hairline / Frame (`--border-color`):** `#E2E8F0`
- **Detected Reference Palette Swatches:** `#E6E7EA, #242629, #EEEFF1, #101112, #266DF0, #75777C, #CDCED2, #CBF7E1`

## 3. Structural Layout Blueprint (DOM Architecture)
- **Navigation Chrome:** Unified People-Ops & Revenue Workspace sidebar with 3 instant module tabs (1. Geo-Attendance & Leave | 2. Statutory Payroll & Payslip | 3. B2B Deal Pipeline)
- **Hero / Entry Zone:** Live Geo-Fenced GPS Punch-In Verification Strip + Monthly Attendance HeatGrid (P / L / HD / WO) across employees
- **Primary Content Grid / Matrix:** Split Earnings vs Statutory Deductions Ledger (Basic + HRA + Special Allowance vs PF 12% + ESI + PT + TDS) + Weighted CRM Kanban
- **Signature Interactive Component:** Interactive Employee Salary Structure Calculator + Printable Statutory Payslip Preview Drawer
- **Border Weight (`--border-structural`):** `1px solid #E2E8F0`
- **Shadow Physics (`--shadow-token`):** `0 2px 6px rgba(15, 23, 42, 0.05)`
- **Border Radius (`--radius`):** `6px`
