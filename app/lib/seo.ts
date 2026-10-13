import type { MetaDescriptor } from "react-router";
import { profile } from "~/content/profile";

interface PageMeta {
  title: string;
  description: string;
  /** Path on the site, e.g. "/" or "/work/crm-sync-demo". */
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
}

export const socialImage = { path: "/og/default.png", width: 1200, height: 630, alt: `${profile.name}: ${profile.positioning}` };

export function absoluteUrl(path: string): string {
  return new URL(path, profile.siteUrl).toString();
}

/** Title, description, canonical URL and the Open Graph / Twitter tags link previews read. */
export function pageMeta({ title, description, path, type = "website", noindex = false }: PageMeta): MetaDescriptor[] {
  const url = absoluteUrl(path);
  const image = absoluteUrl(socialImage.path);
  return [
    { title },
    { name: "description", content: description },
    ...(noindex ? [{ name: "robots", content: "noindex" }] : [{ tagName: "link", rel: "canonical", href: url }]),
    { property: "og:type", content: type },
    { property: "og:site_name", content: profile.name },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: String(socialImage.width) },
    { property: "og:image:height", content: String(socialImage.height) },
    { property: "og:image:alt", content: socialImage.alt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}
