import './shell.css';

import { PrimeReactProvider } from '@primereact/core';
import Aura from '@primeuix/themes/aura';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Shell from './Shell';

createRoot(document.querySelector('#shell')!).render(
    <StrictMode>
        <PrimeReactProvider theme={{ preset: Aura, options: { darkModeSelector: '.app-dark' } }}>
            <Shell />
        </PrimeReactProvider>
    </StrictMode>
);
