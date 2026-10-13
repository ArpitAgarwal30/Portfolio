// Runs after `react-router build`. Node 24 strips TypeScript types natively, so the content files
// (which have no imports) can be read directly. Kept out of the router: pre-rendering a sitemap
// resource route made an extra internal data request that failed intermittently.
import { copyFileSync, writeFileSync } from "node:fs";
import { caseStudies } from "../app/content/case-studies.ts";
import { profile } from "../app/content/profile.ts";

const out = "build/client";

// 1. Vercel serves 404.html, with a 404 status, for any URL that has no file. The SPA fallback there
//    hydrates into the app's own "Page not found" route.
copyFileSync(`${out}/__spa-fallback.html`, `${out}/404.html`);

// 2. sitemap.xml, generated from the content so new case studies are listed automatically.
const paths = ["/", ...caseStudies.map((study) => `/work/${study.slug}`)];
const urls = paths.map((path) => `  <url><loc>${new URL(path, profile.siteUrl)}</loc></url>`).join("\n");
writeFileSync(
  `${out}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

console.log(`postbuild: wrote 404.html and sitemap.xml (${paths.length} URLs)`);
