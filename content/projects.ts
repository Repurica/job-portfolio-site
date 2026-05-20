import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    slug: 'mafe-bento-online-ordering-platform',
    title: 'MaFe Bento Online Ordering Platform',
    tagline: 'A restaurant ordering workflow translated from kitchen operations into a deployable full-stack product.',
    summary:
      'Led end-to-end development of an online ordering platform for MaFe Bento, from stakeholder workflow mapping and requirements definition through architecture, implementation, deployment, and iteration.',
    role: 'Full Stack Web Developer',
    team: 'Restaurant owners, kitchen staff, and developer-led implementation',
    duration: 'Sep 2025 - May 2026',
    stack: ['Full-stack Web Development', 'Node.js', 'Requirements Analysis', 'System Architecture', 'Deployment'],
    problem:
      'Restaurant ordering and preparation workflows can break down when customer orders, kitchen preparation steps, and operational constraints are not captured in a clear digital flow.',
    constraints: [
      'The product needed to reflect real order-to-preparation behavior rather than an abstract e-commerce template.',
      'Restaurant owners and kitchen staff needed language and flows that matched daily operations.',
      'The system had to leave room for post-launch feature iteration and possible supply-chain extensions.',
    ],
    process: [
      'Mapped order-to-preparation workflows with restaurant stakeholders.',
      'Converted stakeholder conversations into functional requirements, user flows, and acceptance criteria.',
      'Designed the application architecture before implementation to keep ordering, preparation, and future supply-chain concepts separable.',
      'Iterated after deployment based on operational feedback and emerging feature needs.',
    ],
    architecture: [
      'Ordering flow structured around menu selection, order submission, preparation visibility, and operational handoff.',
      'Documentation layer covering functional behavior, technical decisions, and proposed supply-chain extensions.',
      'Supply-chain design notes covering inventory logic, supplier data flows, and scalability considerations.',
    ],
    solution: [
      'Built a focused online ordering platform instead of overloading the first release with broad back-office features.',
      'Used acceptance criteria to keep implementation grounded in restaurant workflow realities.',
      'Prepared functional and technical design documents for a future supply-chain management system.',
    ],
    outcome:
      'The project demonstrates practical full-stack product delivery: stakeholder discovery, requirements translation, architecture design, deployment, and iteration for a real operational environment.',
    metrics: [
      { label: 'Scope', value: 'End-to-end', note: 'Requirements, architecture, implementation, deployment, and iteration.' },
      { label: 'Stakeholders', value: '2 groups', note: 'Restaurant owners and kitchen staff.' },
      { label: 'Extension path', value: 'SCM-ready', note: 'Inventory, supplier flows, and scalability documented.' },
    ],
    reflection:
      'The most important design decision was to start from the kitchen workflow, not from a generic storefront. The next step is to connect operational metrics to ordering and inventory decisions.',
    links: [{ label: 'Details available on request', href: 'mailto:jinming.cao.2025@mitb.smu.edu.sg' }],
    coverImage: '/project-covers/recruiter-signal.svg',
    theme: { accent: '#9f2d20', accent2: '#d7a647', paper: '#f6efe2', ink: '#17130f', pattern: 'grid' },
    featured: true,
  },
  {
    slug: 'loan-ranger-vehicle-loan-process',
    title: 'Loan Ranger',
    tagline: 'A design-thinking and analytics-driven concept for improving the vehicle loan journey.',
    summary:
      'Proposed a solution to improve the vehicle loan process across application, issuance, and maintenance stages, with attention to customers, dealers, and financial institutions.',
    role: 'FinTech Product Analyst',
    team: 'Academic project team',
    duration: 'Academic project',
    stack: ['Design Thinking', 'Financial Technology', 'Data Analytics', 'Customer Journey Mapping', 'Process Improvement'],
    problem:
      'Vehicle loan journeys involve multiple parties and stages. Friction across application, issuance, and maintenance can reduce customer clarity, dealer efficiency, and institutional process quality.',
    constraints: [
      'The solution needed to consider customer, dealer, and financial-institution perspectives together.',
      'The proposal had to address process efficiency without ignoring user trust and comprehension.',
      'The concept required a clear analytical narrative rather than a purely visual prototype.',
    ],
    process: [
      'Framed the vehicle loan process as a multi-stage service journey.',
      'Identified pain points across application, issuance, and maintenance.',
      'Used design-thinking methods to connect user experience improvements with institutional process efficiency.',
      'Translated findings into a solution concept focused on clearer flow and better decision support.',
    ],
    architecture: [
      'Journey model separating borrower-facing, dealer-facing, and institution-facing interactions.',
      'Process stages organized around application intake, loan issuance, and ongoing maintenance.',
      'Analytics layer concept for surfacing bottlenecks and improvement opportunities.',
    ],
    solution: [
      'Focused on improving clarity for customers during application and loan-status understanding.',
      'Considered dealer workflow needs so the solution would fit operational handoffs.',
      'Positioned analytics as a way to improve process visibility for financial institutions.',
    ],
    outcome:
      'Loan Ranger demonstrates the ability to apply design thinking and analytics to a financial-services workflow with multiple stakeholders and operational tradeoffs.',
    metrics: [
      { label: 'Stages', value: '3', note: 'Application, issuance, and maintenance.' },
      { label: 'Stakeholders', value: '3', note: 'Customers, dealers, and financial institutions.' },
      { label: 'Focus', value: 'CX + efficiency', note: 'Customer clarity and process improvement.' },
    ],
    reflection:
      'The strongest lesson was that FinTech product work is rarely only about the interface. The real value is aligning user comprehension, partner operations, and institutional decision needs.',
    links: [{ label: 'Details available on request', href: 'mailto:jinming.cao.2025@mitb.smu.edu.sg' }],
    coverImage: '/project-covers/briefing-room.svg',
    theme: { accent: '#244f8f', accent2: '#b94f6a', paper: '#f4f0e8', ink: '#111827', pattern: 'scan' },
    featured: true,
  },
  {
    slug: 'project-caritas-logistics-tracking',
    title: 'Project Caritas IX Logistics Tracking System',
    tagline: 'A practical operations-tracking system for purchasing, transit, and inventory coordination.',
    summary:
      'Designed and implemented tracking systems as Logistics Head to streamline purchasing, transit, and inventory management while improving record accuracy and coordination.',
    role: 'Logistics Head',
    team: 'Project Caritas IX operations team',
    duration: 'Feb 2024 - Dec 2025',
    stack: ['Operations Tracking', 'Inventory Management', 'Process Design', 'Record Accuracy', 'Coordination'],
    problem:
      'Logistics-heavy student projects can lose accuracy when purchasing, transit, and inventory data are scattered across informal updates and inconsistent records.',
    constraints: [
      'The system had to be understandable by project members with different technical backgrounds.',
      'Records needed to support coordination, not just archival storage.',
      'The workflow had to remain lightweight enough for day-to-day operational use.',
    ],
    process: [
      'Identified the core logistics states that needed to be tracked across purchasing, transit, and inventory.',
      'Structured records to improve consistency and reduce ambiguity in handoffs.',
      'Implemented tracking practices that supported coordination across project operations.',
    ],
    architecture: [
      'Tracking model organized by item, purchase status, transit state, and inventory outcome.',
      'Record structure designed for quick lookup and operational accountability.',
      'Coordination layer focused on reducing mismatch between planned and actual logistics status.',
    ],
    solution: [
      'Created a clearer operational source of truth for logistics status.',
      'Streamlined the purchasing-to-inventory path with more consistent tracking.',
      'Improved record accuracy and coordination across the project timeline.',
    ],
    outcome:
      'The system improved logistical coordination and made purchasing, transit, and inventory records easier to manage throughout the project.',
    metrics: [
      { label: 'Coverage', value: '3 flows', note: 'Purchasing, transit, and inventory.' },
      { label: 'Role', value: 'Lead', note: 'Designed and implemented as Logistics Head.' },
      { label: 'Result', value: 'Cleaner records', note: 'Improved accuracy and coordination.' },
    ],
    reflection:
      'This project reinforced that good systems design often starts with operational clarity. A simple tracking model can outperform a complex tool when the team needs reliability and shared understanding.',
    links: [{ label: 'Details available on request', href: 'mailto:jinming.cao.2025@mitb.smu.edu.sg' }],
    coverImage: '/project-covers/campus-lab.svg',
    theme: { accent: '#3c6f4a', accent2: '#c46b2c', paper: '#f7f1df', ink: '#151815', pattern: 'ribbon' },
    featured: true,
  },
  {
    slug: 'sbs-transit-cybersecurity-awareness',
    title: 'SBS Transit Cybersecurity Awareness Support',
    tagline: 'Cybersecurity training and phishing-campaign coordination for employee awareness and risk reduction.',
    summary:
      'Supported internal cybersecurity training refresh, phishing campaign coordination, and audit work during a cybersecurity internship at SBS Transit Ltd.',
    role: 'Cybersecurity Intern',
    team: 'Cybersecurity team, internal stakeholders, and external vendors',
    duration: 'May 2024 - Aug 2024',
    stack: ['Cybersecurity', 'Training Modules', 'Phishing Campaigns', 'Internal Audit', 'Vendor Coordination'],
    problem:
      'Cybersecurity programs need employees to understand current policies and respond appropriately to phishing and confidential-document risks.',
    constraints: [
      'Training needed to align with current internal policies.',
      'Phishing campaign execution required coordination between internal team members and external vendors.',
      'Audit findings had to be handled carefully because they related to confidential document exposure risk.',
    ],
    process: [
      'Reviewed and refreshed training modules to improve policy alignment and learning experience.',
      'Coordinated campaign setup, testing, and execution with cybersecurity team members and external vendors.',
      'Supported internal audit work to identify potential security gaps.',
    ],
    architecture: [
      'Training content layer focused on policy-aligned employee learning.',
      'Campaign workflow covering setup, testing, vendor coordination, and execution.',
      'Audit-support workflow for surfacing and documenting confidential-document exposure risks.',
    ],
    solution: [
      'Improved training module clarity and relevance.',
      'Supported smooth phishing campaign execution through coordination and testing.',
      'Helped identify potential internal security gaps for risk reduction.',
    ],
    outcome:
      'The work contributed to stronger cybersecurity awareness operations and supported risk-reduction efforts around confidential document exposure.',
    metrics: [
      { label: 'Internship', value: '4 months', note: 'May 2024 to Aug 2024.' },
      { label: 'Workstreams', value: '3', note: 'Training, phishing campaign, and audit support.' },
      { label: 'Risk area', value: 'Confidential docs', note: 'Potential exposure gaps identified.' },
    ],
    reflection:
      'The project showed how cybersecurity work depends on both technical understanding and operational coordination. Clear training and careful execution can reduce risk before incidents occur.',
    links: [{ label: 'Details available on request', href: 'mailto:jinming.cao.2025@mitb.smu.edu.sg' }],
    coverImage: '/project-covers/privacy-notes.svg',
    theme: { accent: '#6b4aa0', accent2: '#2e718c', paper: '#f3eadc', ink: '#15111d', pattern: 'dots' },
  },
];
