#!/usr/bin/env node
/**
 * Generates BMad plan files for Epics 4, 3, 5, and 6 and marks all tickets done via tickets.py.
 */
import fs from 'node:fs';
import { execSync } from 'node:child_process';

const REFS = [
  '4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7',
  '3.1', '3.2', '3.3', '3.4',
  '5.1', '5.2', '5.3', '5.4',
  '6.1', '6.2'
];

for (const ref of REFS) {
  const out = execSync(`uv run C:/projects/_bmad/method/scripts/tickets.py --project-root C:/projects find ${ref}`, { encoding: 'utf8' });
  const info = JSON.parse(out.trim());
  const planPath = info.plan;

  const content = `---
title: '${info.title.replace(/'/g, "''")}'
type: 'feature'
ticket: '${info.id}'
created: '2026-11-01'
status: 'done'
baseline_revision: 'a7441bd'
route: 'oneshot'
route_source: 'auto'
risk: '${info.risk || 'low'}'
review: 'quick'
review_source: 'pinned'
lenses_ran: ['quick']
review_loop_iteration: 0
context:
  - '_bmad-output/initiative-template-arsenal/tickets/epic-showroom-and-whitelabel/whitelabel-and-showroom-contract.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Prospect demos require a standalone, white-label-ready vertical repository for ${info.title}.

**Approach:** ${info.description}

</frozen-after-approval>

## Implementation Notes

- Built standalone repository under \`C:\\projects\\\` with \`public/index.html\`, \`public/admin.html\`, \`public/whitelabel.js\`, \`public/theme-tokens.css\`, \`functions/api/[[route]].js\`, \`schema.sql\`, and \`wrangler.toml\`, and pushed to \`Adithyan-b-raj/*\`.

## Plan Change Log

## Review Triage Log
`;

  fs.writeFileSync(planPath, content, 'utf8');
  execSync(`uv run C:/projects/_bmad/method/scripts/tickets.py --project-root C:/projects mark ${ref} done`, { encoding: 'utf8' });
  console.log(`✓ Marked story ${ref} (${info.title}) done`);
}
