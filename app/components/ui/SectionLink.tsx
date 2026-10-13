import type { ComponentProps, MouseEvent } from "react";
import { Link, useLocation } from "react-router";

type SectionLinkProps = Omit<ComponentProps<typeof Link>, "to"> & { section: string };

/**
 * A link to a home-page section. When already on the home page it glides there; page changes
 * stay instant. React Router scrolls to the hash with scrollIntoView(), which follows the CSS
 * scroll-behavior, so smooth scrolling is switched on just for this one navigation.
 */
export function SectionLink({ section, onClick, ...props }: SectionLinkProps) {
  const { pathname } = useLocation();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (!event.defaultPrevented && pathname === "/") {
      smoothScrollOnce();
    }
  }

  return <Link to={`/#${section}`} onClick={handleClick} {...props} />;
}

function smoothScrollOnce() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const root = document.documentElement;
  root.style.scrollBehavior = "smooth";
  const reset = () => {
    root.style.scrollBehavior = "";
  };
  window.addEventListener("scrollend", reset, { once: true });
  // Fallback for browsers without scrollend, or when no scroll happens at all.
  window.setTimeout(reset, 1500);
}
