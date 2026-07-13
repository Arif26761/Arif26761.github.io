/**
 * Skills. `radar` powers the Skills radar chart; `groups` powers the
 * categorized chips with proficiency meters.
 */

export interface RadarAxis {
  axis: string;
  /** 0–100 proficiency for the radar chart. */
  value: number;
}

export interface Skill {
  name: string;
  /** 0–100 proficiency for the animated meter. */
  level: number;
}

export interface SkillGroup {
  name: string;
  /** lucide-react icon name. */
  icon: string;
  skills: Skill[];
}

/** High-level domains summarized on the radar chart. */
export const radar: RadarAxis[] = [
  { axis: "Machine Learning", value: 85 },
  { axis: "Data Analysis", value: 88 },
  { axis: "Research", value: 82 },
  { axis: "Frontend", value: 78 },
  { axis: "Problem Solving", value: 90 },
  { axis: "Backend", value: 65 },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: 92 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 74 },
      { name: "SQL", level: 78 },
    ],
  },
  {
    name: "ML & Data",
    icon: "BrainCircuit",
    skills: [
      { name: "PyTorch", level: 82 },
      { name: "NLP", level: 85 },
      { name: "Foundation Models", level: 80 },
      { name: "Pandas / NumPy", level: 88 },
      { name: "scikit-learn", level: 80 },
    ],
  },
  {
    name: "Frontend",
    icon: "MonitorSmartphone",
    skills: [
      { name: "React", level: 78 },
      { name: "Next.js", level: 74 },
      { name: "HTML / CSS", level: 88 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    name: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Jupyter", level: 88 },
      { name: "Linux", level: 72 },
    ],
  },
];

/** Tech logos for the auto-scrolling marquee (files under /public/assets/icons). */
export const techMarquee: string[] = [
  "Python",
  "PyTorch",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Pandas",
  "SQL",
  "Git",
  "Linux",
];
