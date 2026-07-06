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

export function PrimeProvider({ children }: { children: React.ReactNode }) {
  return <PrimeReactProvider {...primereact}>{children}</PrimeReactProvider>;
}
