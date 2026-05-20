import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/content';

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="group paper-card overflow-hidden rounded-[2rem] shadow-paper transition duration-300 hover:-translate-y-1 hover:shadow-editorial">
      <Link href={`/projects/${project.slug}`} className="focus-ring block">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line/60">
          <Image src={project.coverImage} alt="" fill priority={priority} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="p-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-[.28em] text-accent">{project.role}</p>
          <h3 className="font-serif text-2xl font-black leading-tight text-ink">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{project.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2">{project.stack.slice(0, 4).map((item) => <span key={item} className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-muted">{item}</span>)}</div>
        </div>
      </Link>
    </article>
  );
}
