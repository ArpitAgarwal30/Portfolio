import { externalLinkProps } from "~/components/ui/styles";
import { profile } from "~/content/profile";
import { Container } from "./Container";

const footerLinks = [
  { label: "Email", href: `mailto:${profile.email}`, external: false },
  { label: "LinkedIn", href: profile.links.linkedin, external: true },
  { label: "GitHub", href: profile.links.github, external: true },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <ul className="flex gap-5">
          {footerLinks.map(({ label, href, external }) => (
            <li key={label}>
              <a href={href} {...(external && externalLinkProps)} className="transition-colors hover:text-text">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
