import './site.css';

import { PrimeReactProvider } from '@primereact/core';
import { withShadowRoot } from '@primereact/core/shadowroot';
import Aura from '@primeuix/themes/aura';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReorderForm from './ReorderForm';
import styles from './reorder-form.css?inline';

const host = document.querySelector('#reorder-form')!;
const shadowRoot = host.attachShadow({ mode: 'open' });
const style = document.createElement('style');
const container = document.createElement('div');

style.textContent = styles;
shadowRoot.append(style, container);

createRoot(container).render(
    <StrictMode>
        <PrimeReactProvider theme={{ preset: Aura, options: { darkModeSelector: '.app-dark' } }} shadowRoot={withShadowRoot()}>
            <ReorderForm />
        </PrimeReactProvider>
    </StrictMode>
);

const toggle = document.querySelector('.theme-toggle')!;

toggle.addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('app-dark');

    toggle.textContent = dark ? 'Light mode' : 'Dark mode';
});
