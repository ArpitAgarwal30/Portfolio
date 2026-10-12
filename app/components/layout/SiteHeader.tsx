import { Link } from "react-router";
import { profile } from "~/content/profile";
import { GitHubIcon, LinkedInIcon } from "~/components/ui/BrandIcons";
import { ThemeToggle } from "~/components/ui/ThemeToggle";
import { Container } from "./Container";

const iconLinkClass =
  "inline-flex size-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-text";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="font-medium tracking-tight text-text">
          {profile.name}
        </Link>
        <nav aria-label="Profiles" className="flex items-center gap-1">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className={iconLinkClass}>
            <GitHubIcon className="size-[18px]" />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className={iconLinkClass}>
            <LinkedInIcon className="size-[18px]" />
          </a>
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
