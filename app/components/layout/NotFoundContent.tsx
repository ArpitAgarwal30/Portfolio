import { Link } from "react-router";
import { primaryButton, secondaryButton } from "~/components/ui/styles";
import { Container } from "./Container";

/** Shared by the catch-all route and by case-study URLs that don't exist. */
export function NotFoundContent() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-muted">The page you're looking for doesn't exist, or the link may be out of date.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className={primaryButton}>
          Back to home
        </Link>
        <Link to="/#work" className={secondaryButton}>
          See selected work
        </Link>
      </div>
    </Container>
  );
}

export const notFoundTitle = "Page not found";
