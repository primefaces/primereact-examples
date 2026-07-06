import { Button } from "@/components/ui/button";
import { Moon } from "@primeicons/react/moon";
import { Sun } from "@primeicons/react/sun";
import { useEffect, useState } from "react";

// Toggles the same `.dark` class + localStorage key the root inline script
// uses, so there is a single theme system (and no flash on load).
export default function ThemeSwitcher() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <Button variant="text" iconOnly aria-label="Toggle theme" onClick={toggle}>
      {dark ? <Sun /> : <Moon />}
    </Button>
  );
}
