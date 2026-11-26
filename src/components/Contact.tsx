import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";
import { SectionHeading } from "./SectionHeading";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initial: FormState = { name: "", email: "", phone: "", subject: "", message: "" };

/**
 * Static-friendly contact form.
 * - "mailto" mode: opens the visitor's email client with a pre-filled message.
 * - "endpoint" mode: POSTs to the external form endpoint set in src/config/site.ts.
 * Configure in src/config/site.ts — no backend required.
 */
export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<string | null>(null);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Valid email required";
    if (!form.subject.trim()) next.subject = "Required";
    if (form.message.trim().length < 10) next.message = "Please add a few more details";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(null);
    if (!validate()) return;

    if (site.contactMode === "endpoint" && site.contactEndpoint) {
      try {
        const res = await fetch(site.contactEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("Message sent — we'll get back to you shortly.");
        setForm(initial);
      } catch {
        setStatus("Sending failed. Please email us directly instead.");
      }
      return;
    }

    // mailto mode: open the visitor's email client with the message pre-filled
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
    const href = `mailto:${site.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setStatus("Your email app should now open with the message pre-filled.");
  };

  const field =
    "w-full border border-line bg-panel px-3.5 py-2.5 font-mono text-sm text-fg outline-none transition-colors placeholder:text-dim focus:border-signal/60";
  const label = "mb-1.5 block font-mono text-[11px] tracking-[0.15em] text-dim";

  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              index="09"
              label="Contact"
              title="Missing a device? Start here."
              description="Tell us what's gone and roughly when. We'll respond within one business day."
            />
            <ul className="reveal space-y-4">
              {[
                { icon: Mail, k: "EMAIL", v: site.email, href: `mailto:${site.email}` },
                { icon: Phone, k: "PHONE", v: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, "")}` },
                { icon: MapPin, k: "LOCATION", v: site.address },
                { icon: Clock, k: "HOURS", v: site.businessHours },
              ].map((c) => (
                <li key={c.k} className="flex items-center gap-4 border border-line bg-panel/40 px-4 py-3">
                  <c.icon className="size-4 shrink-0 text-signal" aria-hidden="true" />
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.15em] text-dim">{c.k}</div>
                    {c.href ? (
                      <a href={c.href} className="font-mono text-sm text-fg transition-colors hover:text-signal">
                        {c.v}
                      </a>
                    ) : (
                      <span className="font-mono text-sm text-fg">{c.v}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={onSubmit} noValidate className="reveal lg:col-span-7">
            <div className="corner-marks relative grid grid-cols-1 gap-5 border border-line bg-panel/40 p-6 sm:grid-cols-2 sm:p-8">
              <div>
                <label htmlFor="c-name" className={label}>NAME *</label>
                <input id="c-name" className={field} value={form.name} onChange={set("name")} autoComplete="name" />
                {errors.name && <p className="mt-1 font-mono text-[11px] text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="c-email" className={label}>EMAIL *</label>
                <input id="c-email" type="email" className={field} value={form.email} onChange={set("email")} autoComplete="email" />
                {errors.email && <p className="mt-1 font-mono text-[11px] text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="c-phone" className={label}>PHONE</label>
                <input id="c-phone" type="tel" className={field} value={form.phone} onChange={set("phone")} autoComplete="tel" />
              </div>
              <div>
                <label htmlFor="c-subject" className={label}>SUBJECT *</label>
                <input id="c-subject" className={field} value={form.subject} onChange={set("subject")} placeholder="e.g. Stolen laptop — Cape Town" />
                {errors.subject && <p className="mt-1 font-mono text-[11px] text-destructive">{errors.subject}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="c-message" className={label}>MESSAGE *</label>
                <textarea id="c-message" rows={5} className={field} value={form.message} onChange={set("message")} placeholder="Device type, serial if known, last seen location…" />
                {errors.message && <p className="mt-1 font-mono text-[11px] text-destructive">{errors.message}</p>}
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button
                  type="submit"
                  className="bg-signal px-6 py-2.5 font-mono text-[13px] font-medium text-ink ring-1 ring-signal/50 transition-colors hover:bg-signal2"
                >
                  Send message →
                </button>
                <span className="font-mono text-[10px] text-dim">
                  Static site: this opens your email app. No data is stored here.
                </span>
              </div>
              {status && (
                <p role="status" className="font-mono text-xs text-signal sm:col-span-2">
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
