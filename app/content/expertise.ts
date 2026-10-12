// Each category says where the skill was actually used instead of a self-rated score.

export interface ExpertiseArea {
  title: string;
  evidence: string;
  items: string[];
}

export const expertise: ExpertiseArea[] = [
  {
    title: "Backend and APIs",
    evidence: "The core of my work at Dish TV and Mindfire, 2021–2026.",
    items: ["C#", ".NET Core", "ASP.NET Core", "Entity Framework", "REST APIs", "Microservices", "Clean architecture", "Unit and integration testing"],
  },
  {
    title: "Frontend and full-stack",
    evidence: "React and TypeScript at Mindfire and in my current role.",
    items: ["React", "TypeScript", "JavaScript", "HTML and CSS"],
  },
  {
    title: "Databases and data",
    evidence: "Query tuning at Dish TV and Mindfire; data migrations in my current role.",
    items: ["MS SQL Server", "NoSQL", "Query optimization", "Data migrations"],
  },
  {
    title: "Cloud, infrastructure, and delivery",
    evidence: "Deployment and infrastructure troubleshooting in my current role.",
    items: ["AWS", "Azure", "Docker", "Git and GitHub", "CI/CD"],
  },
  {
    title: "AI and integrations",
    evidence: "AI-assisted workflows and CRM integrations at Cadient Talent and Vorro.",
    items: ["Claude Code", "Claude Cowork", "GitHub Copilot", "CRM integrations", "API integrations"],
  },
  {
    title: "Solution delivery",
    evidence: "Customer-facing technical work as a Technical Account Manager since June 2026.",
    items: ["Customer troubleshooting", "Requirements to solutions", "Code reviews and mentoring", "Agile delivery"],
  },
];
