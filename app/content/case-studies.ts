// Personal projects only. Each case study follows the same delivery lifecycle, and
// every claim is something that actually happened or was measured; no invented outcomes.

export type StageId =
  | "problem"
  | "requirements"
  | "investigation"
  | "architecture"
  | "implementation"
  | "integration"
  | "testing"
  | "deployment"
  | "outcome";

export interface Stage {
  id: StageId;
  title: string;
  paragraphs: string[];
}

export interface ArchitectureStep {
  label: string;
  detail: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  kind: "Independent project";
  status: "In progress" | "Live";
  period: string;
  role: string;
  stack: string[];
  links: { label: string; href: string }[];
  architecture: ArchitectureStep[];
  stages: Stage[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "portfolio-rebuild",
    title: "Rebuilding this portfolio",
    summary:
      "Replacing an outdated, template-generated site with a fast, accessible, statically pre-rendered React app whose content is verified and easy to update.",
    kind: "Independent project",
    status: "In progress",
    period: "October 2026",
    role: "Owner. I set the requirements, supplied and verified all content, and approved each phase.",
    stack: ["React 19", "React Router 8", "TypeScript", "Tailwind CSS v4", "Vite", "Vercel"],
    links: [{ label: "Source on GitHub", href: "https://github.com/ArpitAgarwal30/Portfolio" }],
    architecture: [
      { label: "Typed content", detail: "Profile, experience, skills and credentials as TypeScript modules" },
      { label: "Build-time render", detail: "React Router pre-renders every route to static HTML" },
      { label: "Static hosting", detail: "Vercel serves HTML, hashed assets and the resume" },
      { label: "Browser", detail: "Theme script runs before paint; React hydrates for interactions" },
    ],
    stages: [
      {
        id: "problem",
        title: "Problem",
        paragraphs: [
          "My previous portfolio was generated from an app-builder template. It still listed my previous employer as current, had nothing about my Technical Account Manager role, and rendered entirely in the browser, so link previews and crawlers saw an empty page.",
          "It also shipped 46 UI components while using three, and the public resume included my phone number and home address.",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        paragraphs: [
          "Accurate, verifiable content only: no invented metrics, testimonials or availability claims, and personal projects only. A fast static site with no backend, accessible by keyboard and screen reader, following the visitor's light or dark preference.",
          "It had to stay on Vercel, keep a reversible path back to the old site, and be cheap to update: changing a job or certification should mean editing data, not markup.",
        ],
      },
      {
        id: "investigation",
        title: "Investigation",
        paragraphs: [
          "An audit before any change found that the build tool (Create React App) is no longer maintained, around 30 dependencies were unused, and the GitHub repo's homepage link pointed to a Vercel address now serving someone else's site.",
          "Checking the Vercel dashboard showed the project was pinned to Create React App and Yarn settings, so the new build configuration had to override them from the repo rather than through dashboard changes.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        paragraphs: [
          "React Router 8 in framework mode with server rendering off and pre-rendering on: every route is rendered to HTML at build time, so the site is fully static yet each page arrives with real content and its own metadata.",
          "Content lives in typed modules separate from components. Colors are design tokens defined as CSS variables, so light and dark themes share one set of components.",
        ],
      },
      {
        id: "implementation",
        title: "Implementation",
        paragraphs: [
          "The work ran in small phases, each reviewed and approved before the next. Dependencies were pinned to exact versions at least two weeks old; where the newest major versions were incompatible (TypeScript 7 with the TypeScript ESLint tooling, ESLint 10 with the accessibility lint rules), the compatible version was chosen deliberately.",
          "A small inline script sets the theme before first paint, so there is no flash of the wrong theme, and both theme icons render so the pre-rendered HTML always matches after hydration.",
        ],
      },
      {
        id: "integration",
        title: "Integration",
        paragraphs: [
          "A vercel.json in the repo sets the build command, output directory, caching headers and a redirect from the old resume URL, replacing the dashboard's old presets without touching dashboard settings.",
          "The public resume is exported from the source document with the phone number and street address removed, and the PDF itself was checked, not just the source file.",
        ],
      },
      {
        id: "testing",
        title: "Testing",
        paragraphs: [
          "Every phase passes type checking, linting with accessibility rules, and a production build. The built site was tested in a browser at 360, 768 and 1280 pixels in both themes, by keyboard, and with real clicks.",
          "Testing caught real issues: a focus style that changed element shapes, and a copy-email button that gave no feedback if the browser left the clipboard request pending, now capped with a timeout. It also separated test-environment artifacts, such as a hidden browser pausing smooth scrolling, from genuine bugs.",
        ],
      },
      {
        id: "deployment",
        title: "Deployment",
        paragraphs: [
          "The rebuild lives on a separate branch. The plan is a Vercel preview deployment for review first, then a tagged release of the old site as a rollback point before the new version replaces it in production.",
        ],
      },
      {
        id: "outcome",
        title: "Outcome so far",
        paragraphs: [
          "The site pre-renders to static HTML with all content present, loads about 120 KB of JavaScript on the home page (gzipped, mostly React and React Router), and has no known accessibility lint violations. This section will be updated with production results after launch.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string | undefined): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
