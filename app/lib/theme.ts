export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

// Runs inline in <head> before first paint, so the page never flashes the wrong theme.
// Uses the stored choice if there is one, otherwise follows (and keeps following) the OS setting.
export const themeInitScript = `(function(){var k="${STORAGE_KEY}",d=document.documentElement,m=window.matchMedia("(prefers-color-scheme: dark)");function stored(){try{var t=localStorage.getItem(k);return t==="light"||t==="dark"?t:null}catch(e){return null}}function apply(){d.dataset.theme=stored()||(m.matches?"dark":"light")}apply();m.addEventListener("change",function(){if(!stored())apply()})})();`;

export function toggleTheme(): Theme {
  const root = document.documentElement;
  const next: Theme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); the toggle still works for this visit.
  }
  return next;
}
