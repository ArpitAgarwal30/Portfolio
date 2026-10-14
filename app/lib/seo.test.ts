import { describe, expect, it } from "vitest";
import { absoluteUrl, pageMeta } from "./seo";

const find = (meta: ReturnType<typeof pageMeta>, key: string, value: string) =>
  meta.find((entry) => (entry as Record<string, unknown>)[key] === value) as Record<string, string> | undefined;

describe("pageMeta", () => {
  it("builds absolute canonical, Open Graph and Twitter URLs", () => {
    const meta = pageMeta({ title: "T", description: "D", path: "/work/crm-sync-demo", type: "article" });

    expect(find(meta, "rel", "canonical")?.href).toBe("https://arpitagarwal.vercel.app/work/crm-sync-demo");
    expect(find(meta, "property", "og:url")?.content).toBe("https://arpitagarwal.vercel.app/work/crm-sync-demo");
    expect(find(meta, "property", "og:image")?.content).toBe("https://arpitagarwal.vercel.app/og/default.png");
    expect(find(meta, "property", "og:type")?.content).toBe("article");
    expect(find(meta, "name", "twitter:card")?.content).toBe("summary_large_image");
    expect(find(meta, "name", "author")?.content).toBe("Arpit Agarwal");
  });

  it("marks pages noindex instead of giving them a canonical URL", () => {
    const meta = pageMeta({ title: "T", description: "D", path: "/404", noindex: true });

    expect(find(meta, "name", "robots")?.content).toBe("noindex");
    expect(find(meta, "rel", "canonical")).toBeUndefined();
  });

  it("resolves paths against the site URL", () => {
    expect(absoluteUrl("/")).toBe("https://arpitagarwal.vercel.app/");
  });
});
