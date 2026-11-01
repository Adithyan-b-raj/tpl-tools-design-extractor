# Design Movement & Extracted Token Specification

- **Movement ID:** `Movement Q — Dense Financial Ledger & 3-Way Match ERP`
- **Archetype:** Multi-Warehouse Inventory, GST HSN Split & PO-GRN-Invoice 3-Way Match ERP (Frappe ERPNext / Ramp / Mercury)
- **Primary Reference URL:** `https://frappe.io/erpnext`
- **Secondary References:** `https://ramp.com`, `https://mercury.com`
- **Scrape Status:** `live-scraped (https://frappe.io/erpnext)`
- **Anti-Clone Rule (R8 / C5):** Structural DOM layout and CSS tokens are unique to Movement Q — zero shared HTML skeleton with `kakabyeliza.com`.

## 1. Typography Scale & Pairings
- **Primary UI / Body Font (`--font-primary`):** `'Inter', sans-serif`
- **Display / Editorial Font (`--font-accent`):** `'IBM Plex Mono', monospace`
- **Technical / Telemetry Monospace (`--font-mono`):** `'IBM Plex Mono', monospace`
- **Google Fonts Import:** `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (`--color-primary` / `--brand-primary`):** `#2563EB`
- **Dark Surface / Contrast (`--color-dark` / `--brand-dark`):** `#0F172A`
- **Primary Canvas (`--bg-main`):** `#F1F5F9`
- **Secondary Section Canvas (`--bg-canvas`):** `#FFFFFF`
- **Border Hairline / Frame (`--border-color`):** `#CBD5E1`
- **Detected Reference Palette Swatches:** `#383838, #171717, #E6E6E6, #F9F9F9, #363636, #0089FF, #7B808A, #BDBDBD`

## 3. Structural Layout Blueprint (DOM Architecture)
- **Navigation Chrome:** Enterprise ERP shell: Fixed 220px dark slate left navigation rail + Top fiscal-year & multi-warehouse switcher (WH-MUM-01 / WH-BLR-02 / WH-DEL-03)
- **Hero / Entry Zone:** Zero marketing hero — opens directly into 4 Financial KPI Ledger Strip + Interactive GST Tax Invoice & 3-Way Match Workbench
- **Primary Content Grid / Matrix:** Dense tabular spreadsheet ledger with monospace HSN/SAC codes, automatic Intra-state (CGST 9% + SGST 9%) vs Inter-state (IGST 18%) tax engine
- **Signature Interactive Component:** PO <-> GRN <-> Vendor Bill 3-Way Match Variance Inspector + Inter-Branch Stock Transfer Journal
- **Border Weight (`--border-structural`):** `1px solid #CBD5E1`
- **Shadow Physics (`--shadow-token`):** `0 1px 3px rgba(15, 23, 42, 0.06)`
- **Border Radius (`--radius`):** `4px`
