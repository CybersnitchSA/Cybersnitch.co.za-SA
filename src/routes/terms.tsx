import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms of Service — ${site.name}` },
      { name: "description", content: `The terms governing use of ${site.name}'s website and services.` },
      { property: "og:title", content: `Terms of Service — ${site.name}` },
      { property: "og:description", content: `The terms governing use of ${site.name}'s website and services.` },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="[2026]"
      intro={`These terms govern ${site.name} 's website and any device-tracking services we provide under a separate agreement.`}
      sections={[
        {
          heading: "The service",
          body: `${site.name} provides software for tracking and locating organization-owned devices. Specific service levels, pricing, and obligations are set out in a separate customer agreement. [Edit: summarize your actual offering.]`,
        },
        {
          heading: "Acceptable use",
          body: "You may only track devices you own or are authorized to manage, and you must disclose tracking to device users where required by law. Using the service to track people without authorization is prohibited",
        },
        {
          heading: "No guarantee of recovery",
          body: "Tracking improves the odds of recovering a missing device but cannot guarantee it. No costs will be incurred by the client for unsuccessful attempts",
        },
        {
          heading: "Intellectual property",
          body: `All content on this website is the property of ${site.name} or its licensors and may not be reproduced without permission.`,
        },
        {
          heading: "Governing Rights",
          body: "All Rights Reserved",
        },
      ]}
    />
  );
}
