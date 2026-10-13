import { FileText } from "lucide-react";
import { SectionLink } from "~/components/ui/SectionLink";
import { Container } from "~/components/layout/Container";
import { GitHubIcon, LinkedInIcon } from "~/components/ui/BrandIcons";
import { externalLinkProps, primaryButton, secondaryButton } from "~/components/ui/styles";
import { deliverySteps } from "~/content/about";
import { profile } from "~/content/profile";

export function Hero() {
  return (
    <Container className="grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-center">
      <div>
        <p className="font-mono text-sm text-accent">{profile.positioning}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{profile.name}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted">{profile.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={profile.resumeUrl} {...externalLinkProps} className={primaryButton}>
            <FileText className="size-4" aria-hidden="true" />
            View resume
          </a>
          <SectionLink section="work" className={secondaryButton}>
            Explore work
          </SectionLink>
          <SectionLink section="contact" className={secondaryButton}>
            Get in touch
          </SectionLink>
        </div>

        <ul className="mt-8 flex gap-5 text-sm text-muted" aria-label="Profiles">
          <li>
            <a href={profile.links.github} {...externalLinkProps} className="inline-flex items-center gap-2 transition-colors hover:text-text">
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.links.linkedin} {...externalLinkProps} className="inline-flex items-center gap-2 transition-colors hover:text-text">
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      {/* Systems-style visual: the path from a customer problem to a running solution. */}
      <figure className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <figcaption className="font-mono text-xs tracking-wide text-muted uppercase">How I deliver</figcaption>
        <ol className="mt-6 space-y-6">
          {deliverySteps.map((step, i) => (
            <li key={step.title} className="relative flex gap-4">
              {i < deliverySteps.length - 1 && (
                <span aria-hidden="true" className="absolute top-8 bottom-[-1.5rem] left-4 w-px bg-border" />
              )}
              <span
                aria-hidden="true"
                className="relative flex size-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-bg font-mono text-xs text-accent"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-medium">{step.title}</p>
                <p className="mt-1 text-sm text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </figure>
    </Container>
  );
}
