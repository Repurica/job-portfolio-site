import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { MotionSection } from '@/components/MotionSection';
import { ProjectThemeShowcase } from '@/components/ProjectThemeShowcase';
import { SectionHeader } from '@/components/SectionHeader';
import { SkillMatrix } from '@/components/SkillMatrix';
import { profile } from '@/content/profile';

export default function HomePage() {
  return (
    <>
      <Hero />
      <MotionSection className="mx-auto max-w-7xl px-5 py-20 md:px-10" id="featured-projects">
        <SectionHeader eyebrow="selected work" title="Case studies with evidence, not decoration.">
          点击项目标题会改变 accent 色与纸面纹理；这是克制的主题切换交互，而不是牺牲阅读性的视觉噱头。
        </SectionHeader>
        <ProjectThemeShowcase />
      </MotionSection>
      <MotionSection className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[.8fr_1.2fr] md:px-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-[.32em] text-accent">about / short brief</p>
          <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-ink">Product-aware engineering, edited like a good essay.</h2>
        </div>
        <div className="prose-editorial text-lg">
          <p>{profile.bioShort}</p>
          <Link href="/about" className="focus-ring mt-6 inline-flex rounded-full border border-line px-5 py-3 text-xs font-black uppercase tracking-[.22em] text-ink hover:border-accent hover:text-accent">Read about me</Link>
        </div>
      </MotionSection>
      <MotionSection className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <SectionHeader eyebrow="capability matrix" title="A practical stack for product interfaces." />
        <SkillMatrix compact />
      </MotionSection>
    </>
  );
}
