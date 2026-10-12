import { ArrowUpRight } from "lucide-react";
import { Tag } from "~/components/ui/Tag";
import { externalLinkProps } from "~/components/ui/styles";
import type { CaseStudy } from "~/content/case-studies";

export function FactSheet({ study }: { study: CaseStudy }) {
  return (
    <dl className="space-y-5 rounded-xl border border-border bg-surface p-6 text-sm">
      <div>
        <dt className="font-mono text-xs tracking-wide text-muted uppercase">My role</dt>
        <dd className="mt-1 text-pretty">{study.role}</dd>
      </div>
      <div>
        <dt className="font-mono text-xs tracking-wide text-muted uppercase">When</dt>
        <dd className="mt-1">
          {study.period} · {study.status}
        </dd>
      </div>
      <div>
        <dt className="font-mono text-xs tracking-wide text-muted uppercase">Stack</dt>
        <dd className="mt-2">
          <ul className="flex flex-wrap gap-2">
            {study.stack.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        </dd>
      </div>
      {study.links.length > 0 && (
        <div>
          <dt className="font-mono text-xs tracking-wide text-muted uppercase">Links</dt>
          <dd className="mt-1">
            <ul className="space-y-1">
              {study.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} {...externalLinkProps} className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
                    {link.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      )}
    </dl>
  );
}
