import type { ArchitectureStep } from "~/content/case-studies";

// A left-to-right flow on wide screens that stacks vertically on phones.
export function ArchitectureFlow({ steps }: { steps: ArchitectureStep[] }) {
  return (
    <figure className="rounded-xl border border-border bg-surface p-6">
      <figcaption className="font-mono text-xs tracking-wide text-muted uppercase">Architecture</figcaption>
      <ol className="mt-5 grid gap-3 md:grid-flow-col md:auto-cols-fr">
        {steps.map((step, i) => (
          <li key={step.label} className="relative rounded-lg border border-border bg-bg p-4">
            <p className="font-mono text-xs text-accent" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-1 font-medium">{step.label}</p>
            <p className="mt-1 text-sm text-muted">{step.detail}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
