import { existsSync, readFileSync } from 'node:fs';

const required = [
  'app/page.tsx',
  'app/about/page.tsx',
  'app/projects/page.tsx',
  'app/projects/[slug]/page.tsx',
  'app/cv/page.tsx',
  'app/resume/page.tsx',
  'app/contact/page.tsx',
  'app/robots.ts',
  'app/sitemap.ts',
  'content/profile.ts',
  'content/experience.ts',
  'content/projects.ts',
  'components/Hero.tsx',
  'components/ProjectThemeShowcase.tsx',
  'components/CvTimeline.tsx',
  'public/resume.pdf',
];

const missing = required.filter((file) => !existsSync(file));
if (missing.length) {
  console.error(`Missing required files:\n${missing.join('\n')}`);
  process.exit(1);
}

const profile = readFileSync('content/profile.ts', 'utf8');
for (const field of ['name', 'headline', 'subheadline', 'location', 'email', 'github', 'linkedin', 'website', 'bioShort', 'bioLong', 'skills', 'experience', 'education', 'projects', 'awards', 'resumePdfUrl']) {
  if (!profile.includes(field)) {
    console.error(`content/profile.ts does not include required field: ${field}`);
    process.exit(1);
  }
}

const projects = readFileSync('content/projects.ts', 'utf8');
for (const field of ['slug', 'title', 'tagline', 'summary', 'role', 'team', 'duration', 'stack', 'problem', 'constraints', 'process', 'architecture', 'outcome', 'metrics', 'reflection', 'links', 'coverImage', 'theme']) {
  if (!projects.includes(field)) {
    console.error(`content/projects.ts does not include required project field: ${field}`);
    process.exit(1);
  }
}

console.log('Structure verification passed.');
