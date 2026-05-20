import type { Metadata } from 'next';
import { PrintButton } from '@/components/PrintButton';
import { profile } from '@/content/profile';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({ title: 'Resume — Cao Jinming', description: 'A standard recruiter-scannable resume page with PDF download.', path: '/resume' });

export default function ResumePage() {
  return (
    <section className="relative z-10 mx-auto max-w-4xl px-5 py-20 md:px-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 no-print">
        <a href={profile.resumePdfUrl} download className="focus-ring rounded-full bg-ink px-5 py-3 text-xs font-black uppercase tracking-[.22em] text-paper hover:bg-accent">Download PDF</a>
        <PrintButton />
      </div>
      <article className="paper-card rounded-[2rem] p-6 shadow-paper md:p-10">
        <header className="border-b border-line/70 pb-6">
          <h1 className="font-serif text-5xl font-black tracking-[-.04em]">{profile.name}</h1>
          <p className="mt-2 text-lg text-muted">{profile.subheadline}</p>
          <p className="mt-3 text-sm text-muted">{profile.location} · <a href={`mailto:${profile.email}`}>{profile.email}</a>{profile.phone ? ` · ${profile.phone}` : ''} · <a href={profile.github}>GitHub</a> · <a href={profile.linkedin}>LinkedIn</a></p>
        </header>
        <ResumeSection title="Summary"><p>{profile.bioShort}</p></ResumeSection>
        <ResumeSection title="Experience">
          {profile.experience.map((item) => (
            <div key={item.id} className="mb-6">
              <div className="flex flex-wrap justify-between gap-2"><h3 className="font-bold text-ink">{item.role} · {item.company}</h3><span className="font-mono text-xs text-muted">{item.period}</span></div>
              <p className="mt-1 text-sm text-muted">{item.summary}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">{item.outcomes.map((entry) => <li key={entry}>{entry}</li>)}</ul>
            </div>
          ))}
        </ResumeSection>
        <ResumeSection title="Projects">
          {profile.projects.slice(0, 3).map((project) => <p key={project.slug} className="mb-3 text-sm text-muted"><strong className="text-ink">{project.title}:</strong> {project.summary}</p>)}
        </ResumeSection>
        <ResumeSection title="Education">
          {profile.education.map((edu) => <p key={edu.id} className="text-sm text-muted"><strong className="text-ink">{edu.school}</strong>, {edu.degree} · {edu.period}</p>)}
        </ResumeSection>
        <ResumeSection title="Skills"><p className="text-sm text-muted">{profile.skills.map((group) => `${group.category}: ${group.items.join(', ')}`).join(' · ')}</p></ResumeSection>
      </article>
    </section>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mt-6"><h2 className="mb-3 font-mono text-xs font-black uppercase tracking-[.28em] text-accent">{title}</h2><div className="leading-7">{children}</div></section>;
}
