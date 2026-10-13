import type { Route } from "./+types/home";
import { About } from "~/components/sections/About";
import { Contact } from "~/components/sections/Contact";
import { Credentials } from "~/components/sections/Credentials";
import { Experience } from "~/components/sections/Experience";
import { Expertise } from "~/components/sections/Expertise";
import { Hero } from "~/components/sections/Hero";
import { SelectedWork } from "~/components/sections/SelectedWork";
import { roles } from "~/content/experience";
import { profile } from "~/content/profile";
import { pageMeta } from "~/lib/seo";

const currentRole = roles.find((role) => role.end === null);

export const meta: Route.MetaFunction = () => [
  ...pageMeta({ title: `${profile.name} | ${profile.positioning}`, description: profile.intro, path: "/" }),
  {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.name,
      url: profile.siteUrl,
      jobTitle: currentRole?.title,
      worksFor: currentRole ? { "@type": "Organization", name: currentRole.organization } : undefined,
      sameAs: [profile.links.github, profile.links.linkedin],
    },
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SelectedWork />
      <Experience />
      <Expertise />
      <Credentials />
      <Contact />
    </>
  );
}
