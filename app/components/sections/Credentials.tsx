import { ArrowUpRight } from "lucide-react";
import { Section } from "~/components/layout/Section";
import { externalLinkProps } from "~/components/ui/styles";
import { certifications, education, learning } from "~/content/credentials";
import { formatYearMonth } from "~/lib/dates";

export function Credentials() {
  return (
    <Section id="credentials" index="05" title="Certifications and learning">
      <ul className="grid gap-6 md:grid-cols-3">
        {certifications.map((cert) => (
          <li key={cert.name} className="flex flex-col rounded-xl border border-border bg-surface p-6">
            <p className="font-mono text-xs tracking-wide text-accent uppercase">{cert.kind}</p>
            <h3 className="mt-3 font-semibold text-balance">{cert.name}</h3>
            <p className="mt-1 text-sm text-muted">
              {cert.issuer} · Issued <time dateTime={cert.issued}>{formatYearMonth(cert.issued)}</time>
              {cert.expires && (
                <>
                  {" · Valid until "}
                  <time dateTime={cert.expires}>{formatYearMonth(cert.expires)}</time>
                </>
              )}
            </p>
            <a
              href={cert.url}
              {...externalLinkProps}
              className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-accent hover:underline"
            >
              Verify credential
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">: {cert.name} (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-semibold">Learning</h3>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {learning.map((item) => (
              <li key={item.name} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <span>
                  {item.name} <span className="text-muted">· {item.provider}</span>
                </span>
                {item.date && (
                  <time dateTime={item.date} className="shrink-0 font-mono text-sm text-muted">
                    {formatYearMonth(item.date)}
                  </time>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Education</h3>
          <p className="mt-4 border-y border-border py-3">
            {education.degree} <span className="text-muted">· {education.institution}</span>
            <span className="mt-1 block font-mono text-sm text-muted">
              {education.start} – {education.end}
            </span>
          </p>
        </div>
      </div>
    </Section>
  );
}
