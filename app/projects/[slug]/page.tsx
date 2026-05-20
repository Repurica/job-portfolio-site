import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';
import { externalLinkProps } from '@/lib/utils';
import { absoluteUrl, pageMetadata } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return pageMetadata({ title: `${project.title} — Case Study`, description: project.summary, path: `/projects/${project.slug}`, image: project.coverImage });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const caseStudyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: absoluteUrl(project.coverImage),
    keywords: project.stack.join(', '),
  };

  return (
    <article className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }} />
      <Link href="/projects" className="focus-ring text-sm font-bold text-accent hover:underline">← Back to projects</Link>
      <header className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[.32em] text-accent">case study / {project.duration}</p>
          <h1 className="mt-4 font-serif text-5xl font-black leading-[.95] tracking-[-.05em] text-ink md:text-7xl">{project.title}</h1>
          <p className="mt-6 text-xl leading-9 text-muted">{project.tagline}</p>
        </div>
        <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] border border-line/70 shadow-paper">
          <Image src={project.coverImage} alt="" fill priority sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
        </div>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-4" aria-label="Project overview facts">
        {[
          ['Role', project.role],
          ['Team', project.team],
          ['Duration', project.duration],
          ['Stack', project.stack.slice(0, 3).join(' · ')],
        ].map(([label, value]) => (
          <div key={label} className="paper-card rounded-[1.5rem] p-5">
            <dt className="font-mono text-xs uppercase tracking-[.24em] text-accent">{label}</dt>
            <dd className="mt-2 text-sm leading-6 text-muted">{value}</dd>
          </div>
        ))}
      </section>

      <CaseSection title="Project Overview"><p>{project.summary}</p></CaseSection>
      <CaseSection title="Challenge"><p>{project.problem}</p></CaseSection>
      <CaseSection title="Constraints"><BulletList items={project.constraints} /></CaseSection>
      <CaseSection title="Process"><NumberedList items={project.process} /></CaseSection>
      <CaseSection title="Architecture">
        <div className="grid gap-4 md:grid-cols-2">
          {project.architecture.map((item) => <div key={item} className="rounded-2xl border border-line/70 bg-paper/60 p-4 text-sm leading-7 text-muted">{item}</div>)}
        </div>
        <pre className="mt-6 overflow-x-auto rounded-2xl bg-ink p-5 text-xs leading-6 text-paper"><code>{`content/projects.ts → typed case-study data\napp/projects/[slug] → static route generation\ncomponents/* → reusable evidence blocks\npublic/project-covers → replaceable visual assets`}</code></pre>
      </CaseSection>
      <CaseSection title="Solution"><BulletList items={project.solution} /></CaseSection>
      <CaseSection title="Outcome / Metrics">
        <p>{project.outcome}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="rounded-[1.5rem] border border-line/70 bg-accent/10 p-5">
              <p className="font-mono text-xs uppercase tracking-[.24em] text-accent">{metric.label}</p>
              <p className="mt-2 font-serif text-4xl font-black text-ink">{metric.value}</p>
              <p className="mt-2 text-sm text-muted">{metric.note}</p>
            </div>
          ))}
        </div>
      </CaseSection>
      <CaseSection title="Reflection"><p>{project.reflection}</p></CaseSection>
      <CaseSection title="Links / Demo / Repo">
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => <a key={link.href} href={link.href} {...externalLinkProps(link.href)} className="focus-ring rounded-full bg-ink px-5 py-3 text-xs font-black uppercase tracking-[.22em] text-paper hover:bg-accent">{link.label}</a>)}
        </div>
      </CaseSection>
    </article>
  );
}

function CaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12 grid gap-6 border-t border-line/70 pt-10 md:grid-cols-[220px_1fr]">
      <h2 className="font-serif text-2xl font-black text-ink">{title}</h2>
      <div className="prose-editorial max-w-3xl text-base leading-8 text-muted">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return <ul className="list-disc space-y-3 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function NumberedList({ items }: { items: string[] }) {
  return <ol className="list-decimal space-y-3 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ol>;
}
