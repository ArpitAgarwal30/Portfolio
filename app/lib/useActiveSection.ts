import { useEffect, useState } from "react";

/**
 * Which of the given sections is crossing a thin band just above the middle of the viewport.
 * Returns null while none is (for example over the hero) or when no ids are given.
 */
export function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    if (!key) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          setActive((current) => (entry.isIntersecting ? id : current === id ? null : current));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const id of key.split(",")) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [key]);

  return key ? active : null;
}
