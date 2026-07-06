import { Button } from "@/components/ui/button";
import { Moon } from "@primeicons/react/moon";
import { Sun } from "@primeicons/react/sun";
import { useEffect, useState } from "react";

// Toggles the same `.dark` class + localStorage key that the root
// THEME_INIT_SCRIPT (in __root.tsx) uses, so there is a single theme system.
export default function ThemeSwitcher() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(next ? "dark" : "light");
    root.setAttribute("data-theme", next ? "dark" : "light");
    root.style.colorScheme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <Button variant="text" iconOnly aria-label="Toggle theme" onClick={toggle}>
      {dark ? <Sun /> : <Moon />}
    </Button>
  );
}
