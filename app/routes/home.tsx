import type { Route } from "./+types/home";
import { About } from "~/components/sections/About";
import { Contact } from "~/components/sections/Contact";
import { Credentials } from "~/components/sections/Credentials";
import { Experience } from "~/components/sections/Experience";
import { Expertise } from "~/components/sections/Expertise";
import { Hero } from "~/components/sections/Hero";
import { SelectedWork } from "~/components/sections/SelectedWork";
import { profile } from "~/content/profile";

export const meta: Route.MetaFunction = () => [
  { title: `${profile.name} | ${profile.positioning}` },
  { name: "description", content: profile.intro },
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
