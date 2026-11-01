# BMAD Design-Token Extractor & Poly-Repo Scaffolder CLI (`tpl-tools-design-extractor`)

Extracts structural CSS custom properties (`theme-tokens.css`), font pairings, color harmonies, grid gaps, border radii, and motion easing curves (`DESIGN_SPEC.md`) from reference URLs and Awwwards design archetypes, and scaffolds new white-label-ready template repositories.

## Usage

```bash
# Extract normalized tokens for 3 distinct reference URLs / archetypes
node bin/extract-tokens.mjs extract --preset saas-bento --url https://linear.app --out ./extracted/saas-bento
node bin/extract-tokens.mjs extract --preset luxury-realestate --url https://www.sothebysrealty.com --out ./extracted/luxury-realestate
node bin/extract-tokens.mjs extract --preset agency-awwwards --url https://www.awwwards.com --out ./extracted/agency-awwwards

# Scaffold a new template repository pre-wired with theme-tokens.css + whitelabel.js
node bin/extract-tokens.mjs scaffold --slug tpl-land-saas-bento --preset saas-bento
```
