// Sources: Arpit's resume (Oct 2026) and his confirmed answers. Employer projects are
// described in general terms only; no customer names, metrics, or internal details.

export interface Role {
  title: string;
  organization: string;
  context?: string;
  location: string;
  /** ISO year-month, e.g. "2026-06" */
  start: string;
  /** ISO year-month, or null while current */
  end: string | null;
  highlights: string[];
  stack: string[];
}

export const roles: Role[] = [
  {
    title: "Technical Account Manager",
    organization: "Cadient Talent",
    context: "Also working across Vorro",
    location: "Remote",
    start: "2026-06",
    end: null,
    highlights: [
      "Architecting and building Cadient's internal Command Center application with React, TypeScript, and REST APIs, including AI-integrated features that help the Sales and BDR teams source prospects and leads.",
      "Working directly with customers to understand pain points, troubleshoot issues, and turn requirements into tailored technical solutions.",
      "Handling CRM integrations, API connectivity, database operations, and data migrations, along with deployment and infrastructure troubleshooting.",
      "Using Claude and GitHub Copilot throughout the development lifecycle and building AI-assisted workflows into internal tools.",
    ],
    stack: ["React", "TypeScript", "REST APIs", "CRM integrations", "AI workflows"],
  },
  {
    title: "Senior Software Developer",
    organization: "Mindfire Solutions Digital LLP",
    location: "Remote",
    start: "2023-10",
    end: "2026-06",
    highlights: [
      "Designed and owned .NET Core backend microservices running in high-traffic production environments, and built React frontend features on top of them.",
      "Led performance optimization work, including CPU profiling, query tuning, and caching, to improve application responsiveness and scalability.",
      "Applied clean architecture and wrote unit and integration tests to keep full-stack deliverables reliable.",
      "Led code reviews, mentored junior developers, and delivered business-critical features with product and QA teams.",
    ],
    stack: [".NET Core", "C#", "React", "TypeScript", "Microservices"],
  },
  {
    title: "Software Developer",
    organization: "Dish TV India Limited",
    location: "Noida",
    start: "2021-09",
    end: "2023-09",
    highlights: [
      "Built and maintained .NET and C# backend services for consumer-facing platforms.",
      "Developed REST APIs and integrated third-party systems with internal services.",
      "Improved performance through refactoring and SQL query optimization, and supported production stability through monitoring.",
      "Contributed frontend modules alongside UI teams and conducted code reviews.",
    ],
    stack: [".NET", "C#", "REST APIs", "SQL Server"],
  },
];
