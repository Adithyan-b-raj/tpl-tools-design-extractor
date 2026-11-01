#!/usr/bin/env node
/**
 * Builds all 7 standalone repositories for Epic 4:
 *   1. tpl-land-saas-bento
 *   2. tpl-land-realestate
 *   3. tpl-land-d2c-gadget
 *   4. tpl-land-event-pass
 *   5. tpl-port-agency-awwwards
 *   6. tpl-port-photography
 *   7. tpl-port-architecture
 */
import fs from 'node:fs';
import path from 'node:path';
import { ARCHETYPE_PRESETS } from './extract-tokens.mjs';

const WL_SOURCE = 'C:/projects/ecomtemplatecloudflare/public/whitelabel.js';
const wlScriptContent = fs.readFileSync(WL_SOURCE, 'utf8');

const TEMPLATES = [
  {
    slug: 'tpl-land-saas-bento',
    preset: 'saas-bento',
    brand: 'NEXUS AI CLOUD',
    tagline: 'Automate your entire back-office workflow with sub-50ms autonomous edge agents.',
    heroBadge: 'RELEASE 4.2 // SUB-50MS EDGE AI RUNTIME',
    ctaPrimary: 'Calculate Your ROI & Start Free',
    ctaSecondary: 'Interactive ROI Calculator',
    category: 'Landing Page',
    isDark: true,
    itemsTitle: 'Autonomous Bento Capabilities',
    items: [
      { code: 'BENTO-01', title: 'Sub-50ms Edge Agents', sub: 'Runs across 310+ Cloudflare PoPs with zero cold starts', metric: '12ms p99 Latency', badge: 'CORE ENGINE', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80' },
      { code: 'BENTO-02', title: 'Autonomous Invoice & GST Recon', sub: 'Matches purchase orders, GRNs, and bank feeds automatically', metric: '99.4% Auto-Match', badge: 'FINOPS AI', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' },
      { code: 'BENTO-03', title: 'Natural-Language D1 SQL Copilot', sub: 'Ask revenue, cohort, and inventory questions in plain English or Malayalam', metric: 'Zero SQL Needed', badge: 'ANALYTICS', img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80' },
      { code: 'BENTO-04', title: 'Cryptographic Webhook Mesh', sub: 'HMAC-SHA256 verified event pipelines with automatic dead-letter replay', metric: '100% Idempotent', badge: 'SECURITY', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80' },
      { code: 'BENTO-05', title: 'WhatsApp & Slack Action Approvals', sub: 'Approve high-value refunds or POs with 1 tap inside WhatsApp', metric: '3x Faster Ops', badge: 'WORKFLOWS', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80' },
      { code: 'BENTO-06', title: 'SOC2 Type II & Role Guardrails', sub: 'Granular RBAC, audit logs, and zero-PII prompt redaction built in', metric: 'Enterprise Ready', badge: 'COMPLIANCE', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Interactive Team ROI & Cost-Savings Calculator',
    calcSub: 'Slide your team size and manual hours to calculate annual savings with Nexus AI.',
    calcLabelA: 'Operations Team Size (People)',
    calcMinA: 2, calcMaxA: 100, calcDefA: 12,
    calcLabelB: 'Hours Spent on Manual Data Entry / Week',
    calcMinB: 5, calcMaxB: 40, calcDefB: 18,
    calcFormula: 'team * hours * 52 * 450',
    calcUnit: '₹',
    calcResultLabel: 'Estimated Annual Productivity Savings',
    adminTitle: 'SaaS Founder Command Center — Waitlist, Trials & MRR Pipeline',
    leadCtaLabel: 'Book Live Architecture Demo / Claim Sandbox',
    adminKpis: [
      { label: 'Active Trial Workspaces', val: '148', delta: '+24% this week' },
      { label: 'Qualified Demo Pipeline', val: '₹18.4L ARR', delta: '19 Enterprise leads' },
      { label: 'Edge Agent Invocations', val: '4.2M / mo', delta: '99.99% Uptime' },
      { label: 'D1 Read Quota Used', val: '0.4%', delta: 'Edge CDN Cached' }
    ],
    seedLeads: [
      { id: 'LD-901', name: 'Rahul Menon (CTO, FinStack Kochi)', phone: '919847011223', detail: 'Team: 28 • Est. ROI: ₹1.17Cr/yr • Enterprise Plan', status: 'DEMO SCHEDULED', amount: '₹49,000/mo' },
      { id: 'LD-902', name: 'Ananya Sharma (VP Ops, CloudCart)', phone: '919895044556', detail: 'Team: 14 • Est. ROI: ₹58.9L/yr • Growth Plan', status: 'TRIAL ACTIVE', amount: '₹14,900/mo' },
      { id: 'LD-903', name: 'Vikram Nair (Founder, ShipFast India)', phone: '919447088990', detail: 'Team: 8 • Est. ROI: ₹33.6L/yr • Growth Plan', status: 'NEW WAITLIST', amount: '₹14,900/mo' }
    ]
  },
  {
    slug: 'tpl-land-realestate',
    preset: 'luxury-realestate',
    brand: 'AURUM SKY VILLAS',
    tagline: 'Waterfront 3BHK, 4BHK & Duplex Sky Villas in Marine Drive, Kochi. RERA Approved.',
    heroBadge: 'K-RERA/PRJ/ERN/084/2026 // WATERFRONT LUXURY RESIDENCES',
    ctaPrimary: 'Explore Floorplans & Calculate EMI',
    ctaSecondary: 'Schedule Chauffeur Site Visit',
    category: 'Landing Page',
    isDark: false,
    itemsTitle: 'Signature Residence Floorplans & Inventory',
    items: [
      { code: 'TOWER-A-3BHK', title: '3BHK Marina Sky Residence', sub: '2,450 Sq.Ft Super Built-Up • Private Backwater Deck + Staff Suite', metric: '₹2.85 Cr Onwards', badge: '4 UNITS LEFT', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80' },
      { code: 'TOWER-A-4BHK', title: '4BHK Imperial Waterfront Villa', sub: '3,600 Sq.Ft • Double-Height Living, Private Plunge Pool & 3 Car Parks', metric: '₹4.20 Cr Onwards', badge: 'MOST POPULAR', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
      { code: 'TOWER-A-PENT', title: '5BHK Sky Mansion Penthouse', sub: '5,100 Sq.Ft Duplex • 270° Cochin Harbour View, Private Elevator & Cinema', metric: '₹6.50 Cr Onwards', badge: 'LAST 1 UNIT', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80' },
      { code: 'AMENITY-CLUB', title: '28,000 Sq.Ft Sky Clubhouse & Marina', sub: 'Infinity Lap Pool, Private Yacht Jetty, Ayurveda Spa & Co-Working Lounge', metric: ' resident-exclusive', badge: 'LIFESTYLE', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' },
      { code: 'LOC-MARINE', title: 'Zero-Kilometer Marine Drive Address', sub: '5 mins to High Court Water Metro, 12 mins to Lulu Mall, 35 mins to COK Airport', metric: 'Prime Appreciation', badge: 'LOCATION', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80' },
      { code: 'SPEC-FINISH', title: 'Italian Statuario & German Poggenpohl', sub: 'VRV Daikin Air Conditioning, Smart Biometric Locks & Acoustic Double Glazing', metric: 'Turnkey Luxury', badge: 'SPECIFICATIONS', img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Interactive Bank Home Loan & EMI Breakdown Calculator',
    calcSub: 'Estimate your monthly EMI with SBI / HDFC / ICICI Premier Home Loan rates (8.5% p.a.).',
    calcLabelA: 'Loan Principal Amount (₹ Lakhs)',
    calcMinA: 50, calcMaxA: 500, calcDefA: 220,
    calcLabelB: 'Loan Tenure (Years)',
    calcMinB: 5, calcMaxB: 30, calcDefB: 20,
    calcFormula: 'Math.round((team * 100000 * (0.085/12) * Math.pow(1 + 0.085/12, hours*12)) / (Math.pow(1 + 0.085/12, hours*12) - 1))',
    calcUnit: '₹',
    calcResultLabel: 'Estimated Monthly Home Loan EMI (@ 8.5% p.a.)',
    adminTitle: 'Builder Sales Tower — Unit Availability Matrix & Site-Visit CRM',
    leadCtaLabel: 'Unlock RERA Floorplan PDF & Book Private Site Visit',
    adminKpis: [
      { label: 'Total Tower Inventory', val: '42 / 48 Sold', delta: '87.5% Sold Out' },
      { label: 'Site Visits This Weekend', val: '14 Scheduled', delta: '6 NRI Video Tours' },
      { label: 'Available Inventory Value', val: '₹24.8 Cr', delta: '6 Units Open' },
      { label: 'Brochure Downloads', val: '312 Verified', delta: 'WhatsApp Auto-Sent' }
    ],
    seedLeads: [
      { id: 'SV-401', name: 'Dr. Kurian Thomas (NRI — Dubai)', phone: '919847122334', detail: '4BHK Waterfront Villa (18th Floor) • Private Yacht Visit Sat 4PM', status: 'UNIT BLOCKED', amount: '₹4.20 Cr' },
      { id: 'SV-402', name: 'Meera & Sanjay Menon (Kochi)', phone: '919447233445', detail: '3BHK Marina Sky Residence • HDFC Pre-Approved Loan', status: 'SITE VISIT DONE', amount: '₹2.85 Cr' },
      { id: 'SV-403', name: 'Arjun Varma (Bangalore Tech VP)', phone: '919895344556', detail: '5BHK Sky Mansion Penthouse • Requested RERA Legal Pack', status: 'BROCHURE UNLOCKED', amount: '₹6.50 Cr' }
    ]
  },
  {
    slug: 'tpl-land-d2c-gadget',
    preset: 'd2c-gadget',
    brand: 'KINETIX // OB-01',
    tagline: 'CNC-machined planar magnetic wireless headphones with 80-hour graphene battery & lossless DSP.',
    heroBadge: 'BATCH 03 PRODUCTION // ONLY 14 OF 200 SERIALIZED UNITS REMAINING',
    ctaPrimary: 'Configure Colorway & Pre-Order',
    ctaSecondary: 'Exploded Acoustic Specs',
    category: 'Landing Page',
    isDark: false,
    itemsTitle: 'Colorways & Precision Acoustic Architecture',
    items: [
      { code: 'OB01-ORANGE', title: 'Anodised Signal Orange // Edition 01', sub: 'Bead-blasted 6061 aerospace aluminium + replaceable lambskin magnetic earpads', metric: '₹24,990 (Batch 03)', badge: '6 LEFT IN BATCH', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80' },
      { code: 'OB01-STEALTH', title: 'Stealth Matte Obsidian // Edition 02', sub: 'PVD carbon-coated stainless headband + dual-chamber 50mm planar drivers', metric: '₹24,990 (Batch 03)', badge: '5 LEFT IN BATCH', img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80' },
      { code: 'OB01-RAW', title: 'Raw Machined Titanium // Collector Edition', sub: 'Individually laser-numbered chassis + custom braided OFC balanced cable', metric: '₹28,990 (Collector)', badge: '3 LEFT IN BATCH', img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80' },
      { code: 'SPEC-DRIVER', title: '50mm Neodymium Planar Ribbon Driver', sub: '5Hz – 50,000Hz ultra-linear frequency response with <0.04% THD @ 1kHz', metric: '24-bit / 192kHz LDAC', badge: 'ACOUSTICS', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80' },
      { code: 'SPEC-BATT', title: '80-Hour Solid-State Graphene Cell', sub: 'USB-C PD fast charge: 5 minutes charge delivers 12 hours of studio playback', metric: '80 Hrs Continuous', badge: 'POWER', img: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80' },
      { code: 'SPEC-MODULAR', title: '100% Right-to-Repair Modular Assembly', sub: 'Every hinge, battery cell, and driver capsule swaps with a single Torx T6 driver', metric: '5-Year Warranty', badge: 'MODULARITY', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Express Batch Pre-Order & Studio Bundle Configurator',
    calcSub: 'Select unit quantity and optional studio accessories (15% multi-unit studio discount).',
    calcLabelA: 'Number of Serialized Units (OB-01)',
    calcMinA: 1, calcMaxA: 10, calcDefA: 1,
    calcLabelB: 'Include Balanced DAC Dongle (+₹2,500/unit)',
    calcMinB: 0, calcMaxB: 1, calcDefB: 1,
    calcFormula: 'Math.round(team * (24990 + hours * 2500) * (team >= 2 ? 0.88 : 1))',
    calcUnit: '₹',
    calcResultLabel: 'Total Pre-Order Allocation Price (Incl. GST & Free Air Express)',
    adminTitle: 'Hardware Batch Ops — Serialized Pre-Orders & Laser Engraving Queue',
    leadCtaLabel: 'Reserve Serialized Batch 03 Unit (Cashfree UPI / Card)',
    adminKpis: [
      { label: 'Batch 03 Allocation', val: '186 / 200 Reserved', delta: '93% Subscribed' },
      { label: 'Captured Pre-Order GMV', val: '₹47.8 Lakhs', delta: 'Zero Chargebacks' },
      { label: 'Custom Laser Engravings', val: '64 Queued', delta: 'CNC Line 2 Ready' },
      { label: 'Next Dispatch Window', val: 'Nov 12, 2026', delta: 'BlueDart Priority' }
    ],
    seedLeads: [
      { id: 'PO-0186', name: 'Nikhil Mathews (Mastering Engineer, Mumbai)', phone: '919820112233', detail: 'OB01-RAW Titanium • Serial #0186 • Engraving: "STUDIO KINETIC"', status: 'PAID // CNC QUEUE', amount: '₹28,990' },
      { id: 'PO-0185', name: 'Rohan Desai (Product Designer, Bangalore)', phone: '919845099887', detail: 'OB01-ORANGE Signal • Serial #0185 + Balanced DAC', status: 'PAID // PACKED', amount: '₹27,490' },
      { id: 'PO-0184', name: 'Siddharth Menon (Kochi)', phone: '919847055443', detail: 'OB01-STEALTH Obsidian • 2 Units Studio Bundle (12% Off)', status: 'DISPATCHED', amount: '₹48,382' }
    ]
  },
  {
    slug: 'tpl-land-event-pass',
    preset: 'event-pass',
    brand: 'KOCHI DESIGN & AI SUMMIT',
    tagline: '2 Days of Design Engineering, Edge AI & Creative Coding — Nov 14–15 at Grand Hyatt Bolgatty.',
    heroBadge: 'NOV 14–15, 2026 // GRAND HYATT BOLGATTY ISLAND, KOCHI // 850+ ATTENDEES',
    ctaPrimary: 'Book Pass & Generate Instant QR Ticket',
    ctaSecondary: 'Explore 2-Day Agenda',
    category: 'Landing Page',
    isDark: true,
    itemsTitle: 'Keynote Speakers, Workshops & Pass Tiers',
    items: [
      { code: 'PASS-EARLY', title: 'Standard 2-Day Conference Pass', sub: 'Full access to Main Stage keynotes, Expo Hall, Lunch & Official Afterparty', metric: '₹1,999 (Incl. GST)', badge: '42 PASSES LEFT', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80' },
      { code: 'PASS-WORKSHOP', title: 'Pro All-Access + Hands-On Workshop Pass', sub: 'Includes Day-2 Masterclasses (Cloudflare Edge AI + WebGL Shaders) + Swag Kit', metric: '₹3,499 (Incl. GST)', badge: 'BEST SELLER', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80' },
      { code: 'PASS-VIP', title: 'VIP Founder & Speaker Yacht Dinner Pass', sub: 'Front-row seating, Speaker Lounge access + Private Sunset Backwater Cruise', metric: '₹6,999 (Incl. GST)', badge: 'ONLY 8 LEFT', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
      { code: 'TALK-01', title: 'Day 1 Keynote: Sub-Zero Latency Design Systems', sub: '10:00 AM • Grand Ballroom • Building Awwwards-grade interfaces on the edge', metric: 'Main Stage', badge: 'DAY 1 // 10:00', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80' },
      { code: 'TALK-02', title: 'Day 1 Panel: Autonomous Agents in Production', sub: '02:30 PM • Grand Ballroom • Real-world D1, Workers & LLM orchestration', metric: 'AI Track', badge: 'DAY 1 // 14:30', img: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80' },
      { code: 'TALK-03', title: 'Day 2 Masterclass: Interactive WebGL & Motion', sub: '11:00 AM • Studio Hall B • Hands-on 3-hour coding lab for creative devs', metric: 'Workshop Lab', badge: 'DAY 2 // 11:00', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Group & Team Pass Calculator + Instant QR E-Ticket Generator',
    calcSub: 'Book 3+ passes for your agency or engineering team and unlock automatic 15% Group Discount.',
    calcLabelA: 'Number of Attendee Passes',
    calcMinA: 1, calcMaxA: 25, calcDefA: 3,
    calcLabelB: 'Pass Tier (1=Standard ₹1999, 2=Pro ₹3499, 3=VIP ₹6999)',
    calcMinB: 1, calcMaxB: 3, calcDefB: 2,
    calcFormula: 'Math.round(team * (hours === 1 ? 1999 : hours === 2 ? 3499 : 6999) * (team >= 3 ? 0.85 : 1))',
    calcUnit: '₹',
    calcResultLabel: 'Total Ticket Checkout (With Instant Signed QR Pass)',
    adminTitle: 'Event Box Office & Live Gate QR Check-In Scanner',
    leadCtaLabel: 'Generate Instant QR E-Ticket Pass',
    adminKpis: [
      { label: 'Total Passes Issued', val: '742 / 850', delta: '87% Capacity' },
      { label: 'Gate Checked-In Live', val: '618 Scanned', delta: 'Zero Duplicate Scans' },
      { label: 'Ticket Box Office GMV', val: '₹22.4 Lakhs', delta: 'Cashfree Instant Settle' },
      { label: 'VIP Speaker Dinner', val: '42 / 50 Confirmed', delta: '8 Seats Left' }
    ],
    seedLeads: [
      { id: 'KDS-8841', name: 'Adithyan B. Raj (Founder, Studio Arsenal)', phone: '919061902295', detail: 'VIP Founder Pass • QR Signed [SHA256-OK] • Seat A-01', status: 'CHECKED IN // GATE 1', amount: '₹6,999' },
      { id: 'KDS-8842', name: 'Devika Krishnan (Lead Product Designer)', phone: '919847012345', detail: 'Pro All-Access + Workshop Pass • QR Signed [SHA256-OK]', status: 'QR TICKET ACTIVE', amount: '₹3,499' },
      { id: 'KDS-8843', name: 'Team Zerodha Design (Group of 5)', phone: '919880112233', detail: '5x Pro Workshop Passes (15% Group Discount Applied)', status: 'CHECKED IN // VIP GATE', amount: '₹14,870' }
    ]
  },
  {
    slug: 'tpl-port-agency-awwwards',
    preset: 'agency-awwwards',
    brand: 'STUDIO MONOLITH',
    tagline: 'Independent digital product & creative engineering studio crafting high-conversion commerce and edge ERP.',
    heroBadge: 'AWWWARDS NOMINATED STUDIO // KOCHI • BANGALORE • DUBAI',
    ctaPrimary: 'Interactive Project Scope & Budget Estimator',
    ctaSecondary: 'Selected Case Studies (2024–2026)',
    category: 'Portfolio',
    isDark: false,
    itemsTitle: 'Selected Case Studies & Verified Client ROI',
    items: [
      { code: 'CASE-01', title: 'Kaka by Eliza — Omnichannel Boutique + Counter POS', sub: 'Cloudflare Edge D1 + WooCommerce Blocksy • Sub-400ms LCP & Zero-Backorder Size Matrix', metric: '+148% Mobile Checkout CR', badge: 'E-COMMERCE + POS', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80' },
      { code: 'CASE-02', title: 'Aurum Waterfront Villas — Interactive 3D & EMI Funnel', sub: 'Bespoke Architectural Launch Funnel + Builder Tower Inventory CRM', metric: '₹38 Cr Pipeline in 21 Days', badge: 'REAL ESTATE', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
      { code: 'CASE-03', title: 'Metro Supermart — Multi-Counter GST Barcode POS', sub: 'Keyboard-First 80mm Thermal Billing + Customer Udhaar Khata on Cloudflare D1', metric: '3.2s Avg Bill Time', badge: 'SMALL ERP', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80' },
      { code: 'CASE-04', title: 'Nexus Supply — Multi-Warehouse Purchase & Dealer ERP', sub: 'ERPNext Docker + Edge B2B Dealer Portal for 140+ Wholesale Distributors', metric: '99.8% Stock Accuracy', badge: 'LARGE ERP', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80' },
      { code: 'CASE-05', title: 'Aura Botanica — Ayurvedic D2C & Skin Regimen Quiz', sub: 'Shopify OS 2.0 + Cloudflare Edge Quiz Engine with Batch Expiry Tracking', metric: '₹2,840 Average Order Value', badge: 'D2C BEAUTY', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80' },
      { code: 'CASE-06', title: 'Roast & Co. — Zero-Install Table QR Menu & Live KDS', sub: 'Table-Scoped Mobile Ordering + Kitchen Display Audio Board', metric: '+34% Table Turnover', badge: 'HOSPITALITY POS', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Interactive Project Scope, Timeline & Budget Estimator',
    calcSub: 'Configure your deliverables and sprint velocity to generate an instant transparent project estimate.',
    calcLabelA: 'Scope Complexity (1=Landing Page, 2=E-Com+POS, 3=Custom Small ERP, 4=Enterprise ERP)',
    calcMinA: 1, calcMaxA: 4, calcDefA: 2,
    calcLabelB: 'Number of Custom Integrations (Payment, WhatsApp, Tally/GST, Shiprocket)',
    calcMinB: 1, calcMaxB: 6, calcDefB: 3,
    calcFormula: 'team * 25000 + hours * 8500',
    calcUnit: '₹',
    calcResultLabel: 'Estimated Turnkey Project Investment (Fixed-Scope Milestone Billing)',
    adminTitle: 'Agency Partner Hub — Client Briefs, Scope Estimates & Retainers',
    leadCtaLabel: 'Lock Scope Estimate & Request Discovery Call',
    adminKpis: [
      { label: 'Active Studio Projects', val: '6 In Flight', delta: '100% On-Schedule' },
      { label: 'Monthly Retainer MRR', val: '₹4.85 Lakhs', delta: '11 Active Clients' },
      { label: 'Open Scope Proposals', val: '₹14.2 Lakhs', delta: '4 Pending Sign-Off' },
      { label: 'Avg Client Delivery Speed', val: '11 Days', delta: 'Powered by Template Arsenal' }
    ],
    seedLeads: [
      { id: 'BRF-301', name: 'Zara Boutique (Panampilly Nagar, Kochi)', phone: '919847011223', detail: 'Scope: E-Commerce + In-Store POS (Cloudflare Edge + Cashfree + WhatsApp)', status: 'PROPOSAL SENT', amount: '₹65,000' },
      { id: 'BRF-302', name: 'Malabar Spice Exports B2B', phone: '919447099881', detail: 'Scope: B2B Wholesale Portal + Tiered MOQ + Multi-Warehouse ERP', status: 'DISCOVERY CALL', amount: '₹1,25,000' },
      { id: 'BRF-303', name: 'Dr. Nair Dental & Aesthetics', phone: '919895022334', detail: 'Scope: Clinic Token Queue TV + Patient Appointment CRM', status: 'CONTRACT SIGNED', amount: '₹55,000' }
    ]
  },
  {
    slug: 'tpl-port-photography',
    preset: 'photography-proofing',
    brand: 'LUMEN STORIES',
    tagline: 'Fine-art editorial wedding, bridal couture & destination portrait storytelling across Kerala & worldwide.',
    heroBadge: 'EDITORIAL WEDDING & COMMERCIAL PHOTOGRAPHY // CLIENT PROOFING VAULT',
    ctaPrimary: 'Open Client Album Proofing (PIN: 2026)',
    ctaSecondary: 'Calculate Wedding Package Quote',
    category: 'Portfolio',
    isDark: false,
    itemsTitle: 'Editorial Galleries & Interactive Client Proofing Vault (Click ♥ to Shortlist for Album)',
    items: [
      { code: 'IMG-9801', title: 'Meera & Aditya — Backwater Mandapam at Kumarakom', sub: 'Shot on Medium Format Fujifilm GFX 100 II • Golden Hour Bridal Portrait', metric: '♥ 142 Client Favorites', badge: 'ROYAL WEDDING', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' },
      { code: 'IMG-9802', title: 'Sabyasachi & Kasavu Heritage Bridal Editorial', sub: 'Fort Kochi Bastion Bungalow • Natural Window Light Portrait Series', metric: '♥ 98 Client Favorites', badge: 'BRIDAL COUTURE', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80' },
      { code: 'IMG-9803', title: 'Nisha & Roshan — Monsoon Haldi & Sangeet Candids', sub: 'Bolgatty Palace Lawns • Unscripted Documentary Storytelling', metric: '♥ 116 Client Favorites', badge: 'CANDID MOMENTS', img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80' },
      { code: 'IMG-9804', title: 'Munnar Tea Estate Intimate Elopement Film', sub: '4K Anamorphic Cinema + Aerial FPV Drone Sequence', metric: '♥ 84 Client Favorites', badge: 'CINEMA FILM', img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80' },
      { code: 'IMG-9805', title: 'Zara Handloom Lookbook — Commercial Campaign', sub: 'Studio Strobe + Color-Calibrated E-Commerce Catalog Production', metric: '♥ 64 Client Favorites', badge: 'COMMERCIAL', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80' },
      { code: 'IMG-9806', title: 'Handcrafted Italian Linen Layflat Heirloom Album', sub: 'Archival 40-Spread Museum Grade Print on Hahnemühle FineArt Paper', metric: 'Included in Luxury Tier', badge: 'HEIRLOOM PRINT', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Interactive Wedding Coverage & Heirloom Album Package Estimator',
    calcSub: 'Customize coverage days, cinematography crew size, and Italian FineArt albums.',
    calcLabelA: 'Number of Wedding / Event Days',
    calcMinA: 1, calcMaxA: 5, calcDefA: 2,
    calcLabelB: 'Crew Tier (1=Candid Photo Only, 2=Photo + 4K Cinema, 3=Full Luxury + Drone + 2 Albums)',
    calcMinB: 1, calcMaxB: 3, calcDefB: 2,
    calcFormula: 'team * 45000 + hours * 35000',
    calcUnit: '₹',
    calcResultLabel: 'Estimated Photography & Cinema Package Investment',
    adminTitle: 'Studio Proofing Vault — Client Hearted Photos & Shoot Bookings',
    leadCtaLabel: 'Check Wedding Date Availability & Lock Quote',
    adminKpis: [
      { label: 'Active Client Proofing Vaults', val: '18 Galleries', delta: 'PIN-Protected' },
      { label: 'Photos Shortlisted Today', val: '412 ♥ Hearts', delta: 'Ready for Album Layout' },
      { label: 'Confirmed Shoot Dates (Season)', val: '24 Weddings', delta: '₹36.4L Booked' },
      { label: 'Pending Date Inquiries', val: '7 Couples', delta: 'WhatsApp Quote Sent' }
    ],
    seedLeads: [
      { id: 'ALB-2026', name: 'Meera & Aditya (Kumarakom Wedding)', phone: '919847011223', detail: 'PIN: 2026 • Selected 85/400 Photos for Italian Album • 2 Days Luxury Crew', status: 'PROOFING COMPLETE', amount: '₹1,95,000' },
      { id: 'INQ-702', name: 'Dr. Sneha & Gautam (Dec 18–19 Guruvayur + Kochi)', phone: '919447033445', detail: '2 Days Photo + 4K Cinema + Drone • Requested Date Hold', status: 'DATE AVAILABLE', amount: '₹1,60,000' },
      { id: 'INQ-703', name: 'Kaka by Eliza — Festive Lookbook Shoot', phone: '919061902295', detail: '1 Day Commercial Editorial + 30 Retouched E-Com Frames', status: 'ADVANCE PAID', amount: '₹45,000' }
    ]
  },
  {
    slug: 'tpl-port-architecture',
    preset: 'architecture-studio',
    brand: 'ATELIER VAASTU',
    tagline: 'Tropical modernist architecture, courtyard residences & turnkey luxury interiors across Kerala.',
    heroBadge: 'COA REGISTERED PRACTICE // ARCHITECTURE • TURNKEY INTERIORS • LANDSCAPE',
    ctaPrimary: 'Turnkey Sq.Ft Cost & BoQ Estimator',
    ctaSecondary: 'Explore Built Projects',
    category: 'Portfolio',
    isDark: false,
    itemsTitle: 'Built Residences, Spatial Transformations & Materiality',
    items: [
      { code: 'ARCH-01', title: 'The Laterite Courtyard House — Edapally, Kochi', sub: '4,200 Sq.Ft Tropical Modernist Residence • Passive Cross-Ventilation & Rain Nadumuttam', metric: 'Completed 2025 • ₹1.85 Cr', badge: 'RESIDENTIAL VILLA', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
      { code: 'ARCH-02', title: 'Backwater Cantilever Pavilion — Alleppey', sub: '3,800 Sq.Ft Waterfront Home • Reclaimed Nilambur Teak, Exposed Concrete &Athangudi Tile', metric: 'Completed 2025 • ₹2.10 Cr', badge: 'WATERFRONT', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80' },
      { code: 'ARCH-03', title: 'Sky Villa Turnkey Interior — Marine Drive', sub: '3,100 Sq.Ft Apartment Transformation • Fluted Walnut Joinery, Brass Inlay & Smart DALI Lighting', metric: 'Turnkey 75 Days • ₹68L', badge: 'LUXURY INTERIOR', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80' },
      { code: 'ARCH-04', title: 'Aura Flagship Retail & Spa — Panampilly Nagar', sub: '1,850 Sq.Ft Adaptive Reuse Heritage Bungalow • Lime Plaster & Terracotta Vaults', metric: 'Commercial • ₹42L', badge: 'RETAIL & SPA', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80' },
      { code: 'ARCH-05', title: 'Before / After: 1980s Ancestral Tharavadu Restoration', sub: 'Structural timber conservation paired with minimalist glass garden pavilion', metric: 'Heritage Conservation', badge: 'BEFORE / AFTER', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80' },
      { code: 'ARCH-06', title: 'Material Library: Nilambur Teak, Laterite & Kota Stone', sub: 'Locally quarried low-embodied-energy materials aged for tropical monsoons', metric: '100% Climate Responsive', badge: 'MATERIAL BOARD', img: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80' }
    ],
    calcTitle: 'Interactive Sq.Ft × Finish Grade Turnkey BoQ Budget Estimator',
    calcSub: 'Slide your built-up carpet area and material finish grade to calculate Civil, Joinery, and MEP costs.',
    calcLabelA: 'Carpet / Built-Up Area (Sq.Ft)',
    calcMinA: 800, calcMaxA: 6000, calcDefA: 2400,
    calcLabelB: 'Finish Grade (1=Essential ₹1,850/sqft, 2=Signature Teak ₹2,650/sqft, 3=Collector Marble ₹3,800/sqft)',
    calcMinB: 1, calcMaxB: 3, calcDefB: 2,
    calcFormula: 'team * (hours === 1 ? 1850 : hours === 2 ? 2650 : 3800)',
    calcUnit: '₹',
    calcResultLabel: 'Estimated Turnkey Interior / Construction Budget (Itemized BoQ Ready)',
    adminTitle: 'Principal Architect Studio Hub — BoQ Estimates & Site Milestones',
    leadCtaLabel: 'Download Itemized BoQ Breakdown & Book Site Consultation',
    adminKpis: [
      { label: 'Active Turnkey Sites', val: '9 Residences', delta: 'Kochi • Thrissur • Calicut' },
      { label: 'BoQ Estimates Generated', val: '84 This Month', delta: 'Avg Area: 2,650 Sq.Ft' },
      { label: 'Contracted Project Value', val: '₹11.4 Cr', delta: '3 New Handovers' },
      { label: 'Site Milestone Adherence', val: '96.4%', delta: 'Weekly Drone Logs' }
    ],
    seedLeads: [
      { id: 'BOQ-501', name: 'Mr. & Mrs. Verghese (Kakkanad 4BHK Villa)', phone: '919847033221', detail: '3,200 Sq.Ft • Signature Teak Grade • Civil + Turnkey Interiors', status: 'SITE VISIT SCHEDULED', amount: '₹84,80,000' },
      { id: 'BOQ-502', name: 'Dr. Fathima Rasheed (Calicut Courtyard Home)', phone: '919447188992', detail: '4,500 Sq.Ft • Collector Marble & Teak Grade • Full Architecture + BoQ', status: '3D CONCEPT STAGE', amount: '₹1,71,00,000' },
      { id: 'BOQ-503', name: 'Rohan & Diya (Marine Drive 3BHK Apartment)', phone: '919895077665', detail: '2,100 Sq.Ft • Essential Modernist Interior Package', status: 'BOQ SENT', amount: '₹38,85,000' }
    ]
  }
];

function buildThemeCss(preset) {
  return `/* Extracted via tpl-tools-design-extractor (${preset.name}) */
:root {
  --font-primary: ${preset.fontPrimary};
  --font-accent: ${preset.fontAccent};
  --color-primary: ${preset.colorPrimary};
  --brand-primary: var(--color-primary);
  --color-dark: ${preset.colorDark};
  --brand-dark: var(--color-dark);
  --bg-main: ${preset.bgMain};
  --bg-canvas: ${preset.bgCanvas};
  --bg-sand: var(--bg-canvas);
  --border-color: ${preset.borderColor};
  --grid-gap-desktop: ${preset.gridGapDesktop};
  --grid-gap-mobile: ${preset.gridGapMobile};
  --radius: ${preset.radius};
  --ease-out-expo: ${preset.easeOutExpo};
}
`;
}

function buildIndexHtml(tpl, preset) {
  const textMain = tpl.isDark ? '#F8FAFC' : 'var(--color-dark)';
  const textMuted = tpl.isDark ? '#94A3B8' : '#64748B';
  const cardBg = tpl.isDark ? '#121521' : '#FFFFFF';
  const headerBg = tpl.isDark ? 'rgba(9, 10, 15, 0.88)' : 'rgba(255, 255, 255, 0.92)';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${tpl.brand} — ${tpl.category} Showcase</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${preset.googleFontsUrl}" rel="stylesheet">
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
      font-weight: 600;
      letter-spacing: 1px;
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
      padding: 16px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .brand-logo {
      font-family: var(--font-accent);
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: ${textMain};
      text-decoration: none;
    }
    .brand-logo span {
      font-family: var(--font-primary);
      color: var(--color-primary);
      font-size: 12px;
      letter-spacing: 2px;
      display: block;
      margin-top: -2px;
    }
    nav.desktop-nav {
      display: flex;
      gap: 24px;
      align-items: center;
    }
    nav.desktop-nav a {
      color: ${textMain};
      text-decoration: none;
      font-size: 13px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.6px;
    }
    nav.desktop-nav a:hover { color: var(--color-primary); }
    .btn-primary {
      background: var(--color-primary);
      color: #FFFFFF;
      border: none;
      padding: 12px 22px;
      border-radius: var(--radius);
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: transform 0.2s var(--ease-out-expo), opacity 0.2s;
    }
    .btn-primary:hover { transform: translateY(-2px); opacity: 0.94; }
    .btn-outline {
      background: transparent;
      color: ${textMain};
      border: 1px solid var(--border-color);
      padding: 12px 22px;
      border-radius: var(--radius);
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      cursor: pointer;
      text-decoration: none;
    }
    .hero-banner {
      padding: 72px 24px 64px;
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
      letter-spacing: 1.2px;
      padding: 6px 14px;
      border-radius: 999px;
      margin-bottom: 20px;
    }
    .hero-banner h1 {
      font-family: var(--font-accent);
      font-size: clamp(34px, 5vw, 62px);
      line-height: 1.08;
      margin-bottom: 18px;
      letter-spacing: -0.5px;
    }
    .hero-banner p {
      font-size: 17px;
      color: ${textMuted};
      max-width: 680px;
      margin: 0 auto 28px;
    }
    .hero-actions {
      display: flex;
      gap: 14px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .section-wrap {
      max-width: 1240px;
      margin: 0 auto;
      padding: 48px 24px;
    }
    .section-head {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 28px;
      gap: 16px;
      flex-wrap: wrap;
    }
    .section-head h2 {
      font-family: var(--font-accent);
      font-size: 30px;
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
      transition: transform 0.25s var(--ease-out-expo), border-color 0.25s;
    }
    .bento-card:hover {
      transform: translateY(-4px);
      border-color: var(--color-primary);
    }
    .bento-img-wrap {
      height: 220px;
      position: relative;
      background: var(--bg-canvas);
      overflow: hidden;
    }
    .bento-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s var(--ease-out-expo);
    }
    .bento-card:hover .bento-img-wrap img { transform: scale(1.04); }
    .bento-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      background: var(--color-primary);
      color: #FFF;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.8px;
      padding: 4px 9px;
      border-radius: var(--radius);
      text-transform: uppercase;
    }
    .bento-body {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .bento-code {
      font-size: 11px;
      color: ${textMuted};
      font-weight: 600;
      margin-bottom: 4px;
    }
    .bento-title {
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .bento-sub {
      font-size: 13px;
      color: ${textMuted};
      margin-bottom: 16px;
      flex: 1;
    }
    .bento-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 12px;
      border-top: 1px solid var(--border-color);
      font-size: 13px;
      font-weight: 700;
      color: var(--color-primary);
    }
    /* Interactive Calculator Box */
    .calc-panel {
      background: var(--bg-canvas);
      border: 1px solid var(--border-color);
      border-radius: var(--radius);
      padding: 36px;
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 32px;
      align-items: center;
    }
    .slider-group { margin-bottom: 20px; }
    .slider-group label {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .slider-group input[type="range"] {
      width: 100%;
      accent-color: var(--color-primary);
      cursor: pointer;
    }
    .calc-result-card {
      background: ${cardBg};
      border: 2px solid var(--color-primary);
      border-radius: var(--radius);
      padding: 28px;
      text-align: center;
    }
    .calc-result-val {
      font-family: var(--font-accent);
      font-size: 42px;
      font-weight: 700;
      color: var(--color-primary);
      margin: 8px 0 16px;
    }
    /* Lead Capture Modal */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.68);
      backdrop-filter: blur(4px);
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
      max-width: 500px;
      width: 100%;
      padding: 28px;
      position: relative;
    }
    .form-field { margin-bottom: 14px; }
    .form-field label {
      display: block;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 5px;
      color: ${textMuted};
    }
    .form-field input, .form-field select, .form-field textarea {
      width: 100%;
      padding: 10px 12px;
      background: var(--bg-main);
      color: ${textMain};
      border: 1px solid var(--border-color);
      border-radius: var(--radius);
      font-family: inherit;
      font-size: 14px;
    }
    .wa-float-btn {
      position: fixed;
      bottom: 24px;
      right: 20px;
      width: 52px;
      height: 52px;
      background: #25D366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
      z-index: 500;
      text-decoration: none;
      color: #FFF;
      font-size: 24px;
    }
    .admin-pill-floating {
      position: fixed;
      bottom: 24px;
      left: 24px;
      background: var(--color-dark);
      color: #FFF;
      padding: 10px 18px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 600;
      text-decoration: none;
      z-index: 500;
      border: 1px solid rgba(255,255,255,0.18);
    }
    @media (max-width: 860px) {
      .bento-grid { grid-template-columns: 1fr; gap: var(--grid-gap-mobile); }
      .calc-panel { grid-template-columns: 1fr; padding: 22px; }
      nav.desktop-nav { display: none; }
      .admin-pill-floating { display: none; }
    }
  </style>
</head>
<body>
  <div class="top-bar">${tpl.heroBadge}</div>

  <header>
    <div class="nav-container">
      <a href="#" class="brand-logo">${tpl.brand}</a>
      <nav class="desktop-nav">
        <a href="#showcase">Showcase</a>
        <a href="#calculator">Interactive Calculator</a>
        <a href="admin.html">Admin Command Center</a>
      </nav>
      <button class="btn-primary" onclick="openLeadModal()">${tpl.ctaPrimary}</button>
    </div>
  </header>

  <section class="hero-banner">
    <span class="hero-pill">${tpl.heroBadge}</span>
    <h1 data-wl-brand>${tpl.brand}</h1>
    <p data-wl-tagline>${tpl.tagline}</p>
    <div class="hero-actions">
      <button class="btn-primary" onclick="openLeadModal()">${tpl.ctaPrimary}</button>
      <a href="#calculator" class="btn-outline">${tpl.ctaSecondary}</a>
    </div>
  </section>

  <section class="section-wrap" id="showcase">
    <div class="section-head">
      <div>
        <h2>${tpl.itemsTitle}</h2>
        <p style="font-size:14px;color:${textMuted};">Click any card to pre-fill your custom inquiry or selection.</p>
      </div>
      <div id="drawerWaText" style="font-size:12px;color:${textMuted};">WhatsApp: +91 90619 02295</div>
    </div>

    <div class="bento-grid" id="bentoGrid"></div>
  </section>

  <section class="section-wrap" id="calculator">
    <div class="calc-panel">
      <div>
        <h2 style="font-family:var(--font-accent);font-size:28px;margin-bottom:8px;">${tpl.calcTitle}</h2>
        <p style="font-size:14px;color:${textMuted};margin-bottom:24px;">${tpl.calcSub}</p>

        <div class="slider-group">
          <label>
            <span>${tpl.calcLabelA}</span>
            <strong id="valSliderA" style="color:var(--color-primary);">${tpl.calcDefA}</strong>
          </label>
          <input type="range" id="sliderA" min="${tpl.calcMinA}" max="${tpl.calcMaxA}" value="${tpl.calcDefA}" oninput="recalc()">
        </div>

        <div class="slider-group">
          <label>
            <span>${tpl.calcLabelB}</span>
            <strong id="valSliderB" style="color:var(--color-primary);">${tpl.calcDefB}</strong>
          </label>
          <input type="range" id="sliderB" min="${tpl.calcMinB}" max="${tpl.calcMaxB}" value="${tpl.calcDefB}" oninput="recalc()">
        </div>
      </div>

      <div class="calc-result-card">
        <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:${textMuted};">
          ${tpl.calcResultLabel}
        </div>
        <div class="calc-result-val" id="calcOutput">₹0</div>
        <button class="btn-primary" style="width:100%;justify-content:center;" onclick="openLeadModalWithCalc()">
          ${tpl.leadCtaLabel}
        </button>
      </div>
    </div>
  </section>

  <!-- Interactive Lead / Booking / Proofing Modal -->
  <div class="modal-overlay" id="leadModal">
    <div class="modal-box">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <h3 style="font-family:var(--font-accent);font-size:22px;">${tpl.leadCtaLabel}</h3>
        <button onclick="closeLeadModal()" style="background:none;border:none;color:inherit;font-size:18px;cursor:pointer;">✕</button>
      </div>
      <form onsubmit="submitLead(event)">
        <div class="form-field">
          <label>Full Name / Organization *</label>
          <input type="text" id="leadName" required placeholder="e.g. Rahul Menon">
        </div>
        <div class="form-field">
          <label>WhatsApp / Mobile Number *</label>
          <input type="tel" id="leadPhone" required placeholder="919876543210">
        </div>
        <div class="form-field">
          <label>Selected Configuration & Estimate</label>
          <input type="text" id="leadDetail" readonly>
        </div>
        <button type="submit" class="btn-primary" style="width:100%;justify-content:center;" id="leadSubmitBtn">
          Confirm & Sync to Admin Hub
        </button>
      </form>
      <div id="leadSuccessBox" style="display:none;margin-top:16px;padding:14px;background:var(--bg-canvas);border:1px solid var(--color-primary);border-radius:var(--radius);font-size:13px;"></div>
    </div>
  </div>

  <a href="admin.html" class="admin-pill-floating">⚙️ Open Admin Command Center</a>
  <a id="floatingWaBtn" href="https://wa.me/919061902295" target="_blank" class="wa-float-btn" title="Chat on WhatsApp">💬</a>

  <script>
    const ITEMS = ${JSON.stringify(tpl.items, null, 2)};
    let selectedItemTitle = ITEMS[0].title;
    let currentCalcFormatted = '';

    function renderGrid() {
      const grid = document.getElementById('bentoGrid');
      grid.innerHTML = ITEMS.map((item, idx) => \`
        <article class="bento-card" onclick="selectCard(\${idx})">
          <div class="bento-img-wrap">
            <img src="\${item.img}" alt="\${item.title}" loading="lazy">
            <span class="bento-badge">\${item.badge}</span>
          </div>
          <div class="bento-body">
            <div class="bento-code">\${item.code}</div>
            <div class="bento-title">\${item.title}</div>
            <div class="bento-sub">\${item.sub}</div>
            <div class="bento-footer">
              <span>\${item.metric}</span>
              <span>Select →</span>
            </div>
          </div>
        </article>
      \`).join('');
    }

    function recalc() {
      const team = Number(document.getElementById('sliderA').value);
      const hours = Number(document.getElementById('sliderB').value);
      document.getElementById('valSliderA').textContent = team;
      document.getElementById('valSliderB').textContent = hours;
      const raw = ${tpl.calcFormula};
      currentCalcFormatted = '${tpl.calcUnit}' + Number(raw).toLocaleString('en-IN');
      document.getElementById('calcOutput').textContent = currentCalcFormatted;
    }

    function selectCard(idx) {
      selectedItemTitle = ITEMS[idx].title + ' (' + ITEMS[idx].metric + ')';
      openLeadModalWithCalc();
    }

    function openLeadModal() {
      document.getElementById('leadDetail').value = selectedItemTitle + ' • Est: ' + currentCalcFormatted;
      document.getElementById('leadSuccessBox').style.display = 'none';
      document.getElementById('leadModal').classList.add('open');
    }

    function openLeadModalWithCalc() {
      openLeadModal();
    }

    function closeLeadModal() {
      document.getElementById('leadModal').classList.remove('open');
    }

    async function submitLead(e) {
      e.preventDefault();
      const name = document.getElementById('leadName').value.trim();
      const phone = document.getElementById('leadPhone').value.trim();
      const detail = document.getElementById('leadDetail').value.trim();
      const entry = {
        id: 'REQ-' + Math.floor(1000 + Math.random() * 9000),
        name,
        phone,
        detail,
        status: 'NEW INQUIRY',
        amount: currentCalcFormatted,
        createdAt: new Date().toISOString()
      };

      try {
        const stored = JSON.parse(localStorage.getItem('bmad_leads_${tpl.slug}') || '[]');
        stored.unshift(entry);
        localStorage.setItem('bmad_leads_${tpl.slug}', JSON.stringify(stored));
        fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(entry)
        }).catch(() => {});
      } catch (err) {}

      const box = document.getElementById('leadSuccessBox');
      box.style.display = 'block';
      box.innerHTML = '✓ <strong>Confirmed (' + entry.id + ')!</strong> Your request is live in the <a href="admin.html" style="color:var(--color-primary);font-weight:700;">Admin Command Center</a>.';
    }

    renderGrid();
    recalc();
  </script>
</body>
</html>`;
}

function buildAdminHtml(tpl, preset) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${tpl.brand} — Admin Command Center</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${preset.googleFontsUrl}" rel="stylesheet">
  <link rel="stylesheet" href="theme-tokens.css">
  <script src="whitelabel.js"></script>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: var(--font-primary);
      background: #F4F5F7;
      color: #111827;
      display: flex;
      min-height: 100vh;
    }
    aside.admin-sidebar {
      width: 250px;
      background: var(--brand-dark);
      color: #FFFFFF;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex-shrink: 0;
    }
    .sidebar-brand-title {
      font-family: var(--font-accent);
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(255,255,255,0.12);
    }
    .sidebar-brand-title span { color: var(--brand-primary); }
    .nav-item {
      padding: 10px 12px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      color: #CBD5E1;
    }
    .nav-item.active, .nav-item:hover {
      background: var(--brand-primary);
      color: #FFFFFF;
    }
    main {
      flex: 1;
      padding: 28px;
      overflow-y: auto;
    }
    .top-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
      gap: 12px;
      flex-wrap: wrap;
    }
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 24px;
    }
    .kpi-card {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 18px;
    }
    .kpi-label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748B; }
    .kpi-val { font-size: 24px; font-weight: 700; margin: 6px 0 4px; color: #0F172A; }
    .kpi-delta { font-size: 11px; font-weight: 600; color: var(--brand-primary); }
    .card-box {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
    }
    table { width: 100%; border-collapse: collapse; font-size: 13px; }
    th, td { text-align: left; padding: 12px 10px; border-bottom: 1px solid #E2E8F0; }
    th { font-size: 11px; text-transform: uppercase; color: #64748B; }
    .status-pill {
      display: inline-block;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
      background: #FEF3EE;
      color: var(--brand-primary);
    }
    .btn-sm {
      background: var(--brand-primary);
      color: #FFF;
      border: none;
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
    }
    @media (max-width: 860px) {
      body { flex-direction: column; }
      aside.admin-sidebar { width: 100%; }
      .kpi-grid { grid-template-columns: 1fr 1fr; }
    }
  </style>
</head>
<body>
  <aside class="admin-sidebar">
    <div class="sidebar-brand-title">${tpl.brand} <span>Hub</span></div>
    <div class="nav-item active">📊 Pipeline & Operations</div>
    <div class="nav-item" onclick="window.location.href='index.html'">👁️ View Public Showcase</div>
    <div style="margin-top:auto;padding-top:16px;border-top:1px solid rgba(255,255,255,0.12);font-size:11px;color:#94A3B8;">
      WhatsApp Target:
      <input type="text" id="adminWaInput" data-wl-wa value="919061902295" style="width:100%;margin-top:6px;padding:6px;border-radius:4px;border:none;font-size:12px;">
    </div>
  </aside>

  <main>
    <div class="top-bar">
      <div>
        <div class="mobile-brand" style="font-size:12px;font-weight:700;color:var(--brand-primary);text-transform:uppercase;">${tpl.brand}</div>
        <h1 style="font-size:22px;">${tpl.adminTitle}</h1>
      </div>
      <a href="index.html" class="btn-sm">← Back to Customer View</a>
    </div>

    <div class="kpi-grid">
      ${tpl.adminKpis.map(k => `
        <div class="kpi-card">
          <div class="kpi-label">${k.label}</div>
          <div class="kpi-val">${k.val}</div>
          <div class="kpi-delta">${k.delta}</div>
        </div>
      `).join('')}
    </div>

    <div class="card-box">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <h2 style="font-size:16px;">Live Incoming Leads, Bookings & Selections</h2>
        <button class="btn-sm" onclick="addQuickEntry()">+ New Counter / Manual Entry</button>
      </div>
      <div style="overflow-x:auto;">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Client / Prospect</th>
              <th>Configuration / Notes</th>
              <th>Value</th>
              <th>Status</th>
              <th>WhatsApp Action</th>
            </tr>
          </thead>
          <tbody id="leadsTableBody"></tbody>
        </table>
      </div>
    </div>
  </main>

  <script>
    const SEED_LEADS = ${JSON.stringify(tpl.seedLeads, null, 2)};

    function getLeads() {
      try {
        const local = JSON.parse(localStorage.getItem('bmad_leads_${tpl.slug}') || '[]');
        return [...local, ...SEED_LEADS];
      } catch (e) {
        return SEED_LEADS;
      }
    }

    function renderLeads() {
      const rows = getLeads();
      const tbody = document.getElementById('leadsTableBody');
      tbody.innerHTML = rows.map((r, idx) => \`
        <tr>
          <td><strong>\${r.id}</strong></td>
          <td>\${r.name}<br><span style="font-size:11px;color:#64748B;">+\${r.phone}</span></td>
          <td>\${r.detail}</td>
          <td><strong>\${r.amount}</strong></td>
          <td><span class="status-pill" onclick="cycleStatus(\${idx})" style="cursor:pointer;" title="Click to advance status">\${r.status}</span></td>
          <td>
            <a class="btn-sm" target="_blank" href="https://wa.me/\${String(r.phone).replace(/[^0-9]/g,'')}?text=\${encodeURIComponent('Hello ' + r.name + ', following up regarding ' + r.id + ' (' + r.detail + ')')}">
              💬 WhatsApp
            </a>
          </td>
        </tr>
      \`).join('');
    }

    function addQuickEntry() {
      const name = prompt('Client Name:');
      if (!name) return;
      const detail = prompt('Requirement / Unit / Package:', '${tpl.items[0].title}');
      const amount = prompt('Estimated Value:', '₹45,000');
      const local = JSON.parse(localStorage.getItem('bmad_leads_${tpl.slug}') || '[]');
      local.unshift({
        id: 'ADM-' + Math.floor(1000 + Math.random() * 9000),
        name,
        phone: document.getElementById('adminWaInput').value || '919061902295',
        detail: detail || 'Walk-in Inquiry',
        amount: amount || '₹0',
        status: 'APPROVED'
      });
      localStorage.setItem('bmad_leads_${tpl.slug}', JSON.stringify(local));
      renderLeads();
    }

    renderLeads();
  </script>
</body>
</html>`;
}

function buildApiWorker(tpl) {
  return `export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.pathname === '/api/leads' && context.request.method === 'GET') {
    return new Response(JSON.stringify(${JSON.stringify(tpl.seedLeads)}), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=30, s-maxage=60, stale-while-revalidate=120'
      }
    });
  }
  if (url.pathname === '/api/leads' && context.request.method === 'POST') {
    const body = await context.request.json().catch(() => ({}));
    return new Response(JSON.stringify({ ok: true, id: body.id || 'REQ-LIVE' }), {
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
    });
  }
  return new Response(JSON.stringify({ service: '${tpl.slug}', status: 'ok' }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
`;
}

for (const tpl of TEMPLATES) {
  const preset = ARCHETYPE_PRESETS[tpl.preset];
  const repoDir = path.join('C:/projects', tpl.slug);
  const pubDir = path.join(repoDir, 'public');
  const fnDir = path.join(repoDir, 'functions', 'api');

  fs.mkdirSync(pubDir, { recursive: true });
  fs.mkdirSync(fnDir, { recursive: true });

  fs.writeFileSync(path.join(pubDir, 'whitelabel.js'), wlScriptContent, 'utf8');
  fs.writeFileSync(path.join(pubDir, 'theme-tokens.css'), buildThemeCss(preset), 'utf8');
  fs.writeFileSync(path.join(pubDir, 'index.html'), buildIndexHtml(tpl, preset), 'utf8');
  fs.writeFileSync(path.join(pubDir, 'admin.html'), buildAdminHtml(tpl, preset), 'utf8');
  fs.writeFileSync(path.join(fnDir, '[[route]].js'), buildApiWorker(tpl), 'utf8');
  fs.writeFileSync(path.join(repoDir, 'wrangler.toml'), `name = "${tpl.slug}"\ncompatibility_date = "2024-11-01"\npages_build_output_dir = "public"\n`, 'utf8');
  fs.writeFileSync(path.join(repoDir, 'schema.sql'), `CREATE TABLE IF NOT EXISTS leads (\n  id TEXT PRIMARY KEY,\n  name TEXT NOT NULL,\n  phone TEXT NOT NULL,\n  detail TEXT,\n  amount TEXT,\n  status TEXT DEFAULT 'NEW',\n  created_at DATETIME DEFAULT CURRENT_TIMESTAMP\n);\n`, 'utf8');
  fs.writeFileSync(path.join(repoDir, 'README.md'), `# ${tpl.brand} (\`${tpl.slug}\`)\n\n${tpl.tagline}\n\n- **Live Customer Showcase:** \`https://${tpl.slug}.pages.dev/\`\n- **Live Admin Command Center:** \`https://${tpl.slug}.pages.dev/admin.html\`\n- **White-Label Support:** \`?brand=Name&primary=HEX&wa=91XXXXXXXXXX\`\n`, 'utf8');

  console.log(`✓ Built Epic 4 repository: ${repoDir}`);
}
