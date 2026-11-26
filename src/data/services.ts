import type { LucideIcon } from "lucide-react";
import {
  Radar,
  MapPin,
  ShieldCheck,
  Fingerprint,
  BellRing,
  FileSearch,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

/** Placeholder service content — edit freely. */
export const services: Service[] = [
  {
    icon: Radar,
    title: "Wireless & Remote Debugging",
    description:
      "Our Zeroclick, Greyhat GPS exploits are more reliable than tracking via Cloud  — even after a factory reset OR if device is off we can still target and reach it with Wireless Remote Exploitation tools such as Over-The-Air (OTA), Broadpwn, 802.11 Driver Fuzzing, Local-to-Remote Privilege Escalation & Shell Access Compromise.",
    details: ["Wireless Debugging", "Offline Root Access", "Digital Footprint Harvesting"],
  },
  {
    icon: MapPin,
    title: "Accurate Geolocation & GPS Tracking",
    description:
      "We are the ultimate plugs when it comes to Wi-Fi positioning, cell tower triangulation, GNSS-GSM Targeting, Location Spoofing, IP Address Extraction, hence our work is always impressive in terms of location accuracy. Our Geolocation tools include DNS & Passive Tracking, GPS Spoofing, IP Geolocation, IMSI Catchers & False Base Stations.",
    details: ["M.A.C Address Viewer", "IP Location history timeline", "Geofence Triangulation"],
  },
  {
    icon: ShieldCheck,
    title: "Remote Lock/Wipe",
    description:
      "We also offer the option of a one-click containment for the lost or missing devices such as Network Isolation (EDR/XDR), Cryptographic Erasure, Remote Wipe (MDM), Session Revocation (Identity & Access Management). In simple terms we can lock the firware, encrypt the disk, wipe selected data or files remotely on the lost device. Exploits such as MobileIron, VMware Workspace, VMware Carbon Black, SentinelOne work great for this.",
    details: ["Reversible lock states", "Selective data wipe", "Permanent Bricking"],
  },
  {
    icon: Fingerprint,
    title: "Lost Device Auditing & Intel Gathering",
    description:
      "With Cybersnitch stealth capture via Escalated Privileges & Access Points is inclusive  — photos, audio, docs, telemetry traces can be harvested — provided no VPN is currently installed on the lost device. Furthermore with some devices these can also be extracted via Hardware & Bootloader Exploits & Network Side-Channel Auditing.",
    details: ["File Preview", "Extraction/Harvesting", "Usage Logs via Spyware"],
  },
  {
    icon: BellRing,
    title: "24/7 Support",
    description:
      "Our Team is always there for you. Whether you prefer Email, WhatsApp, Facebook, Twitter, Instagram we are always one click away for your enquiries and updates.",
    details: ["Consulting", "Information/File Sharing", "Cosistent Updates"],
  },
  {
    icon: FileSearch,
    title: "Active Monitoring",
    description:
      "Our Cybersecurity GreyHat tools monitor the lost device in real time and provides logs for the consistent location and triangulation markers from day 1. We acheive this through Spyware & Stealthware like Continuous Attack Surface Management (CASM), Synthetic Transaction Testing & Automated Penetration Testing.",
    details: ["Nightly Coordinates", "Costistent Cell Towers", "Associated Number/Cloud Info"],
  },
];
