import { PrimeReactProvider } from '@primereact/core';
import { withIsolation } from '@primereact/core/isolation';
import Lara from '@primeuix/themes/lara';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import OrdersApp from './OrdersApp';
import styles from './orders.css?inline';

export function mountOrders(container: HTMLElement) {
    const element = document.createElement('orders-root');
    const shadow = element.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    const root = document.createElement('div');

    style.textContent = styles;
    shadow.append(style, root);
    container.append(element);

    const isolation = withIsolation({ key: 'orders', root });
    const reactRoot = createRoot(root);

    reactRoot.render(
        <StrictMode>
            <PrimeReactProvider theme={{ preset: Lara, options: { darkModeSelector: '.app-dark' } }} isolation={isolation}>
                <OrdersApp />
            </PrimeReactProvider>
        </StrictMode>
    );

    return () => {
        reactRoot.unmount();
        element.remove();
    };
}
