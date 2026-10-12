import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "~/lib/theme";
import { iconButton } from "./styles";

// Both icons render and CSS picks one, so the pre-rendered HTML matches whatever
// theme the inline head script chose and hydration never mismatches.
export function ThemeToggle() {
  return (
    <button type="button" onClick={toggleTheme} aria-label="Toggle dark theme" title="Toggle dark theme" className={iconButton}>
      <Moon className="size-[18px] dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-[18px] dark:block" aria-hidden="true" />
    </button>
  );
}
