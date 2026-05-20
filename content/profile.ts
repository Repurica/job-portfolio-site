import { education, experience } from '@/content/experience';
import { projects } from '@/content/projects';
import type { Award, Profile, SkillCategory } from '@/types/content';

export const skills: SkillCategory[] = [
  { category: 'Frontend', level: 92, items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Motion', 'GSAP', 'Design Systems'] },
  { category: 'Backend', level: 72, items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Prisma', 'Auth', 'API Design'] },
  { category: 'Data', level: 80, items: ['R', 'Quarto', 'Visual Analytics', 'SQL', 'Python', 'Experiment Metrics'] },
  { category: 'Cloud', level: 68, items: ['Vercel', 'GitHub Actions', 'Docker basics', 'Monitoring', 'Edge deployment'] },
  { category: 'Security', level: 58, items: ['OWASP basics', 'Auth boundaries', 'Privacy-first UX', 'Secrets hygiene'] },
  { category: 'Product', level: 86, items: ['Funnel thinking', 'UX research', 'PRDs', 'Decision logs', 'Stakeholder writing'] },
];

export const awards: Award[] = [
  {
    title: 'Placeholder Hackathon Finalist',
    issuer: 'University Innovation Office',
    year: '2025',
    summary: 'Recognized for a product prototype combining clear user workflow, technical feasibility, and presentation quality.',
  },
  {
    title: 'Dean’s List / Academic Distinction Placeholder',
    issuer: 'Placeholder University',
    year: '2024',
    summary: 'Replace with verified academic or professional recognition before sharing publicly.',
  },
];

export const profile: Profile = {
  name: 'Your Name',
  initials: 'YN',
  headline: 'Design-minded Frontend Engineer building clear, fast, decision-ready product interfaces.',
  subheadline: '求职方向：Frontend Engineer / Design Engineer / Product-minded Full-stack Intern',
  location: 'Singapore · Open to relocation / remote',
  email: 'you@example.com',
  github: 'https://github.com/yourname',
  linkedin: 'https://www.linkedin.com/in/yourname',
  website: 'https://your-domain.com',
  bioShort:
    'I turn ambiguous product questions into typed interfaces, visual explanations, and recruiter-friendly case studies. My work sits between front-end architecture, visual analytics, and product judgment.',
  bioLong: [
    'I am a product-aware frontend engineer who enjoys the part of software where interface craft meets decision clarity. I care about typography, speed, accessibility, and the quiet details that make a tool feel trustworthy.',
    'My strongest projects combine structured thinking with a visible artifact: dashboards that reveal what matters, case studies that explain tradeoffs, and interactive reports that help stakeholders act with more confidence.',
    'I am currently looking for roles where I can build polished web products, collaborate closely with design and product teams, and grow into a frontend architect who understands business impact.',
  ],
  skills,
  experience,
  education,
  projects,
  awards,
  resumePdfUrl: '/resume.pdf',
};
