/**
 * Central site configuration — edit this file to rebrand the whole website.
 * Everything here is placeholder content; replace with real company details.
 */
export const site = {
  name: "Cybersnitch",
  tagline: "Track & Locate any Lost/Missing Device with Us.",
  description:
    "Cybersnitch is a cybersecurity company that is based in South Africa that tracks and locates missing devices — laptops, smartphones, and wearables — Even after the device has been Wiped, Reset or Flashed.",
  // Replace with your real contact details:
  email: "cyberintel.tracking@gmail.com",
  phone: "+27 (0) 63 758 1758Z",
  address: "Cape Town, South Africa",
  businessHours: "Mon–Fri, 08:00–17:00 SAST",
  // Set to your GitHub Pages URL after deployment, e.g. "https://username.github.io/cybersitch"
  url: "https://cybersnitch.co.za",
  // Logo: drop a file at public/images/logo.png and set logoImage to true.
  logoImage: true,
  social: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    x: "https://x.com/",
  },
  // Contact form mode:
  //  - "mailto": opens the visitor's email app with a pre-filled message (no setup)
  //  - "endpoint": POSTs to an external form service (Formspree, Getform, …)
  contactMode: "endpoint",
  // If contactMode is "endpoint", paste your form endpoint URL here:
  contactEndpoint: "",
} as const;

export type Site = typeof site;
