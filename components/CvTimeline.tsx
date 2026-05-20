'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { profile } from '@/content/profile';

export function CvTimeline() {
  const items = [...profile.experience, ...profile.education.map((edu) => ({
    id: edu.id,
    role: edu.degree,
    company: edu.school,
    location: edu.location,
    period: edu.period,
    summary: edu.details.join(' '),
    responsibilities: edu.details,
    outcomes: [],
    stack: ['Coursework', 'Research', 'Projects'],
  }))];
  const [open, setOpen] = useState(items[0]?.id ?? '');

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const expanded = open === item.id;
        return (
          <article key={item.id} className="paper-card rounded-[1.75rem] p-5 shadow-paper">
            <button type="button" onClick={() => setOpen(expanded ? '' : item.id)} className="focus-ring flex w-full items-start justify-between gap-5 text-left" aria-expanded={expanded}>
              <span>
                <span className="font-mono text-xs uppercase tracking-[.28em] text-accent">{item.period}</span>
                <span className="mt-2 block font-serif text-2xl font-black text-ink">{item.role}</span>
                <span className="mt-1 block text-sm text-muted">{item.company} · {item.location}</span>
              </span>
              <span className="rounded-full border border-line px-3 py-1 font-mono text-sm text-muted">{expanded ? '−' : '+'}</span>
            </button>
            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="mt-5 grid gap-5 border-t border-line/60 pt-5 md:grid-cols-2">
                    <div>
                      <p className="text-sm leading-7 text-muted">{item.summary}</p>
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                        {item.responsibilities.map((entry) => <li key={entry}>{entry}</li>)}
                      </ul>
                    </div>
                    <div>
                      {item.outcomes.length ? <ul className="space-y-2 text-sm leading-6 text-ink">{item.outcomes.map((entry) => <li key={entry} className="rounded-2xl bg-accent/10 p-3">{entry}</li>)}</ul> : null}
                      <div className="mt-4 flex flex-wrap gap-2">{item.stack.map((tech) => <span key={tech} className="rounded-full border border-line/70 px-3 py-1 text-xs text-muted">{tech}</span>)}</div>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
