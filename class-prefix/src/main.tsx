import './site.css';

import { PrimeReactProvider } from '@primereact/core';
import Aura from '@primeuix/themes/aura';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.querySelector('#app')!).render(
    <StrictMode>
        <PrimeReactProvider theme={{ preset: Aura, options: { classPrefix: 'nr' } }}>
            <App />
        </PrimeReactProvider>
    </StrictMode>
);
