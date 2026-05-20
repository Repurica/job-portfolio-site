import { education, experience } from '@/content/experience';
import { projects } from '@/content/projects';
import type { Award, Profile, SkillCategory } from '@/types/content';

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    level: 82,
    items: ['Full-stack Web Development', 'Responsive UI', 'User Flows', 'Acceptance Criteria', 'Technical Documentation'],
  },
  {
    category: 'Backend',
    level: 74,
    items: ['Node.js', 'Functional Requirements', 'System Architecture', 'Inventory Logic', 'Supplier Data Flows'],
  },
  {
    category: 'Data',
    level: 78,
    items: ['Python', 'Data Analytics', 'Financial Technology', 'Machine Learning Exposure', 'Process Analytics'],
  },
  {
    category: 'Cloud',
    level: 70,
    items: ['AWS', 'Cloud Infrastructure Architecture', 'Deployment Planning', 'Scalability Considerations'],
  },
  {
    category: 'Security',
    level: 84,
    items: ['Cybersecurity', 'Open Source Intelligence', 'Phishing Campaign Coordination', 'Security Awareness Training', 'Audit Support'],
  },
  {
    category: 'Product',
    level: 86,
    items: ['Design Thinking', 'Stakeholder Interviews', 'Workflow Mapping', 'Customer Experience', 'Financial Services Processes'],
  },
];

export const awards: Award[] = [
  {
    title: 'Project Caritas IX - Logistics Head',
    issuer: 'Project Caritas IX',
    year: '2024 - 2025',
    summary:
      'Designed and implemented tracking systems to streamline purchasing, transit, and inventory management while improving record accuracy and coordination.',
  },
  {
    title: 'SMU Ellipsis Coders Assembly - Mentor',
    issuer: 'SMU Ellipsis Coders Assembly',
    year: '2023 - 2024',
    summary:
      'Mentored juniors in web application development and introductory programming through supplementary sessions focused on concept clarification and debugging support.',
  },
];

export const profile: Profile = {
  name: 'Cao Jinming',
  initials: 'CJ',
  headline: 'FinTech and cybersecurity builder designing secure, useful full-stack products.',
  subheadline:
    'SMU MITB Financial Technology & Analytics candidate | Full Stack Web Developer | Cybersecurity-focused product builder',
  location: 'Singapore',
  email: 'jinming.cao.2025@mitb.smu.edu.sg',
  phone: '+65 8957 0699',
  github: 'https://github.com/Repurica',
  linkedin: 'https://www.linkedin.com/in/jinming-cao-4514aa1ba',
  website: 'https://github.com/Repurica/job-portfolio-site',
  bioShort:
    'I am an SMU Financial Technology & Analytics candidate with experience in full-stack web development, cybersecurity training operations, and process-focused product design for financial and operational workflows.',
  bioLong: [
    'I am currently pursuing the Master of IT in Business, majoring in Financial Technology & Analytics, at Singapore Management University. My background combines financial technology, cybersecurity, data analytics, and practical web development.',
    'At MaFe Bento, I partnered with restaurant owners and kitchen staff to map order-to-preparation workflows, translate them into requirements and acceptance criteria, and lead development of an online ordering platform from architecture through deployment and iteration.',
    'At SBS Transit, I supported cybersecurity enablement by refreshing internal training modules, coordinating a phishing campaign with internal and external stakeholders, and identifying potential security gaps during audit support work.',
    'I am looking for internship, part-time, and early-career opportunities in Singapore where I can build reliable full-stack products, improve secure user workflows, and contribute with both engineering execution and product judgment.',
  ],
  skills,
  experience,
  education,
  projects,
  awards,
  resumePdfUrl: '/resume.pdf',
};
