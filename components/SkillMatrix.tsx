import { skills } from '@/content/profile';

export function SkillMatrix({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {skills.map((group) => (
        <article key={group.category} className="paper-card rounded-[1.75rem] p-5 shadow-paper">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="font-serif text-xl font-black text-ink">{group.category}</h3>
            <span className="font-mono text-xs text-muted">{group.level}/100</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-line/30" aria-hidden="true"><div className="h-full rounded-full bg-accent" style={{ width: `${group.level}%` }} /></div>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
            {group.items.slice(0, compact ? 5 : undefined).map((skill) => <li key={skill} className="rounded-full border border-line/70 bg-paper/60 px-3 py-1 text-xs font-semibold text-muted">{skill}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}
