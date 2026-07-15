"use client";

import { PrimeReactProvider } from "@primereact/core";

const primereact = {
  theme: {
    options: {
      darkModeSelector: ".dark",
    },
  },
  license: "PrimeUI-Commercial-Key...",
};

// Headless needs the core context provider (no theme/preset — you style everything).
export function PrimeProvider({ children }: { children: React.ReactNode }) {
  return <PrimeReactProvider {...primereact}>{children}</PrimeReactProvider>;
}
