#!/usr/bin/env node
/**
 * Builds all 10 remaining repositories across Epic 3 (Small ERP), Epic 5 (E-Commerce Multi-Track), and Epic 6 (Large ERP):
 *   Epic 3: tpl-serp-retail-pos-gst, tpl-serp-clinic-salon-crm, tpl-serp-cafe-qrmenu-kot, tpl-serp-repair-tracker
 *   Epic 5: tpl-ecom-streetwear, tpl-ecom-cosmetics, tpl-ecom-quickcommerce, tpl-ecom-b2b-wholesale
 *   Epic 6: tpl-lerp-warehouse-erp, tpl-lerp-hrms-payroll
 */
import fs from 'node:fs';
import path from 'node:path';

const WL_SOURCE = 'C:/projects/ecomtemplatecloudflare/public/whitelabel.js';
const wlScriptContent = fs.readFileSync(WL_SOURCE, 'utf8');

const REPOS = [
  // ================= EPIC 3: SMALL ERP SUITE =================
  {
    slug: 'tpl-serp-retail-pos-gst',
    category: 'Small ERP',
    brand: 'METRO SUPERMART POS',
    tagline: 'Fast barcode billing, CGST/SGST 80mm thermal receipts & digital customer udhaar khata.',
    heroBadge: 'GSTIN 32AABCM1234F1Z5 // RETAIL BARCODE POS + DIGITAL KHATA PORTAL',
    fontPrimary: "'Inter', sans-serif",
    fontAccent: "'Space Grotesk', sans-serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap',
    colorPrimary: '#0284C7',
    colorDark: '#0F172A',
    bgMain: '#F8FAFC',
    bgCanvas: '#EFF6FF',
    borderColor: '#CBD5E1',
    isDark: false,
    ctaPrimary: 'Lookup Digital GST Bill / Pay Khata Balance',
    ctaSecondary: 'Interactive GST & Margin Calculator',
    itemsTitle: 'Fast-Moving Barcode SKUs & Live Counter Stock',
    items: [
      { code: 'SKU-890101', title: 'Organic Wayanad Matta Rice (10kg Bag)', sub: 'HSN 1006 • GST 5% (2.5% CGST + 2.5% SGST) • Barcode 890101', metric: '₹640 (Stock: 48)', badge: 'AISLE 01', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80' },
      { code: 'SKU-890102', title: 'Cold-Pressed Virgin Coconut Oil (1 Litre)', sub: 'HSN 1513 • GST 5% • Pure Kuttiady Batch #44', metric: '₹320 (Stock: 36)', badge: 'BESTSELLER', img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80' },
      { code: 'SKU-890103', title: 'Munnar Estate Cardamom & Spice Gift Box', sub: 'HSN 0908 • GST 12% • Export Grade 8mm Bold Pods', metric: '₹890 (Stock: 19)', badge: 'SPICES', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80' },
      { code: 'SKU-890104', title: 'Artisanal Dark Chocolate 70% Idukki Cocoa', sub: 'HSN 1806 • GST 18% (9% CGST + 9% SGST)', metric: '₹240 (Stock: 64)', badge: 'CONFECTIONERY', img: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80' },
      { code: 'SKU-890105', title: 'A2 Gir Cow Cultured Ghee (500ml Glass Jar)', sub: 'HSN 0405 • GST 12% • Bilona Churned', metric: '₹750 (Stock: 14)', badge: 'DAIRY', img: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&w=800&q=80' },
      { code: 'SKU-890106', title: 'Roasted Cashew W240 Jumbo Pack (500g)', sub: 'HSN 0801 • GST 5% • Kollam Factory Direct', metric: '₹580 (Stock: 29)', badge: 'DRY FRUITS', img: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Interactive GST Invoice & Split-Tax Calculator (CGST + SGST)',
    calcSub: 'Calculate exact taxable value, CGST/SGST split, and 80mm thermal bill total.',
    calcLabelA: 'Taxable Cart Value (₹)',
    calcMinA: 100, calcMaxA: 25000, calcDefA: 2450,
    calcLabelB: 'GST Slab % (5, 12, 18, 28)',
    calcMinB: 5, calcMaxB: 28, calcDefB: 12,
    calcFormula: 'Math.round(team * (1 + hours / 100))',
    calcUnit: '₹',
    calcResultLabel: 'Net Payable Invoice Total (Incl. CGST + SGST)',
    adminTitle: 'Cashier Barcode POS Register, 80mm Thermal Receipt & Udhaar Khata Ledger',
    leadCtaLabel: 'Request Digital GST Tax Invoice / Settle Khata via UPI',
    adminKpis: [
      { label: 'Today Counter POS Sales', val: '₹68,420', delta: '142 Thermal Bills' },
      { label: 'UPI vs Cash Split', val: '78% UPI / 22% Cash', delta: 'Cashfree QR Instant' },
      { label: 'Active Customer Khata', val: '₹24,150 Due', delta: '18 Regular Accounts' },
      { label: 'GSTR-1 Ready Invoices', val: '100% Synced', delta: 'HSN Summary Verified' }
    ],
    seedLeads: [
      { id: 'INV-8821', name: 'Joseph Mathew (Khata Acct #14)', phone: '919847011223', detail: '8 Items • Taxable: ₹2,187 + CGST ₹131 + SGST ₹131 • Paid via UPI', status: 'PAID // 80MM PRINTED', amount: '₹2,450' },
      { id: 'INV-8820', name: 'Hotel SeaQueen Kitchen Purchase', phone: '919447022334', detail: 'Bulk Rice & Oil • B2B GSTIN 32AABCH9988F1Z2 • Credit 7 Days', status: 'KHATA CREDIT DUE', amount: '₹14,800' },
      { id: 'INV-8819', name: 'Lakshmi Nair (Walk-in Counter 1)', phone: '919895033445', detail: '4 Items • Cash Tender ₹1,500 (Change ₹180)', status: 'PAID // CASH', amount: '₹1,320' }
    ],
    dockerService: 'akaunting/akaunting:latest'
  },
  {
    slug: 'tpl-serp-clinic-salon-crm',
    category: 'Small ERP',
    brand: 'ASTERIA SKIN & DENTAL',
    tagline: 'Book specialist doctor or stylist slots & track your live waiting room token from your phone.',
    heroBadge: 'LIVE WAITING ROOM TOKEN: #TK-18 IN CABIN 1 // EST. WAIT: 6 MINS',
    fontPrimary: "'Plus Jakarta Sans', sans-serif",
    fontAccent: "'Space Grotesk', sans-serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap',
    colorPrimary: '#0D9488',
    colorDark: '#134E4A',
    bgMain: '#F0FDFA',
    bgCanvas: '#CCFBF1',
    borderColor: '#99F6E4',
    isDark: false,
    ctaPrimary: 'Book Appointment & Get Live Token Number',
    ctaSecondary: 'Treatment & Package Estimator',
    itemsTitle: 'Specialist Doctors, Aesthetic Cabins & Live Token Queue',
    items: [
      { code: 'CABIN-01', title: 'Dr. Roshan Varghese — Chief Orthodontist & Implantologist', sub: '3D Digital Smile Design, Invisalign & Painless Root Canal • Next Token: #TK-19', metric: '₹500 Consultation', badge: 'NOW CALLING #TK-18', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80' },
      { code: 'CABIN-02', title: 'Dr. Meenakshi Menon — Clinical Dermatologist & Laser', sub: 'HydraFacial MD, Q-Switch Pigmentation Laser & PRP Hair Restoration • Next Token: #TK-09', metric: '₹700 Consultation', badge: 'NOW CALLING #TK-08', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80' },
      { code: 'CABIN-03', title: 'Senior Aesthetician — Korean Glass Skin & Bridal Ritual', sub: '90-Min Oxygen Botanical Infusion + LED Phototherapy', metric: '₹3,499 Session', badge: '2 SLOTS TODAY', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80' },
      { code: 'PKG-DENTAL', title: 'Ceramic Veneers & Laser Teeth Whitening Suite', sub: 'Single-visit Philips Zoom chairside whitening + digital bite scan', metric: '₹12,500 Complete', badge: 'DENTAL SUITE', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80' },
      { code: 'PKG-BRIDAL', title: 'Pre-Bridal 6-Week Dermatology & Hair Glow Plan', sub: 'Includes 4 peel sessions, IV glutathione consult & custom clinical regimen', metric: '₹18,900 Package', badge: 'BRIDAL CARE', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80' },
      { code: 'PHARMACY', title: 'In-House Derm-Pharmacy & Post-Care Kit Dispatch', sub: 'Scan prescription QR to reorder sunscreen, retinoids & medicated cleansers', metric: 'Same-Day Delivery', badge: 'PHARMACY', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Interactive Treatment Session & Package Estimator',
    calcSub: 'Select number of treatment sittings and specialist tier (multi-sitting package saves 15%).',
    calcLabelA: 'Number of Treatment Sittings',
    calcMinA: 1, calcMaxA: 8, calcDefA: 3,
    calcLabelB: 'Procedure Tier (1=Consult/Clean ₹1200, 2=Laser/Peel ₹3500, 3=Implant/Bridal ₹8500)',
    calcMinB: 1, calcMaxB: 3, calcDefB: 2,
    calcFormula: 'Math.round(team * (hours === 1 ? 1200 : hours === 2 ? 3500 : 8500) * (team >= 3 ? 0.85 : 1))',
    calcUnit: '₹',
    calcResultLabel: 'Estimated Treatment Plan Total (Incl. Digital Prescription)',
    adminTitle: 'Clinic Reception Desk — Live Token Caller, Doctor Roster & EMR Billing',
    leadCtaLabel: 'Generate Live Queue Token & Confirm Slot',
    adminKpis: [
      { label: 'Patients Checked-In Today', val: '46 Tokens', delta: 'Avg Wait: 7 mins' },
      { label: 'Active Cabin Status', val: '3 / 3 Cabins Live', delta: 'Token TV Synced' },
      { label: 'Today Clinic Collections', val: '₹84,500', delta: 'Consults + Pharmacy' },
      { label: 'Follow-Up WhatsApp Sent', val: '38 Automated', delta: 'Zero No-Shows' }
    ],
    seedLeads: [
      { id: 'TK-18', name: 'Anjali Krishnan (File #PT-904)', phone: '919847011223', detail: 'Cabin 1 (Dr. Roshan) • Invisalign Scan + Scaling • 11:30 AM', status: 'IN CABIN NOW', amount: '₹4,500' },
      { id: 'TK-19', name: 'Mohammed Faizal (File #PT-905)', phone: '919447022334', detail: 'Cabin 1 (Dr. Roshan) • Root Canal Sitting 2 • 12:00 PM', status: 'WAITING NEXT', amount: '₹3,200' },
      { id: 'TK-08', name: 'Neha Varma (File #PT-882)', phone: '919895033445', detail: 'Cabin 2 (Dr. Meenakshi) • HydraFacial MD Sitting 3/4', status: 'COMPLETED // BILLED', amount: '₹3,499' }
    ],
    dockerService: 'calcom/cal.com:latest'
  },
  {
    slug: 'tpl-serp-cafe-qrmenu-kot',
    category: 'Small ERP',
    brand: 'ROAST & CO. BISTRO',
    tagline: 'Scan table QR to order specialty single-origin pour-overs, wood-fired sourdough pizzas & desserts.',
    heroBadge: 'TABLE #04 ACTIVE // ZERO-INSTALL QR TABLE ORDERING + LIVE KITCHEN KOT',
    fontPrimary: "'Plus Jakarta Sans', sans-serif",
    fontAccent: "'Space Grotesk', sans-serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap',
    colorPrimary: '#D97706',
    colorDark: '#1C1917',
    bgMain: '#FFFBEB',
    bgCanvas: '#FEF3C7',
    borderColor: '#FDE68A',
    isDark: false,
    ctaPrimary: 'Fire Order to Kitchen KOT (Table #04)',
    ctaSecondary: 'Split Table Bill Calculator',
    itemsTitle: 'Live Table QR Menu — Specialty Coffee, Wood-Fired Kitchen & Bakery',
    items: [
      { code: 'KOT-COF-01', title: 'Coorg Honey-Processed V60 Pour-Over (Hot / Iced)', sub: 'Notes of roasted hazelnut, dark cacao & orange blossom • Oat Milk option', metric: '₹280 • 4 Mins Prep', badge: 'BARISTA BAR', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80' },
      { code: 'KOT-PIZ-01', title: 'Burrata, San Marzano & Truffle Oil Sourdough Pizza (12")', sub: '72-hour cold-fermented dough baked at 450°C in Neapolitan wood oven', metric: '₹690 • 11 Mins Prep', badge: 'WOOD OVEN', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80' },
      { code: 'KOT-BRK-01', title: 'Smashed Avocado, Poached Eggs & Feta on Tartine', sub: 'Served with house chili crisp, microgreens & toasted pumpkin seeds', metric: '₹440 • 8 Mins Prep', badge: 'ALL-DAY BRUNCH', img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80' },
      { code: 'KOT-PAS-01', title: 'Handmade Pesto Genovese & Sun-Dried Tomato Tagliatelle', sub: 'Fresh sweet basil, toasted pine nuts & 24-month aged Parmigiano', metric: '₹540 • 10 Mins Prep', badge: 'MAIN KITCHEN', img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80' },
      { code: 'KOT-DES-01', title: 'Burnt Basque Cheesecake with Berry Compote', sub: 'Caramelized crust, creamy Madagascar vanilla center (Gluten-Free)', metric: '₹360 • Instant Serve', badge: 'PATISSERIE', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80' },
      { code: 'KOT-BEV-02', title: 'Passionfruit & Kaffir Lime Sparkling Kombucha', sub: 'House-brewed probiotic craft ferment on tap (330ml)', metric: '₹240 • Bar Tap', badge: 'COLD BAR', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Table Order & Diner Split-Bill Calculator (Incl. 5% GST)',
    calcSub: 'Calculate per-person share for your table and send instant KOT to the kitchen display.',
    calcLabelA: 'Total Table Order Value (₹)',
    calcMinA: 250, calcMaxA: 12000, calcDefA: 1850,
    calcLabelB: 'Split Between Diners (People)',
    calcMinB: 1, calcMaxB: 10, calcDefB: 3,
    calcFormula: 'Math.round((team * 1.05) / hours)',
    calcUnit: '₹',
    calcResultLabel: 'Per-Person Share (Incl. 2.5% CGST + 2.5% SGST)',
    adminTitle: 'Live Kitchen Display System (KOT Board), Table Map & Cashier Settlement',
    leadCtaLabel: 'Fire Instant KOT to Kitchen Display (Table #04)',
    adminKpis: [
      { label: 'Active Seated Tables', val: '11 / 14 Tables', delta: '78% Occupancy' },
      { label: 'Live Open KOT Tickets', val: '6 Firing', delta: 'Avg Prep: 8.4 mins' },
      { label: 'Today Bistro Covers', val: '184 Guests', delta: '₹72,900 Sales' },
      { label: 'QR Direct Orders', val: '82% of Bills', delta: 'Zero Waiter Delay' }
    ],
    seedLeads: [
      { id: 'KOT-409', name: 'Table #04 (Window Booth — 3 Guests)', phone: '919847011223', detail: '1x Burrata Pizza, 2x Coorg V60 Iced, 1x Basque Cheesecake • Note: Less Ice', status: 'FIRING IN OVEN', amount: '₹1,610' },
      { id: 'KOT-408', name: 'Table #07 (Garden Patio — 2 Guests)', phone: '919447022334', detail: '2x Avocado Tartine, 2x Passionfruit Kombucha', status: 'READY TO SERVE 🔔', amount: '₹1,360' },
      { id: 'KOT-407', name: 'Table #02 (Bar Counter — 1 Guest)', phone: '919895033445', detail: '1x Pesto Tagliatelle, 1x Espresso Tonic • Paid via UPI QR', status: 'TABLE SETTLED', amount: '₹780' }
    ],
    dockerService: 'tastyigniter/tastyigniter:latest'
  },
  {
    slug: 'tpl-serp-repair-tracker',
    category: 'Small ERP',
    brand: 'ICARE PRO LABS',
    tagline: 'Chip-level Apple, laptop & EV battery diagnostics with live job-sheet status & estimate approval.',
    heroBadge: 'ISO-9001 ESD SAFE LAB // LIVE IMEI / SERIAL JOB-SHEET TRACKER',
    fontPrimary: "'Inter', sans-serif",
    fontAccent: "'Space Grotesk', sans-serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap',
    colorPrimary: '#2563EB',
    colorDark: '#0F172A',
    bgMain: '#F8FAFC',
    bgCanvas: '#EFF6FF',
    borderColor: '#CBD5E1',
    isDark: false,
    ctaPrimary: 'Book Device Pickup / Generate Job Card',
    ctaSecondary: 'Spare Part + Labor Estimator',
    itemsTitle: 'Transparent Repair Menu, OEM Parts & Turnaround SLA',
    items: [
      { code: 'REP-MAC-01', title: 'MacBook Pro M1/M2/M3 Logic Board Chip-Level Repair', sub: 'Liquid damage ultrasonic cleaning, CD3217 USB-C controller & power rail micro-soldering', metric: '₹6,500 • 24–48 Hrs', badge: '6-MO WARRANTY', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80' },
      { code: 'REP-IPH-01', title: 'iPhone 14 / 15 / 16 Pro Original OLED Display Assembly', sub: 'TrueTone & FaceID programmed with Apple calibration diagnostics', metric: '₹14,900 • 60 Mins Express', badge: 'EXPRESS BENCH', img: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80' },
      { code: 'REP-BAT-01', title: 'Zero-Cycle OEM Battery Replacement (MacBook / iPhone)', sub: '100% Battery Health calibration + thermal paste renewal included', metric: '₹3,800 • 45 Mins', badge: 'SAME DAY', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' },
      { code: 'REP-DAT-01', title: 'Cleanroom NVMe SSD & RAID Data Recovery Lab', sub: 'BitLocker/FileVault forensic sector recovery with 100% NDA confidentiality', metric: '₹8,500 • No-Data No-Fee', badge: 'CLEANROOM', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80' },
      { code: 'REP-GPU-01', title: 'Gaming Laptop BGA Reballing & Liquid Metal Thermal Mod', sub: 'Fixes artifacting, thermal throttling & dead HDMI ports on RTX laptops', metric: '₹4,900 • 24 Hrs', badge: 'BGA BENCH', img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80' },
      { code: 'REP-EV-01', title: 'EV Scooter BMS & Lithium Pack Cell Balancing', sub: 'Cell impedance matching, MOSFET replacement & waterproof potting', metric: '₹5,400 • 48 Hrs', badge: 'EV LAB', img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Interactive Spare Part + Technician Labor Cost Estimator',
    calcSub: 'Estimate total repair invoice with OEM spare part cost and bench complexity tier.',
    calcLabelA: 'OEM Spare Part Cost (₹)',
    calcMinA: 500, calcMaxA: 35000, calcDefA: 6500,
    calcLabelB: 'Bench Labor Tier (1=Level-1 Swap ₹800, 2=Micro-Solder ₹2200, 3=Cleanroom ₹4500)',
    calcMinB: 1, calcMaxB: 3, calcDefB: 2,
    calcFormula: 'Math.round((team + (hours === 1 ? 800 : hours === 2 ? 2200 : 4500)) * 1.18)',
    calcUnit: '₹',
    calcResultLabel: 'Estimated Repair Invoice (Incl. 18% GST & 180-Day Warranty)',
    adminTitle: 'Service Center Bench Console — Intake Checklist, Parts Margin & Job Status',
    leadCtaLabel: 'Approve Repair Estimate / Create Intake Job Ticket',
    adminKpis: [
      { label: 'Active Devices on Bench', val: '27 Job Cards', delta: '9 Ready for Pickup' },
      { label: 'Avg Turnaround SLA', val: '6.4 Hours', delta: '94% Same-Day' },
      { label: 'Spare Parts Gross Margin', val: '54.2%', delta: '₹1.42L MTD Revenue' },
      { label: 'Pending Estimate Approvals', val: '4 Customers', delta: 'WhatsApp Link Sent' }
    ],
    seedLeads: [
      { id: 'JOB-9412', name: 'Arunima Menon — MacBook Pro 14" M2 (SN: C02Y88)', phone: '919847011223', detail: 'Intake: No Power (Liquid Spill) • Part: CD3217 IC + Ultrasonic • Bench #2', status: 'READY FOR PICKUP ✅', amount: '₹7,670' },
      { id: 'JOB-9413', name: 'Vivek Pillai — iPhone 15 Pro (IMEI: 35891109)', phone: '919447022334', detail: 'Intake: Cracked OLED Glass (FaceID OK) • Waiting Customer Approval', status: 'AWAITING APPROVAL', amount: '₹14,900' },
      { id: 'JOB-9414', name: 'TechWorks Studio — Seagate 4TB NAS Drive', phone: '919895033445', detail: 'Intake: Clicking Head • Cleanroom Donor Swap in Progress', status: 'ON BENCH // TESTING', amount: '₹11,800' }
    ],
    dockerService: 'directus/directus:latest'
  },

  // ================= EPIC 5: E-COMMERCE MULTI-TRACK EXPANSION =================
  {
    slug: 'tpl-ecom-streetwear',
    category: 'E-Commerce',
    brand: 'VORTEX ARCHIVE',
    tagline: 'LIMITED BATCH 04 // 480GSM HEAVYWEIGHT ACID-WASH DROP LIVE NOW.',
    heroBadge: 'DROP 04 // ZERO RESTOCKS // FREE EXPRESS SHIPPING ON ORDERS OVER ₹2,999',
    fontPrimary: "'Space Grotesk', sans-serif",
    fontAccent: "'Syne', sans-serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800&display=swap',
    colorPrimary: '#E11D48',
    colorDark: '#09090B',
    bgMain: '#09090B',
    bgCanvas: '#141418',
    borderColor: '#27272A',
    isDark: true,
    ctaPrimary: 'Cop From Drop 04 Now',
    ctaSecondary: 'Bundle & Drop Calculator',
    itemsTitle: 'Drop 04 Capsule — 480GSM French Terry & Cargo Archive',
    items: [
      { code: 'VX-04-HOOD', title: 'Acid-Wash Boxy Heavyweight Hoodie (480GSM)', sub: 'Drop-shoulder silhouette • Puff-print back graphic • Sizes S / M / L / XL', metric: '₹3,490 • Only 4 Left in L', badge: 'LOW STOCK', img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80' },
      { code: 'VX-04-TEE', title: 'Cyber-Sigilism Oversized 280GSM Combed Tee', sub: '100% Super-combed Tirupur cotton • Vintage enzyme wash • S / M / L / XL', metric: '₹1,690 • Selling Fast', badge: 'DROP 04 HIT', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80' },
      { code: 'VX-04-CARGO', title: 'Parachute Ripstop 8-Pocket Tactical Cargo Pant', sub: 'Adjustable ankle toggles, YKK metal zippers & articulated knee pleats', metric: '₹3,990 • In Stock', badge: 'NEW SILHOUETTE', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80' },
      { code: 'VX-04-VARS', title: 'Wool & Vegan Leather Chenille Varsity Jacket', sub: 'Quilted satin lining • Individually numbered woven archive label', metric: '₹6,490 • 3 Left', badge: 'COLLECTOR PIECE', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80' },
      { code: 'VX-04-CAP', title: 'Distressed Heavy Twill Trucker Cap // Onyx', sub: '3D metallic embroidery • Snapback closure', metric: '₹1,190 • In Stock', badge: 'HEADWEAR', img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80' },
      { code: 'VX-04-TOTE', title: '16oz Raw Canvas Crossbody Archive Utility Bag', sub: 'Fits 16" MacBook Pro + internal Concealed zip pocket', metric: '₹1,490 • In Stock', badge: 'ACCESSORIES', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Lookbook Fit Bundle Builder (Unlock 15% Full-Fit Discount)',
    calcSub: 'Cop 2+ pieces from Drop 04 to unlock automatic 15% Streetwear Bundle pricing.',
    calcLabelA: 'Number of Drop 04 Pieces in Bag',
    calcMinA: 1, calcMaxA: 6, calcDefA: 2,
    calcLabelB: 'Tier (1=Tees ₹1690, 2=Hoodie/Cargo ₹3690, 3=Varsity ₹6490)',
    calcMinB: 1, calcMaxB: 3, calcDefB: 2,
    calcFormula: 'Math.round(team * (hours === 1 ? 1690 : hours === 2 ? 3690 : 6490) * (team >= 2 ? 0.85 : 1))',
    calcUnit: '₹',
    calcResultLabel: 'Bundle Bag Total (Cashfree UPI / Popup QR Ready)',
    adminTitle: 'Streetwear Drop Command & Popup Store Counter POS',
    leadCtaLabel: 'Checkout Drop Bag via Cashfree UPI',
    adminKpis: [
      { label: 'Drop 04 Sell-Through', val: '84.6% Sold', delta: '312 Orders in 4 Hrs' },
      { label: 'Popup Store POS Sales', val: '₹1.84 Lakhs', delta: 'Kochi Flea Stall #12' },
      { label: 'Waitlist Restock Alerts', val: '420 Signups', delta: 'WhatsApp Blast Ready' },
      { label: 'Avg Order Value (AOV)', val: '₹4,120', delta: '+28% via Fit Bundles' }
    ],
    seedLeads: [
      { id: 'ORD-7701', name: 'Aakash Nair (Bangalore)', phone: '919847011223', detail: 'Acid-Wash Hoodie (L) + Ripstop Cargo (32) • Prepaid UPI', status: 'PACKED // BLUEDART', amount: '₹6,358' },
      { id: 'ORD-7702', name: 'Popup Counter POS — Walk-In #44', phone: '919447022334', detail: 'Cyber-Sigilism Tee (M) + Trucker Cap • Scanned UPI QR at Stall', status: 'POS COMPLETED', amount: '₹2,448' },
      { id: 'ORD-7703', name: 'Zoya Khan (Mumbai)', phone: '919895033445', detail: 'Varsity Jacket (M) • Collector Number #42/100', status: 'DISPATCHED', amount: '₹6,490' }
    ],
    dockerService: 'medusajs/medusa:latest',
    includeEcomAdapters: true
  },
  {
    slug: 'tpl-ecom-cosmetics',
    category: 'E-Commerce',
    brand: 'AURA BOTANICA',
    tagline: 'Clinical Ayurvedic skincare & cold-pressed botanical elixirs crafted in small batches.',
    heroBadge: 'DERMATOLOGIST TESTED // CRUELTY-FREE // BUILD YOUR 3-STEP REGIMEN & SAVE 20%',
    fontPrimary: "'Jost', sans-serif",
    fontAccent: "'Cormorant Garamond', serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Jost:wght@300;400;500;600&display=swap',
    colorPrimary: '#4A5D4E',
    colorDark: '#1C241E',
    bgMain: '#F7F5F0',
    bgCanvas: '#EDE8DF',
    borderColor: '#D8D0C5',
    isDark: false,
    ctaPrimary: 'Take 3-Step Skin Quiz & Build Routine',
    ctaSecondary: '3-Piece Routine Bundle Calculator',
    itemsTitle: 'Clinical Botanical Formulations & Active Serums',
    items: [
      { code: 'AB-SER-01', title: '10% Niacinamide & Kumkumadi Saffron Glow Drops (30ml)', sub: 'Targets hyperpigmentation & uneven texture • Batch #B26-09 (Exp: Aug 2028)', metric: '₹1,290 • 4.9★ (410)', badge: 'HERO SERUM', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80' },
      { code: 'AB-CLN-01', title: 'Green Tea, Cica & Salicylic Pore Refining Cleanser', sub: 'Sulfate-free pH 5.5 gel cleanser for humid tropical climates (150ml)', metric: '₹790 • 4.8★ (285)', badge: 'STEP 1: CLEANSE', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80' },
      { code: 'AB-CRM-01', title: 'Ceramide, Bakuchiol & Lotus Barrier Repair Cream', sub: 'Plant-based retinol alternative without irritation or purging (50g)', metric: '₹1,450 • 4.9★ (320)', badge: 'STEP 3: MOISTURISE', img: 'https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=800&q=80' },
      { code: 'AB-SPF-01', title: 'Invisible Dewy Sunscreen Gel SPF 50+ PA++++', sub: 'Zero white-cast hybrid UV filters with hyaluronic acid & vetiver', metric: '₹890 • Best Seller', badge: 'STEP 4: PROTECT', img: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80' },
      { code: 'AB-OIL-01', title: 'Rosemary, Bhringraj & Redensyl Scalp Elixir', sub: 'Cold-macerated 21-herb hair density booster with glass dropper', metric: '₹1,150 • In Stock', badge: 'HAIR RITUAL', img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80' },
      { code: 'AB-PRF-01', title: 'Mysore Sandalwood & Vetiver Rain Eau de Parfum (50ml)', sub: '25% Extrait concentration • Aged in botanical glass flacons', metric: '₹2,490 • Limited Batch', badge: 'FINE FRAGRANCE', img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Build-Your-Own Skincare Regimen Bundle (Save 20% on 3+ Steps)',
    calcSub: 'Combine Cleanser + Serum + Moisturizer/SPF to unlock automatic 20% Regimen Savings.',
    calcLabelA: 'Number of Regimen Steps Selected',
    calcMinA: 1, calcMaxA: 6, calcDefA: 3,
    calcLabelB: 'Formula Tier (1=Essentials ₹890, 2=Active Serums ₹1290, 3=Perfume/Luxury ₹2190)',
    calcMinB: 1, calcMaxB: 3, calcDefB: 2,
    calcFormula: 'Math.round(team * (hours === 1 ? 890 : hours === 2 ? 1290 : 2190) * (team >= 3 ? 0.80 : 1))',
    calcUnit: '₹',
    calcResultLabel: 'Custom Regimen Box Total (Includes Free Jade Gua Sha on 3+ Items)',
    adminTitle: 'Cosmetics D2C Command — Batch Lot Expiry Tracker & Boutique POS',
    leadCtaLabel: 'Order Custom Regimen Box (Cashfree UPI)',
    adminKpis: [
      { label: 'Active Batch Lots', val: '14 Batches OK', delta: 'Zero Expiring <180d' },
      { label: 'Skin Quiz Completions', val: '640 This Week', delta: '38% Quiz -> Cart CR' },
      { label: '3-Step Bundle Share', val: '68% of Orders', delta: '₹2,940 Avg Order' },
      { label: 'Repeat Subscription Rate', val: '42% Returning', delta: '60-Day Refill WhatsApp' }
    ],
    seedLeads: [
      { id: 'COS-6101', name: 'Divya Menon (Kochi)', phone: '919847011223', detail: '3-Step Glow Routine (Cleanser + Kumkumadi Serum + SPF 50) • Batch #B26-09', status: 'DISPATCHED', amount: '₹2,376' },
      { id: 'COS-6102', name: 'Nandini Rao (Bangalore)', phone: '919447022334', detail: 'Mysore Sandalwood EDP + Bakuchiol Cream • Gift Wrapped', status: 'PACKED', amount: '₹3,940' },
      { id: 'COS-6103', name: 'Boutique Counter POS #19', phone: '919895033445', detail: '2x Rosemary Scalp Elixir • In-Store Skin Consult', status: 'POS PAID', amount: '₹2,300' }
    ],
    dockerService: 'medusajs/medusa:latest',
    includeEcomAdapters: true
  },
  {
    slug: 'tpl-ecom-quickcommerce',
    category: 'E-Commerce',
    brand: 'FRESHCO 25-MIN EXPRESS',
    tagline: 'Chemical-free catch-of-the-day fish, antibiotic-free meat & organic farm produce in 25 minutes.',
    heroBadge: '⚡ SERVING KOCHI PINCODES 682001–682036 // LIVE DARK-STORE PACKING IN 4 MINS',
    fontPrimary: "'Plus Jakarta Sans', sans-serif",
    fontAccent: "'Space Grotesk', sans-serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap',
    colorPrimary: '#16A34A',
    colorDark: '#0F172A',
    bgMain: '#F8FAFC',
    bgCanvas: '#DCFCE7',
    borderColor: '#BBF7D0',
    isDark: false,
    ctaPrimary: 'Order 25-Min Express Delivery',
    ctaSecondary: 'Weight & Cut Price Calculator',
    itemsTitle: 'Today Morning Catch, Fresh Cuts & Organic Farm Basket',
    items: [
      { code: 'QC-FISH-01', title: 'Munambam Day-Boat Seer Fish / Neymeen Steaks (500g Net)', sub: 'Descaled, gutted & cut into 1.5cm fry steaks • Ice-packed at 2°C', metric: '₹590 / 500g', badge: 'MORNING CATCH', img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80' },
      { code: 'QC-FISH-02', title: 'Peeled & Deveined Tiger Prawns / Chemmeen (500g Net)', sub: 'Zero chemical glaze • Ready for roast or curry', metric: '₹440 / 500g', badge: 'READY TO COOK', img: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80' },
      { code: 'QC-MEAT-01', title: 'Antibiotic-Free Country Chicken Curry Cut (1kg)', sub: 'Chilled farm-fresh (Never Frozen) • Halal vacuum-sealed', metric: '₹340 / 1kg', badge: 'FARM FRESH', img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80' },
      { code: 'QC-VEG-01', title: 'Wayanad Certified Organic Vegetable Family Box (5kg)', sub: 'Nendran banana, ash gourd, redokra, curry leaves, ginger & coconut', metric: '₹390 / Box', badge: 'ORGANIC FARM', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80' },
      { code: 'QC-MAR-01', title: 'Ready-to-Pan-Fry Kanthari & Tellicherry Pepper Fish (400g)', sub: 'Marinated in fresh green bird-eye chili, lime & virgin coconut oil', metric: '₹480 / Pack', badge: 'CHEF MARINADE', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80' },
      { code: 'QC-DRY-01', title: 'Fresh Grated Coconut & Appam Batter Combo (1kg)', sub: 'Stone-ground fermented Palappam batter + vacuum-sealed white coconut', metric: '₹160 / Combo', badge: 'BREAKFAST EXPRESS', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Custom Weight, Cut & Express Delivery Slot Calculator',
    calcSub: 'Select weight packs (500g increments) and category tier (Free Delivery above ₹499).',
    calcLabelA: 'Number of 500g Packs',
    calcMinA: 1, calcMaxA: 12, calcDefA: 2,
    calcLabelB: 'Category (1=Organic Veg ₹195, 2=Chicken/Prawns ₹390, 3=Neymeen/Mutton ₹590)',
    calcMinB: 1, calcMaxB: 3, calcDefB: 2,
    calcFormula: 'team * (hours === 1 ? 195 : hours === 2 ? 390 : 590)',
    calcUnit: '₹',
    calcResultLabel: 'Express Basket Total (25-Min Rider Dispatch Included)',
    adminTitle: 'Dark-Store Packing Queue, Cold-Chain Inventory & Rider Dispatch Hub',
    leadCtaLabel: 'Confirm 25-Min Express Slot (UPI / COD)',
    adminKpis: [
      { label: 'Avg Delivery Time Today', val: '21.4 Mins', delta: 'Kakkanad & Panampilly Hubs' },
      { label: 'Active Riders on Road', val: '16 Riders', delta: '4 Orders Packing Now' },
      { label: 'Cold-Room Temp Log', val: '1.8°C Optimal', delta: 'Zero Spoilage' },
      { label: 'Today Express Orders', val: '218 Delivered', delta: '₹1.26L Daily GMV' }
    ],
    seedLeads: [
      { id: 'QC-3391', name: 'Sreekumar Nair (Panampilly Nagar — 682036)', phone: '919847011223', detail: '1kg Neymeen Curry Cut + 500g Tiger Prawns • Rider: Shafeeq (KL-07-CS-4411)', status: 'OUT FOR DELIVERY 🛵', amount: '₹1,620' },
      { id: 'QC-3392', name: 'Reshma Thomas (Kakkanad InfoPark — 682030)', phone: '919447022334', detail: 'Organic Veg Box + Appam Batter Combo • Slot: 6:00 PM Evening', status: 'PACKING AT HUB ❄️', amount: '₹550' },
      { id: 'QC-3390', name: 'Capt. George V. (Marine Drive — 682031)', phone: '919895033445', detail: '2x Kanthari Pepper Fish Pack • Delivered in 19 mins', status: 'DELIVERED ✅', amount: '₹960' }
    ],
    dockerService: 'medusajs/medusa:latest',
    includeEcomAdapters: true
  },
  {
    slug: 'tpl-ecom-b2b-wholesale',
    category: 'E-Commerce',
    brand: 'APEX INDUSTRIAL B2B',
    tagline: 'Direct factory bulk ordering with tiered MOQ slab pricing & instant GST proforma invoices.',
    heroBadge: 'ISO-9001 FACTORY DIRECT // TIERED MOQ PRICING (10+ / 50+ / 100+ UNITS) + DEALER CREDIT',
    fontPrimary: "'Inter', sans-serif",
    fontAccent: "'Space Grotesk', sans-serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap',
    colorPrimary: '#2563EB',
    colorDark: '#0F172A',
    bgMain: '#F8FAFC',
    bgCanvas: '#EFF6FF',
    borderColor: '#CBD5E1',
    isDark: false,
    ctaPrimary: 'Generate Official GST Proforma Invoice / RFQ',
    ctaSecondary: 'Tiered MOQ Volume Slab Calculator',
    itemsTitle: 'High-Density Wholesale SKU Catalog & Tiered Volume Slabs',
    items: [
      { code: 'B2B-LED-200W', title: 'IP66 Die-Cast 200W Industrial High-Bay LED Floodlight', sub: 'MOQ 10 Units • 10–49: ₹2,450 | 50–99: ₹2,150 | 100+: ₹1,890 (HSN 9405 • 18% GST)', metric: 'From ₹1,890/unit', badge: '5-YR OEM WARRANTY', img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80' },
      { code: 'B2B-CAB-4SQ', title: 'FR-LSH 4.0 sq.mm Pure Electrolytic Copper Industrial Roll (90m)', sub: 'MOQ 10 Coils • 10–49: ₹3,100 | 50+: ₹2,780 (ISI Marked • HSN 8544)', metric: 'From ₹2,780/coil', badge: 'ISI CERTIFIED', img: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80' },
      { code: 'B2B-MCB-3P', title: '63A Triple-Pole C-Curve 10kA Industrial MCB Breaker', sub: 'MOQ 20 Units • 20–99: ₹680 | 100+: ₹540 (IEC 60898 Compliant)', metric: 'From ₹540/unit', badge: 'SWITCHGEAR', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' },
      { code: 'B2B-PMP-2HP', title: '2HP Stainless Steel Submersible Borewell Pump Set', sub: 'MOQ 5 Units • 5–19: ₹11,400 | 20+: ₹9,850 (100% Copper Winding)', metric: 'From ₹9,850/unit', badge: 'HEAVY DUTY', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80' },
      { code: 'B2B-SOL-550W', title: '550Wp Mono-PERC Half-Cut Bifacial Solar PV Module', sub: 'MOQ 1 Pallet (31 Panels) • ₹8,900/panel (ALMM Approved • 25-Yr Output Warranty)', metric: '₹8,900/panel', badge: 'SOLAR EPC', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80' },
      { code: 'B2B-FAS-SS304', title: 'SS-304 Hex Bolt, Nut & Washer Master Carton (5,000 Pcs)', sub: 'MOQ 5 Cartons • Marine-grade corrosion resistant M8x40mm', metric: '₹4,200/carton', badge: 'FASTENERS', img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Interactive Tiered MOQ Volume Slab & GST Proforma Calculator',
    calcSub: 'Increase order quantity to unlock 50+ (12% off) and 100+ (22% off) factory slab rates.',
    calcLabelA: 'Bulk Order Quantity (Units)',
    calcMinA: 10, calcMaxA: 500, calcDefA: 60,
    calcLabelB: 'Base Unit Rate Tier (1=₹680 MCB, 2=₹2450 LED High-Bay, 3=₹8900 Solar Panel)',
    calcMinB: 1, calcMaxB: 3, calcDefB: 2,
    calcFormula: 'Math.round(team * (hours === 1 ? 680 : hours === 2 ? 2450 : 8900) * (team >= 100 ? 0.78 : team >= 50 ? 0.88 : 1) * 1.18)',
    calcUnit: '₹',
    calcResultLabel: 'Total B2B Proforma Invoice Value (Incl. 18% GST & Input Tax Credit)',
    adminTitle: 'B2B Wholesale Desk — RFQ Approvals, Dealer Credit Limits & Dispatch LR',
    leadCtaLabel: 'Lock Tiered Slab Rate & Download GST Proforma',
    adminKpis: [
      { label: 'Active B2B Dealers', val: '164 Verified', delta: 'GSTIN KYC Approved' },
      { label: 'Open RFQ Quotes', val: '₹38.6 Lakhs', delta: '12 Pending POs' },
      { label: 'Factory Dispatch Today', val: '18 Tons / 9 LRs', delta: 'VRL & SafeExpress' },
      { label: 'Dealer Credit Recovery', val: '98.4% On-Time', delta: 'Net-30 NEFT/RTGS' }
    ],
    seedLeads: [
      { id: 'RFQ-2091', name: 'Kerala Electricals & Switchgear (Thrissur)', phone: '919847011223', detail: '120x 200W High-Bay LED (100+ Slab Applied @ ₹1,890) • GSTIN 32AABCK1122F1Z9', status: 'PROFORMA ISSUED', amount: '₹2,67,624' },
      { id: 'RFQ-2090', name: 'Malabar Solar EPC Pvt Ltd (Calicut)', phone: '919447022334', detail: '62x 550Wp Bifacial Panels (2 Pallets) • Paid via RTGS', status: 'DISPATCHED // LR #8841', amount: '₹6,51,124' },
      { id: 'RFQ-2089', name: 'Cochin Marine Hardware Syndicate', phone: '919895033445', detail: '25 Cartons SS-304 Fasteners • Net-30 Dealer Credit Approved', status: 'CREDIT APPROVED', amount: '₹1,23,900' }
    ],
    dockerService: 'medusajs/medusa:latest',
    includeEcomAdapters: true
  },

  // ================= EPIC 6: LARGE ENTERPRISE ERP SUITE =================
  {
    slug: 'tpl-lerp-warehouse-erp',
    category: 'Large ERP',
    brand: 'NEXUS SUPPLY ERP',
    tagline: 'Multi-warehouse stock ledger, Purchase Requisition -> PO -> GRN matching & B2B dealer portal.',
    heroBadge: 'MULTI-BRANCH ERP // KOCHI CENTRAL HUB • CALICUT DEPOT • COIMBATORE WAREHOUSE',
    fontPrimary: "'Inter', sans-serif",
    fontAccent: "'Space Grotesk', sans-serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap',
    colorPrimary: '#4F46E5',
    colorDark: '#0F172A',
    bgMain: '#F8FAFC',
    bgCanvas: '#EEF2FF',
    borderColor: '#C7D2FE',
    isDark: false,
    ctaPrimary: 'Raise Purchase Requisition / Inter-Branch Transfer',
    ctaSecondary: 'EOQ & Reorder Buffer Calculator',
    itemsTitle: 'Live Multi-Warehouse Stock Ledger & Reorder Thresholds',
    items: [
      { code: 'WH-SKU-1001', title: 'Cold-Rolled Steel Coil 1.2mm (CRCA Grade D)', sub: 'Kochi Hub: 42 MT | Calicut: 18 MT | Coimbatore: 64 MT • Min Reorder: 25 MT', metric: '124 MT Total Stock', badge: 'OPTIMAL BUFFER', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80' },
      { code: 'WH-SKU-1002', title: 'Industrial Servo Motor 2.5kW IP65 (Siemens/Delta Spec)', sub: 'Kochi Hub: 6 Units | Calicut: 2 Units • Min Reorder: 15 Units', metric: '8 Units (LOW STOCK)', badge: 'AUTO-PO TRIGGERED', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80' },
      { code: 'WH-SKU-1003', title: 'Corrugated 5-Ply Master Export Cartons (Pallet of 500)', sub: 'Kochi Hub: 18 Pallets | Calicut: 9 Pallets • FIFO Batch Tracked', metric: '27 Pallets Ready', badge: 'PACKAGING HUB', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80' },
      { code: 'WH-FLOW-PO', title: '3-Way Matching: Purchase Order ↔ GRN ↔ Vendor Bill', sub: 'Blocks vendor payment automatically if GRN quantity or landed cost deviates >1%', metric: 'Zero Leakage Control', badge: 'PROCUREMENT', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80' },
      { code: 'WH-FLOW-XFER', title: 'Inter-Branch Stock Transfer & E-Way Bill Generator', sub: 'Real-time In-Transit stock quarantine between Kochi, Calicut & Bangalore hubs', metric: 'Live Fleet GPS Sync', badge: 'LOGISTICS', img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80' },
      { code: 'WH-FLOW-AUDIT', title: 'Barcode Cycle Count & Double-Entry Stock Valuation', sub: 'FIFO / Moving Average cost ledger synced with Tally Prime & ERPNext v15', metric: '99.94% Audit Match', badge: 'FINANCE LEDGER', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Procurement Reorder & Landed Cost Valuation Calculator',
    calcSub: 'Calculate total landed PO cost including freight, customs/IGST, and safety buffer.',
    calcLabelA: 'Purchase Order Quantity (Units)',
    calcMinA: 10, calcMaxA: 1000, calcDefA: 150,
    calcLabelB: 'Unit Base Cost Tier (1=₹850 Consumable, 2=₹4200 Component, 3=₹18500 Assembly)',
    calcMinB: 1, calcMaxB: 3, calcDefB: 2,
    calcFormula: 'Math.round(team * (hours === 1 ? 850 : hours === 2 ? 4200 : 18500) * 1.18)',
    calcUnit: '₹',
    calcResultLabel: 'Total Landed Purchase Order Value (3-Way GRN Match Ready)',
    adminTitle: 'Enterprise Warehouse Command — Multi-Branch Stock, PO -> GRN & Transfers',
    leadCtaLabel: 'Submit Purchase Requisition / Stock Transfer Order',
    adminKpis: [
      { label: 'Total Inventory Valuation', val: '₹4.82 Cr', delta: 'Across 3 Warehouses' },
      { label: 'Open Purchase Orders', val: '14 POs (₹42L)', delta: '4 Awaiting GRN Gate' },
      { label: 'In-Transit Transfers', val: '3 Trucks Live', delta: 'Kochi -> Calicut' },
      { label: 'Stock-Out Prevention', val: '99.6% Fill Rate', delta: 'Auto-Reorder Active' }
    ],
    seedLeads: [
      { id: 'PO-2026-881', name: 'Vendor: Tata Steel Downstream Ltd', phone: '919847011223', detail: '40 MT CRCA Steel Coil -> Kochi Central Hub • GRN #GRN-441 Verified', status: '3-WAY MATCHED ✅', amount: '₹28,40,000' },
      { id: 'XFER-904', name: 'Inter-Branch: Kochi Hub -> Calicut Depot', phone: '919447022334', detail: '25 Units Industrial Servo Motor • E-Way Bill #3210998822', status: 'IN TRANSIT 🚚', amount: '₹4,62,500' },
      { id: 'PR-1102', name: 'Dept: Production Line B (Coimbatore)', phone: '919895033445', detail: 'Requisition: 10 Pallets 5-Ply Master Cartons • Urgent Priority', status: 'PENDING PO APPROVAL', amount: '₹1,85,000' }
    ],
    dockerService: 'frappe/erpnext:v15.40.0'
  },
  {
    slug: 'tpl-lerp-hrms-payroll',
    category: 'Large ERP',
    brand: 'PEOPLEPULSE HRMS',
    tagline: 'Employee self-service geo-attendance, leave workflows, expense claims & 1-click PF/ESI/TDS payroll.',
    heroBadge: 'STATUTORY COMPLIANT (EPF • ESIC • PT • NEW TAX REGIME TDS) // EMPLOYEE SELF-SERVICE + HR OPS',
    fontPrimary: "'Inter', sans-serif",
    fontAccent: "'Space Grotesk', sans-serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap',
    colorPrimary: '#7C3AED',
    colorDark: '#1E1B4B',
    bgMain: '#F8FAFC',
    bgCanvas: '#F5F3FF',
    borderColor: '#DDD6FE',
    isDark: false,
    ctaPrimary: 'Punch Shift Attendance / Apply Leave / View Payslip',
    ctaSecondary: 'In-Hand Salary & PF/TDS Calculator',
    itemsTitle: 'Employee Self-Service Modules & Automated HR Workflows',
    items: [
      { code: 'HR-MOD-ATT', title: 'Geo-Fenced Mobile Shift Punch-In & Biometric Sync', sub: 'Verifies GPS radius (Kochi HQ / Remote WFH) with automatic overtime & late-mark rules', metric: '98.4% Today Present', badge: 'ATTENDANCE', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
      { code: 'HR-MOD-PAY', title: '1-Click Monthly Payroll Run & Bank NEFT Advice', sub: 'Auto-computes Basic, HRA, LTA, EPF (12%), ESIC, Professional Tax & TDS', metric: 'Zero Spreadsheet Errors', badge: 'PAYROLL ENGINE', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80' },
      { code: 'HR-MOD-SLIP', title: 'Instant PDF Salary Slip & Form-16 Tax Portal', sub: 'Employees download digitally signed monthly payslips on web or WhatsApp', metric: 'Self-Service 24/7', badge: 'PAYSLIPS', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80' },
      { code: 'HR-MOD-LVE', title: 'Multi-Level Leave Balance & Manager Approval Matrix', sub: 'Casual, Sick, Earned & Maternity leave accruals with team calendar collision check', metric: '1-Tap Approval', badge: 'LEAVE MANAGEMENT', img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80' },
      { code: 'HR-MOD-EXP', title: 'Travel & Client Expense Reimbursement OCR', sub: 'Upload flight/hotel GST bills -> Manager approval -> Auto-credited in payroll', metric: '72-Hr Settlement', badge: 'EXPENSE CLAIMS', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80' },
      { code: 'HR-MOD-ONB', title: 'Digital Offer Letter, Aadhaar eSign & Asset Handover', sub: 'Tracks MacBook/ID card issuance, NDA signing & 90-day probation KPIs', metric: 'Paperless Onboarding', badge: 'TALENT OPS', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Interactive CTC to Net In-Hand Salary & Statutory PF Calculator',
    calcSub: 'Calculate monthly net take-home pay after EPF, Professional Tax, and New Regime TDS.',
    calcLabelA: 'Monthly Gross Salary (₹)',
    calcMinA: 18000, calcMaxA: 250000, calcDefA: 65000,
    calcLabelB: 'Number of Paid Leave / LOP Deductions (Days)',
    calcMinB: 0, calcMaxB: 10, calcDefB: 0,
    calcFormula: 'Math.round((team - (team / 30) * hours) * 0.88 - 200)',
    calcUnit: '₹',
    calcResultLabel: 'Estimated Monthly Net In-Hand Bank Credit (After PF & PT)',
    adminTitle: 'HR Director Command Center — Attendance Roster, Leave Approvals & Payroll Run',
    leadCtaLabel: 'Submit Leave Request / Expense Claim / Download Payslip',
    adminKpis: [
      { label: 'Total Active Headcount', val: '128 Employees', delta: '121 Present • 7 on Leave' },
      { label: 'Monthly Payroll Outflow', val: '₹74.6 Lakhs', delta: 'NEFT Batch Ready' },
      { label: 'Pending Leave / Expenses', val: '5 Requests', delta: 'SLA: <4 Hours' },
      { label: 'EPF & ESIC ECR Filing', val: '100% Compliant', delta: 'Challan Generated' }
    ],
    seedLeads: [
      { id: 'EMP-1042', name: 'Karthik Warrier (Senior Full-Stack Engineer)', phone: '919847011223', detail: 'Shift: 09:30 AM Geo-Verified (Kochi HQ) • Oct Net Pay: ₹84,200', status: 'PAYSLIP ISSUED ✅', amount: '₹84,200' },
      { id: 'LVE-409', name: 'Sneha Nambiar (Product Marketing Lead)', phone: '919447022334', detail: 'Earned Leave Request: Nov 18–20 (3 Days — Family Wedding) • Balance: 14d', status: 'PENDING APPROVAL', amount: '3 Days Paid' },
      { id: 'EXP-812', name: 'Rohit Shenoy (Enterprise Sales VP)', phone: '919895033445', detail: 'Bangalore Client Visit Flight + Taj Stay (GST Invoice Attached)', status: 'APPROVED // PAYROLL', amount: '₹16,450' }
    ],
    dockerService: 'frappe/hrms:latest'
  }
];

function buildThemeCss(r) {
  return `/* Extracted via tpl-tools-design-extractor for ${r.slug} */
:root {
  --font-primary: ${r.fontPrimary};
  --font-accent: ${r.fontAccent};
  --color-primary: ${r.colorPrimary};
  --brand-primary: var(--color-primary);
  --color-dark: ${r.colorDark};
  --brand-dark: var(--color-dark);
  --bg-main: ${r.bgMain};
  --bg-canvas: ${r.bgCanvas};
  --bg-sand: var(--bg-canvas);
  --border-color: ${r.borderColor};
  --grid-gap-desktop: 28px 22px;
  --grid-gap-mobile: 16px 14px;
  --radius: 6px;
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}
`;
}

function buildHtmlPair(r) {
  const textMain = r.isDark ? '#F8FAFC' : 'var(--color-dark)';
  const textMuted = r.isDark ? '#94A3B8' : '#64748B';
  const cardBg = r.isDark ? '#14161F' : '#FFFFFF';
  const headerBg = r.isDark ? 'rgba(9, 10, 15, 0.9)' : 'rgba(255, 255, 255, 0.94)';

  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${r.brand} — ${r.category}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${r.googleFontsUrl}" rel="stylesheet">
  <link rel="stylesheet" href="theme-tokens.css">
  <script src="whitelabel.js"></script>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: var(--font-primary);
      background-color: var(--bg-main);
      color: ${textMain};
      line-height: 1.55;
      -webkit-font-smoothing: antialiased;
    }
    .top-bar {
      background: var(--bg-canvas);
      color: ${textMain};
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      text-align: center;
      padding: 8px 16px;
      border-bottom: 1px solid var(--border-color);
    }
    header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: ${headerBg};
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-color);
    }
    .nav-container {
      max-width: 1240px;
      margin: 0 auto;
      padding: 15px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .brand-logo {
      font-family: var(--font-accent);
      font-size: 23px;
      font-weight: 700;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      color: ${textMain};
      text-decoration: none;
    }
    .brand-logo span {
      font-family: var(--font-primary);
      color: var(--color-primary);
      font-size: 11px;
      letter-spacing: 2px;
      display: block;
      margin-top: -2px;
    }
    nav.desktop-nav { display: flex; gap: 22px; align-items: center; }
    nav.desktop-nav a {
      color: ${textMain};
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    nav.desktop-nav a:hover { color: var(--color-primary); }
    .btn-primary {
      background: var(--color-primary);
      color: #FFFFFF;
      border: none;
      padding: 11px 20px;
      border-radius: var(--radius);
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.7px;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .btn-outline {
      background: transparent;
      color: ${textMain};
      border: 1px solid var(--border-color);
      padding: 11px 20px;
      border-radius: var(--radius);
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.7px;
      cursor: pointer;
      text-decoration: none;
    }
    .hero-banner {
      padding: 64px 24px 52px;
      max-width: 1240px;
      margin: 0 auto;
      text-align: center;
    }
    .hero-pill {
      display: inline-block;
      background: var(--bg-canvas);
      border: 1px solid var(--border-color);
      color: var(--color-primary);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
      padding: 6px 14px;
      border-radius: 999px;
      margin-bottom: 18px;
    }
    .hero-banner h1 {
      font-family: var(--font-accent);
      font-size: clamp(32px, 4.6vw, 56px);
      line-height: 1.1;
      margin-bottom: 16px;
    }
    .hero-banner p {
      font-size: 16px;
      color: ${textMuted};
      max-width: 680px;
      margin: 0 auto 26px;
    }
    .hero-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
    .section-wrap { max-width: 1240px; margin: 0 auto; padding: 42px 24px; }
    .section-head {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 24px;
      gap: 16px;
      flex-wrap: wrap;
    }
    .bento-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--grid-gap-desktop);
    }
    .bento-card {
      background: ${cardBg};
      border: 1px solid var(--border-color);
      border-radius: var(--radius);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: transform 0.2s, border-color 0.2s;
    }
    .bento-card:hover { transform: translateY(-4px); border-color: var(--color-primary); }
    .bento-img-wrap { height: 210px; position: relative; background: var(--bg-canvas); overflow: hidden; }
    .bento-img-wrap img { width: 100%; height: 100%; object-fit: cover; }
    .bento-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      background: var(--color-primary);
      color: #FFF;
      font-size: 10px;
      font-weight: 700;
      padding: 4px 8px;
      border-radius: 4px;
    }
    .bento-body { padding: 18px; display: flex; flex-direction: column; flex: 1; }
    .bento-code { font-size: 11px; color: ${textMuted}; font-weight: 600; margin-bottom: 4px; }
    .bento-title { font-size: 16px; font-weight: 700; margin-bottom: 6px; }
    .bento-sub { font-size: 13px; color: ${textMuted}; margin-bottom: 14px; flex: 1; }
    .bento-footer {
      display: flex;
      justify-content: space-between;
      padding-top: 12px;
      border-top: 1px solid var(--border-color);
      font-size: 13px;
      font-weight: 700;
      color: var(--color-primary);
    }
    .calc-panel {
      background: var(--bg-canvas);
      border: 1px solid var(--border-color);
      border-radius: var(--radius);
      padding: 32px;
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 28px;
      align-items: center;
    }
    .slider-group { margin-bottom: 18px; }
    .slider-group label { display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 6px; }
    .slider-group input[type="range"] { width: 100%; accent-color: var(--color-primary); }
    .calc-result-card {
      background: ${cardBg};
      border: 2px solid var(--color-primary);
      border-radius: var(--radius);
      padding: 24px;
      text-align: center;
    }
    .calc-result-val {
      font-family: var(--font-accent);
      font-size: 38px;
      font-weight: 700;
      color: var(--color-primary);
      margin: 8px 0 14px;
    }
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.65);
      z-index: 900;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
    .modal-overlay.open { display: flex; }
    .modal-box {
      background: ${cardBg};
      color: ${textMain};
      border: 1px solid var(--border-color);
      border-radius: var(--radius);
      max-width: 480px;
      width: 100%;
      padding: 24px;
    }
    .form-field { margin-bottom: 12px; }
    .form-field label { display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 4px; color: ${textMuted}; }
    .form-field input {
      width: 100%;
      padding: 10px;
      background: var(--bg-main);
      color: ${textMain};
      border: 1px solid var(--border-color);
      border-radius: 4px;
    }
    .wa-float-btn {
      position: fixed;
      bottom: 24px;
      right: 20px;
      width: 50px;
      height: 50px;
      background: #25D366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 500;
      text-decoration: none;
      color: #FFF;
      font-size: 22px;
    }
    .admin-pill-floating {
      position: fixed;
      bottom: 24px;
      left: 24px;
      background: var(--color-dark);
      color: #FFF;
      padding: 10px 16px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 600;
      text-decoration: none;
      z-index: 500;
    }
    @media (max-width: 860px) {
      .bento-grid, .calc-panel { grid-template-columns: 1fr; }
      nav.desktop-nav, .admin-pill-floating { display: none; }
    }
  </style>
</head>
<body>
  <div class="top-bar">${r.heroBadge}</div>
  <header>
    <div class="nav-container">
      <a href="#" class="brand-logo">${r.brand}</a>
      <nav class="desktop-nav">
        <a href="#catalog">Catalog / Modules</a>
        <a href="#calculator">Interactive Calculator</a>
        <a href="admin.html">Admin / POS Hub</a>
      </nav>
      <button class="btn-primary" onclick="openLeadModal()">${r.ctaPrimary}</button>
    </div>
  </header>

  <section class="hero-banner">
    <span class="hero-pill">${r.heroBadge}</span>
    <h1 data-wl-brand>${r.brand}</h1>
    <p data-wl-tagline>${r.tagline}</p>
    <div class="hero-actions">
      <button class="btn-primary" onclick="openLeadModal()">${r.ctaPrimary}</button>
      <a href="#calculator" class="btn-outline">${r.ctaSecondary}</a>
    </div>
  </section>

  <section class="section-wrap" id="catalog">
    <div class="section-head">
      <h2>${r.itemsTitle}</h2>
      <div id="drawerWaText" style="font-size:12px;color:${textMuted};">WhatsApp: +91 90619 02295</div>
    </div>
    <div class="bento-grid" id="bentoGrid"></div>
  </section>

  <section class="section-wrap" id="calculator">
    <div class="calc-panel">
      <div>
        <h2 style="font-family:var(--font-accent);font-size:26px;margin-bottom:6px;">${r.calcTitle}</h2>
        <p style="font-size:13px;color:${textMuted};margin-bottom:20px;">${r.calcSub}</p>
        <div class="slider-group">
          <label><span>${r.calcLabelA}</span><strong id="valSliderA" style="color:var(--color-primary);">${r.calcDefA}</strong></label>
          <input type="range" id="sliderA" min="${r.calcMinA}" max="${r.calcMaxA}" value="${r.calcDefA}" oninput="recalc()">
        </div>
        <div class="slider-group">
          <label><span>${r.calcLabelB}</span><strong id="valSliderB" style="color:var(--color-primary);">${r.calcDefB}</strong></label>
          <input type="range" id="sliderB" min="${r.calcMinB}" max="${r.calcMaxB}" value="${r.calcDefB}" oninput="recalc()">
        </div>
      </div>
      <div class="calc-result-card">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:${textMuted};">${r.calcResultLabel}</div>
        <div class="calc-result-val" id="calcOutput">₹0</div>
        <button class="btn-primary" style="width:100%;justify-content:center;" onclick="openLeadModal()">${r.leadCtaLabel}</button>
      </div>
    </div>
  </section>

  <div class="modal-overlay" id="leadModal">
    <div class="modal-box">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <h3 style="font-size:18px;">${r.leadCtaLabel}</h3>
        <button onclick="closeLeadModal()" style="background:none;border:none;color:inherit;font-size:18px;cursor:pointer;">✕</button>
      </div>
      <form onsubmit="submitLead(event)">
        <div class="form-field"><label>Name / Business / Table *</label><input type="text" id="leadName" required placeholder="e.g. Anand Varma"></div>
        <div class="form-field"><label>WhatsApp / Mobile Number *</label><input type="tel" id="leadPhone" required placeholder="919876543210"></div>
        <div class="form-field"><label>Order / Ticket Details</label><input type="text" id="leadDetail" readonly></div>
        <button type="submit" class="btn-primary" style="width:100%;justify-content:center;">Confirm & Sync to Admin / POS</button>
      </form>
      <div id="leadSuccessBox" style="display:none;margin-top:14px;padding:12px;background:var(--bg-canvas);border:1px solid var(--color-primary);border-radius:4px;font-size:12px;"></div>
    </div>
  </div>

  <a href="admin.html" class="admin-pill-floating">⚙️ Open Admin / POS Command Center</a>
  <a id="floatingWaBtn" href="https://wa.me/919061902295" target="_blank" class="wa-float-btn">💬</a>

  <script>
    const ITEMS = ${JSON.stringify(r.items, null, 2)};
    let selectedTitle = ITEMS[0].title;
    let calcFormatted = '';

    function renderGrid() {
      document.getElementById('bentoGrid').innerHTML = ITEMS.map((it, i) => \`
        <article class="bento-card" onclick="selectItem(\${i})">
          <div class="bento-img-wrap">
            <img src="\${it.img}" alt="\${it.title}" loading="lazy">
            <span class="bento-badge">\${it.badge}</span>
          </div>
          <div class="bento-body">
            <div class="bento-code">\${it.code}</div>
            <div class="bento-title">\${it.title}</div>
            <div class="bento-sub">\${it.sub}</div>
            <div class="bento-footer"><span>\${it.metric}</span><span>Select →</span></div>
          </div>
        </article>
      \`).join('');
    }

    function recalc() {
      const team = Number(document.getElementById('sliderA').value);
      const hours = Number(document.getElementById('sliderB').value);
      document.getElementById('valSliderA').textContent = team;
      document.getElementById('valSliderB').textContent = hours;
      const val = ${r.calcFormula};
      calcFormatted = '${r.calcUnit}' + Number(val).toLocaleString('en-IN');
      document.getElementById('calcOutput').textContent = calcFormatted;
    }

    function selectItem(idx) {
      selectedTitle = ITEMS[idx].title + ' (' + ITEMS[idx].metric + ')';
      openLeadModal();
    }

    function openLeadModal() {
      document.getElementById('leadDetail').value = selectedTitle + ' • Total: ' + calcFormatted;
      document.getElementById('leadSuccessBox').style.display = 'none';
      document.getElementById('leadModal').classList.add('open');
    }

    function closeLeadModal() {
      document.getElementById('leadModal').classList.remove('open');
    }

    function submitLead(e) {
      e.preventDefault();
      const entry = {
        id: 'TX-' + Math.floor(1000 + Math.random() * 9000),
        name: document.getElementById('leadName').value.trim(),
        phone: document.getElementById('leadPhone').value.trim(),
        detail: document.getElementById('leadDetail').value.trim(),
        amount: calcFormatted,
        status: 'LIVE // QUEUED'
      };
      try {
        const list = JSON.parse(localStorage.getItem('bmad_leads_${r.slug}') || '[]');
        list.unshift(entry);
        localStorage.setItem('bmad_leads_${r.slug}', JSON.stringify(list));
      } catch (err) {}
      const box = document.getElementById('leadSuccessBox');
      box.style.display = 'block';
      box.innerHTML = '✓ Dispatched (' + entry.id + ')! Open <a href="admin.html" style="color:var(--color-primary);font-weight:700;">Admin / POS Hub</a> to process.';
    }

    renderGrid();
    recalc();
  </script>
</body>
</html>`;

  const adminHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${r.brand} — Admin & POS Command Center</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${r.googleFontsUrl}" rel="stylesheet">
  <link rel="stylesheet" href="theme-tokens.css">
  <script src="whitelabel.js"></script>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: var(--font-primary); background: #F4F5F7; color: #0F172A; display: flex; min-height: 100vh; }
    aside.admin-sidebar {
      width: 250px;
      background: var(--brand-dark);
      color: #FFF;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex-shrink: 0;
    }
    .sidebar-brand-title { font-family: var(--font-accent); font-size: 19px; font-weight: 700; margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.12); }
    .sidebar-brand-title span { color: var(--brand-primary); }
    .nav-item { padding: 10px 12px; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 600; color: #CBD5E1; }
    .nav-item.active, .nav-item:hover { background: var(--brand-primary); color: #FFF; }
    main { flex: 1; padding: 26px; overflow-y: auto; }
    .top-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px; flex-wrap: wrap; gap: 12px; }
    .kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 22px; }
    .kpi-card { background: #FFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; }
    .kpi-label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748B; }
    .kpi-val { font-size: 22px; font-weight: 700; margin: 6px 0 4px; }
    .kpi-delta { font-size: 11px; font-weight: 600; color: var(--brand-primary); }
    .card-box { background: #FFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 18px; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; }
    th, td { text-align: left; padding: 11px 10px; border-bottom: 1px solid #E2E8F0; }
    th { font-size: 11px; text-transform: uppercase; color: #64748B; }
    .status-pill { display: inline-block; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 700; background: #FEF3EE; color: var(--brand-primary); }
    .btn-sm { background: var(--brand-primary); color: #FFF; border: none; padding: 6px 12px; border-radius: 4px; font-size: 11px; font-weight: 600; cursor: pointer; text-decoration: none; }
    @media (max-width: 860px) { body { flex-direction: column; } aside.admin-sidebar { width: 100%; } .kpi-grid { grid-template-columns: 1fr 1fr; } }
  </style>
</head>
<body>
  <aside class="admin-sidebar">
    <div class="sidebar-brand-title">${r.brand} <span>Hub</span></div>
    <div class="nav-item active">⚡ Live POS / Operations</div>
    <div class="nav-item" onclick="window.location.href='index.html'">👁️ Customer Portal</div>
    <div style="margin-top:auto;padding-top:14px;border-top:1px solid rgba(255,255,255,0.12);font-size:11px;color:#94A3B8;">
      Support / Alert WhatsApp:
      <input type="text" id="adminWaInput" data-wl-wa value="919061902295" style="width:100%;margin-top:6px;padding:6px;border-radius:4px;border:none;">
    </div>
  </aside>
  <main>
    <div class="top-bar">
      <div>
        <div class="mobile-brand" style="font-size:12px;font-weight:700;color:var(--brand-primary);text-transform:uppercase;">${r.brand}</div>
        <h1 style="font-size:21px;">${r.adminTitle}</h1>
      </div>
      <a href="index.html" class="btn-sm">← Customer View</a>
    </div>
    <div class="kpi-grid">
      ${r.adminKpis.map(k => `<div class="kpi-card"><div class="kpi-label">${k.label}</div><div class="kpi-val">${k.val}</div><div class="kpi-delta">${k.delta}</div></div>`).join('')}
    </div>
    <div class="card-box">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <h2 style="font-size:16px;">Live Operations Queue, Counter POS & Ledger</h2>
        <button class="btn-sm" onclick="newPosEntry()">+ New Counter / POS Entry</button>
      </div>
      <div style="overflow-x:auto;">
        <table>
          <thead><tr><th>ID</th><th>Party / Account</th><th>Line Items & Particulars</th><th>Amount</th><th>Status</th><th>WhatsApp</th></tr></thead>
          <tbody id="leadsTableBody"></tbody>
        </table>
      </div>
    </div>
  </main>
  <script>
    const SEED = ${JSON.stringify(r.seedLeads, null, 2)};
    function render() {
      let local = [];
      try { local = JSON.parse(localStorage.getItem('bmad_leads_${r.slug}') || '[]'); } catch (e) {}
      const rows = [...local, ...SEED];
      document.getElementById('leadsTableBody').innerHTML = rows.map(row => \`
        <tr>
          <td><strong>\${row.id}</strong></td>
          <td>\${row.name}<br><span style="font-size:11px;color:#64748B;">+\${row.phone}</span></td>
          <td>\${row.detail}</td>
          <td><strong>\${row.amount}</strong></td>
          <td><span class="status-pill">\${row.status}</span></td>
          <td><a class="btn-sm" target="_blank" href="https://wa.me/\${String(row.phone).replace(/[^0-9]/g,'')}?text=\${encodeURIComponent('Update from ' + document.title + ': ' + row.id + ' — ' + row.detail)}">💬 Alert</a></td>
        </tr>
      \`).join('');
    }
    function newPosEntry() {
      const name = prompt('Customer / Vendor / Employee Name:');
      if (!name) return;
      const detail = prompt('Items / Notes:', '${r.items[0].title}');
      const amount = prompt('Amount (₹):', '₹1,450');
      const local = JSON.parse(localStorage.getItem('bmad_leads_${r.slug}') || '[]');
      local.unshift({ id: 'POS-' + Math.floor(1000 + Math.random()*9000), name, phone: document.getElementById('adminWaInput').value || '919061902295', detail, amount, status: 'CONFIRMED' });
      localStorage.setItem('bmad_leads_${r.slug}', JSON.stringify(local));
      render();
    }
    render();
  </script>
</body>
</html>`;

  return { indexHtml, adminHtml };
}

for (const r of REPOS) {
  const repoDir = path.join('C:/projects', r.slug);
  const pubDir = path.join(repoDir, 'public');
  const fnDir = path.join(repoDir, 'functions', 'api');
  fs.mkdirSync(pubDir, { recursive: true });
  fs.mkdirSync(fnDir, { recursive: true });

  const { indexHtml, adminHtml } = buildHtmlPair(r);
  fs.writeFileSync(path.join(pubDir, 'whitelabel.js'), wlScriptContent, 'utf8');
  fs.writeFileSync(path.join(pubDir, 'theme-tokens.css'), buildThemeCss(r), 'utf8');
  fs.writeFileSync(path.join(pubDir, 'index.html'), indexHtml, 'utf8');
  fs.writeFileSync(path.join(pubDir, 'admin.html'), adminHtml, 'utf8');
  fs.writeFileSync(path.join(fnDir, '[[route]].js'), `export async function onRequest() {\n  return new Response(JSON.stringify({ service: '${r.slug}', status: 'ok', items: ${JSON.stringify(r.seedLeads)} }), {\n    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=30, s-maxage=60, stale-while-revalidate=120' }\n  });\n}\n`, 'utf8');
  fs.writeFileSync(path.join(repoDir, 'wrangler.toml'), `name = "${r.slug}"\ncompatibility_date = "2024-11-01"\npages_build_output_dir = "public"\n`, 'utf8');
  fs.writeFileSync(path.join(repoDir, 'schema.sql'), `CREATE TABLE IF NOT EXISTS records (\n  id TEXT PRIMARY KEY,\n  name TEXT NOT NULL,\n  phone TEXT NOT NULL,\n  detail TEXT,\n  amount TEXT,\n  status TEXT,\n  created_at DATETIME DEFAULT CURRENT_TIMESTAMP\n);\n`, 'utf8');

  // Track 4: Docker Compose Self-Hosted Stack
  fs.writeFileSync(path.join(repoDir, 'docker-compose.yml'), `version: '3.8'\nservices:\n  app:\n    image: ${r.dockerService}\n    restart: unless-stopped\n    ports:\n      - "8080:8000"\n    environment:\n      - BRAND_NAME=${r.brand}\n      - PRIMARY_COLOR=${r.colorPrimary}\n  db:\n    image: postgres:15-alpine\n    restart: unless-stopped\n    environment:\n      - POSTGRES_USER=bmad\n      - POSTGRES_PASSWORD=bmad_secret\n      - POSTGRES_DB=${r.slug.replace(/-/g, '_')}\n`, 'utf8');

  // Track 2 & 3: Shopify OS 2.0 + WooCommerce Adapters for E-Commerce repos
  if (r.includeEcomAdapters) {
    const shopifyDir = path.join(repoDir, 'shopify', 'sections');
    const wooDir = path.join(repoDir, 'woocommerce');
    fs.mkdirSync(shopifyDir, { recursive: true });
    fs.mkdirSync(wooDir, { recursive: true });
    fs.writeFileSync(path.join(shopifyDir, 'hero-showcase.liquid'), `<section class="bmad-hero" style="--color-primary: {{ section.settings.primary_color }};">\n  <h1>{{ section.settings.heading | default: "${r.brand}" }}</h1>\n  <p>{{ section.settings.subheading | default: "${r.tagline}" }}</p>\n</section>\n{% schema %}\n{\n  "name": "${r.brand} Hero",\n  "settings": [\n    { "type": "text", "id": "heading", "label": "Brand Heading", "default": "${r.brand}" },\n    { "type": "color", "id": "primary_color", "label": "Primary Accent", "default": "${r.colorPrimary}" }\n  ]\n}\n{% endschema %}\n`, 'utf8');
    fs.writeFileSync(path.join(wooDir, 'bmad-pos-bridge.php'), `<?php\n/**\n * Plugin Name: ${r.brand} — WooCommerce Blocksy POS & Urgency Bridge\n * Description: Syncs Cloudflare Edge tokens and in-store POS stock matrix with WooCommerce.\n * Version: 1.0.0\n */\nif (!defined('ABSPATH')) exit;\nadd_action('wp_head', function() {\n  echo '<style>:root { --color-primary: ${r.colorPrimary}; --color-dark: ${r.colorDark}; }</style>';\n});\n`, 'utf8');
  }

  fs.writeFileSync(path.join(repoDir, 'README.md'), `# ${r.brand} (\`${r.slug}\`)\n\n${r.tagline}\n\n## Runnable Tracks Included\n1. **Cloudflare Serverless Edge ($0/mo):** \`public/\` + \`functions/api/[[route]].js\` + \`schema.sql\`\n2. **Self-Hosted Docker VPS:** \`docker-compose.yml\` (${r.dockerService})\n${r.includeEcomAdapters ? '3. **Shopify OS 2.0:** `shopify/sections/hero-showcase.liquid`\n4. **WooCommerce Blocksy:** `woocommerce/bmad-pos-bridge.php`\n' : ''}`, 'utf8');

  console.log(`✓ Built repository: ${repoDir}`);
}
