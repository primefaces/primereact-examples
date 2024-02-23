import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { twMerge } from "tailwind-merge";
import "../styles/globals.css";
import "primeicons/primeicons.css";

export default function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind, ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge } }}>
      <ThemeSwitcher />
      <Component {...pageProps} />
    </PrimeReactProvider>
  );
}
