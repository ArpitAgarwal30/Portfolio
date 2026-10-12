import { ArrowLeft } from "lucide-react";
import { data, Link } from "react-router";
import type { Route } from "./+types/work.$slug";
import { ArchitectureFlow } from "~/components/case-study/ArchitectureFlow";
import { FactSheet } from "~/components/case-study/FactSheet";
import { Container } from "~/components/layout/Container";
import { getCaseStudy } from "~/content/case-studies";
import { profile } from "~/content/profile";

// Runs at build time for each pre-rendered case study (see react-router.config.ts).
export function loader({ params }: Route.LoaderArgs) {
  const study = getCaseStudy(params.slug);
  if (!study) throw data(null, { status: 404 });
  return study;
}

export const meta: Route.MetaFunction = ({ loaderData }) =>
  loaderData
    ? [{ title: `${loaderData.title} | ${profile.name}` }, { name: "description", content: loaderData.summary }]
    : [{ title: `Case study not found | ${profile.name}` }];

export default function CaseStudyPage({ loaderData: study }: Route.ComponentProps) {
  return (
    <Container className="py-16 sm:py-20">
      <Link to="/#work" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-text">
        <ArrowLeft className="size-4" aria-hidden="true" />
        All work
      </Link>

      <header className="mt-8 max-w-3xl">
        <p className="font-mono text-sm text-accent">
          {study.kind} · {study.status}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{study.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-pretty text-muted">{study.summary}</p>
      </header>

      <div className="mt-12">
        <ArchitectureFlow steps={study.architecture} />
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <article className="max-w-3xl space-y-12">
          {study.stages.map((stage, i) => (
            <section key={stage.id} id={stage.id} aria-labelledby={`${stage.id}-heading`} className="scroll-mt-20">
              <p className="font-mono text-xs text-accent" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 id={`${stage.id}-heading`} className="mt-1 text-xl font-semibold tracking-tight">
                {stage.title}
              </h2>
              <div className="mt-3 space-y-4 leading-relaxed text-pretty text-muted">
                {stage.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </article>

        <aside className="order-first space-y-6 lg:order-none">
          <FactSheet study={study} />
          {/* Only the short stage list is sticky, so it always fits on short screens. */}
          <nav aria-label="Case study stages" className="hidden lg:sticky lg:top-24 lg:block">
            <p className="font-mono text-xs tracking-wide text-muted uppercase">On this page</p>
            <ul className="mt-3 space-y-1.5 border-l border-border text-sm">
              {study.stages.map((stage) => (
                <li key={stage.id}>
                  <a href={`#${stage.id}`} className="-ml-px block border-l border-transparent pl-4 text-muted transition-colors hover:border-accent hover:text-text">
                    {stage.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </Container>
  );
}
