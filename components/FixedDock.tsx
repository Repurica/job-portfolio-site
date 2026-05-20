import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

const items = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/cv', label: 'CV' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export function FixedDock() {
  return (
    <nav className="no-print fixed inset-x-0 bottom-4 z-50 mx-auto flex w-[min(94vw,880px)] items-center justify-between gap-2 rounded-full border border-line/70 px-3 py-2 shadow-paper dock-blur" aria-label="Primary navigation dock">
      <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto pr-2 [scrollbar-width:none]">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="focus-ring shrink-0 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[.18em] text-muted transition hover:bg-ink hover:text-paper">
            {item.label}
          </Link>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
}
