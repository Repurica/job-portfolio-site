import type { Metadata } from 'next';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import { projects } from '@/content/projects';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({ title: 'Projects — Cao Jinming', description: 'Project case studies for FinTech, full-stack web development, cybersecurity, and operations systems.', path: '/projects' });

export default function ProjectsPage() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-10">
      <SectionHeader eyebrow="projects" title="Recruiter-friendly case studies.">
        Each project is structured around problem, constraints, process, architecture, solution, outcome, and reflection.
      </SectionHeader>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} priority={index === 0} />)}
      </div>
    </section>
  );
}
