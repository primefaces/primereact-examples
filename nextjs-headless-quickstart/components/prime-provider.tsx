"use client";

import { PrimeReactProvider } from "@primereact/core";

// Headless needs the core context provider (no theme/preset — you style everything).
export function PrimeProvider({ children }: { children: React.ReactNode }) {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
}
