import { site } from "@/config/site";

/** Live telemetry preview panel — pure CSS/SVG, no external assets. */
function TelemetryPanel() {
  return (
    <div className="corner-marks relative border border-line bg-panel/70 backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="grid size-4 place-items-center border border-line bg-panel2 text-[9px] text-signal">
            ◲
          </span>
          <span className="font-mono text-[11px] tracking-wide text-mut">
            What We Track & Locate:
          </span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.15em] text-signal">cybersnitch.co.za</span>
      </div>

      {/* Radar sweep */}
      <div className="relative h-[150px] overflow-hidden border-b border-line bg-ink/40">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative size-28">
            <div className="absolute inset-0 rounded-full border border-signal/15" />
            <div className="absolute inset-4 rounded-full border border-signal/20" />
            <div className="absolute inset-8 rounded-full border border-signal/25" />
            <div
              className="animate-radar absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, color-mix(in oklab, var(--color-signal) 35%, transparent), transparent 70deg)",
              }}
              aria-hidden="true"
            />
            <div className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal" />
            <div className="animate-blink absolute left-[68%] top-[30%] size-1.5 rounded-full bg-signal2" />
            <div className="animate-blink absolute left-[30%] top-[62%] size-1.5 rounded-full bg-signal" style={{ animationDelay: "0.6s" }} />
          </div>
        </div>
        <div className="absolute bottom-2 left-4 flex gap-4 font-mono text-[10px] text-dim">
          <span>Smart-phones</span>
          <span className="text-signal">Laptops</span>
          <span>Wearables</span>
        </div>
      </div>

      {/* Readouts */}
      <div className="grid grid-cols-3 divide-x divide-line">
        {[
          { k: "LOCATIONS SNITCHED IN 2026:", v: "126", d: "89% in SA, 11% ABROAD" },
          { k: "OUR AVERAGE TRACKING TIME:", v: "57:14", d: "HOURS" },
          { k: "PROVINCES COVERED IN SA", v: "9", d: "EC, FS, GP, KZN, LMP, MP, NC, NW, WC" },
        ].map((r) => (
          <div key={r.k} className="px-4 py-3">
            <div className="font-mono text-[10px] tracking-[0.15em] text-dim">{r.k}</div>
            <div className="mt-1 font-display text-xl font-medium tabular-nums text-fg sm:text-2xl">
              {r.v}
            </div>
            <div className="font-mono text-[10px] text-mut">{r.d}</div>
          </div>
        ))}
      </div>

      {/* Event feed */}
      <div className="divide-y divide-line/70">
        {[
          { dot: "bg-signal", text: "Android Devices", tag: "56%", tagCls: "text-signal" },
          { dot: "bg-signal2", text: "iOS Devices", tag: "23%", tagCls: "text-signal2" },
          { dot: "bg-dim", text: "Other", tag: "21%", tagCls: "text-dim" },
        ].map((e) => (
          <div key={e.text} className="flex items-center justify-between gap-3 px-4 py-2.5">
            <div className="flex min-w-0 items-center gap-2">
              <span className={`size-1.5 shrink-0 ${e.dot}`} aria-hidden="true" />
              <span className="truncate font-mono text-[11px] text-fg">{e.text}</span>
            </div>
            <span className={`shrink-0 font-mono text-[10px] ${e.tagCls}`}>{e.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-line pt-14">
      <div className="absolute inset-0 grid-bg opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 signal-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-14 h-px hair-x" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="animate-rise lg:col-span-6">
            <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-signal">
              <span className="animate-blink" aria-hidden="true">●</span> SNITCHES GET STITCHES?
              <span className="text-dim">/ {site.name.toUpperCase()}</span>
            </div>
            <h1 className="max-w-[16ch] font-display text-4xl font-medium leading-[1.05] tracking-tight text-fg text-balance sm:text-5xl lg:text-6xl">
              Need to Track a Lost or Missing Device?.
            </h1>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-mut text-pretty">
              {site.name} is the Ultimate Snitch when it comes to locating Lost or Missing devices.
              Losing a device is one of the most frustrating events that could happen to anyone and with 
              the limitless possibilities that the 21st century has to offer - rushing to go buy another device 
              should never be the 1st course of action because getting the device back is not something that is always beyond our control or reach...
              Especially if you still have the Box or IMEI Number.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 bg-signal py-2.5 pl-4 pr-4 font-mono text-[13px] font-medium text-ink ring-1 ring-signal/50 transition-colors hover:bg-signal2"
              >
                Report a Lost Device Online <span aria-hidden="true">→</span>
              </button>
              <button
                onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 border border-line bg-panel/60 py-2.5 pl-4 pr-4 font-mono text-[13px] text-fg transition-colors hover:border-mut/50 hover:bg-panel"
              >
                How Device Tracking Works
              </button>
            </div>
            <div className="mt-12 flex items-center gap-4 font-mono text-[11px] text-dim">
              <span>WhatsApp Cybersnitch: 063 758 1758</span>
              <span className="relative h-px w-24 overflow-hidden bg-line" aria-hidden="true">
                <span className="animate-sweep-x absolute inset-y-0 w-8 bg-signal" />
              </span>
              <span>or Send us an Inbox</span>
            </div>
          </div>

          <div className="animate-rise lg:col-span-6" style={{ animationDelay: "120ms" }}>
            <TelemetryPanel />
            <div className="mt-2 flex justify-between font-mono text-[10px] text-dim">
              <span>Operating Systems</span>
              <span>Percentage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
