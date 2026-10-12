// Single source of truth for identity and contact details.
// Every value here is verified against the resume or confirmed by Arpit.

export interface Profile {
  name: string;
  positioning: string;
  intro: string;
  location: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
  };
}

export const profile: Profile = {
  name: "Arpit Agarwal",
  positioning: "Technical Account Manager · Software Engineer · Applied AI",
  intro:
    "I bridge the gap between technology, customer problems, and business outcomes, combining hands-on engineering experience with technical account management and practical AI-powered solutions.",
  location: "India",
  email: "arpit.agarwal67@gmail.com",
  links: {
    github: "https://github.com/ArpitAgarwal30",
    linkedin: "https://www.linkedin.com/in/arpitagarwal30",
  },
};
