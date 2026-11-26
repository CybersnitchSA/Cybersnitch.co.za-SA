import { useEffect, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { navSections } from "./Navbar";

interface Props {
  open: boolean;
  onClose: () => void;
}

/** Ctrl/⌘+K command palette for quick section navigation. */
export function CommandPalette({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(
    () =>
      navSections.filter(({ label }) =>
        label.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) onClose();
        else {
          setQuery("");
          setCursor(0);
          onClose(); // parent toggles; see below
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setCursor(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  if (!open) return null;

  const jump = (id: string) => {
    onClose();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center bg-ink/60 px-4 pt-24 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command menu"
    >
      <div
        className="w-full max-w-lg border border-line bg-panel shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <Search className="size-4 text-dim" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCursor(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") onClose();
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setCursor((c) => Math.min(c + 1, results.length - 1));
              }
              if (e.key === "ArrowUp") {
                e.preventDefault();
                setCursor((c) => Math.max(c - 1, 0));
              }
              if (e.key === "Enter" && results[cursor]) jump(results[cursor].id);
            }}
            placeholder="Jump to a section…"
            className="w-full bg-transparent font-mono text-sm text-fg outline-none placeholder:text-dim"
            aria-label="Search sections"
          />
          <kbd className="border border-line px-1.5 py-0.5 font-mono text-[10px] text-dim">ESC</kbd>
        </div>
        <ul className="max-h-72 overflow-auto py-1" role="listbox">
          {results.length === 0 && (
            <li className="px-4 py-6 text-center font-mono text-xs text-dim">
              No matching section
            </li>
          )}
          {results.map(({ id, label }, i) => (
            <li key={id}>
              <button
                role="option"
                aria-selected={i === cursor}
                onClick={() => jump(id)}
                onMouseEnter={() => setCursor(i)}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left font-mono text-sm transition-colors ${
                  i === cursor ? "bg-signal/10 text-signal" : "text-mut"
                }`}
              >
                {label}
                <span className="text-[10px] text-dim">↵</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
