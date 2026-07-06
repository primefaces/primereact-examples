"use client";

import { useTheme } from "next-themes";
import { Moon } from "@primeicons/react/moon";
import { Sun } from "@primeicons/react/sun";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex size-9 cursor-pointer items-center justify-center rounded-md border border-surface-200 text-surface-700 transition-colors hover:bg-surface-100 dark:border-surface-700 dark:text-surface-300 dark:hover:bg-surface-800"
    >
      {mounted ? (
        isDark ? <Sun className="size-4" /> : <Moon className="size-4" />
      ) : null}
    </button>
  );
}
