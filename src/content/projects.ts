/**
 * Portfolio projects. `category` drives the Projects section filter chips.
 * NOTE: seed data — real project details/images are populated in issue #17.
 */

export type ProjectCategory = "ML / Research" | "Web" | "Data";

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
  year: number;
}

export const projectCategories: ProjectCategory[] = ["ML / Research", "Web", "Data"];

export const projects: Project[] = [
  {
    slug: "wifi-indoor-localization",
    title: "WiFi-Based Indoor Localization",
    category: "ML / Research",
    summary: "Deep-learning positioning from WiFi CSI fingerprints for smart-building navigation.",
    description:
      "Research on indoor positioning using WiFi Channel State Information. Built and evaluated neural models that estimate location from signal fingerprints, targeting sub-meter accuracy for smart-city and indoor-navigation use cases.",
    tags: ["Python", "PyTorch", "Signal Processing", "Research"],
    links: [{ label: "ResearchGate", href: "https://www.researchgate.net/profile/Mdarif-Rahman" }],
    featured: true,
    year: 2024,
  },
  {
    slug: "nlp-foundation-models",
    title: "NLP with Foundation Models",
    category: "ML / Research",
    summary: "Fine-tuning and evaluating transformer foundation models for language tasks.",
    description:
      "Applied and fine-tuned transformer-based foundation models for natural-language understanding tasks, with a focus on data efficiency and robust evaluation.",
    tags: ["Python", "Transformers", "NLP", "Hugging Face"],
    featured: true,
    year: 2023,
  },
  {
    slug: "smart-city-dashboard",
    title: "Smart City Sensor Dashboard",
    category: "Data",
    summary: "Interactive analytics dashboard for urban sensor telemetry.",
    description:
      "A data-visualization dashboard aggregating urban sensor streams into interpretable, real-time views to support smart-city decision making.",
    tags: ["Python", "Pandas", "Data Viz", "Dashboards"],
    year: 2024,
  },
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
    slug: "data-analysis-toolkit",
    title: "Data Analysis Toolkit",
    category: "Data",
    summary: "Reusable notebooks and utilities for exploratory data analysis.",
    description:
      "A collection of reusable analysis utilities and notebook templates streamlining exploratory data analysis, feature engineering, and reporting.",
    tags: ["Python", "Pandas", "NumPy", "Jupyter"],
    year: 2023,
  },
];
