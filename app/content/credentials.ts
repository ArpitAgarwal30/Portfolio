// Verification links were checked as a logged-out visitor on 2026-10-12.

export interface Certification {
  name: string;
  issuer: string;
  kind: "Certification" | "Accreditation";
  /** ISO year-month */
  issued: string;
  /** ISO year-month */
  expires?: string;
  url: string;
}

export interface LearningItem {
  name: string;
  provider: string;
  /** ISO year-month, when known */
  date?: string;
}

export interface Education {
  degree: string;
  institution: string;
  start: string;
  end: string;
}

export const certifications: Certification[] = [
  {
    name: "Claude Certified Architect – Foundations",
    issuer: "Anthropic",
    kind: "Certification",
    issued: "2026-07",
    expires: "2027-07",
    url: "https://www.credly.com/badges/efc6b365-7dba-43e8-975e-ca99a87706c4",
  },
  {
    name: "AWS Partner: Technical Accredited",
    issuer: "Amazon Web Services",
    kind: "Accreditation",
    issued: "2026-08",
    url: "https://www.credly.com/badges/a0d039f5-a8cc-4237-8486-9e41769befcf",
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    kind: "Certification",
    issued: "2024-06",
    url: "https://learn.microsoft.com/en-us/users/arpitagarwal-3763/credentials/b543706df9c421dd",
  },
];

export const learning: LearningItem[] = [
  { name: "AWS Technical Essentials", provider: "AWS Training and Certification", date: "2026-08" },
  { name: "Virtual Internship (SDE)", provider: "JPMorgan Chase & Co.", date: "2020-05" },
  { name: "AI and Machine Learning Workshop", provider: "Delhi Technical University and Microsoft WAC" },
  { name: "Cyber Security Workshop", provider: "UP Police and Cyber Security Cell India" },
];

export const education: Education = {
  degree: "B.Tech, Computer Science Engineering",
  institution: "Dr. A.P.J. Abdul Kalam Technical University",
  start: "2017",
  end: "2021",
};
