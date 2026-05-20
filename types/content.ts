export type LinkItem = {
  label: string;
  href: string;
};

export type SkillCategory = {
  category: 'Frontend' | 'Backend' | 'Data' | 'Cloud' | 'Security' | 'Product' | string;
  items: string[];
  level: number;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  responsibilities: string[];
  outcomes: string[];
  stack: string[];
};

export type Education = {
  id: string;
  school: string;
  degree: string;
  location: string;
  period: string;
  details: string[];
};

export type Award = {
  title: string;
  issuer: string;
  year: string;
  summary: string;
};

export type ProjectTheme = {
  accent: string;
  accent2: string;
  paper: string;
  ink: string;
  pattern: 'grid' | 'scan' | 'ribbon' | 'dots';
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  role: string;
  team: string;
  duration: string;
  stack: string[];
  problem: string;
  constraints: string[];
  process: string[];
  architecture: string[];
  solution: string[];
  outcome: string;
  metrics: { label: string; value: string; note: string }[];
  reflection: string;
  links: LinkItem[];
  coverImage: string;
  theme: ProjectTheme;
  featured?: boolean;
};

export type Profile = {
  name: string;
  initials: string;
  headline: string;
  subheadline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  website: string;
  bioShort: string;
  bioLong: string[];
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  awards: Award[];
  resumePdfUrl: string;
};
