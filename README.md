# Job-Oriented Personal Portfolio

A high-design, recruiter-friendly personal website built with **Next.js App Router + TypeScript + Tailwind CSS**, with Motion, GSAP ScrollTrigger, and a small client-only React Three Fiber shader hero.

## What this site is

This is a “求职导向”的个人 website for:

- 校招 / 社招投递
- project case studies
- interactive CV browsing
- downloadable standard resume
- personal-brand landing page

The visual language is inspired by abstract editorial web syntax: manuscript paper texture, vertical titles, horizontal chapter hints, fixed bottom dock navigation, sentence-triggered theme changes, ink/paper contrast, and restrained modern shader/particle details. It does **not** copy any original assets, copy, logo, character artwork, or exact layout from the reference.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Verification

```bash
npm run typecheck
npm run lint
npm run test
npm run build
npm run smoke
npm run release:verify
```

`npm run smoke` optionally accepts a running URL:

```bash
SMOKE_BASE_URL=http://localhost:3000 npm run smoke
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Use the default Next.js build settings:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output: `.next`

## Replace with real resume content

Update these files first:

- `content/profile.ts`: identity, headline, links, bios, skills, awards, `resumePdfUrl`
- `content/experience.ts`: real work / internship / research experiences
- `content/projects.ts`: real project case studies, verified metrics, real demo/repo links
- `public/resume.pdf`: replace the placeholder PDF
- `public/project-covers/*.svg`: replace with real screenshots or custom cover art
- `app/opengraph-image.tsx`: optionally customize social preview text

## Design and accessibility notes

- The hero is intentionally dramatic; content pages are stable, professional, and fast to scan.
- WebGL is dynamically loaded and disabled for reduced-motion users.
- Animation uses transform / opacity first.
- Navigation remains keyboard accessible and includes Skip to content.
- Content pages are semantic and print-friendly where appropriate.

## File structure

```text
app/                      App Router pages, metadata, SEO routes
components/               Reusable UI and interaction components
content/                  Static data files to replace with real content
lib/                      Shared helpers and metadata utilities
public/                   Resume PDF and placeholder cover assets
scripts/                  Deterministic structural and smoke checks
types/                    Content model TypeScript definitions
```

## TODO before sending to recruiters

- Replace all placeholder profile fields.
- Replace project metrics with verified numbers.
- Replace placeholder resume PDF.
- Add real demo/repo links or mark confidential work clearly.
- Run Lighthouse on production deployment and confirm Performance >= 90, Accessibility >= 95, SEO >= 95.
