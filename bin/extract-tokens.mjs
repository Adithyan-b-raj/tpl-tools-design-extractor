#!/usr/bin/env node
/**
 * BMAD Awwwards & Reference Design-Token + Layout Blueprint Extractor CLI
 * (tpl-tools-design-extractor — Epic 2 Stories 2.1 & 2.2)
 *
 * Commands:
 *   node bin/extract-tokens.mjs extract [--url <https://...>] [--preset <archetype>] [--name <slug>] [--out <dir>]
 *   node bin/extract-tokens.mjs scrape-all [--out <dir>]
 *   node bin/extract-tokens.mjs scaffold --slug <tpl-...> [--preset <archetype>] [--out <dir>]
 *
 * Legal & Asset Hygiene (Constraint C4) + Zero Lookalike Clones (Constraint C5 / R8):
 *   Captures structural CSS metrics, font pairings, color harmonies, grid gaps,
 *   border radii, shadow tokens, and distinct DOM layout blueprints across 18 movements.
 */

import fs from 'node:fs';
import path from 'node:path';

export const ARCHETYPE_PRESETS = {
  'tpl-01-boutique-editorial': {
    movementId: 'A',
    movementName: 'Editorial Luxury Warmth',
    name: 'Editorial Boutique & Ethnic Couture (Kaka by Eliza / Khaite / Jacquemus)',
    reference: 'https://kakabyeliza.com',
    secondaryReferences: ['https://khaite.com', 'https://www.jacquemus.com'],
    fontPrimary: "'Jost', sans-serif",
    fontAccent: "'GFS Didot', serif",
    fontMono: "'JetBrains Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=GFS+Didot&family=JetBrains+Mono:wght@400;500&family=Jost:wght@300;400;500;600;700&display=swap',
    colorPrimary: '#f76b6a',
    colorDark: '#161616',
    bgMain: '#FFFDF9',
    bgCanvas: '#FAF6F2',
    borderColor: '#EAE3DC',
    gridGapDesktop: '35px 20px',
    gridGapMobile: '20px 15px',
    radius: '2px',
    borderWeight: '1px solid #EAE3DC',
    shadowToken: '0 10px 30px rgba(22, 22, 22, 0.05)',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    layoutBlueprint: {
      navPattern: 'Centered serif wordmark + minimal utility links',
      heroPattern: 'Editorial lookbook banner + horizontal category circles',
      gridPattern: '4-column portrait editorial product cards (3:4 aspect)',
      signatureComponent: 'Slide-over bag + WhatsApp concierge checkout'
    }
  },
  'tpl-02-neobrutalism-streetwear': {
    movementId: 'B',
    movementName: 'Raw Acid Neo-Brutalism',
    name: 'Streetwear Flash-Drop & Hype Vault (Palace / Gumroad / Balenciaga / MSCHF)',
    reference: 'https://gumroad.com',
    secondaryReferences: ['https://www.palaceskateboards.com', 'https://www.balenciaga.com', 'https://config.figma.com'],
    fontPrimary: "'Space Grotesk', sans-serif",
    fontAccent: "'Syne', sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700;800&family=Space+Grotesk:wght@500;700&family=Syne:wght@700;800&display=swap',
    colorPrimary: '#FF2A00',
    colorDark: '#0A0A0A',
    bgMain: '#F4F4F0',
    bgCanvas: '#E5FF00',
    borderColor: '#0A0A0A',
    gridGapDesktop: '0px',
    gridGapMobile: '0px',
    radius: '0px',
    borderWeight: '3px solid #0A0A0A',
    shadowToken: '6px 6px 0px #0A0A0A',
    easeOutExpo: 'steps(4, end)',
    layoutBlueprint: {
      navPattern: 'Dual acid-yellow marquee ticker + exposed 4-cell brutalist top bar',
      heroPattern: '2-column brutalist split: oversized stencil manifesto + live millisecond drop countdown vault',
      gridPattern: 'Exposed 3px-bordered industrial cell matrix with 6px hard offset hover shadows',
      signatureComponent: 'Interactive S/M/L/XL stock matrix + Queue Pass / Raffle Locker'
    }
  },
  'tpl-03-apothecary-minimal': {
    movementId: 'C',
    movementName: 'Quiet Apothecary Minimalism',
    name: 'Clinical Botanical & Quiet Luxury Apothecary (Aesop / Byredo / Le Labo)',
    reference: 'https://www.aesop.com',
    secondaryReferences: ['https://www.byredo.com', 'https://www.lelabofragrances.com'],
    fontPrimary: "'Plus Jakarta Sans', sans-serif",
    fontAccent: "'Cormorant Garamond', serif",
    fontMono: "'IBM Plex Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500&display=swap',
    colorPrimary: '#2C3527',
    colorDark: '#1C1917',
    bgMain: '#FAF7F2',
    bgCanvas: '#F2ECE1',
    borderColor: '#E2D9C8',
    gridGapDesktop: '0px',
    gridGapMobile: '0px',
    radius: '0px',
    borderWeight: '1px solid #E2D9C8',
    shadowToken: 'none',
    easeOutExpo: 'cubic-bezier(0.22, 1, 0.36, 1)',
    layoutBlueprint: {
      navPattern: 'Ultra-thin 1px hairline header + fixed left vertical formulation index on desktop',
      heroPattern: 'Asymmetric 60/40 literary apothecary essay + clinical amber-glass specimen panel',
      gridPattern: '1px hairline specimen ledger with typewriter batch numbers, pH levels, and botanical notes',
      signatureComponent: '3-Step Skin Diagnostic & AM/PM Regimen Builder Drawer'
    }
  },
  'tpl-04-hyperlocal-quick-commerce': {
    movementId: 'D',
    movementName: 'High-Density Hyperlocal 3-Pane Utility',
    name: '12-Minute Hyperlocal Grocery & Dark-Store App Shell (Zepto / Blinkit / Getir)',
    reference: 'https://www.zeptonow.com',
    secondaryReferences: ['https://blinkit.com', 'https://getir.com'],
    fontPrimary: "'Plus Jakarta Sans', sans-serif",
    fontAccent: "'Plus Jakarta Sans', sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
    colorPrimary: '#0C831F',
    colorDark: '#0F172A',
    bgMain: '#F1F5F9',
    bgCanvas: '#FFFFFF',
    borderColor: '#E2E8F0',
    gridGapDesktop: '12px',
    gridGapMobile: '8px',
    radius: '12px',
    borderWeight: '1px solid #E2E8F0',
    shadowToken: '0 2px 8px rgba(15, 23, 42, 0.06)',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    layoutBlueprint: {
      navPattern: 'Sticky hyperlocal top bar with pulsing 11-MIN ETA badge, Pincode selector, and instant search',
      heroPattern: 'Zero marketing hero — opens directly into 3-pane app shell (Left Category Rail + Center 5-Col Shelf + Right Live Rider Cart)',
      gridPattern: 'High-density 5-column micro-cards with weight pills (250g/500g/1kg) and instant [- 1 +] green steppers',
      signatureComponent: 'Dark-Store Picker Bin Queue & Rider Dispatch Map Telemetry'
    }
  },
  'tpl-05-b2b-tabular-wholesale': {
    movementId: 'E',
    movementName: 'Industrial Tabular Data-First Order Sheet',
    name: 'B2B Industrial Fastener & Wholesale SKU Matrix (McMaster-Carr / Uline / DigiKey)',
    reference: 'https://www.mcmaster.com',
    secondaryReferences: ['https://www.uline.com', 'https://www.digikey.com'],
    fontPrimary: "'Inter', sans-serif",
    fontAccent: "'IBM Plex Mono', monospace",
    fontMono: "'IBM Plex Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap',
    colorPrimary: '#D97706',
    colorDark: '#0F172A',
    bgMain: '#F8FAFC',
    bgCanvas: '#FFFFFF',
    borderColor: '#CBD5E1',
    gridGapDesktop: '1px',
    gridGapMobile: '1px',
    radius: '2px',
    borderWeight: '1px solid #CBD5E1',
    shadowToken: 'none',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    layoutBlueprint: {
      navPattern: 'Dense industrial catalog header with Part# / DIN / ISO parametric search bar and Credit Limit meter',
      heroPattern: 'Zero hero banner — immediate parametric specification filter strip + CSV bulk paste toolbar',
      gridPattern: 'Dense tabular spreadsheet matrix (SKU | DIN Spec | Material | MOQ | 3 Volume Price Tiers | Stock | Carton Qty)',
      signatureComponent: 'Sticky Right-Hand Proforma Invoice / PO Builder with GST 18% & Net-30 Credit Approval'
    }
  },
  'tpl-06-obsidian-bento-saas': {
    movementId: 'F',
    movementName: 'Obsidian Glass & Spotlight Bento Grid',
    name: 'Dark Obsidian AI Developer Cloud & Bento Launchpad (Linear / Raycast / Resend)',
    reference: 'https://linear.app',
    secondaryReferences: ['https://www.raycast.com', 'https://resend.com', 'https://vercel.com'],
    fontPrimary: "'Inter', sans-serif",
    fontAccent: "'Space Grotesk', sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap',
    colorPrimary: '#6366F1',
    colorDark: '#06070B',
    bgMain: '#06070B',
    bgCanvas: '#0D1017',
    borderColor: 'rgba(255, 255, 255, 0.09)',
    gridGapDesktop: '18px',
    gridGapMobile: '12px',
    radius: '16px',
    borderWeight: '1px solid rgba(255, 255, 255, 0.09)',
    shadowToken: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
    easeOutExpo: 'cubic-bezier(0.22, 1, 0.36, 1)',
    layoutBlueprint: {
      navPattern: 'Floating pill glassmorphic navbar with Cmd+K shortcut trigger and live status dot',
      heroPattern: 'Radial indigo/cyan spotlight + interactive multi-language SDK terminal + live latency ping meter',
      gridPattern: 'Asymmetric 12-column Bento Grid (col-span-7, col-span-5, col-span-4, col-span-8) with glowing borders',
      signatureComponent: 'Interactive Token-per-Second Cost Calculator + Monthly/Annual Seat Matrix'
    }
  },
  'tpl-07-split-luxury-realestate': {
    movementId: 'G',
    movementName: 'Split-Screen Architectural Magazine',
    name: '50/50 Sticky Split-Screen Luxury Penthouse Dossier (25 Residences / Aman / Sotheby\'s)',
    reference: 'https://25residences.com',
    secondaryReferences: ['https://www.aman.com/residences', 'https://www.sothebysrealty.com'],
    fontPrimary: "'Plus Jakarta Sans', sans-serif",
    fontAccent: "'Cormorant Garamond', serif",
    fontMono: "'IBM Plex Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap',
    colorPrimary: '#B88644',
    colorDark: '#121814',
    bgMain: '#F7F4EE',
    bgCanvas: '#EFEAE0',
    borderColor: '#DCD3C2',
    gridGapDesktop: '0px',
    gridGapMobile: '20px',
    radius: '0px',
    borderWeight: '1px solid #DCD3C2',
    shadowToken: '0 24px 48px rgba(18, 24, 20, 0.08)',
    easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
    layoutBlueprint: {
      navPattern: 'Minimalist architectural masthead with Roman numerals (I · II · III · IV) and RERA Registration badge',
      heroPattern: '50/50 Split-Screen Viewport: Left scrolling narrative dossier; Right pinned full-height residence visualizer',
      gridPattern: 'Interactive Residence Wing & Floorplate Stack (3BHK Sky Villa / 4BHK Duplex / Penthouse) with Sq.Ft <-> Sq.M toggle',
      signatureComponent: 'Live EMI / Rental Yield Calculator + Private Helicopter/Chauffeur Site-Visit Scheduler'
    }
  },
  'tpl-08-swiss-cad-hardware': {
    movementId: 'H',
    movementName: 'Swiss Technical CAD Blueprint',
    name: 'Industrial Engineering Schematic & Hardware Crowdfund (Teenage Engineering / Nothing / Analogue)',
    reference: 'https://teenage.engineering',
    secondaryReferences: ['https://nothing.tech', 'https://www.analogue.co', 'https://frame.work'],
    fontPrimary: "'Space Grotesk', sans-serif",
    fontAccent: "'JetBrains Mono', monospace",
    fontMono: "'JetBrains Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap',
    colorPrimary: '#FF4F00',
    colorDark: '#141413',
    bgMain: '#ECECE6',
    bgCanvas: '#E2E2DA',
    borderColor: '#B8B8AE',
    gridGapDesktop: '0px',
    gridGapMobile: '0px',
    radius: '0px',
    borderWeight: '1px solid #B8B8AE',
    shadowToken: 'none',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    layoutBlueprint: {
      navPattern: 'Technical CAD title block header with drawing number (DWG-08-REV-C), scale 1:1, and live funding telemetry bar',
      heroPattern: 'Exposed engineering blueprint grid with crosshair (+) markers, interactive exploded hardware callout pins (01-06)',
      gridPattern: 'Monospace parametric acoustic/mechanical spec sheet + interactive reward tier punch-cards',
      signatureComponent: 'Live Backer Funding Goal Progress Bar + Serial-Numbered Early-Bird Pledge Configurator'
    }
  },
  'tpl-09-kinetic-festival-poster': {
    movementId: 'I',
    movementName: 'Kinetic Poster & Festival Schedule Matrix',
    name: 'Swiss Kinetic Typographic Poster & Multi-Stage Summit Pass (Figma Config / Boiler Room)',
    reference: 'https://config.figma.com',
    secondaryReferences: ['https://boilerroom.tv', 'https://vercel.com/ship'],
    fontPrimary: "'Space Grotesk', sans-serif",
    fontAccent: "'Syne', sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800&display=swap',
    colorPrimary: '#FF007A',
    colorDark: '#07070C',
    bgMain: '#07070C',
    bgCanvas: '#11111C',
    borderColor: '#292940',
    gridGapDesktop: '16px',
    gridGapMobile: '12px',
    radius: '4px',
    borderWeight: '2px solid #292940',
    shadowToken: '5px 5px 0px #00F0FF',
    easeOutExpo: 'cubic-bezier(0.25, 1, 0.5, 1)',
    layoutBlueprint: {
      navPattern: 'High-voltage festival wristband bar with live countdown, venue coordinates, and neon stage indicator',
      heroPattern: 'Oversized Swiss kinetic poster typography + diagonal counter-scrolling ticker bands',
      gridPattern: 'Time-coded 3-Stage Agenda Matrix (Day 01 / Day 02 / Day 03) + Perforated QR Pass Cards with barcode',
      signatureComponent: 'Interactive Personal Schedule Builder + QR Wristband Pass Generator'
    }
  },
  'tpl-10-kinetic-agency-index': {
    movementId: 'J',
    movementName: 'Kinetic Typography Studio Index',
    name: 'Awwwards Studio Numbered Case-Study Index & Scope Estimator (Locomotive / Studio Freight / Malvah)',
    reference: 'https://locomotive.ca',
    secondaryReferences: ['https://studiofreight.com', 'https://malvah.co', 'https://www.basicagency.com'],
    fontPrimary: "'Plus Jakarta Sans', sans-serif",
    fontAccent: "'Syne', sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap',
    colorPrimary: '#FF3300',
    colorDark: '#0B0B0B',
    bgMain: '#F5F3EE',
    bgCanvas: '#0B0B0B',
    borderColor: '#D4D0C8',
    gridGapDesktop: '0px',
    gridGapMobile: '0px',
    radius: '0px',
    borderWeight: '1px solid #1A1A1A',
    shadowToken: 'none',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    layoutBlueprint: {
      navPattern: 'Corner-anchored studio index header with live local studio clock, availability pill, and discipline counter',
      heroPattern: 'Monumental display statement (clamp(3.2rem, 8vw, 7.5rem)) with discipline tags and showreel modal trigger',
      gridPattern: 'Zero cards — full-width horizontal numbered index rows (01–08) expanding inline case-study dossiers on click/hover',
      signatureComponent: 'Interactive Project Scope, Timeline & Retainer Budget Calculator'
    }
  },
  'tpl-11-darkroom-proofing-gallery': {
    movementId: 'K',
    movementName: 'Darkroom Lightbox & Client Proofing Vault',
    name: 'Fine-Art Photography Masonry Lightbox & Contact-Sheet Proofing (Magnum / Pixieset / Leica)',
    reference: 'https://pixieset.com',
    secondaryReferences: ['https://www.magnumphotos.com', 'https://www.format.com'],
    fontPrimary: "'Plus Jakarta Sans', sans-serif",
    fontAccent: "'Cormorant Garamond', serif",
    fontMono: "'IBM Plex Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500&display=swap',
    colorPrimary: '#D4A373',
    colorDark: '#0D0C0B',
    bgMain: '#0D0C0B',
    bgCanvas: '#161412',
    borderColor: '#262320',
    gridGapDesktop: '20px',
    gridGapMobile: '12px',
    radius: '0px',
    borderWeight: '1px solid #262320',
    shadowToken: 'none',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    layoutBlueprint: {
      navPattern: 'Ultra-minimal darkroom contact-sheet bar with Gallery Light/Darkroom toggle and Client Proofing Favorites counter',
      heroPattern: 'Cinematic quiet monograph title plate with shoot metadata (Location, Film Stock, Frame Count, Delivery Status)',
      gridPattern: 'Variable-aspect-ratio masonry contact sheet with EXIF camera strip (35mm · f/1.4 · 1/500s · ISO 160) and ♥ Select button',
      signatureComponent: 'Client Album Proofing Lightbox + Retouch Notes & Print Release Approval Drawer'
    }
  },
  'tpl-12-architecture-monograph': {
    movementId: 'L',
    movementName: 'Numbered Monograph & Before/After Elevation Slider',
    name: 'Architectural Monograph Index & Turnkey BOQ Cost Estimator (Foster+Partners / BIG / Snøhetta)',
    reference: 'https://www.fosterandpartners.com',
    secondaryReferences: ['https://big.dk', 'https://snohetta.com', 'https://normcph.com'],
    fontPrimary: "'Plus Jakarta Sans', sans-serif",
    fontAccent: "'Instrument Serif', serif",
    fontMono: "'IBM Plex Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap',
    colorPrimary: '#9C4A27',
    colorDark: '#1A1816',
    bgMain: '#F4F1EA',
    bgCanvas: '#EAE5DA',
    borderColor: '#D2C9B8',
    gridGapDesktop: '0px',
    gridGapMobile: '0px',
    radius: '0px',
    borderWeight: '1px solid #D2C9B8',
    shadowToken: 'none',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    layoutBlueprint: {
      navPattern: 'Exposed 4-column architectural structural grid header with typology filter and GPS coordinate stamp',
      heroPattern: 'Interactive Before / After Raw Site vs. Completed Elevation Drag Slider + Monograph Project Plate',
      gridPattern: 'Numbered architectural monograph ledger (WORK 01 — 06) with Plot Area (m²), Structural System, Year, and Elevation Drawings',
      signatureComponent: 'Turnkey Civil + Interior Sq.Ft BOQ Cost Estimator (Warm Shell / Bespoke Luxury / Heritage Restoration)'
    }
  },
  'tpl-13-tactile-pos-terminal': {
    movementId: 'M',
    movementName: 'Tactile App-Shell Touch POS & Thermal KOT',
    name: '3-Column Touch POS Register, Table Map & Thermal KOT Ticket (Square POS / Toast)',
    reference: 'https://squareup.com/us/en/point-of-sale/restaurants',
    secondaryReferences: ['https://pos.toasttab.com'],
    fontPrimary: "'Plus Jakarta Sans', sans-serif",
    fontAccent: "'Plus Jakarta Sans', sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap',
    colorPrimary: '#EA580C',
    colorDark: '#111827',
    bgMain: '#E2E8F0',
    bgCanvas: '#FFFFFF',
    borderColor: '#CBD5E1',
    gridGapDesktop: '10px',
    gridGapMobile: '8px',
    radius: '8px',
    borderWeight: '1px solid #CBD5E1',
    shadowToken: '0 4px 12px rgba(15, 23, 42, 0.08)',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    layoutBlueprint: {
      navPattern: 'Fixed 52px POS terminal status header with Cashier PIN badge, Table Floor Selector (T-01 to T-12), and Dine-In/Takeaway/Delivery switch',
      heroPattern: 'Zero marketing hero — 100vh 3-column hardware touch terminal (Left Category Rail + Center Touch Dish Tiles + Right Perforated Thermal KOT Bill)',
      gridPattern: 'High-speed touch dish tiles with Veg/Non-Veg FSSAI dot, spice/addon modifiers, and instant tap-to-punch',
      signatureComponent: 'Perforated Monospace Thermal KOT & GST 5% Split Bill Printer + Table Floor Occupancy Map'
    }
  },
  'tpl-14-clinical-slot-scheduler': {
    movementId: 'N',
    movementName: 'Clinical Swiss Trust & Live Queue Token Board',
    name: '4-Step Medical/Aesthetic Slot Wizard & Waiting-Room Token TV (Cal.com / One Medical)',
    reference: 'https://cal.com',
    secondaryReferences: ['https://www.onemedical.com', 'https://www.zocdoc.com'],
    fontPrimary: "'Plus Jakarta Sans', sans-serif",
    fontAccent: "'Instrument Serif', serif",
    fontMono: "'JetBrains Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Instrument+Serif&family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
    colorPrimary: '#0D9488',
    colorDark: '#0F172A',
    bgMain: '#F0FDFA',
    bgCanvas: '#FFFFFF',
    borderColor: '#CCFBF1',
    gridGapDesktop: '20px',
    gridGapMobile: '12px',
    radius: '10px',
    borderWeight: '1px solid #99F6E4',
    shadowToken: '0 10px 25px rgba(13, 148, 136, 0.07)',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    layoutBlueprint: {
      navPattern: 'Clinical daylight trust bar with Live OPD Token Status ticker, NABH/ISO badge, and Emergency hotline',
      heroPattern: 'Split Clinical Booking Workbench: Left 4-Step Guided Appointment Wizard; Right Live Waiting-Room Token Queue TV Display',
      gridPattern: 'Interactive Specialist Credential Cards + 7-Day Date Strip + 15-Minute Time-Slot Pill Matrix (Morning / Afternoon / Evening)',
      signatureComponent: 'Instant OPD Queue Token Generator (e.g. TOKEN #A-14) + Doctor Chair Roster & Chair Turnaround Console'
    }
  },
  'tpl-15-darkroom-kds-board': {
    movementId: 'O',
    movementName: 'High-Contrast Darkroom KDS SLA Board',
    name: 'Cloud Kitchen Multi-Brand KDS Kanban & Mobile QR Ordering (Toast KDS / FreshKDS)',
    reference: 'https://pos.toasttab.com/products/kitchen-display-system',
    secondaryReferences: ['https://www.freshkds.com'],
    fontPrimary: "'Inter', sans-serif",
    fontAccent: "'JetBrains Mono', monospace",
    fontMono: "'JetBrains Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap',
    colorPrimary: '#10B981',
    colorDark: '#090D16',
    bgMain: '#090D16',
    bgCanvas: '#111827',
    borderColor: '#1F2937',
    gridGapDesktop: '14px',
    gridGapMobile: '10px',
    radius: '8px',
    borderWeight: '2px solid #1F2937',
    shadowToken: '0 8px 20px rgba(0, 0, 0, 0.5)',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    layoutBlueprint: {
      navPattern: 'High-contrast darkroom KDS telemetry header with Aggregator Channel Filter (Zomato / Swiggy / Direct QR), Avg Prep SLA timer, and Audio Buzzer toggle',
      heroPattern: 'Dual-Mode Workspace: 4-Column Kitchen Display Kanban (NEW -> WOK/GRILL -> PACKING -> RIDER HANDOFF) + Direct Customer QR Ordering Simulator',
      gridPattern: 'Color-coded SLA Ticket Cards (Green <5m, Amber 5-10m, Flashing Red >10m breach) with line-item strike-off checkboxes',
      signatureComponent: 'One-Tap BUMP Ticket Station Controls + Aggregator Rider OTP Verification Bar'
    }
  },
  'tpl-16-esd-repair-workbench': {
    movementId: 'P',
    movementName: 'ESD Service Workbench & Public IMEI/AWB Tracker',
    name: 'Device Repair Job-Sheet Workbench & 5-Stage Live Status Tracker (iFixit / Linear Triage / Stripe)',
    reference: 'https://www.ifixit.com',
    secondaryReferences: ['https://linear.app', 'https://onfleet.com'],
    fontPrimary: "'Inter', sans-serif",
    fontAccent: "'JetBrains Mono', monospace",
    fontMono: "'JetBrains Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap',
    colorPrimary: '#0284C7',
    colorDark: '#0B1120',
    bgMain: '#F8FAFC',
    bgCanvas: '#FFFFFF',
    borderColor: '#CBD5E1',
    gridGapDesktop: '16px',
    gridGapMobile: '12px',
    radius: '6px',
    borderWeight: '1px solid #CBD5E1',
    shadowToken: '0 4px 14px rgba(15, 23, 42, 0.05)',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    layoutBlueprint: {
      navPattern: 'Technical service-center telemetry bar with quick Ticket/IMEI/Serial lookup input and Bench ESD status indicator',
      heroPattern: 'Interactive Job-Ticket Lookup Console + 5-Stage Visual Diagnostic Stepper (Intake -> Bench Diagnostics -> Spare Parts -> QA Burn-In -> Ready for Pickup)',
      gridPattern: 'Component-level Pre-Intake Checklist (Screen, Battery mAh, Liquid Sensor, FaceID) + Spare Parts BOM & Labor Approval Table',
      signatureComponent: 'Technician Bench Kanban Board + One-Click Customer WhatsApp Approval & Invoice Link'
    }
  },
  'tpl-17-financial-ledger-erp': {
    movementId: 'Q',
    movementName: 'Dense Financial Ledger & 3-Way Match ERP',
    name: 'Multi-Warehouse Inventory, GST HSN Split & PO-GRN-Invoice 3-Way Match ERP (Frappe ERPNext / Ramp / Mercury)',
    reference: 'https://frappe.io/erpnext',
    secondaryReferences: ['https://ramp.com', 'https://mercury.com'],
    fontPrimary: "'Inter', sans-serif",
    fontAccent: "'IBM Plex Mono', monospace",
    fontMono: "'IBM Plex Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap',
    colorPrimary: '#2563EB',
    colorDark: '#0F172A',
    bgMain: '#F1F5F9',
    bgCanvas: '#FFFFFF',
    borderColor: '#CBD5E1',
    gridGapDesktop: '12px',
    gridGapMobile: '8px',
    radius: '4px',
    borderWeight: '1px solid #CBD5E1',
    shadowToken: '0 1px 3px rgba(15, 23, 42, 0.06)',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    layoutBlueprint: {
      navPattern: 'Enterprise ERP shell: Fixed 220px dark slate left navigation rail + Top fiscal-year & multi-warehouse switcher (WH-MUM-01 / WH-BLR-02 / WH-DEL-03)',
      heroPattern: 'Zero marketing hero — opens directly into 4 Financial KPI Ledger Strip + Interactive GST Tax Invoice & 3-Way Match Workbench',
      gridPattern: 'Dense tabular spreadsheet ledger with monospace HSN/SAC codes, automatic Intra-state (CGST 9% + SGST 9%) vs Inter-state (IGST 18%) tax engine',
      signatureComponent: 'PO <-> GRN <-> Vendor Bill 3-Way Match Variance Inspector + Inter-Branch Stock Transfer Journal'
    }
  },
  'tpl-18-people-ops-workspace': {
    movementId: 'R',
    movementName: 'People-Ops Attendance HeatGrid & Payslip Workspace',
    name: 'Unified CRM Pipeline, Geo-Fenced Attendance Matrix & Statutory Payroll Suite (Attio / Frappe HR / Rippling)',
    reference: 'https://attio.com',
    secondaryReferences: ['https://frappe.io/hr', 'https://www.rippling.com', 'https://www.deel.com'],
    fontPrimary: "'Plus Jakarta Sans', sans-serif",
    fontAccent: "'IBM Plex Mono', monospace",
    fontMono: "'IBM Plex Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
    colorPrimary: '#4F46E5',
    colorDark: '#111827',
    bgMain: '#F8FAFC',
    bgCanvas: '#FFFFFF',
    borderColor: '#E2E8F0',
    gridGapDesktop: '14px',
    gridGapMobile: '10px',
    radius: '6px',
    borderWeight: '1px solid #E2E8F0',
    shadowToken: '0 2px 6px rgba(15, 23, 42, 0.05)',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    layoutBlueprint: {
      navPattern: 'Unified People-Ops & Revenue Workspace sidebar with 3 instant module tabs (1. Geo-Attendance & Leave | 2. Statutory Payroll & Payslip | 3. B2B Deal Pipeline)',
      heroPattern: 'Live Geo-Fenced GPS Punch-In Verification Strip + Monthly Attendance HeatGrid (P / L / HD / WO) across employees',
      gridPattern: 'Split Earnings vs Statutory Deductions Ledger (Basic + HRA + Special Allowance vs PF 12% + ESI + PT + TDS) + Weighted CRM Kanban',
      signatureComponent: 'Interactive Employee Salary Structure Calculator + Printable Statutory Payslip Preview Drawer'
    }
  }
};

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 2; i < argv.length; i++) {
    const token = argv[i];
    if (token.startsWith('--')) {
      const key = token.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) {
        args[key] = next;
        i++;
      } else {
        args[key] = true;
      }
    } else {
      args._.push(token);
    }
  }
  return args;
}

async function scrapeUrlTokens(url, basePreset) {
  const tokens = {
    ...basePreset,
    reference: url || basePreset.reference,
    scrapedAt: new Date().toISOString(),
    scrapedVariables: [],
    detectedTopColors: []
  };
  const candidates = [tokens.reference, ...(basePreset.secondaryReferences || [])];
  for (const candidateUrl of candidates) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 6500);
      const res = await fetch(candidateUrl, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
        }
      });
      clearTimeout(timer);
      if (!res.ok) {
        tokens.scrapeStatus = `HTTP ${res.status} on ${candidateUrl}`;
        continue;
      }
      const html = await res.text();
      tokens.scrapeStatus = `live-scraped (${candidateUrl})`;

      // Extract hex colors from inline styles and CSS blocks
      const hexMatches = html.match(/#[0-9a-fA-F]{6}\b/g) || [];
      const counts = {};
      for (const h of hexMatches) {
        const up = h.toUpperCase();
        if (!['#FFFFFF', '#000000', '#F8F8F8', '#EEEEEE', '#333333'].includes(up)) {
          counts[up] = (counts[up] || 0) + 1;
        }
      }
      const sortedHex = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      tokens.detectedTopColors = sortedHex.slice(0, 8).map(([c]) => c);

      // Extract Google Fonts families if present
      const gfMatch = html.match(/fonts\.googleapis\.com\/css2\?family=([^"'&\s>]+)/i);
      if (gfMatch) {
        tokens.detectedFontFamily = decodeURIComponent(gfMatch[1]).split(':')[0].replace(/\+/g, ' ');
      }

      // Extract CSS custom property declarations
      const varMatches = html.match(/--[a-zA-Z0-9-]+:\s*[^;}"']+/g) || [];
      tokens.scrapedVariables = varMatches.slice(0, 15);
      return tokens;
    } catch (err) {
      tokens.scrapeStatus = `fallback (${err.message})`;
    }
  }
  return tokens;
}

export function generateThemeTokensCss(tokens) {
  return `/* ==========================================================================
   BMAD Normalized Design Tokens & Movement Blueprint (theme-tokens.css)
   Movement  : [${tokens.movementId}] ${tokens.movementName}
   Archetype : ${tokens.name}
   Reference : ${tokens.reference}
   Contract  : whitelabel-and-showroom-contract.md §2 + design-movements-and-layout-blueprints.md
   ========================================================================== */

:root {
  --font-primary: ${tokens.fontPrimary};
  --font-accent: ${tokens.fontAccent};
  --font-mono: ${tokens.fontMono || "'JetBrains Mono', monospace"};

  --color-primary: ${tokens.colorPrimary};
  --brand-primary: var(--color-primary);

  --color-dark: ${tokens.colorDark};
  --brand-dark: var(--color-dark);

  --bg-main: ${tokens.bgMain};
  --bg-canvas: ${tokens.bgCanvas};
  --bg-sand: var(--bg-canvas);

  --border-color: ${tokens.borderColor};
  --border-structural: ${tokens.borderWeight || '1px solid var(--border-color)'};
  --shadow-token: ${tokens.shadowToken || 'none'};
  --grid-gap-desktop: ${tokens.gridGapDesktop};
  --grid-gap-mobile: ${tokens.gridGapMobile};
  --radius: ${tokens.radius};
  --ease-out-expo: ${tokens.easeOutExpo};
}
`;
}

export function generateDesignSpecMd(tokens) {
  const topColors = (tokens.detectedTopColors && tokens.detectedTopColors.length > 0
    ? tokens.detectedTopColors
    : [tokens.colorPrimary, tokens.colorDark, tokens.bgMain, tokens.bgCanvas]
  ).join(', ');
  const bp = tokens.layoutBlueprint || {};
  return `# Design Movement & Extracted Token Specification

- **Movement ID:** \`Movement ${tokens.movementId} — ${tokens.movementName}\`
- **Archetype:** ${tokens.name}
- **Primary Reference URL:** \`${tokens.reference}\`
- **Secondary References:** ${(tokens.secondaryReferences || []).map((r) => `\`${r}\``).join(', ')}
- **Scrape Status:** \`${tokens.scrapeStatus || 'calibrated'}\`
- **Anti-Clone Rule (R8 / C5):** Structural DOM layout and CSS tokens are unique to Movement ${tokens.movementId} — zero shared HTML skeleton with \`kakabyeliza.com\`.

## 1. Typography Scale & Pairings
- **Primary UI / Body Font (\`--font-primary\`):** \`${tokens.fontPrimary}\`
- **Display / Editorial Font (\`--font-accent\`):** \`${tokens.fontAccent}\`
- **Technical / Telemetry Monospace (\`--font-mono\`):** \`${tokens.fontMono || "'JetBrains Mono', monospace"}\`
- **Google Fonts Import:** \`${tokens.googleFontsUrl}\`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (\`--color-primary\` / \`--brand-primary\`):** \`${tokens.colorPrimary}\`
- **Dark Surface / Contrast (\`--color-dark\` / \`--brand-dark\`):** \`${tokens.colorDark}\`
- **Primary Canvas (\`--bg-main\`):** \`${tokens.bgMain}\`
- **Secondary Section Canvas (\`--bg-canvas\`):** \`${tokens.bgCanvas}\`
- **Border Hairline / Frame (\`--border-color\`):** \`${tokens.borderColor}\`
- **Detected Reference Palette Swatches:** \`${topColors}\`

## 3. Structural Layout Blueprint (DOM Architecture)
- **Navigation Chrome:** ${bp.navPattern || 'Custom movement navigation'}
- **Hero / Entry Zone:** ${bp.heroPattern || 'Custom movement entry'}
- **Primary Content Grid / Matrix:** ${bp.gridPattern || 'Custom movement matrix'}
- **Signature Interactive Component:** ${bp.signatureComponent || 'Interactive workflow drawer'}
- **Border Weight (\`--border-structural\`):** \`${tokens.borderWeight}\`
- **Shadow Physics (\`--shadow-token\`):** \`${tokens.shadowToken}\`
- **Border Radius (\`--radius\`):** \`${tokens.radius}\`
`;
}

async function runExtract(args) {
  const presetKey = args.preset || args.name || 'tpl-06-obsidian-bento-saas';
  const basePreset = ARCHETYPE_PRESETS[presetKey] || ARCHETYPE_PRESETS['tpl-06-obsidian-bento-saas'];
  const targetUrl = args.url || basePreset.reference;
  const outDir = path.resolve(args.out || `./presets/${presetKey}`);

  const tokens = await scrapeUrlTokens(targetUrl, basePreset);
  fs.mkdirSync(outDir, { recursive: true });

  const cssPath = path.join(outDir, 'theme-tokens.css');
  const specPath = path.join(outDir, 'DESIGN_SPEC.md');
  const jsonPath = path.join(outDir, 'tokens.json');

  fs.writeFileSync(cssPath, generateThemeTokensCss(tokens), 'utf8');
  fs.writeFileSync(specPath, generateDesignSpecMd(tokens), 'utf8');
  fs.writeFileSync(jsonPath, JSON.stringify(tokens, null, 2), 'utf8');

  console.log(`✓ Extracted [${tokens.movementId}: ${tokens.movementName}] from ${targetUrl} (${tokens.scrapeStatus})`);
  console.log(`  -> ${cssPath}`);
  console.log(`  -> ${jsonPath}`);
}

async function runScrapeAll(args) {
  const baseOutDir = path.resolve(args.out || './presets');
  fs.mkdirSync(baseOutDir, { recursive: true });
  const entries = Object.entries(ARCHETYPE_PRESETS);
  console.log(`Scraping & generating 18 distinct movement presets into ${baseOutDir}...`);

  const results = await Promise.all(
    entries.map(async ([key, preset]) => {
      const scraped = await scrapeUrlTokens(preset.reference, preset);
      const dir = path.join(baseOutDir, key);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'theme-tokens.css'), generateThemeTokensCss(scraped), 'utf8');
      fs.writeFileSync(path.join(dir, 'DESIGN_SPEC.md'), generateDesignSpecMd(scraped), 'utf8');
      fs.writeFileSync(path.join(dir, 'tokens.json'), JSON.stringify(scraped, null, 2), 'utf8');
      console.log(`  ✓ [${scraped.movementId}] ${key} <- ${scraped.reference} (${scraped.scrapeStatus})`);
      return [key, scraped];
    })
  );

  const indexObj = Object.fromEntries(results);
  fs.writeFileSync(path.join(baseOutDir, 'movements-index.json'), JSON.stringify(indexObj, null, 2), 'utf8');
  console.log(`✓ Wrote master 18-movement preset library to ${path.join(baseOutDir, 'movements-index.json')}`);
}

async function runScaffold(args) {
  const slug = args.slug || 'tpl-custom-starter';
  const presetKey = args.preset || 'tpl-06-obsidian-bento-saas';
  const basePreset = ARCHETYPE_PRESETS[presetKey] || ARCHETYPE_PRESETS['tpl-06-obsidian-bento-saas'];
  const outDir = path.resolve(args.out || `C:/projects/${slug}`);
  const publicDir = path.join(outDir, 'public');

  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, 'theme-tokens.css'), generateThemeTokensCss(basePreset), 'utf8');
  fs.writeFileSync(path.join(outDir, 'DESIGN_SPEC.md'), generateDesignSpecMd(basePreset), 'utf8');

  const wlSource = 'C:/projects/ecomtemplatecloudflare/public/whitelabel.js';
  if (fs.existsSync(wlSource)) {
    fs.copyFileSync(wlSource, path.join(publicDir, 'whitelabel.js'));
  }

  console.log(`✓ Scaffolded template workspace at ${outDir} with movement [${basePreset.movementId}: ${basePreset.movementName}]`);
}

async function main() {
  const args = parseArgs(process.argv);
  const cmd = args._[0] || 'help';

  if (cmd === 'extract') {
    await runExtract(args);
  } else if (cmd === 'scrape-all') {
    await runScrapeAll(args);
  } else if (cmd === 'scaffold') {
    await runScaffold(args);
  } else {
    console.log(`BMAD Design-Token & Layout Blueprint Extractor CLI
Usage:
  node bin/extract-tokens.mjs scrape-all [--out ./presets]
  node bin/extract-tokens.mjs extract [--preset <name>] [--url <https://...>] [--out <dir>]
  node bin/extract-tokens.mjs scaffold --slug <tpl-name> [--preset <name>] [--out <dir>]

Available Movement Presets (${Object.keys(ARCHETYPE_PRESETS).length}):
  ${Object.keys(ARCHETYPE_PRESETS).join('\n  ')}`);
  }
}

main();
