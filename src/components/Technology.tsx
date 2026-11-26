import { SectionHeading } from "./SectionHeading";

const nodes = [
  { label: "White Hat Hackers", sub: "·Permission: Authorized|Intent: Defensive|", accent: false },
  { label: "Grey Hat Hackers", sub: "·Permission: Sometimes Authorized|Intent: Ambiguous|", accent: true },
  { label: "Black Hat Hackers", sub: "·Permission: Unauthorized| Intent: Malicious|", accent: false },
];

const facts = [
  { k: "Kali Linux & Parrot OS", v: "Popular, Debian-based Linux distributions designed for Ethical Hacking, Digital Forensics and Penetration Testing" },
  { k: "Pegasus Spyware & Predator Spyware", v: "World's most advanced mercenary mobile spyware tools for covert surveillance" },
  { k: "Metasploit", v: "The most widely used penetration testing and exploit development framework that allows security professionals and system administrators to find, test, and validate vulnerabilities in networks, servers, and applications" },
  { k: "NMap & Wireshark", v: "Essential, complementary network analysis tools that serve different roles in reconnaissance and troubleshooting" },
  { k: "Hydra & Autopsy", v: "THC Hydra and Autopsy serve opposite and complementary sides of cybersecurity: Hydra is an offensive password-cracking and penetration-testing utility, while Autopsy is a defensive, open-source digital forensics and incident response (DFIR) platform" },
  { k: "John The Ripper & SET", v: "John the Ripper and SET (Social-Engineer Toolkit) fundamental open-source security tools" },
];

export function Technology() {
  return (
    <section id="technology" className="border-b border-line bg-panel/40">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            index="05"
            label="Technology"
            title="The main difference between White Hat, Black Hat,
             and Grey Hat hackers comes down to Permission and Intent..."
          />
          <span className="mb-10 font-mono text-[11px] text-dim">What are GreyHat Hackers?</span>
        </div>

        {/* Architecture diagram */}
        <div className="reveal corner-marks relative border border-line bg-ink/40 p-6 sm:p-10">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {nodes.map((n, i) => (
              <div key={n.label} className="contents">
                <div
                  className={`border p-5 text-center ${
                    n.accent
                      ? "border-signal/50 bg-signal/5"
                      : "border-line bg-panel"
                  }`}
                >
                  <div
                    className={`font-mono text-xs tracking-[0.15em] ${
                      n.accent ? "text-signal" : "text-fg"
                    }`}
                  >
                    {n.label}
                  </div>
                  <div className="mt-1.5 font-mono text-[10px] text-dim">{n.sub}</div>
                </div>
                {i < nodes.length - 1 && (
                  <svg
                    className="hidden h-8 w-16 text-signal/50 md:block"
                    viewBox="0 0 64 32"
                    fill="none"
                    aria-hidden="true"
                  >
                    <line x1="0" y1="16" x2="52" y2="16" stroke="currentColor" strokeDasharray="4 4" />
                    <path d="M52 10 L62 16 L52 22" stroke="currentColor" fill="none" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-px border border-line bg-line text-center font-mono text-[11px] sm:grid-cols-3">
            <div className="bg-ink p-3 text-mut">WhiteHat Hacking</div>
            <div className="bg-signal/5 p-3 text-signal">GreyHat Hacking</div>
            <div className="bg-ink p-3 text-mut">BlackHat Hacking</div>
          </div>
        </div>

        {/* Technical facts */}
        <div className="mt-6 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((f) => (
            <div key={f.k} className="reveal bg-ink p-5">
              <div className="font-mono text-[10px] tracking-[0.15em] text-dim">{f.k}</div>
              <div className="mt-2 font-mono text-sm text-fg">{f.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
