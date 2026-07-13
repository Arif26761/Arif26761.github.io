/**
 * Global site metadata, identity, navigation, and social links.
 * Editing the portfolio's "chrome" starts here — components read from this file.
 */

export type SocialName =
  "github" | "linkedin" | "researchgate" | "instagram" | "facebook" | "whatsapp" | "email";

export interface SocialLink {
  name: SocialName;
  label: string;
  href: string;
  /** lucide-react icon name, or "researchgate" for the custom brand mark. */
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
  /** lucide-react icon name for the vertical nav rail. */
  icon: string;
}

export const site = {
  name: "MD. Arif Rahman",
  shortName: "Arif",
  /** Wordmark: rendered as `Arif.` with a gradient dot. */
  wordmark: "Arif",
  email: "arif26761@gmail.com",
  location: "Dhaka, Bangladesh",
  /** IANA timezone for the About "local time" card. */
  timezone: "Asia/Dhaka",
  url: "https://arif26761.github.io",
  tagline: "Data Scientist & ML Researcher building scalable frontend products.",
  /** Roles cycled in the hero banner. */
  roles: ["Data Scientist", "Frontend Developer", "ML Researcher", "Problem Solver"],
  description:
    "Portfolio of MD. Arif Rahman — Data Scientist & ML Researcher with experience in NLP, foundation models, and WiFi-based localization, now crafting solid, scalable frontend web products.",
  resumePath: "/assets/Md_Arif_Rahman_CV.pdf",
  portraitPath: "/assets/hero.png",
} as const;

export const nav: NavItem[] = [
  { id: "home", label: "Home", icon: "House" },
  { id: "about", label: "About", icon: "User" },
  { id: "projects", label: "Projects", icon: "FolderGit2" },
  { id: "skills", label: "Skills", icon: "SlidersHorizontal" },
  { id: "experience", label: "Experience", icon: "GraduationCap" },
  { id: "contact", label: "Contact", icon: "Mail" },
];

export const socials: SocialLink[] = [
  {
    name: "github",
    label: "GitHub",
    href: "https://github.com/Arif26761",
    icon: "Github",
  },
  {
    name: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arif-rahman-585476297/",
    icon: "Linkedin",
  },
  {
    name: "researchgate",
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Mdarif-Rahman",
    icon: "researchgate",
  },
  {
    name: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/m.d.__arif__/",
    icon: "Instagram",
  },
  {
    name: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/Arifrahmanbijoy/",
    icon: "Facebook",
  },
  {
    name: "whatsapp",
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=8801521561275",
    icon: "MessageCircle",
  },
  {
    name: "email",
    label: "Email",
    href: "mailto:arif26761@gmail.com?subject=Hello!%20Let%27s%20chat",
    icon: "Mail",
  },
];
