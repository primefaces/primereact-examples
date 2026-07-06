import { Button } from "@/components/ui/button";
import { Moon } from "@primeicons/react/moon";
import { Sun } from "@primeicons/react/sun";
import { useTheme } from "../hooks/use-theme";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="text" severity="secondary" iconOnly aria-label="Toggle theme" onClick={toggleTheme}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
