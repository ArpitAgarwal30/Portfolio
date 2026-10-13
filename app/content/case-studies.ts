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
  status: "In progress" | "Live" | "Complete";
  period: string;
  role: string;
  stack: string[];
  links: { label: string; href: string }[];
  architecture: ArchitectureStep[];
  stages: Stage[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "crm-sync-demo",
    title: "A CRM sync that can't quietly break your data",
    summary:
      "An end-to-end demo of syncing contacts between two mismatched CRMs safely: preview every change, catch edits made in the target as conflicts, never delete, keep an audit trail, and undo any run.",
    kind: "Independent project",
    status: "Complete",
    period: "October 2026",
    role: "Owner. I set the requirements, reviewed every step and approved each design decision. Mock data only, no employer code.",
    stack: ["C#", ".NET 10", "ASP.NET Core", "EF Core", "SQLite", "xUnit", "React", "TypeScript"],
    links: [{ label: "Source on GitHub", href: "https://github.com/ArpitAgarwal30/crm-sync-demo" }],
    architecture: [
      { label: "Two mock CRMs", detail: "Alpha (source) and Beta (target) store the same contacts in different shapes" },
      { label: "Sync engine", detail: "Pure C#: map, match, dry-run plan, apply, roll back, audit" },
      { label: "ASP.NET Core API", detail: "EF Core and SQLite; each apply or rollback is one transaction" },
      { label: "React UI", detail: "Review the dry run, apply, simulate edits, roll back, read the audit log" },
    ],
    stages: [
      {
        id: "problem",
        title: "Problem",
        paragraphs: [
          "Two systems hold the same customers in different shapes: one splits first and last names and says lead or customer, the other keeps one full name and says Prospect or Client. People also edit the target directly.",
          "A naive sync that copies everything across overwrites their edits, creates duplicates when re-run, and offers no way back. This is the kind of integration problem I work on as a Technical Account Manager, rebuilt here from scratch with fictional data.",
        ],
      },
      {
        id: "requirements",
        title: "Requirements",
        paragraphs: [
          "Show every change before writing anything. Never silently overwrite an edit made in the target, and never delete. Reject records that can't be mapped safely instead of guessing. Record every write, and make any run reversible without undoing someone else's later work.",
        ],
      },
      {
        id: "investigation",
        title: "Investigation",
        paragraphs: [
          "Two details shaped the design. Comparing records through a shared model is lossy: \"Mary Ann Castillo\" can't be split back into first and last name reliably, so it would look changed on every run. And a target's last-modified time alone can't tell whether the sync or a person made the latest edit.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        paragraphs: [
          "A pure C# engine with no file, network or console access, wrapped by a command-line tool and an ASP.NET Core API. Changes are compared in the target's own field format, which removes the name churn.",
          "Conflicts use three-way detection: the engine remembers each record's timestamp as it last wrote it, so a moved timestamp means someone else edited the record. Each planned change also records the version it expects, so anything that changes between the dry run and applying is skipped as stale.",
        ],
      },
      {
        id: "implementation",
        title: "Implementation",
        paragraphs: [
          "Immutable C# records for every model, adapters for each CRM's format, and an injected clock so every timestamp is controllable in tests. Plans are stored, so the UI applies exactly the plan the visitor reviewed, and only once.",
        ],
      },
      {
        id: "integration",
        title: "Integration",
        paragraphs: [
          "The API keeps both mock CRMs, the sync's memory, runs and the audit log in one SQLite database, so each apply or rollback is a single all-or-nothing transaction.",
          "One subtle bug was avoided before it shipped: EF Core's default way of storing dates in SQLite loses precision, which would have made every exact timestamp check fail and every rollback refuse to run. Timestamps are stored as exact UTC ticks instead. The React UI talks to the API through standard problem-details errors, shown next to the right form fields.",
        ],
      },
      {
        id: "testing",
        title: "Testing",
        paragraphs: [
          "62 automated tests: 40 unit tests for the engine, 10 integration tests that drive the real API over HTTP against a throwaway database, and 12 UI tests. To check the tests themselves, I broke the code on purpose: inverting the conflict check failed 4 tests, and removing the transaction commit failed 3.",
          "The full flow was also run in a real browser: dry run, apply, edit a contact in the target, dry run again to see the conflict, then roll back. That run caught a layout bug where hidden screen-reader labels widened the page.",
        ],
      },
      {
        id: "deployment",
        title: "Deployment",
        paragraphs: [
          "The code is public on GitHub under the MIT license and runs locally with two commands. There is deliberately no hosted copy: a public one would first need authentication or a read-only mode so visitors couldn't change each other's data.",
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        paragraphs: [
          "A working end-to-end demo. One dry run over the demo data exercises every case: a create, an update, an email match that gets linked, unchanged records, a conflict, invalid records and a contact the sync must leave alone. Rollback restores what it safely can and reports what it left untouched.",
        ],
      },
    ],
  },
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
          "The site pre-renders to static HTML with all content present, loads about 125 KB of JavaScript on the home page (gzipped, mostly React and React Router), and has no known accessibility lint violations. This section will be updated with production results after launch.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string | undefined): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
