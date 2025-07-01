"use client";
import { useTheme } from "next-themes";
import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null
  }
  return (
    <Button
      variant="outlined"
      iconOnly
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <i className={`pi ${theme === "dark" ? "pi-sun" : "pi-moon"}`}></i>
    </Button>
  );
}
