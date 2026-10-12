export interface Pillar {
  title: string;
  body: string;
}

export interface DeliveryStep {
  title: string;
  body: string;
}

export const pillars: Pillar[] = [
  {
    title: "Technical account management",
    body: "I work directly with customers to understand pain points, troubleshoot issues, and turn requirements into technical solutions, from CRM integrations and APIs to data migrations and deployments.",
  },
  {
    title: "Software engineering",
    body: "5+ years building backend services, APIs, and full-stack applications with .NET, C#, React, and TypeScript, with a focus on clean architecture, performance, and tested code.",
  },
  {
    title: "Applied AI",
    body: "I build AI-assisted workflows into internal tools and use Claude Code and GitHub Copilot across the development lifecycle. I'm focused on forward-deployed engineering: getting AI capabilities out of the prototype stage and into real workflows.",
  },
];

// The path I follow from a customer problem to a working solution (shown in the hero).
export const deliverySteps: DeliveryStep[] = [
  { title: "Understand", body: "Start from the customer's real problem and constraints." },
  { title: "Design", body: "Turn requirements into an approach that fits existing systems." },
  { title: "Build and integrate", body: "Ship the APIs, integrations, and AI-assisted workflows." },
  { title: "Deploy and support", body: "Roll it out, troubleshoot, and keep it working." },
];
