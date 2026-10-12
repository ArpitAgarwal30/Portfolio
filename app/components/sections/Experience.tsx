import { Section } from "~/components/layout/Section";
import { Tag } from "~/components/ui/Tag";
import { roles } from "~/content/experience";
import { formatYearMonth } from "~/lib/dates";

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="relative space-y-12 border-l border-border pl-6 sm:pl-8">
        {roles.map((role) => {
          const current = role.end === null;
          return (
            <li key={`${role.organization}-${role.start}`} className="relative">
              <span
                aria-hidden="true"
                className={`absolute top-2 -left-[calc(1.5rem+5px)] size-2.5 rounded-full sm:-left-[calc(2rem+5px)] ${current ? "bg-accent" : "bg-border"}`}
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="text-lg font-semibold">
                  {role.title} <span className="text-muted">· {role.organization}</span>
                </h3>
                <p className="shrink-0 font-mono text-sm text-muted">
                  <time dateTime={role.start}>{formatYearMonth(role.start)}</time>
                  {" – "}
                  {role.end ? <time dateTime={role.end}>{formatYearMonth(role.end)}</time> : "Present"}
                </p>
              </div>
              <p className="mt-1 text-sm text-muted">
                {[role.context, role.location].filter(Boolean).join(" · ")}
              </p>
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-pretty marker:text-border">
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies at ${role.organization}`}>
                {role.stack.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
