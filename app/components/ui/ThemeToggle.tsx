import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "~/lib/theme";

// Both icons render and CSS picks one, so the pre-rendered HTML matches whatever
// theme the inline head script chose and hydration never mismatches.
export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark theme"
      title="Toggle dark theme"
      className="inline-flex size-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-text"
    >
      <Moon className="size-[18px] dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-[18px] dark:block" aria-hidden="true" />
    </button>
  );
}
