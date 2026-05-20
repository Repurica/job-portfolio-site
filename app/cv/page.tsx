import type { Metadata } from 'next';
import { CvTimeline } from '@/components/CvTimeline';
import { SectionHeader } from '@/components/SectionHeader';
import { SkillMatrix } from '@/components/SkillMatrix';
import { profile } from '@/content/profile';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({ title: 'Interactive CV — Cao Jinming', description: 'Interactive timeline, expandable experience, education, skills matrix, and resume PDF download.', path: '/cv' });

export default function CvPage() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-10">
      <SectionHeader eyebrow="interactive cv" title="Readable first, expressive second.">
        A web-native CV with expandable details. It is suitable for screenshots and print because the visual system is restrained below the hero.
      </SectionHeader>
      <div className="mb-10 flex flex-wrap gap-3">
        <a href={profile.resumePdfUrl} download className="focus-ring rounded-full bg-ink px-5 py-3 text-xs font-black uppercase tracking-[.22em] text-paper hover:bg-accent">Download PDF resume</a>
        <a href="/resume" className="focus-ring rounded-full border border-line px-5 py-3 text-xs font-black uppercase tracking-[.22em] text-ink hover:border-accent hover:text-accent">Standard resume page</a>
      </div>
      <div className="grid gap-10 xl:grid-cols-[1fr_.86fr]">
        <CvTimeline />
        <aside>
          <h2 className="mb-5 font-serif text-3xl font-black">Skill matrix</h2>
          <SkillMatrix />
        </aside>
      </div>
    </section>
  );
}
