'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

type Props = { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary'; download?: boolean; className?: string };

export function MagneticButton({ href, children, variant = 'primary', download, className }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(event: React.PointerEvent<HTMLAnchorElement>) {
    if (!window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.28;
    event.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
  }

  function onLeave() {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  }

  const classes = cn(
    'focus-ring inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black uppercase tracking-[.22em] transition duration-200 will-change-transform',
    variant === 'primary' ? 'bg-ink text-paper shadow-editorial hover:bg-accent' : 'border border-line/80 bg-paper/70 text-ink hover:border-accent hover:text-accent',
    className,
  );

  return <Link ref={ref} href={href} download={download} onPointerMove={onMove} onPointerLeave={onLeave} className={classes} data-cursor="magnetic">{children}</Link>;
}
