import { describe, expect, it } from "vitest";
import { nav, socials } from "@/content/site";
import { projectCategories, projects } from "@/content/projects";
import { radar, skillGroups } from "@/content/skills";
import { experience } from "@/content/experience";
import { education, stats } from "@/content/education";

const unique = <T>(xs: T[]) => new Set(xs).size === xs.length;

describe("content model integrity", () => {
  it("has unique nav ids and social names", () => {
    expect(unique(nav.map((n) => n.id))).toBe(true);
    expect(unique(socials.map((s) => s.name))).toBe(true);
  });

  it("has unique project slugs and valid categories", () => {
    expect(unique(projects.map((p) => p.slug))).toBe(true);
    for (const p of projects) {
      expect(projectCategories).toContain(p.category);
      expect(p.tags.length).toBeGreaterThan(0);
    }
  });

  it("keeps all proficiency values within 0–100", () => {
    for (const a of radar) expect(a.value).toBeGreaterThanOrEqual(0);
    for (const a of radar) expect(a.value).toBeLessThanOrEqual(100);
    for (const g of skillGroups) {
      for (const s of g.skills) {
        expect(s.level).toBeGreaterThanOrEqual(0);
        expect(s.level).toBeLessThanOrEqual(100);
      }
    }
  });

  it("has non-empty experience, education, and stats", () => {
    expect(experience.length).toBeGreaterThan(0);
    expect(education.length).toBeGreaterThan(0);
    expect(stats.length).toBeGreaterThan(0);
    expect(unique(experience.map((e) => e.id))).toBe(true);
  });
});
