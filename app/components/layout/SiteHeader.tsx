import { FileText, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ThemeToggle } from "~/components/ui/ThemeToggle";
import { externalLinkProps, iconButton } from "~/components/ui/styles";
import { sections } from "~/content/navigation";
import { profile } from "~/content/profile";
import { Container } from "./Container";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Escape closes the mobile menu and returns focus to the button that opened it.
  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to="/" className="font-medium tracking-tight text-text">
          {profile.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6 text-sm text-muted">
            {sections.map((item) => (
              <li key={item.id}>
                <Link to={`/#${item.id}`} className="transition-colors hover:text-text">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={profile.resumeUrl}
            {...externalLinkProps}
            className="mr-2 hidden items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-surface-2 md:inline-flex"
          >
            <FileText className="size-4" aria-hidden="true" />
            Resume
          </a>
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`${iconButton} md:hidden`}
          >
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <nav id="mobile-menu" aria-label="Main" hidden={!menuOpen} className="border-t border-border md:hidden">
        <Container className="py-3">
          <ul className="flex flex-col">
            {sections.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-2 py-3 text-text hover:bg-surface-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                {...externalLinkProps}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 rounded-md px-2 py-3 text-text hover:bg-surface-2"
              >
                <FileText className="size-4" aria-hidden="true" />
                Resume
              </a>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
}
