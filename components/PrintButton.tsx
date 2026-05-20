'use client';

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="focus-ring rounded-full border border-line px-5 py-3 text-xs font-black uppercase tracking-[.22em] text-ink hover:border-accent hover:text-accent"
    >
      Print / Save as PDF
    </button>
  );
}
