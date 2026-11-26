import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(next, 7000);
    return () => window.clearInterval(t);
  }, [next, paused]);

  const t = testimonials[index] ?? testimonials[0];
  if (!t) return null;

  return (
    <section id="testimonials" className="border-b border-line bg-panel/40">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading index="07" label="References" title="What recovery looks like in practice." />

        <div
          className="reveal corner-marks relative border border-line bg-ink/60 p-7 backdrop-blur-sm sm:p-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div aria-live="polite" key={index} className="animate-rise">
            <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-3.5 ${i < t.rating ? "fill-signal text-signal" : "text-line"}`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="mt-5 max-w-[52ch] font-display text-xl leading-snug text-fg text-balance sm:text-2xl">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3">
              <span className="grid size-10 place-items-center border border-line bg-panel2 font-mono text-xs text-mut" aria-hidden="true">
                {t.initials}
              </span>
              <div>
                <div className="text-sm text-fg">{t.name}</div>
                <div className="font-mono text-[11px] text-mut">
                  {t.position}, {t.company}
                </div>
              </div>
            </figcaption>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-line pt-5">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-1 w-8 transition-colors ${i === index ? "bg-signal" : "bg-line hover:bg-dim"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="grid size-8 place-items-center border border-line text-mut transition-colors hover:border-signal/50 hover:text-signal"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="grid size-8 place-items-center border border-line text-mut transition-colors hover:border-signal/50 hover:text-signal"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
        <p className="mt-4 font-mono text-[10px] text-dim">
          * Actual Client Testimonials.
        </p>
      </div>
    </section>
  );
}
