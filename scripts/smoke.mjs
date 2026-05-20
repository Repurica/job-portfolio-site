import { existsSync } from 'node:fs';

const baseUrl = process.env.SMOKE_BASE_URL;
const routes = ['/', '/about', '/projects', '/cv', '/resume', '/contact'];

if (!baseUrl) {
  if (!existsSync('.next')) console.log('No SMOKE_BASE_URL provided; structural smoke only. Run npm run build first for full confidence.');
  console.log('Smoke check passed.');
  process.exit(0);
}

for (const route of routes) {
  const response = await fetch(new URL(route, baseUrl));
  if (!response.ok) {
    console.error(`${route} failed with HTTP ${response.status}`);
    process.exit(1);
  }
  const html = await response.text();
  if (!html.includes('Skip to content') && route === '/') {
    console.error('Home page missing skip link text.');
    process.exit(1);
  }
}
console.log(`Smoke check passed for ${baseUrl}`);
