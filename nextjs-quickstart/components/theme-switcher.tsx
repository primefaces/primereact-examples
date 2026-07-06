"use client";

import { useTheme } from "next-themes";
import { Button } from "@primereact/ui/button";
import { Moon } from "@primeicons/react/moon";
import { Sun } from "@primeicons/react/sun";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="text"
      iconOnly
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted ? isDark ? <Sun /> : <Moon /> : null}
    </Button>
  );
}
