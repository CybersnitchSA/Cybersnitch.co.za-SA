import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="border-b border-line">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-4">
            <div className="reveal lg:sticky lg:top-24">
              <div className="font-mono text-[11px] tracking-[0.2em] text-signal">04 / PROCESS</div>
              <h2 className="mt-5 max-w-[16ch] font-display text-3xl font-medium leading-tight tracking-tight text-fg text-balance lg:text-4xl">
                Steps To Track Your Missing or Lost Device?
              </h2>
              <p className="mt-5 max-w-[34ch] text-base leading-relaxed text-mut text-pretty">
                Tracking a device with Cybersnitch is easy. Just follow these simple steps: 
              </p>
              <div className="mt-8 hidden gap-1.5 lg:flex" aria-hidden="true">
                {processSteps.map((s, i) => (
                  <span
                    key={s.index}
                    className={`h-1 flex-1 ${i < 2 ? "bg-signal" : i === 2 ? "bg-signal/50" : "bg-line"}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ol className="divide-y divide-line border-y border-line">
              {processSteps.map((step, i) => (
                <li
                  key={step.index}
                  className="reveal grid grid-cols-[auto_1fr] gap-5 py-6 transition-colors hover:bg-panel/50 sm:gap-8"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span
                    className="font-display text-3xl font-medium tabular-nums text-signal"
                    style={{ opacity: 1 - i * 0.15 }}
                  >
                    {step.index}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-fg">{step.title}</h3>
                    <p className="mt-1.5 max-w-[52ch] text-sm leading-relaxed text-mut text-pretty">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
