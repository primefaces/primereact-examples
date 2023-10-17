import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider value={{ unstyled: false, pt: Tailwind }}>
      <Component {...pageProps} />
    </PrimeReactProvider>
  );
}
