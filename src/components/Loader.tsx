import { useEffect, useState } from "react";
import { site } from "@/config/site";

/** Short boot-style loading overlay; hides itself after ~1.2s. */
export function Loader() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setHidden(true), 1100);
    const t2 = window.setTimeout(() => setGone(true), 1600);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] grid place-items-center bg-ink transition-opacity duration-500 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <span className="font-mono text-sm tracking-[0.3em] text-fg">
          {site.name.toUpperCase()}
        </span>
        <div className="h-px w-40 overflow-hidden bg-line">
          <div className="loader-bar h-full w-full bg-signal" />
        </div>
        <span className="font-mono text-[10px] tracking-[0.2em] text-dim">
          SNITCHES GET STITCHES?
        </span>
      </div>
    </div>
  );
}
