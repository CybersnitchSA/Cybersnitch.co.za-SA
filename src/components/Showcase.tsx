import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projectFilters, projects, type ProjectCategory } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";

const statusColor: Record<string, string> = {
  Live: "text-signal border-signal/40 bg-signal/10",
  "In development": "text-signal2 border-signal2/40 bg-signal2/10",
  "Case study": "text-mut border-line bg-panel",
};

export function Showcase() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="showcase" className="border-b border-line">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          index="06"
          label="Showcase"
          title="Cybersnitch's Infrastructure, Frameworks, Tools & Ecosystems:."
          description="A selection of our Cores, Exploits & Elements when tracking and exploitig a device:."
        />

        <div className="reveal mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`border px-3 py-1.5 font-mono text-xs transition-colors ${
                filter === f
                  ? "border-signal/50 bg-signal/10 text-signal"
                  : "border-line text-mut hover:border-mut/50 hover:text-fg"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article
              key={p.title}
              className="reveal group flex flex-col border border-line bg-panel/40 transition-colors hover:border-signal/40"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-panel2">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.category} project preview`}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  onError={(e) => {
                    // Graceful fallback if a demo image is missing
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span
                  className={`absolute left-3 top-3 border px-2 py-0.5 font-mono text-[10px] ${statusColor[p.status]}`}
                >
                  {p.status}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="font-mono text-[10px] tracking-[0.15em] text-signal">
                  {p.category.toUpperCase()}
                </span>
                <h3 className="mt-2 font-display text-base font-medium text-fg">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mut">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="border border-line px-1.5 py-0.5 font-mono text-[10px] text-dim">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-4 flex items-center gap-1 self-start font-mono text-[11px] text-mut transition-colors hover:text-signal"
                >
                  Learn More
                  <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="border border-line bg-panel/40 p-8 text-center font-mono text-sm text-dim">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
