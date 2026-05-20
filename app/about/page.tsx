import type { Metadata } from 'next';
import { MotionSection } from '@/components/MotionSection';
import { SectionHeader } from '@/components/SectionHeader';
import { profile } from '@/content/profile';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({ title: 'About — Your Name', description: 'About the candidate, working style, product orientation, and strengths.', path: '/about' });

export default function AboutPage() {
  return (
    <MotionSection className="mx-auto max-w-5xl px-5 py-24 md:px-10">
      <SectionHeader eyebrow="about" title="A frontend engineer with an editorial eye and product discipline." />
      <div className="grid gap-10 md:grid-cols-[1fr_280px]">
        <div className="prose-editorial space-y-6 text-lg">
          {profile.bioLong.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <aside className="paper-card rounded-[2rem] p-6 shadow-paper">
          <h2 className="font-serif text-2xl font-black">Snapshot</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div><dt className="font-mono uppercase tracking-[.22em] text-accent">Location</dt><dd className="mt-1 text-muted">{profile.location}</dd></div>
            <div><dt className="font-mono uppercase tracking-[.22em] text-accent">Looking for</dt><dd className="mt-1 text-muted">Frontend / Design Engineering / Product-minded Full-stack</dd></div>
            <div><dt className="font-mono uppercase tracking-[.22em] text-accent">Signal</dt><dd className="mt-1 text-muted">Clear UI, typed systems, accessible motion, decision-ready writing.</dd></div>
          </dl>
        </aside>
      </div>
    </MotionSection>
  );
}
