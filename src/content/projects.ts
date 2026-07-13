/**
 * Portfolio projects. `category` drives the Projects section filter chips.
 * Sourced from MD. Arif Rahman's CV (work + research). Real repo links,
 * screenshots, and any additional web projects are added in issue #17.
 */

export type ProjectCategory = "Web" | "Research" | "Networking";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** One-line summary for the card face. */
  summary: string;
  /** Longer description for the expanded case-study panel. */
  description: string;
  tags: string[];
  /** Image under /public/assets/projects/… (placeholder until #17). */
  image?: string;
  links?: { label: string; href: string }[];
  featured?: boolean;
  /** Status pill, e.g. "Paper under review", "Ongoing". */
  status?: string;
  year: number;
}

export const projectCategories: ProjectCategory[] = ["Web", "Research", "Networking"];

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "This Portfolio",
    category: "Web",
    summary: "The site you're reading — Next.js 16, Tailwind v4, static-exported to Pages.",
    description:
      "A performance- and accessibility-first personal portfolio built with Next.js 16 (App Router), React 19, TypeScript, Tailwind v4, and Motion. Statically exported and deployed via GitHub Actions, with a Cloudflare Worker backing the contact form.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Motion"],
    links: [{ label: "Source", href: "https://github.com/Arif26761/Arif26761.github.io" }],
    featured: true,
    year: 2026,
  },
  {
    slug: "itransition-web-apps",
    title: "Responsive Web Applications",
    category: "Web",
    summary: "Database-driven web apps with React front ends and PHP/REST back ends.",
    description:
      "As a full-stack developer intern at I-Transition, built responsive web applications with React, HTML5, CSS3 and JavaScript, implemented backend logic and API integration using PHP and RESTful services, and worked with dynamic, database-driven content and relational data.",
    tags: ["React", "PHP", "REST API", "MySQL"],
    featured: true,
    status: "I-Transition",
    year: 2025,
  },
  {
    slug: "react-analytics-dashboards",
    title: "React Analytics Dashboards",
    category: "Web",
    summary: "Reusable UI components and dashboards for internal research tools at IAT, BUET.",
    description:
      "At the Institute of Appropriate Technology (BUET), designed and implemented reusable, responsive UI components and built React-based dashboards for internal tools and analytics workflows — translating system requirements into accessible, maintainable, performant web interfaces.",
    tags: ["React", "Dashboards", "UI Components", "Accessibility"],
    status: "IAT · BUET",
    year: 2024,
  },
  {
    slug: "smart-building-ems",
    title: "Smart Building Energy Management System",
    category: "Research",
    summary: "Advanced deep-learning & IoT system for smart-building energy management.",
    description:
      "Research on an Advanced Deep Learning & IoT-based Smart Building Energy Management System. Documented the system architecture, methodology and results in a clear, structured format with a focus on explainability and accessibility of technical components.",
    tags: ["Deep Learning", "IoT", "Energy", "Research"],
    links: [{ label: "ResearchGate", href: "https://www.researchgate.net/profile/Mdarif-Rahman" }],
    featured: true,
    status: "Paper under review",
    year: 2025,
  },
  {
    slug: "dfil-privacy-security",
    title: "Privacy & Security in Device-free Indoor Localization",
    category: "Research",
    summary: "Anonymization, encryption and security for WiFi CSI-based indoor sensing.",
    description:
      "Ongoing research (tied to the BUET M.Sc. thesis) on privacy and security in device-free indoor localization (DFIL) systems that sense location from wireless WiFi CSI signals — addressing anonymization, encryption and system security, with emphasis on clarity for broader technical audiences.",
    tags: ["Wireless / CSI", "Security", "Privacy", "DFIL"],
    links: [{ label: "ResearchGate", href: "https://www.researchgate.net/profile/Mdarif-Rahman" }],
    status: "Ongoing",
    year: 2025,
  },
  {
    slug: "ccna-network-labs",
    title: "CCNA Network Design & Configuration",
    category: "Networking",
    summary: "Hands-on routing, switching and services labs across the CCNA modules.",
    description:
      "Completed all CCNA modules with hands-on labs: configuring, managing and troubleshooting network devices across TCP/IP, subnetting, routing & switching, LAN/WAN and DNS/DHCP — plus security work with packet analysis (Scapy) and scanning (Nmap/Zenmap) in isolated lab environments.",
    tags: ["TCP/IP", "Routing & Switching", "Nmap", "Scapy"],
    status: "CCNA",
    year: 2024,
  },
];
