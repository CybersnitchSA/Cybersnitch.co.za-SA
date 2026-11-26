import { stats } from "@/data/stats";
import { useCountUp } from "@/hooks/useCountUp";

function StatBlock({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: shown } = useCountUp(value);
  return (
    <div className="reveal">
      <span ref={ref} className="font-display text-4xl font-medium tabular-nums text-fg lg:text-5xl">
        {shown.toLocaleString()}
        <span className="text-signal">{suffix}</span>
      </span>
      <div className="mt-2 font-mono text-xs text-mut">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section aria-label="Key figures" className="border-b border-line">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 px-5 py-16 sm:px-8 md:grid-cols-4">
        {stats.map((s) => (
          <StatBlock key={s.label} {...s} />
        ))}
      </div>
      <p className="mx-auto max-w-[1280px] px-5 pb-6 font-mono text-[10px] text-dim sm:px-8">
        
      </p>
    </section>
  );
}
