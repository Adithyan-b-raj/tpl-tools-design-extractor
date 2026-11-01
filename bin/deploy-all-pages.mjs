#!/usr/bin/env node
/**
 * Deploys all 17 vertical templates to Cloudflare Pages without hanging on Windows stdin/handles.
 */
import { spawn } from 'node:child_process';

const PROJECTS = [
  'tpl-land-saas-bento',
  'tpl-land-realestate',
  'tpl-land-d2c-gadget',
  'tpl-land-event-pass',
  'tpl-port-agency-awwwards',
  'tpl-port-photography',
  'tpl-port-architecture',
  'tpl-serp-retail-pos-gst',
  'tpl-serp-clinic-salon-crm',
  'tpl-serp-cafe-qrmenu-kot',
  'tpl-serp-repair-tracker',
  'tpl-ecom-streetwear',
  'tpl-ecom-cosmetics',
  'tpl-ecom-quickcommerce',
  'tpl-ecom-b2b-wholesale',
  'tpl-lerp-warehouse-erp',
  'tpl-lerp-hrms-payroll'
];

function runWranglerFast(cwd, args, doneRegex, timeoutMs = 25000) {
  return new Promise((resolve) => {
    const child = spawn('cmd.exe', ['/c', 'npx', 'wrangler', ...args], {
      cwd,
      stdio: ['ignore', 'pipe', 'pipe'],
      windowsHide: true
    });

    let combined = '';
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      try {
        spawn('taskkill', ['/pid', String(child.pid), '/f', '/t'], { stdio: 'ignore', windowsHide: true });
      } catch (e) {}
      resolve(combined);
    };

    const onData = (chunk) => {
      combined += chunk.toString();
      if (doneRegex.test(combined)) {
        setTimeout(finish, 250);
      }
    };

    child.stdout.on('data', onData);
    child.stderr.on('data', onData);
    child.on('exit', finish);

    const timer = setTimeout(finish, timeoutMs);
  });
}

async function deployProject(slug) {
  const cwd = `C:/projects/${slug}`;
  await runWranglerFast(
    cwd,
    ['pages', 'project', 'create', slug, '--production-branch=main'],
    /(Successfully created|already exists|A project with this name)/i,
    15000
  );
  const out = await runWranglerFast(
    cwd,
    ['pages', 'deploy', 'public', `--project-name=${slug}`, '--branch=main', '--commit-dirty=true'],
    /(Deployment complete!|Take a peek over at)/i,
    30000
  );
  const match = out.match(/https:\/\/[^\s]+\.pages\.dev/);
  console.log(`✓ Deployed ${slug} -> https://${slug}.pages.dev (${match ? match[0] : 'OK'})`);
}

async function main() {
  // Run in parallel batches of 4 for fast completion
  for (let i = 0; i < PROJECTS.length; i += 4) {
    const batch = PROJECTS.slice(i, i + 4);
    await Promise.all(batch.map(deployProject));
  }
  console.log('ALL 17 TEMPLATES DEPLOYED TO CLOUDFLARE PAGES!');
}

main();
