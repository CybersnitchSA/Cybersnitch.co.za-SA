import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: `Cookie Policy — ${site.name}` },
      { name: "description", content: `How ${site.name}'s website uses cookies and local storage.` },
      { property: "og:title", content: `Cookie Policy — ${site.name}` },
      { property: "og:description", content: `How ${site.name}'s website uses cookies and local storage.` },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="[DATE — edit before publishing]"
      intro={`This page explains what the ${site.name} website stores in your browser. The short answer: almost nothing.`}
      sections={[
        {
          heading: "Cookies",
          body: "This static website does not set any cookies — no analytics, no advertising, no tracking pixels. [Edit: if you later add analytics, list each cookie here with its purpose and lifetime.]",
        },
        {
          heading: "Local storage",
          body: "The site stores one item in your browser's local storage: your light/dark theme preference (key: cybersnitch-theme). It never leaves your device and is not transmitted to us.",
        },
        {
          heading: "Third-party content",
          body: "Fonts are loaded from Google Fonts, which receives your IP address as part of any web request. [Edit: list any other third-party embeds you add.]",
        },
        {
          heading: "Changes",
          body: "If we add cookies or third-party embeds in the future, this page will be updated before they ship. [Edit: add a change log if you want one.]",
        },
      ]}
    />
  );
}
