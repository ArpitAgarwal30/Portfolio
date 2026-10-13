import type { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, index, title, description, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    // scroll-mt keeps the heading clear of the sticky header when jumping to an anchor.
    <section id={id} aria-labelledby={headingId} className="scroll-mt-16 border-t border-border py-20 sm:py-24">
      <Container className="reveal">
        <header className="max-w-2xl">
          <p className="font-mono text-sm text-accent" aria-hidden="true">
            {index}
          </p>
          <h2 id={headingId} className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {description && <p className="mt-3 text-pretty text-muted">{description}</p>}
        </header>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}
