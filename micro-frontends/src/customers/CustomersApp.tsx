import { InfoCircle } from '@primeicons/react/info-circle';
import { Search } from '@primeicons/react/search';
import { Times } from '@primeicons/react/times';
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Toast } from '@primereact/ui/toast';
import { toast, Toaster, type ToasterRegionInstance, type ToastType } from '@primereact/ui/toaster';
import { ToggleSwitch, type ToggleSwitchRootChangeEvent } from '@primereact/ui/toggleswitch';
import { type ChangeEvent, useState } from 'react';

type Customer = { name: string; contact: string; city: string; weekly: boolean; balance: number };

function initials(name: string) {
    return name
        .split(' ')
        .slice(0, 2)
        .map((word) => word[0])
        .join('');
}

export default function CustomersApp() {
    const [customers, setCustomers] = useState<Customer[]>([
        { name: 'Little Owl Café', contact: 'Maya Chen', city: 'Portland', weekly: true, balance: 412 },
        { name: 'Second Street Bakery', contact: 'Daniel Ortiz', city: 'Beaverton', weekly: true, balance: 0 },
        { name: 'Harbor Books', contact: 'Priya Nair', city: 'Astoria', weekly: false, balance: 108 },
        { name: 'The Corner Spot', contact: 'Sam Whitfield', city: 'Portland', weekly: true, balance: 840 }
    ]);
    const [query, setQuery] = useState('');

    const filtered = customers.filter((customer) => `${customer.name} ${customer.contact} ${customer.city}`.toLowerCase().includes(query.toLowerCase()));

    function setWeekly(name: string, weekly: boolean) {
        setCustomers(customers.map((customer) => (customer.name === name ? { ...customer, weekly } : customer)));
    }

    function sendInvoice(customer: Customer) {
        toast.info({ title: 'Invoice sent', description: `$${customer.balance} to ${customer.contact}`, group: 'customers', duration: 3000 });
    }

    return (
        <section className="customers">
            <header>
                <h1>Customers</h1>
                <IconField.Root>
                    <IconField.Inset>
                        <Search />
                    </IconField.Inset>
                    <InputText value={query} onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} placeholder="Search customers" />
                </IconField.Root>
            </header>
            <ul>
                {filtered.map((customer) => (
                    <li key={customer.name}>
                        <Avatar.Root shape="circle">
                            <Avatar.Fallback>{initials(customer.name)}</Avatar.Fallback>
                        </Avatar.Root>
                        <div className="who">
                            <strong>{customer.name}</strong>
                            <span>
                                {customer.contact}, {customer.city}
                            </span>
                        </div>
                        <label className="weekly">
                            <ToggleSwitch.Root checked={customer.weekly} onCheckedChange={(e: ToggleSwitchRootChangeEvent) => setWeekly(customer.name, e.checked)}>
                                <ToggleSwitch.Control>
                                    <ToggleSwitch.Handle />
                                </ToggleSwitch.Control>
                            </ToggleSwitch.Root>
                            Weekly delivery
                        </label>
                        <Button severity="secondary" variant="outlined" disabled={customer.balance === 0} onClick={() => sendInvoice(customer)}>
                            Send invoice
                        </Button>
                    </li>
                ))}
            </ul>
            {filtered.length === 0 && <p className="empty">No customer matches "{query}".</p>}
            <Toaster.Root group="customers">
                <Toaster.Portal>
                    <Toaster.Region>
                        {({ toaster }: ToasterRegionInstance) =>
                            toaster?.toasts.map((item: ToastType) => (
                                <Toast.Root key={item.id} toast={item}>
                                    <Toast.Content>
                                        <Toast.Icon match="info">
                                            <InfoCircle />
                                        </Toast.Icon>
                                        <Toast.Message>
                                            <Toast.Title />
                                            <Toast.Description />
                                        </Toast.Message>
                                        <Toast.Close>
                                            <Times />
                                        </Toast.Close>
                                    </Toast.Content>
                                </Toast.Root>
                            ))
                        }
                    </Toaster.Region>
                </Toaster.Portal>
            </Toaster.Root>
        </section>
    );
}
