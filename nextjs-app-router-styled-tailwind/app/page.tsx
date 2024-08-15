'use client';
import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";


export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <p className="mb-10">
          <a href="https://nextjs.org/" target="_blank">
            <img src="/next.svg" className="logo inline-block" alt="Next.JS logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src="/react.svg" className="logo react inline-block" alt="React logo" />
          </a>
        </p>
        <h1>Next.js + PrimeReact + TailwindCSS</h1>
        <div>
          <h2>Demo app showing PrimeReact + Tailwind CSS in unstyled mode</h2>
        </div>
        <div className="card">
          <Button icon="pi pi-plus" className="mr-2" label="Increment" onClick={() => setCount((count) => count + 1)}></Button>
          <InputText value={count.toString()} />
        </div>
        <p className="read-the-docs">Click on the Next and React logos to learn more</p>
      </main>
    </>
  );
}
