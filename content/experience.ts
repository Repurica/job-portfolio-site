import type { Education, Experience } from '@/types/content';

export const experience: Experience[] = [
  {
    id: 'frontend-platform-intern',
    role: 'Frontend / Product Engineering Intern',
    company: 'Placeholder AI Product Studio',
    location: 'Singapore / Remote',
    period: '2025.05 — 2025.08',
    summary: 'Built recruiter-facing analytics and internal workflow UI from ambiguous product requirements.',
    responsibilities: [
      'Translated product questions into typed React components, data contracts, and reusable page patterns.',
      'Improved dashboard information architecture so hiring and operations stakeholders could scan status faster.',
      'Partnered with backend and design peers to ship accessible, responsive interfaces under tight iteration cycles.',
    ],
    outcomes: [
      'Reduced key task completion steps from 7 to 3 in a prototype usability review.',
      'Created a component inventory that shortened new dashboard page setup time by roughly 40%.',
      'Documented design tokens, empty states, and accessibility notes for handoff.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'REST APIs', 'Figma'],
  },
  {
    id: 'data-visualization-research',
    role: 'Visual Analytics Research Assistant',
    company: 'Placeholder University Lab',
    location: 'Singapore',
    period: '2024.09 — 2025.04',
    summary: 'Designed data narratives and interactive visual systems for exploratory analysis.',
    responsibilities: [
      'Built reproducible analysis notebooks and web reports for temporal and geospatial data.',
      'Designed chart systems focused on comparison, annotation, and decision clarity.',
      'Validated data transformations with domain experts before visual publication.',
    ],
    outcomes: [
      'Produced an interactive report used in a seminar demo with 80+ participants.',
      'Established a repeatable Quarto + R workflow for project documentation.',
    ],
    stack: ['R', 'Quarto', 'ggplot2', 'D3.js', 'Observable', 'Python'],
  },
  {
    id: 'student-builder',
    role: 'Student Builder / Full-stack Developer',
    company: 'Independent Projects',
    location: 'Remote',
    period: '2023.01 — Present',
    summary: 'Created small products that combine front-end craft, automation, and product thinking.',
    responsibilities: [
      'Scoped MVPs, built prototypes, and wrote concise project documentation.',
      'Connected UI decisions to user workflows, onboarding, and retention signals.',
      'Maintained deployable repos with clean README and issue tracking.',
    ],
    outcomes: [
      'Shipped multiple portfolio-ready case studies with measurable UX and engineering tradeoffs.',
      'Built a reusable personal portfolio system that can be deployed directly to Vercel.',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Vercel', 'GitHub Actions'],
  },
];

export const education: Education[] = [
  {
    id: 'university-degree',
    school: 'Placeholder University',
    degree: 'BSc in Information Systems / Computer Science',
    location: 'Singapore',
    period: '2022 — 2026',
    details: [
      'Relevant coursework: visual analytics, software engineering, databases, cloud computing, product analytics.',
      'Focus: design engineering, data-informed products, and maintainable front-end systems.',
    ],
  },
];
