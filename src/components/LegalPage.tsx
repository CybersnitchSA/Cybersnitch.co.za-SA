import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { site } from "@/config/site";
import { Logo } from "./Navbar";

export interface LegalSection {
  heading: string;
  body: string;
}

interface Props {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}


export function LegalPage({ title, updated, intro, sections }: Props) {
  return (
    <div className="min-h-screen bg-ink text-fg">
      <header className="border-b border-line">
        <div className="mx-auto flex h-14 max-w-[860px] items-center justify-between px-5 sm:px-8">
          <Link to="/" aria-label={`${site.name} home`}>
            <Logo />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 font-mono text-xs text-mut transition-colors hover:text-signal"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" /> Back to site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[860px] px-5 py-16 sm:px-8">
        <div className="font-mono text-[11px] tracking-[0.2em] text-signal">LEGAL</div>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-fg">{title}</h1>
        <p className="mt-2 font-mono text-xs text-dim">Last updated: {updated}</p>
        <p className="mt-6 max-w-[64ch] text-base leading-relaxed text-mut">{intro}</p>

        <div className="mt-6 border border-line bg-panel/40 p-4 font-mono text-[11px] leading-relaxed text-dim">
          Request a copy of Cybersnitch's full Terms & Conditions on info@cybersnitch.co.za .
        </div>

        <div className="mt-10 space-y-10">
          {sections.map((s, i) => (
            <section key={s.heading}>
              <h2 className="flex items-baseline gap-3 font-display text-xl font-medium text-fg">
                <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                {s.heading}
              </h2>
              <p className="mt-3 max-w-[68ch] text-sm leading-relaxed text-mut">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 border-t border-line pt-6 font-mono text-xs text-dim">
          Questions? <a className="text-signal hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </main>
    </div>
  );
}
