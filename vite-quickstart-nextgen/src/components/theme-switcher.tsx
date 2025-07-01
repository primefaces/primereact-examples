import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useTheme } from "../hooks/use-theme";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Button variant="outlined" iconOnly onClick={toggleTheme}>
      <i className={`pi ${theme === "dark" ? "pi-sun" : "pi-moon"}`}></i>
    </Button>
  );
}
