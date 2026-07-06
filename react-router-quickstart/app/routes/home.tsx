import type { Route } from "./+types/home";
import PrimeApp from "../components/PrimeApp";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PrimeReact + React Router" },
    { name: "description", content: "PrimeReact v11 starter for React Router" },
  ];
}

export default function Home() {
  return <PrimeApp />;
}
