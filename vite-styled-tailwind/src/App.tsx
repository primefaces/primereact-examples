import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo inline-block" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react inline-block" alt="React logo" />
        </a>
      </p>
      <h1>Vite + PrimeReact + TailwindCSS</h1>
      <div>
        <h2>Demo app showing PrimeReact + Tailwind CSS in styled mode with PrimeReact Theme!</h2>
      </div>
      <div className="card">
        <Button icon="pi pi-plus" className="mr-2" label="Increment" onClick={() => setCount((count) => count + 1)}></Button>
        <InputText value={count.toString()} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
