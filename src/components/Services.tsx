import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="border-b border-line">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          index="03"
          label="Services"
          title="Why Cybersnitch is the Ultimate Plug for Tracking Devices?."
          description="Meet Our Cybersecurity Services:."
        />
        <div className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isOpen = expanded === i;
            return (
              <div
                key={s.title}
                className="reveal group flex flex-col bg-ink p-6 transition-colors hover:bg-panel"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-9 place-items-center border border-line bg-panel2 text-signal transition-colors group-hover:border-signal/40">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[10px] text-dim">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-medium text-fg">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mut">{s.description}</p>
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="mt-4 flex items-center gap-1.5 self-start font-mono text-[11px] text-dim transition-colors hover:text-signal"
                >
                  Technical details
                  <ChevronDown
                    className={`size-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <ul className="overflow-hidden">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 border-t border-line/60 py-1.5 font-mono text-[11px] text-mut"
                      >
                        <span className="size-1 bg-signal" aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
