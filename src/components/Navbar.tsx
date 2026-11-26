import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { site } from "@/config/site";
import { useTheme } from "@/hooks/useTheme";

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "technology", label: "Technology" },
  { id: "showcase", label: "Showcase" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
] as const;

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      {site.logoImage ? (
        <img src="images/logo.png" alt={`${site.name} logo`} className="size-6" />
      ) : (
        <span className="grid size-6 place-items-center border border-line bg-panel font-mono text-[11px] text-signal">
          ◲
        </span>
      )}
      <span className="font-display text-[15px] font-medium tracking-tight text-fg">
        {site.name}
        <span className="text-mut">/intel</span>
      </span>
    </span>
  );
}

export function Navbar({ onOpenCommand }: { onOpenCommand: () => void }) {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section indicator
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line/70 bg-ink/70 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-5 sm:px-8">
        <Link to="/" aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navSections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className={`font-mono text-[12px] tracking-wide transition-colors hover:text-fg ${
                active === id ? "text-signal" : "text-mut"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenCommand}
            className="hidden items-center gap-2 border border-line bg-panel px-2.5 py-1 transition-colors hover:border-mut/50 md:flex"
            aria-label="Open command menu (Ctrl+K)"
          >
            <span className="font-mono text-[11px] text-dim">⌘</span>
            <span className="font-mono text-[11px] text-dim">K</span>
            <span className="font-mono text-[11px] text-mut">search</span>
          </button>
          <button
            onClick={toggle}
            className="flex size-8 items-center justify-center border border-line bg-panel text-mut transition-colors hover:text-signal"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
          </button>
          <button
            onClick={() => goTo("contact")}
            className="hidden h-8 items-center border border-signal/40 bg-signal/10 px-3.5 font-mono text-[12px] text-signal transition-colors hover:bg-signal/20 sm:flex"
          >
            Track A Device
          </button>
          <button
            onClick={() => setOpen(true)}
            className="flex size-8 items-center justify-center border border-line bg-panel text-mut lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-ink/95 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex h-14 items-center justify-between px-5">
          <Logo />
          <button
            onClick={() => setOpen(false)}
            className="flex size-9 items-center justify-center border border-line bg-panel text-mut"
            aria-label="Close menu"
          >
            <X className="size-4" />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 pt-8">
          {navSections.map(({ id, label }, i) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={`flex items-center justify-between border-b border-line/60 py-4 text-left font-display text-2xl text-fg transition-all duration-300 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              {label}
              <span className="font-mono text-[11px] text-dim">0{i + 1}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
