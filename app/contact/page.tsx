import type { Metadata } from 'next';
import { profile } from '@/content/profile';
import { externalLinkProps } from '@/lib/utils';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({ title: 'Contact — Cao Jinming', description: 'Contact information, hiring availability, and professional links for Cao Jinming.', path: '/contact' });

const links = [
  { label: 'Email', href: `mailto:${profile.email}`, note: 'Best for recruiter outreach and interview scheduling.' },
  { label: 'Phone', href: `tel:${profile.phone?.replace(/\s/g, '')}`, note: 'Available for Singapore-based recruiter and interview coordination.' },
  { label: 'GitHub', href: profile.github, note: 'Code, experiments, and implementation details.' },
  { label: 'LinkedIn', href: profile.linkedin, note: 'Professional profile and updates.' },
  { label: 'Website', href: profile.website, note: 'Canonical portfolio URL.' },
];

export default function ContactPage() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-5 py-24 md:px-10">
      <p className="font-mono text-xs uppercase tracking-[.32em] text-accent">contact</p>
      <h1 className="mt-4 font-serif text-5xl font-black tracking-[-.05em] text-ink md:text-7xl">Let’s talk about secure, useful product workflows.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">I am open to FinTech, full-stack web development, cybersecurity, and product-minded engineering opportunities in Singapore.</p>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {links.map((link) => <a key={link.label} href={link.href} {...externalLinkProps(link.href)} className="focus-ring paper-card rounded-[1.75rem] p-6 shadow-paper transition hover:-translate-y-1 hover:border-accent"><span className="font-serif text-2xl font-black text-ink">{link.label}</span><span className="mt-3 block text-sm leading-7 text-muted">{link.note}</span><span className="mt-4 block break-all font-mono text-xs text-accent">{link.href}</span></a>)}
      </div>
    </section>
  );
}
