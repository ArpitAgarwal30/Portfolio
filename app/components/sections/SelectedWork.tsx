import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Section } from "~/components/layout/Section";
import { Tag } from "~/components/ui/Tag";
import { caseStudies } from "~/content/case-studies";

export function SelectedWork() {
  return (
    <Section
      id="work"
      index="02"
      title="Selected work"
      description="Independent projects, written up as case studies from problem to deployment."
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((study) => (
          <li key={study.slug} className="group relative flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50">
            <p className="font-mono text-xs tracking-wide text-muted uppercase">
              {study.kind} · {study.status}
            </p>
            <h3 className="mt-3 text-lg font-semibold">
              {/* The stretched link makes the whole card clickable while keeping one accessible link. */}
              <Link to={`/work/${study.slug}`} className="after:absolute after:inset-0 after:rounded-xl">
                {study.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-pretty text-muted">{study.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${study.title} technologies`}>
              {study.stack.map((tech) => (
                <li key={tech}>
                  <Tag>{tech}</Tag>
                </li>
              ))}
            </ul>
            <p aria-hidden="true" className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-accent">
              Read case study
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
