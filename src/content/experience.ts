/**
 * Experience & Research timeline entries (newest first).
 * NOTE: seed data — refine dates/details in issue #17.
 */

export type TimelineKind = "research" | "work" | "education";

export interface TimelineEntry {
  id: string;
  kind: TimelineKind;
  title: string;
  org: string;
  /** Display string, e.g. "2023 — Present". */
  period: string;
  /** Sort key (start year, descending). */
  startYear: number;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
}

export const experience: TimelineEntry[] = [
  {
    id: "frontend-pivot",
    kind: "work",
    title: "Frontend Web Developer",
    org: "Independent",
    period: "2025 — Present",
    startYear: 2025,
    description:
      "Building solid, scalable frontend web products with a focus on performance, accessibility, and quality user experience.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: "ml-research",
    kind: "research",
    title: "Machine Learning Researcher",
    org: "Research",
    period: "2022 — Present",
    startYear: 2022,
    description:
      "Research across NLP, foundation models, and WiFi-based indoor localization for smart-city applications, with published work on ResearchGate.",
    tags: ["NLP", "Foundation Models", "WiFi Localization", "Smart City"],
    links: [{ label: "ResearchGate", href: "https://www.researchgate.net/profile/Mdarif-Rahman" }],
  },
  {
    id: "data-science",
    kind: "work",
    title: "Data Scientist",
    org: "Data Science",
    period: "2022 — 2024",
    startYear: 2022,
    description:
      "Data analysis, modeling, and problem-solving across applied projects — turning raw data into interpretable, actionable insight.",
    tags: ["Python", "Pandas", "Modeling", "Analysis"],
  },
  {
    id: "beee",
    kind: "education",
    title: "B.Sc. in Electrical & Electronic Engineering",
    org: "Ahsanullah University of Science and Technology",
    period: "2023",
    startYear: 2018,
    description:
      "Bachelor's degree from the Department of EEE — foundation in systems, signals, and engineering problem-solving.",
    tags: ["EEE", "Signals", "Systems"],
  },
];
