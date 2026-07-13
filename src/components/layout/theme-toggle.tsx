"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

/**
 * Animated light/dark toggle. Icon visibility is driven purely by the `.dark`
 * class (set by next-themes before paint), so there is no hydration mismatch
 * and no flash — the Sun/Moon cross-fade + rotate via CSS `dark:` variants.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={`border-border bg-surface text-foreground hover:bg-surface-2 relative inline-flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-colors ${className}`}
    >
      <Sun
        aria-hidden
        className="absolute h-5 w-5 scale-100 rotate-0 opacity-100 transition-all duration-300 motion-reduce:transition-none dark:scale-0 dark:-rotate-90 dark:opacity-0"
      />
      <Moon
        aria-hidden
        className="absolute h-5 w-5 scale-0 rotate-90 opacity-0 transition-all duration-300 motion-reduce:transition-none dark:scale-100 dark:rotate-0 dark:opacity-100"
      />
    </button>
  );
}
