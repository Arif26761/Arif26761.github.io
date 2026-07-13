/**
 * Global site metadata, identity, navigation, and social links.
 * Editing the portfolio's "chrome" starts here — components read from this file.
 * Source of truth: MD. Arif Rahman's current CV (Telecom + Full-Stack).
 */

export type SocialName = "github" | "linkedin" | "researchgate" | "whatsapp" | "email";

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
  /** Primary professional title (from the primary CV). */
  title: "Telecommunication Engineer & Full-Stack Developer",
  email: "arif26761@gmail.com",
  phone: "+8801521561275",
  location: "Azimpur, Dhaka, Bangladesh",
  /** IANA timezone for the About "local time" card. */
  timezone: "Asia/Dhaka",
  url: "https://arif26761.github.io",
  /** Short hero tagline. */
  tagline:
    "Full-stack developer and telecommunication engineering graduate (CCNA), fluent across the software and network layers of an ISP.",
  /** Roles cycled in the hero banner. */
  roles: [
    "Full-Stack Developer",
    "Telecommunication Engineer",
    "Network Engineer (CCNA)",
    "React & Next.js Developer",
  ],
  /** Full meta description. */
  description:
    "MD. Arif Rahman — Telecommunication Engineer & Full-Stack Developer (CCNA). Fluent across the software and network layers of an ISP: TCP/IP, routing & switching and wireless/RF, with hands-on React, Next.js and Node.js delivery.",
  resumePath: "/assets/MD_Arif_Rahman_CV.pdf",
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
