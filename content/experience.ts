import type { Education, Experience } from '@/types/content';

export const experience: Experience[] = [
  {
    id: 'mafe-bento-full-stack-developer',
    role: 'Full Stack Web Developer',
    company: 'MaFe Bento',
    location: 'Singapore',
    period: 'Sep 2025 - May 2026',
    summary:
      'Led full-stack development of an online ordering platform for restaurant ordering and kitchen preparation workflows.',
    responsibilities: [
      'Partnered with restaurant owners and kitchen staff to map order-to-preparation workflows.',
      'Translated operational needs into functional requirements, user flows, and acceptance criteria.',
      'Led architecture design, implementation, deployment, and post-launch feature iteration for the ordering platform.',
      'Authored technical and functional design documents for a proposed supply chain management system.',
    ],
    outcomes: [
      'Delivered a structured online ordering workflow aligned with real restaurant operations.',
      'Created documentation covering inventory logic, supplier data flows, and scalability considerations.',
      'Built a practical bridge between stakeholder requirements and maintainable implementation decisions.',
    ],
    stack: ['Full-stack Web Development', 'Node.js', 'Requirements Analysis', 'System Architecture', 'Deployment'],
  },
  {
    id: 'sbs-transit-cybersecurity-intern',
    role: 'Cybersecurity Intern',
    company: 'SBS Transit Ltd',
    location: 'Singapore',
    period: 'May 2024 - Aug 2024',
    summary:
      'Supported cybersecurity awareness, phishing campaign coordination, and internal audit work for a major public transport operator.',
    responsibilities: [
      'Revamped internal cybersecurity training modules to align with current policies and improve the employee learning experience.',
      'Coordinated an internal phishing campaign with cybersecurity team members and external vendors.',
      'Supported campaign setup, testing, execution, and stakeholder communication.',
      'Identified potential security gaps during internal auditing related to confidential document exposure.',
    ],
    outcomes: [
      'Improved clarity and policy alignment of internal cybersecurity training content.',
      'Helped execute a coordinated phishing campaign across internal and vendor stakeholders.',
      'Contributed to reducing potential confidential-document exposure risk through audit support.',
    ],
    stack: ['Cybersecurity', 'Security Awareness', 'Phishing Campaigns', 'Internal Audit', 'Policy Alignment'],
  },
  {
    id: 'project-caritas-logistics-head',
    role: 'Logistics Head',
    company: 'Project Caritas IX',
    location: 'Singapore',
    period: 'Feb 2024 - Dec 2025',
    summary:
      'Designed logistics tracking systems to improve purchasing, transit, inventory visibility, and coordination accuracy.',
    responsibilities: [
      'Designed and implemented tracking systems for purchasing, transit, and inventory management.',
      'Improved record structure so logistics status could be monitored and coordinated more reliably.',
      'Worked across operational details where accuracy and communication mattered more than visual complexity.',
    ],
    outcomes: [
      'Streamlined purchasing, transit, and inventory management workflows.',
      'Improved record accuracy and logistical coordination for project operations.',
    ],
    stack: ['Operations Tracking', 'Inventory Management', 'Process Design', 'Coordination'],
  },
  {
    id: 'ellipsis-coders-assembly-mentor',
    role: 'Mentor',
    company: 'SMU Ellipsis Coders Assembly',
    location: 'Singapore',
    period: 'Aug 2023 - Aug 2024',
    summary:
      'Mentored juniors in web application development and introductory programming through supplementary technical sessions.',
    responsibilities: [
      'Explained programming concepts and web application development fundamentals to junior students.',
      'Provided debugging support and helped learners clarify implementation issues.',
      'Structured sessions around concept clarification, hands-on practice, and practical troubleshooting.',
    ],
    outcomes: [
      'Supported junior students in building confidence with introductory programming and web development.',
      'Strengthened communication skills by translating technical ideas into actionable guidance.',
    ],
    stack: ['Web Application Development', 'Introductory Programming', 'Debugging', 'Mentoring'],
  },
];

export const education: Education[] = [
  {
    id: 'smu-mitb-fintech-analytics',
    school: 'Singapore Management University',
    degree: 'Master of IT in Business, Financial Technology & Analytics',
    location: 'Singapore',
    period: 'Aug 2025 - Dec 2026',
    details: ['Major in Financial Technology & Analytics.'],
  },
  {
    id: 'smu-bsc-fintech-cybersecurity',
    school: 'Singapore Management University',
    degree: 'Bachelor of Science, Financial Technology; Second Major in Cybersecurity',
    location: 'Singapore',
    period: 'Aug 2022 - Dec 2025',
    details: [
      'Additional academic exposure in Machine Learning and Blockchain Technology.',
      'Relevant focus areas: financial technology, cybersecurity, data analytics, and secure digital systems.',
    ],
  },
];
