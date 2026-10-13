import { describe, expect, it } from "vitest";
import { caseStudies, type StageId } from "./case-studies";
import { certifications, learning } from "./credentials";
import { roles } from "./experience";
import { sections } from "./navigation";
import { profile } from "./profile";

// Content checks: these catch mistakes when editing the data files, before they reach the site.

const lifecycle: StageId[] = ["problem", "requirements", "investigation", "architecture", "implementation", "integration", "testing", "deployment", "outcome"];
const yearMonth = /^\d{4}-(0[1-9]|1[0-2])$/;

describe("case studies", () => {
  it("have unique, URL-safe slugs", () => {
    const slugs = caseStudies.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it.each(caseStudies.map((s) => [s.slug, s] as const))("%s follows the full delivery lifecycle in order", (_, study) => {
    expect(study.stages.map((stage) => stage.id)).toEqual(lifecycle);
    for (const stage of study.stages) expect(stage.paragraphs.length).toBeGreaterThan(0);
  });

  it.each(caseStudies.map((s) => [s.slug, s] as const))("%s states a role and links only to https URLs", (_, study) => {
    expect(study.role.length).toBeGreaterThan(20);
    for (const link of study.links) expect(link.href).toMatch(/^https:\/\//);
  });
});

describe("experience", () => {
  it("has exactly one current role", () => {
    expect(roles.filter((role) => role.end === null)).toHaveLength(1);
  });

  it.each(roles.map((r) => [r.organization, r] as const))("%s has valid, ordered dates", (_, role) => {
    expect(role.start).toMatch(yearMonth);
    if (role.end !== null) {
      expect(role.end).toMatch(yearMonth);
      expect(role.end >= role.start).toBe(true);
    }
  });
});

describe("credentials", () => {
  it.each(certifications.map((c) => [c.name, c] as const))("%s has a verification link and valid dates", (_, cert) => {
    expect(cert.url).toMatch(/^https:\/\//);
    expect(cert.issued).toMatch(yearMonth);
    if (cert.expires) expect(cert.expires > cert.issued).toBe(true);
  });

  it("learning dates, where given, are year-month", () => {
    for (const item of learning) if (item.date) expect(item.date).toMatch(yearMonth);
  });
});

describe("profile and navigation", () => {
  it("uses https for every outbound profile link and the site URL", () => {
    for (const url of [profile.siteUrl, profile.links.github, profile.links.linkedin]) expect(url).toMatch(/^https:\/\//);
  });

  it("has unique navigation anchors", () => {
    const ids = sections.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
