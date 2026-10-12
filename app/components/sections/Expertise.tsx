import { Section } from "~/components/layout/Section";
import { Tag } from "~/components/ui/Tag";
import { expertise } from "~/content/expertise";

export function Expertise() {
  return (
    <Section
      id="expertise"
      index="04"
      title="Technical expertise"
      description="Grouped by the kind of problem, each with where I've actually used it."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((area) => (
          <li key={area.title} className="flex flex-col rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold">{area.title}</h3>
            <p className="mt-2 text-sm text-muted">{area.evidence}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${area.title} skills`}>
              {area.items.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
