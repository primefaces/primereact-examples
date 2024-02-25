import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import 'primereact/resources/themes/lara-dark-indigo/theme.css'; //theme
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <Button icon="pi pi-plus" className="mr-2" label="Increment" onClick={() => setCount((count) => count + 1)}></Button>
        <InputText value={count.toString()} />
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
