import { Button } from '@primereact/ui/button';
import { useEffect, useRef, useState } from 'react';

const remotes = {
    orders: { label: 'Orders', url: '/mfe/orders.js', mount: 'mountOrders' },
    customers: { label: 'Customers', url: '/mfe/customers.js', mount: 'mountCustomers' }
};

type Name = keyof typeof remotes;
type RemoteModule = Record<string, (container: HTMLElement) => () => void>;

export default function Shell() {
    const [current, setCurrent] = useState<Name>('orders');
    const [dark, setDark] = useState(false);
    const outlet = useRef<HTMLElement>(null);
    const unmount = useRef<() => void>(undefined);

    useEffect(() => {
        const remote = remotes[current];
        let active = true;

        import(/* @vite-ignore */ new URL(remote.url, location.href).href).then((module: RemoteModule) => {
            if (!active) return;

            unmount.current?.();
            unmount.current = module[remote.mount](outlet.current!);
        });

        return () => {
            active = false;
        };
    }, [current]);

    useEffect(() => () => unmount.current?.(), []);

    function toggleDark() {
        setDark(document.documentElement.classList.toggle('app-dark'));
    }

    return (
        <>
            <header className="shell-header">
                <span className="brand">Northside Roasters</span>
                <nav>
                    {(Object.keys(remotes) as Name[]).map((name) => (
                        <button key={name} type="button" aria-current={current === name ? 'page' : undefined} onClick={() => setCurrent(name)}>
                            {remotes[name].label}
                        </button>
                    ))}
                </nav>
                <Button severity="secondary" variant="outlined" size="small" onClick={toggleDark}>
                    {dark ? 'Light mode' : 'Dark mode'}
                </Button>
            </header>
            <main ref={outlet} className="outlet"></main>
        </>
    );
}
