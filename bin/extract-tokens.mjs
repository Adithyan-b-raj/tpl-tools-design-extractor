#!/usr/bin/env node
/**
 * BMAD Awwwards & Reference Design-Token Extractor CLI (tpl-tools-design-extractor)
 *
 * Commands:
 *   node bin/extract-tokens.mjs extract [--url <https://...>] [--preset <archetype>] [--out <dir>]
 *   node bin/extract-tokens.mjs scaffold --slug <tpl-...> [--preset <archetype>] [--out <dir>]
 *
 * Legal & Asset Hygiene (Constraint C4):
 *   Captures ONLY structural CSS metrics, font pairings, color harmonies, grid gaps,
 *   border radii, and cubic-bezier motion curves — never proprietary logos or copyrighted text.
 */

import fs from 'node:fs';
import path from 'node:path';

export const ARCHETYPE_PRESETS = {
  'boutique-editorial': {
    name: 'Editorial Boutique & Ethnic Couture (Kaka by Eliza / Reformation Style)',
    reference: 'https://kakabyeliza.com',
    fontPrimary: "'Jost', sans-serif",
    fontAccent: "'GFS Didot', serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=GFS+Didot&family=Jost:wght@300;400;500;600;700&display=swap',
    colorPrimary: '#f76b6a',
    colorDark: '#161616',
    bgMain: '#FFFDF9',
    bgCanvas: '#FAF6F2',
    borderColor: '#EAE3DC',
    gridGapDesktop: '35px 20px',
    gridGapMobile: '20px 15px',
    radius: '2px',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)'
  },
  'saas-bento': {
    name: 'Dark Obsidian AI / SaaS Bento (Linear / Raycast / Vercel Style)',
    reference: 'https://linear.app',
    fontPrimary: "'Inter', sans-serif",
    fontAccent: "'Space Grotesk', sans-serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap',
    colorPrimary: '#6366F1',
    colorDark: '#09090B',
    bgMain: '#09090B',
    bgCanvas: '#12131A',
    borderColor: '#27272A',
    gridGapDesktop: '24px 24px',
    gridGapMobile: '16px 16px',
    radius: '12px',
    easeOutExpo: 'cubic-bezier(0.22, 1, 0.36, 1)'
  },
  'luxury-realestate': {
    name: 'Architectural Villa & Real Estate Editorial (Champagne Gold & Forest)',
    reference: 'https://www.sothebysrealty.com',
    fontPrimary: "'Plus Jakarta Sans', sans-serif",
    fontAccent: "'Cormorant Garamond', serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
    colorPrimary: '#B4833E',
    colorDark: '#141E19',
    bgMain: '#FAF8F5',
    bgCanvas: '#F2ECE4',
    borderColor: '#E2D9CC',
    gridGapDesktop: '32px 28px',
    gridGapMobile: '20px 16px',
    radius: '4px',
    easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)'
  },
  'd2c-gadget': {
    name: 'Industrial Precision Hardware Launch (Teenage Engineering / Nothing Style)',
    reference: 'https://teenage.engineering',
    fontPrimary: "'Space Grotesk', sans-serif",
    fontAccent: "'JetBrains Mono', monospace",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Space+Grotesk:wght@400;500;600;700&display=swap',
    colorPrimary: '#FF4F00',
    colorDark: '#111111',
    bgMain: '#F4F4F2',
    bgCanvas: '#EAEAE6',
    borderColor: '#D4D4CE',
    gridGapDesktop: '20px 20px',
    gridGapMobile: '14px 14px',
    radius: '6px',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)'
  },
  'event-pass': {
    name: 'High-Energy Festival & Conference Pass (Neon Magenta & Midnight)',
    reference: 'https://config.figma.com',
    fontPrimary: "'Plus Jakarta Sans', sans-serif",
    fontAccent: "'Syne', sans-serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap',
    colorPrimary: '#EC4899',
    colorDark: '#090D16',
    bgMain: '#090D16',
    bgCanvas: '#111827',
    borderColor: '#1F2937',
    gridGapDesktop: '24px 24px',
    gridGapMobile: '16px 16px',
    radius: '10px',
    easeOutExpo: 'cubic-bezier(0.25, 1, 0.5, 1)'
  },
  'agency-awwwards': {
    name: 'Kinetic Typography Creative Studio (Locomotive / Studio Freight Style)',
    reference: 'https://www.awwwards.com',
    fontPrimary: "'Inter', sans-serif",
    fontAccent: "'Syne', sans-serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@700;800&display=swap',
    colorPrimary: '#E11D48',
    colorDark: '#0A0A0A',
    bgMain: '#FAF9F6',
    bgCanvas: '#F0EFEA',
    borderColor: '#DFDDD5',
    gridGapDesktop: '36px 24px',
    gridGapMobile: '20px 16px',
    radius: '4px',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)'
  },
  'photography-proofing': {
    name: 'Fine-Art Wedding & Editorial Photography Proofing (Warm Sepia & Ivory)',
    reference: 'https://pixieset.com',
    fontPrimary: "'Jost', sans-serif",
    fontAccent: "'Cormorant Garamond', serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap',
    colorPrimary: '#9A6B4C',
    colorDark: '#181512',
    bgMain: '#FCFBF9',
    bgCanvas: '#F4F0EA',
    borderColor: '#E6DFD5',
    gridGapDesktop: '28px 22px',
    gridGapMobile: '16px 12px',
    radius: '2px',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)'
  },
  'architecture-studio': {
    name: 'Tropical Modernist Architecture & Interior Estimator (Terracotta & Stone)',
    reference: 'https://www.archdaily.com',
    fontPrimary: "'Plus Jakarta Sans', sans-serif",
    fontAccent: "'Instrument Serif', serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
    colorPrimary: '#8C5A3C',
    colorDark: '#1E1B18',
    bgMain: '#F7F4EF',
    bgCanvas: '#EDE8DF',
    borderColor: '#DDD5C7',
    gridGapDesktop: '32px 24px',
    gridGapMobile: '18px 14px',
    radius: '3px',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)'
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
  const tokens = { ...basePreset, reference: url, scrapedVariables: [] };
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; BMAD-DesignExtractor/1.0)' }
    });
    clearTimeout(timer);
    if (!res.ok) return tokens;
    const html = await res.text();

    // Extract hex colors from inline styles
    const hexMatches = html.match(/#[0-9a-fA-F]{6}\b/g) || [];
    const counts = {};
    for (const h of hexMatches) {
      const up = h.toUpperCase();
      if (!['#FFFFFF', '#000000', '#F8F8F8', '#EEEEEE', '#333333'].includes(up)) {
        counts[up] = (counts[up] || 0) + 1;
      }
    }
    const sortedHex = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    if (sortedHex.length > 0 && !basePreset.keepPresetColor) {
      tokens.detectedTopColors = sortedHex.slice(0, 6).map(([c]) => c);
    }

    // Extract Google Fonts families if present
    const gfMatch = html.match(/fonts\.googleapis\.com\/css2\?family=([^"'&\s>]+)/i);
    if (gfMatch) {
      const fam = decodeURIComponent(gfMatch[1]).split(':')[0].replace(/\+/g, ' ');
      tokens.detectedFontFamily = fam;
    }

    // Extract CSS custom property names
    const varMatches = html.match(/--[a-zA-Z0-9-]+:\s*[^;}"']+/g) || [];
    tokens.scrapedVariables = varMatches.slice(0, 15);
  } catch (err) {
    tokens.scrapeNote = `Live fetch skipped or timed out (${err.message}); using calibrated archetype tokens.`;
  }
  return tokens;
}

function generateThemeTokensCss(tokens) {
  return `/* ==========================================================================
   BMAD Normalized Design Tokens (theme-tokens.css)
   Archetype : ${tokens.name}
   Reference : ${tokens.reference}
   Contract  : whitelabel-and-showroom-contract.md §2
   ========================================================================== */

:root {
  --font-primary: ${tokens.fontPrimary};
  --font-accent: ${tokens.fontAccent};

  --color-primary: ${tokens.colorPrimary};
  --brand-primary: var(--color-primary);

  --color-dark: ${tokens.colorDark};
  --brand-dark: var(--color-dark);

  --bg-main: ${tokens.bgMain};
  --bg-canvas: ${tokens.bgCanvas};
  --bg-sand: var(--bg-canvas);

  --border-color: ${tokens.borderColor};
  --grid-gap-desktop: ${tokens.gridGapDesktop};
  --grid-gap-mobile: ${tokens.gridGapMobile};
  --radius: ${tokens.radius};
  --ease-out-expo: ${tokens.easeOutExpo};
}
`;
}

function generateDesignSpecMd(tokens) {
  const topColors = (tokens.detectedTopColors || [tokens.colorPrimary, tokens.colorDark, tokens.bgMain, tokens.bgCanvas]).join(', ');
  return `# Design Specification & Extracted Token Report

- **Archetype:** ${tokens.name}
- **Reference Source:** \`${tokens.reference}\`
- **Legal Hygiene (C4):** Structural CSS metrics, typography pairings, color harmonies, and motion easing curves only (zero proprietary logos or copyrighted copy).

## 1. Typography Pairings
- **Primary UI / Body Font (\`--font-primary\`):** \`${tokens.fontPrimary}\`
- **Editorial / Display Font (\`--font-accent\`):** \`${tokens.fontAccent}\`
- **Google Fonts Stylesheet:** \`${tokens.googleFontsUrl}\`

## 2. Color Harmonies & White-Label Variables
- **Primary Brand Accent (\`--color-primary\` / \`--brand-primary\`):** \`${tokens.colorPrimary}\`
- **Dark Surface / Contrast (\`--color-dark\` / \`--brand-dark\`):** \`${tokens.colorDark}\`
- **Primary Canvas (\`--bg-main\`):** \`${tokens.bgMain}\`
- **Secondary Section Canvas (\`--bg-canvas\`):** \`${tokens.bgCanvas}\`
- **Border Hairline (\`--border-color\`):** \`${tokens.borderColor}\`
- **Detected Reference Palette Swatches:** \`${topColors}\`

## 3. Spatial Grid & Motion Physics
- **Desktop Grid Gap (\`--grid-gap-desktop\`):** \`${tokens.gridGapDesktop}\`
- **Mobile Grid Gap (\`--grid-gap-mobile\`):** \`${tokens.gridGapMobile}\`
- **Border Radius (\`--radius\`):** \`${tokens.radius}\`
- **Primary Motion Easing (\`--ease-out-expo\`):** \`${tokens.easeOutExpo}\`
`;
}

async function runExtract(args) {
  const presetKey = args.preset || 'saas-bento';
  const basePreset = ARCHETYPE_PRESETS[presetKey] || ARCHETYPE_PRESETS['saas-bento'];
  const targetUrl = args.url || basePreset.reference;
  const outDir = path.resolve(args.out || `./extracted/${presetKey}`);

  const tokens = await scrapeUrlTokens(targetUrl, { ...basePreset, keepPresetColor: true });
  fs.mkdirSync(outDir, { recursive: true });

  const cssPath = path.join(outDir, 'theme-tokens.css');
  const specPath = path.join(outDir, 'DESIGN_SPEC.md');

  fs.writeFileSync(cssPath, generateThemeTokensCss(tokens), 'utf8');
  fs.writeFileSync(specPath, generateDesignSpecMd(tokens), 'utf8');

  console.log(`✓ Extracted design tokens for [${presetKey}] (${targetUrl})`);
  console.log(`  -> ${cssPath}`);
  console.log(`  -> ${specPath}`);
}

async function runScaffold(args) {
  const slug = args.slug || 'tpl-custom-starter';
  const presetKey = args.preset || 'saas-bento';
  const basePreset = ARCHETYPE_PRESETS[presetKey] || ARCHETYPE_PRESETS['saas-bento'];
  const outDir = path.resolve(args.out || `C:/projects/${slug}`);
  const publicDir = path.join(outDir, 'public');

  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, 'theme-tokens.css'), generateThemeTokensCss(basePreset), 'utf8');
  fs.writeFileSync(path.join(outDir, 'DESIGN_SPEC.md'), generateDesignSpecMd(basePreset), 'utf8');

  // Copy standardized whitelabel.js from ecomtemplatecloudflare if available
  const wlSource = 'C:/projects/ecomtemplatecloudflare/public/whitelabel.js';
  if (fs.existsSync(wlSource)) {
    fs.copyFileSync(wlSource, path.join(publicDir, 'whitelabel.js'));
  }

  console.log(`✓ Scaffolded template workspace at ${outDir} with preset [${presetKey}]`);
}

async function main() {
  const args = parseArgs(process.argv);
  const cmd = args._[0] || 'help';

  if (cmd === 'extract') {
    await runExtract(args);
  } else if (cmd === 'scaffold') {
    await runScaffold(args);
  } else {
    console.log(`BMAD Design-Token Extractor & Template Scaffolder CLI
Usage:
  node bin/extract-tokens.mjs extract [--preset <name>] [--url <https://...>] [--out <dir>]
  node bin/extract-tokens.mjs scaffold --slug <tpl-name> [--preset <name>] [--out <dir>]

Available Presets:
  ${Object.keys(ARCHETYPE_PRESETS).join(', ')}`);
  }
}

main();
