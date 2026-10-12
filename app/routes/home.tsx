import type { Route } from "./+types/home";
import { Container } from "~/components/layout/Container";
import { profile } from "~/content/profile";

export const meta: Route.MetaFunction = () => [
  { title: `${profile.name} | ${profile.positioning}` },
  { name: "description", content: profile.intro },
];

export default function Home() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="font-mono text-sm text-accent">{profile.positioning}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{profile.name}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted">{profile.intro}</p>
    </Container>
  );
}
