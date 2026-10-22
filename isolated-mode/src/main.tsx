import './site.css';

import { PrimeReactProvider } from '@primereact/core';
import { withIsolation } from '@primereact/core/isolation';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ShopApp from './ShopApp';
import StaffPanel from './StaffPanel';

createRoot(document.querySelector('#shop')!).render(
    <StrictMode>
        <PrimeReactProvider theme={{ preset: Aura }}>
            <ShopApp />
        </PrimeReactProvider>
    </StrictMode>
);

const StaffPreset = definePreset(Lara, {
    semantic: { primary: { 50: '{indigo.50}', 100: '{indigo.100}', 200: '{indigo.200}', 300: '{indigo.300}', 400: '{indigo.400}', 500: '{indigo.500}', 600: '{indigo.600}', 700: '{indigo.700}', 800: '{indigo.800}', 900: '{indigo.900}', 950: '{indigo.950}' } }
});

const isolation = withIsolation({ key: 'staff' });

createRoot(document.querySelector('#staff')!).render(
    <StrictMode>
        <PrimeReactProvider theme={{ preset: StaffPreset }} isolation={isolation}>
            <StaffPanel />
        </PrimeReactProvider>
    </StrictMode>
);
