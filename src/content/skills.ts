/**
 * Skills. `radar` powers the Skills radar chart; `groups` powers the
 * categorized chips with proficiency meters. Sourced from the CV's
 * Skills & Expertise and Workflow & Tools sections. Levels are estimates —
 * adjust in issue #17.
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
  { axis: "Frontend", value: 88 },
  { axis: "Backend", value: 78 },
  { axis: "Databases", value: 75 },
  { axis: "Networking", value: 85 },
  { axis: "Security", value: 70 },
  { axis: "Problem Solving", value: 88 },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    icon: "MonitorSmartphone",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "HTML / CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "REST API Integration", level: 82 },
    ],
  },
  {
    name: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Express", level: 74 },
      { name: "PHP", level: 78 },
      { name: "Laravel", level: 70 },
    ],
  },
  {
    name: "Databases",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 74 },
      { name: "MongoDB", level: 72 },
    ],
  },
  {
    name: "Networking",
    icon: "Network",
    skills: [
      { name: "TCP/IP & Subnetting", level: 85 },
      { name: "Routing & Switching", level: 82 },
      { name: "LAN / WAN", level: 80 },
      { name: "DNS / DHCP", level: 80 },
    ],
  },
  {
    name: "Security & Tools",
    icon: "ShieldCheck",
    skills: [
      { name: "Nmap / Zenmap", level: 72 },
      { name: "Packet Analysis (Scapy)", level: 70 },
      { name: "Git & GitHub", level: 85 },
      { name: "Linux", level: 74 },
      { name: "Figma (design-to-code)", level: 76 },
    ],
  },
];

/** Tech names for the auto-scrolling marquee. */
export const techMarquee: string[] = [
  "React",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "PHP",
  "Laravel",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "CCNA",
  "Linux",
  "Git",
];
