/**
 * Experience & Research timeline entries (newest first).
 * Sourced from MD. Arif Rahman's current CV.
 */

export type TimelineKind = "work" | "research" | "education";

export interface TimelineEntry {
  id: string;
  kind: TimelineKind;
  title: string;
  org: string;
  /** Display string, e.g. "Aug 2025 — Nov 2025". */
  period: string;
  /** Sort key (start year, descending). */
  startYear: number;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
}

export const experience: TimelineEntry[] = [
  {
    id: "itransition-intern",
    kind: "work",
    title: "Full-Stack Developer (Intern)",
    org: "I-Transition",
    period: "Aug 2025 — Nov 2025",
    startYear: 2025,
    description:
      "Built responsive web applications with React, HTML5, CSS3 and JavaScript; implemented backend logic and API integration with PHP and RESTful services; worked with dynamic, database-driven content and managed relational data; collaborated to debug, improve performance, and follow version-control best practices.",
    tags: ["React", "PHP", "REST API", "Databases"],
  },
  {
    id: "iat-buet-ra",
    kind: "work",
    title: "Research Assistant — Frontend & Web Systems",
    org: "Institute of Appropriate Technology (IAT), BUET",
    period: "Jan 2023 — Feb 2025",
    startYear: 2023,
    description:
      "Designed and implemented reusable, responsive UI components; built React-based dashboards for internal tools and analytics workflows; collaborated with backend engineers and researchers to translate system requirements into functional web interfaces; ensured accessibility, maintainability and performance.",
    tags: ["React", "UI Components", "Dashboards", "Accessibility"],
  },
  {
    id: "aust-trainee",
    kind: "work",
    title: "Research Trainee (Volunteer)",
    org: "Ahsanullah University of Science & Technology (AUST)",
    period: "Dec 2021 — Oct 2022",
    startYear: 2021,
    description:
      "Assisted in building frontend visual components for ML-driven systems, converted research requirements into clear UI representations, and worked closely with supervisors to improve the usability of experimental tools.",
    tags: ["Frontend", "UI", "Research Tools"],
  },
  {
    id: "buet-msc",
    kind: "education",
    title: "M.Sc. in Management of Technology",
    org: "Bangladesh University of Engineering & Technology (BUET)",
    period: "Present",
    startYear: 2025,
    description:
      "Major in Product Management & Tech Market Analysis. Thesis on privacy and security in device-free indoor localization systems.",
    tags: ["Product Management", "Tech Market Analysis"],
  },
  {
    id: "aiub-ccna",
    kind: "education",
    title: "Network Analysis (CCNA)",
    org: "American International University Bangladesh (AIUB)",
    period: "Jan 2024 — Jul 2024",
    startYear: 2024,
    description:
      "Completed all CCNA modules covering networking fundamentals, IP connectivity, security and automation — configuring, managing and troubleshooting network devices.",
    tags: ["CCNA", "Networking", "Security"],
  },
  {
    id: "aust-bsc",
    kind: "education",
    title: "B.Sc. in Electrical & Electronic Engineering",
    org: "Ahsanullah University of Science & Technology (AUST)",
    period: "2018 — 2023",
    startYear: 2018,
    description:
      "Major in Telecommunication. Thesis on advanced device-free indoor localization (DFIL) using wireless WiFi CSI signals.",
    tags: ["EEE", "Telecommunication", "DFIL / CSI"],
  },
];
