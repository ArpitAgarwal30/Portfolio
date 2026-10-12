import type { Config } from "@react-router/dev/config";
import { caseStudies } from "./app/content/case-studies";

export default {
  // Static site: every route is rendered to HTML at build time, no runtime server.
  ssr: false,
  // Static routes plus one page per case study.
  prerender: ({ getStaticPaths }) => [...getStaticPaths(), ...caseStudies.map((study) => `/work/${study.slug}`)],
} satisfies Config;
