/**
 * Education history for the About section's expand-in-place timeline.
 * Sourced from the original portfolio; verify in issue #17.
 */

export interface Education {
  year: string;
  institution: string;
  credential: string;
  field: string;
}

export const education: Education[] = [
  {
    year: "2023",
    institution: "Ahsanullah University of Science and Technology",
    credential: "Bachelor's degree",
    field: "Electrical & Electronic Engineering (EEE)",
  },
  {
    year: "2017",
    institution: "Dhaka City College",
    credential: "Higher Secondary Certificate",
    field: "Science",
  },
  {
    year: "2015",
    institution: "Udayan Higher Secondary School",
    credential: "Secondary School Certificate",
    field: "Science",
  },
];

/** Headline stats for the About bento counters. Verify numbers in #17. */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Completed projects" },
  { value: 3, suffix: "+", label: "Years in research" },
  { value: 4, suffix: "", label: "Research domains" },
];
