import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { site } from "@/config/site";
import { useReveal } from "@/hooks/useReveal";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { CommandPalette } from "@/components/CommandPalette";
import { CursorGlow } from "@/components/CursorGlow";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Technology } from "@/components/Technology";
import { Showcase } from "@/components/Showcase";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Track & recover missing devices` },
      { name: "description", content: site.description },
      { property: "og:title", content: `${site.name} — Track & recover missing devices` },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          description: site.description,
          email: site.email,
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [commandOpen, setCommandOpen] = useState(false);
  useReveal();

  const toggleCommand = useCallback(() => setCommandOpen((o) => !o), []);
  const closeCommand = useCallback(() => setCommandOpen(false), []);

  // Global Ctrl/⌘+K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggleCommand();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggleCommand]);

  return (
    <div className="min-h-screen bg-ink text-fg">
      <Loader />
      <CursorGlow />
      <Navbar onOpenCommand={toggleCommand} />
      <CommandPalette open={commandOpen} onClose={closeCommand} />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Technology />
        <Showcase />
        <Stats />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
