export function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-10 grid gap-5 md:grid-cols-[180px_1fr] md:items-end">
      <p className="font-mono text-xs uppercase tracking-[.32em] text-accent">{eyebrow}</p>
      <div>
        <h2 className="font-serif text-3xl font-black tracking-tight text-ink md:text-5xl">{title}</h2>
        {children ? <div className="mt-4 max-w-3xl text-base leading-8 text-muted">{children}</div> : null}
      </div>
    </div>
  );
}
