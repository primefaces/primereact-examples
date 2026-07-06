import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PrimeReactProvider } from "@primereact/core";
import { ThemeProvider } from "./context/theme-context.tsx";

const primereact = {
  theme: {
    options: {
      darkModeSelector: ".dark",
    },
  },
  license: "PrimeUI-Commercial-Key...",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider {...primereact}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </PrimeReactProvider>
  </StrictMode>,
);
