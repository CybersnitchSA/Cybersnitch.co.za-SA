export type ProjectCategory = "Web" | "Mobile" | "AI" | "Cybersecurity" | "Software" | "Other";

export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  status: "Live" | "In development" | "Case study";
  image: string;
}

export const projectFilters: Array<"All" | ProjectCategory> = [
  "All",
  "Web",
  "Mobile",
  "AI",
  "Cybersecurity",
  "Software",
  "Other",
];


export const projects: Project[] = [
  {
    title: "M.A.C Address",
    category: "Laptops",
    description:
      "Tracking via MAC address is effective since it is a permanent hardware identifier assigned to a network interface controller (NIC) for local network communication all over the world.",
    tech: ["Computers", "Laptops", "Consoles"],
    status: "Worldwide",
    image: "images/projects/beacon-console.jpg",
  },
  {
    title: "IMEI Number",
    category: "Smartphones",
    description:
      "Tracking via an IMEI number effective since the International Mobile Equipment Identity is a unique 15-digit code assigned to every mobile phone and cellular device which cannot be changed.",
    tech: ["Mobile Phones", "Tablets", "Wearables"],
    status: "Worldwide",
    image: "images/projects/sitch-agent.jpg",
  },
  {
    title: "Spyware",
    category: "Malware",
    description:
      "Best part about GreyHat hacking is the use of Keyloggers, Adware, Trojans, System Monitors & Infostealers on the lost device since we have consent from the owner which does supplement the tracking process.",
    tech: ["Pegasus", "Predator", "ADB"],
    status: "Worldwide",
    image: "images/projects/signalrank.jpg",
  },
  {
    title: "Wireless Debugging",
    category: "Remote Access",
    description:
      "Debugging is a developer feature that lets us connect and debug the lost mobile device remotely. It replaces the traditional USB cable connection with a standard TCP/IP network socket using the Android Debug Bridge (ADB) tool to allow unauthorized access or local exploits..",
    tech: ["ADB Toolkit", "Pegasus", "Predator"],
    status: "SA, Lesotho & Zim only",
    image: "images/projects/vaultlock.jpg",
  },
  {
    title: "IoTs",
    category: "The Future",
    description:
      "The Internet of Things (IoT) has the strong potential to support a human society interacting more symbiotically with its physical environment. Indeed, the emergence of tiny devices that sense environmental cues and trigger actuators after consulting logic and human preferences promises a more environmentally aware and less wasteful society. However, the IoT inherently challenges software development processes, particularly techniques for ensuring software reliability. Researchers have developed debugging tools for wireless sensor networks (WSNs), which can be viewed as the enablers of perception in the IoT. These tools gather run-time information on individual sensor node executions and node interactions and then compress that information..",
    tech: ["4iR", "IoTs", "https://ieeexplore.ieee.org/document/6914470"],
    status: "Article",
    image: "images/projects/recovery-desk.jpg",
  },
  {
    title: "GSM Support Available",
    category: "Older Devices",
    description:
      "Tracking via GSM (Global System for Mobile Communications) to support second-generation (2G) and first-generation (1G) analog networks is also available. Meaning we also do snitch on the location of older models depending on the device make.",
    tech: ["1G", "2G", "3G"],
    status: "SA Only",
    image: "images/projects/opentrace.jpg",
  },
];
