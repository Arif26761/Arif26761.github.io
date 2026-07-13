/**
 * Education history + certifications for the About section, and headline
 * stats for the bento counters. Sourced from the current CV.
 */

export interface Education {
  year: string;
  institution: string;
  credential: string;
  field: string;
}

export const education: Education[] = [
  {
    year: "Present",
    institution: "Bangladesh University of Engineering & Technology (BUET)",
    credential: "M.Sc. in Management of Technology",
    field: "Product Management & Tech Market Analysis",
  },
  {
    year: "2024",
    institution: "American International University Bangladesh (AIUB)",
    credential: "Network Analysis (CCNA)",
    field: "Networking & Security",
  },
  {
    year: "2023",
    institution: "Ahsanullah University of Science & Technology (AUST)",
    credential: "B.Sc. in Electrical & Electronic Engineering",
    field: "Major in Telecommunication",
  },
  {
    year: "2017",
    institution: "Dhaka City College",
    credential: "Higher Secondary Certificate (H.S.C.)",
    field: "Science",
  },
  {
    year: "2015",
    institution: "Udayan Higher Secondary School",
    credential: "Secondary School Certificate (S.S.C.)",
    field: "Science",
  },
];

export interface Certification {
  name: string;
  issuer: string;
  note?: string;
}

export const certifications: Certification[] = [
  {
    name: "Cisco Certified Network Associate (CCNA)",
    issuer: "AIUB",
    note: "All modules completed; official Cisco exam upcoming.",
  },
  {
    name: "English Proficiency (Movers, KET, PET, FCE)",
    issuer: "The British Council, Bangladesh",
  },
];

/** Headline stats for the About bento counters. Verify numbers in #17. */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 4, suffix: "+", label: "Years of experience" },
  { value: 3, suffix: "", label: "Professional roles" },
  { value: 2, suffix: "", label: "Research projects" },
];
