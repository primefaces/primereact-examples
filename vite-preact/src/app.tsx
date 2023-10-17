import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

export function App() {
  return (
    <>
      <PrimeReactProvider>
        <Button label="Submit" />
      </PrimeReactProvider>
    </>
  );
}
