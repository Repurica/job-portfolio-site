'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { projects } from '@/content/projects';
import type { Project } from '@/types/content';

function patternClass(project: Project) {
  if (project.theme.pattern === 'scan') return 'bg-scanlines';
  if (project.theme.pattern === 'dots') return 'bg-[radial-gradient(circle,rgb(var(--line)/.65)_1px,transparent_1px)] bg-[length:18px_18px]';
  if (project.theme.pattern === 'ribbon') return 'bg-[linear-gradient(135deg,rgb(var(--accent)/.14)_0_18%,transparent_18%_40%,rgb(var(--accent-2)/.12)_40%_55%,transparent_55%)]';
  return 'bg-gridpaper bg-[length:28px_28px]';
}

export function ProjectThemeShowcase() {
  const featured = useMemo(() => projects.filter((project) => project.featured).slice(0, 4), []);
  const [active, setActive] = useState(featured[0]);
  const style = {
    '--accent': hexToRgb(active.theme.accent),
    '--accent-2': hexToRgb(active.theme.accent2),
  } as React.CSSProperties;

  return (
    <div style={style} className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
      <div className="paper-card relative min-h-[420px] overflow-hidden rounded-[2rem] p-6 shadow-paper">
        <div className={`absolute inset-0 opacity-40 ${patternClass(active)}`} aria-hidden="true" />
        <motion.div key={active.slug} initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} className="relative">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[1.35rem] border border-line/60">
            <Image src={active.coverImage} alt="" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[.3em] text-accent">Active case study</p>
          <h3 className="mt-3 font-serif text-3xl font-black text-ink">{active.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{active.summary}</p>
          <Link href={`/projects/${active.slug}`} className="focus-ring mt-5 inline-flex rounded-full bg-ink px-5 py-3 text-xs font-black uppercase tracking-[.22em] text-paper hover:bg-accent">Read case study</Link>
        </motion.div>
      </div>
      <div className="grid gap-3">
        {featured.map((project, index) => (
          <button key={project.slug} type="button" onClick={() => setActive(project)} className="focus-ring group grid rounded-[1.5rem] border border-line/60 bg-paper/55 p-5 text-left transition hover:border-accent hover:bg-paper">
            <span className="font-mono text-[11px] uppercase tracking-[.28em] text-accent">0{index + 1} / theme switch</span>
            <span className="mt-2 font-serif text-2xl font-black text-ink group-hover:text-accent">{project.title}</span>
            <span className="mt-2 text-sm leading-6 text-muted">{project.tagline}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function hexToRgb(hex: string) {
  const normalized = hex.replace('#', '');
  const bigint = parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r} ${g} ${b}`;
}
