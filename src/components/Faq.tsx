import { useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";
import { faqItems } from "@/data/faq";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<number | null>(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqItems;
    return faqItems.filter(
      (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <section id="faq" className="border-b border-line">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              index="08"
              label="FAQ"
              title="Got a Question?."
              description="Check Out Our Frequently Asked Questions. Still Got a Question? Add Us On WhatsApp."
            />
            <div className="reveal flex items-center gap-3 border border-line bg-panel px-4 py-2.5">
              <Search className="size-4 shrink-0 text-dim" aria-hidden="true" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions…"
                aria-label="Search FAQ"
                className="w-full bg-transparent font-mono text-sm text-fg outline-none placeholder:text-dim"
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            {filtered.length === 0 ? (
              <p className="border border-line bg-panel/40 p-8 text-center font-mono text-sm text-dim">
                No questions match “{query}”.
              </p>
            ) : (
              <div className="divide-y divide-line border-y border-line">
                {filtered.map((item, i) => {
                  const isOpen = open === i;
                  return (
                    <div key={item.question} className="reveal">
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-signal"
                      >
                        <span className="font-display text-base font-medium text-fg sm:text-lg">
                          {item.question}
                        </span>
                        <Plus
                          className={`size-4 shrink-0 text-dim transition-transform duration-300 ${
                            isOpen ? "rotate-45 text-signal" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      <div
                        id={`faq-panel-${i}`}
                        className={`grid transition-all duration-300 ${
                          isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <p className="max-w-[60ch] overflow-hidden text-sm leading-relaxed text-mut">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
