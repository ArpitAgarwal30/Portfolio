import type { Route } from "./+types/not-found";
import { NotFoundContent, notFoundTitle } from "~/components/layout/NotFoundContent";
import { profile } from "~/content/profile";

// Any path that matches no other route. On Vercel, unknown URLs are served 404.html (a copy of the
// SPA fallback made by scripts/postbuild.mjs), which hydrates into this page with a real 404 status.
export const meta: Route.MetaFunction = () => [
  { title: `${notFoundTitle} | ${profile.name}` },
  { name: "robots", content: "noindex" },
];

export default function NotFound() {
  return <NotFoundContent />;
}
