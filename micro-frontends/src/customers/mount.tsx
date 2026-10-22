import { PrimeReactProvider } from '@primereact/core';
import { withIsolation } from '@primereact/core/isolation';
import Nora from '@primeuix/themes/nora';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CustomersApp from './CustomersApp';
import styles from './customers.css?inline';

export function mountCustomers(container: HTMLElement) {
    const element = document.createElement('customers-root');
    const shadow = element.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    const root = document.createElement('div');

    style.textContent = styles;
    shadow.append(style, root);
    container.append(element);

    const isolation = withIsolation({ key: 'customers', root });
    const reactRoot = createRoot(root);

    reactRoot.render(
        <StrictMode>
            <PrimeReactProvider theme={{ preset: Nora, options: { darkModeSelector: '.app-dark' } }} isolation={isolation}>
                <CustomersApp />
            </PrimeReactProvider>
        </StrictMode>
    );

    return () => {
        reactRoot.unmount();
        element.remove();
    };
}
