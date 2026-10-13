import type { ReactNode } from "react";
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { Route } from "./+types/root";
import { Container } from "~/components/layout/Container";
import { SiteFooter } from "~/components/layout/SiteFooter";
import { SiteHeader } from "~/components/layout/SiteHeader";
import { SkipLink } from "~/components/layout/SkipLink";
import { themeInitScript } from "~/lib/theme";
import geistLatin from "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./styles/app.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  // Fetch the main text font straight away instead of after the stylesheet is parsed, so the hero
  // text swaps to Geist sooner. Vite resolves this to the same hashed file the @font-face rule uses.
  { rel: "preload", href: geistLatin, as: "font", type: "font/woff2", crossOrigin: "anonymous" },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    // The head script sets data-theme before React hydrates, so the attribute is expected to differ.
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-dvh flex-col">
        <SkipLink />
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const notFound = isRouteErrorResponse(error) && error.status === 404;
  return (
    <Container className="py-24">
      <h1 className="text-3xl font-semibold tracking-tight">{notFound ? "Page not found" : "Something went wrong"}</h1>
      <p className="mt-3 text-muted">
        {notFound ? "The page you're looking for doesn't exist." : "Please refresh the page or try again later."}
      </p>
      <a href="/" className="mt-6 inline-block font-medium text-accent hover:underline">
        Back to home
      </a>
    </Container>
  );
}
