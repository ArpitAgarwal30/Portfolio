import { profile } from "~/content/profile";
import { Container } from "./Container";

const footerLinks = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "GitHub", href: profile.links.github },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <ul className="flex gap-5">
          {footerLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
                className="transition-colors hover:text-text"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
