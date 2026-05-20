const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: (index * 29) % 100,
  top: (index * 47) % 100,
  delay: (index % 8) * 0.35,
  size: 4 + (index % 4) * 2,
}));

export function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-[2px] bg-accent/30 animate-float"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size * 0.55, animationDelay: `${p.delay}s`, transform: `rotate(${p.id * 17}deg)` }}
        />
      ))}
    </div>
  );
}
