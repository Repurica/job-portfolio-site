'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

export function MotionSection({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0.82, rotateX: 3, y: 42, transformPerspective: 900, transformOrigin: '50% 0%' },
        { opacity: 1, rotateX: 0, y: 0, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 86%', end: 'top 42%', scrub: 0.45 } },
      );
    }, element);
    return () => ctx.revert();
  }, []);

  return <section ref={ref} id={id} className={cn('relative z-10', className)}>{children}</section>;
}
