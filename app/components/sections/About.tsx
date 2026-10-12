import { Section } from "~/components/layout/Section";
import { pillars } from "~/content/about";

export function About() {
  return (
    <Section
      id="about"
      index="01"
      title="What I do"
      description="Three parts of my work that reinforce each other: understanding the customer, building the software, and applying AI where it helps."
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <li key={pillar.title} className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
