'use client';

import { useEffect, useState } from 'react';

export function InteractiveCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine) and (min-width: 900px) and (prefers-reduced-motion: no-preference)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (event: PointerEvent) => setPos({ x: event.clientX, y: event.clientY });
    const over = (event: Event) => {
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest('a, button, [data-cursor="magnetic"]')));
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div
      className="custom-cursor pointer-events-none fixed z-[999] rounded-full border border-accent mix-blend-difference transition-[width,height,background] duration-150"
      style={{ left: pos.x, top: pos.y, width: active ? 54 : 26, height: active ? 54 : 26, transform: 'translate(-50%, -50%)', background: active ? 'rgb(var(--accent) / .22)' : 'transparent' }}
      aria-hidden="true"
    />
  );
}
