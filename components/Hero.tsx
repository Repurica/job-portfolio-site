'use client';

import dynamic from 'next/dynamic';
import { motion } from 'motion/react';
import { profile } from '@/content/profile';
import { MagneticButton } from '@/components/MagneticButton';
import { ParticleField } from '@/components/ParticleField';

const ShaderBackdrop = dynamic(() => import('@/components/ShaderBackdrop').then((mod) => mod.ShaderBackdrop), { ssr: false, loading: () => <div className="absolute inset-0 bg-scanlines opacity-30" /> });

const titleWords = profile.headline.split(' ');

export function Hero() {
  return (
    <section className="relative z-10 min-h-[92svh] overflow-hidden px-5 py-16 md:px-10 lg:px-16" aria-labelledby="home-title">
      <div className="absolute inset-0 bg-gridpaper bg-[length:34px_34px] opacity-55 animate-paperShift" aria-hidden="true" />
      <ShaderBackdrop />
      <ParticleField />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[110px_1fr_280px] lg:items-center">
        <aside className="hidden h-[70svh] items-start justify-center border-r border-line/70 pt-10 lg:flex" aria-hidden="true">
          <div className="vertical-rl font-serif text-5xl font-black tracking-[.18em] text-accent">{profile.initials}</div>
        </aside>
        <div className="pt-20 md:pt-28 lg:pt-10">
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="mb-8 font-mono text-xs uppercase tracking-[.42em] text-accent">
            portfolio / case studies / resume
          </motion.p>
          <h1 id="home-title" className="max-w-5xl font-serif text-[clamp(3.2rem,9vw,8.8rem)] font-black leading-[.88] tracking-[-.07em] text-ink">
            {titleWords.map((word, index) => (
              <motion.span key={`${word}-${index}`} className="mr-[.18em] inline-block" initial={{ opacity: 0, y: 44, rotateX: 32 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: .7, delay: .08 * index, ease: [0.16, 1, 0.3, 1] }}>
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .45 }} className="mt-8 max-w-2xl text-lg leading-9 text-muted md:text-xl">
            {profile.subheadline}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .6 }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="/projects">查看项目</MagneticButton>
            <MagneticButton href={profile.resumePdfUrl} download variant="secondary">下载简历</MagneticButton>
          </motion.div>
        </div>
        <div className="paper-card rounded-[2rem] p-5 shadow-paper lg:mt-32">
          <p className="font-mono text-xs uppercase tracking-[.3em] text-accent">clickable sentence</p>
          <p className="mt-4 text-sm leading-7 text-muted">点击首页项目标题可切换主题色与背景纹样。首屏保持戏剧性，内容页回到招聘方友好的扫描结构。</p>
        </div>
      </div>
    </section>
  );
}
