import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${site.name}` },
      { name: "description", content: `How ${site.name} collects, uses, and protects data.` },
      { property: "og:title", content: `Privacy Policy — ${site.name}` },
      { property: "og:description", content: `How ${site.name} collects, uses, and protects data.` },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="[This section is important]"
      intro={`This policy explains what data ${site.name} processes, our device-tracking services and the choices you have.`}
      sections={[
        {
          heading: "Data we process",
          body: "This website itself does not set tracking cookies or collect personal data. Our device-tracking service processes device identifiers, geolocation logs, and usage information on the lost device are consented.",
        },
        {
          heading: "Location data",
          body: "Location data is collected only from devices being targeted and is access-controlled, audit-logged, and retained according to the client's cosent. We do not sell your location data to 2nd/3rd parties.",
        },
        {
          heading: "Interest",
          body: "Processing of the Device Info is based on the customer's legitimate interest and locating their lost device.",
        },
        {
          heading: "Your rights",
          body: "You are allowed to cancel the tracking process anytime.",
        },
        {
          heading: "Contact",
          body: `Privacy questions: ${site.email}. .]`,
        },
      ]}
    />
  );
}
