"use client";
import { PrimeReactProvider } from "@primereact/core/config";
import { PrimeReactStyleSheet } from "@primereact/core/stylesheet";
import { useServerInsertedHTML } from "next/navigation";
import * as React from "react";
import Noir from "@/themes/noir";

const styledStyleSheet = new PrimeReactStyleSheet();

export default function PrimeProvider({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  useServerInsertedHTML(() => {
    const styleElements = styledStyleSheet.getAllElements();

    styledStyleSheet.clear();

    return <>{styleElements}</>;
  });

  const primereact = {
    theme: {
      preset: Noir,
      options: {
        cssLayer: {
            name: 'primereact',
            order: 'theme, base, primereact'
        },
        darkModeSelector: ".dark"
      }
    },
  };

  return (
    <PrimeReactProvider {...primereact} stylesheet={styledStyleSheet}>
      {children}
    </PrimeReactProvider>
  );
}
