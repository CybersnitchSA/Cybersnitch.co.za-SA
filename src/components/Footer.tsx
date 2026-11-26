import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter } from "lucide-react";
import { site } from "@/config/site";
import { Logo, navSections } from "./Navbar";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px hair-x" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-mut">
            {site.description}
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { icon: Github, href: site.social.github, label: "GitHub" },
              { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
              { icon: Twitter, href: site.social.x, label: "X (Twitter)" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid size-8 place-items-center border border-line text-mut transition-colors hover:border-signal/50 hover:text-signal"
              >
                <s.icon className="size-3.5" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="mb-4 font-mono text-xs tracking-[0.15em] text-dim">SITE</h3>
          <ul className="space-y-2 text-sm text-mut">
            {navSections.slice(0, 5).map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-fg">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 font-mono text-xs tracking-[0.15em] text-dim">SERVICES</h3>
          <ul className="space-y-2 text-sm text-mut">
            <li><a href="#services" className="transition-colors hover:text-fg">Device tracking</a></li>
            <li><a href="#services" className="transition-colors hover:text-fg">Remote lock &amp; wipe</a></li>
            <li><a href="#services" className="transition-colors hover:text-fg">Theft forensics</a></li>
            <li><a href="#services" className="transition-colors hover:text-fg">Recovery operations</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs tracking-[0.15em] text-dim">LEGAL</h3>
          <ul className="space-y-2 text-sm text-mut">
            <li><Link to="/privacy" className="transition-colors hover:text-fg">Privacy Policy</Link></li>
            <li><Link to="/terms" className="transition-colors hover:text-fg">Terms of Service</Link></li>
            <li><Link to="/cookies" className="transition-colors hover:text-fg">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-5 py-5 font-mono text-[11px] text-dim sm:px-8">
          <span>© {year} {site.name.toUpperCase()} — ALL SIGNALS RESERVED</span>
          <span aria-hidden="true" className="text-signal/60">◲ 34.02°S 18.61°E</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="transition-colors hover:text-fg"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
