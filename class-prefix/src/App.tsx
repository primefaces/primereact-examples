import './App.css';

import { Check } from '@primeicons/react/check';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Button } from '@primereact/ui/button';
import { Checkbox, type CheckboxRootChangeEvent } from '@primereact/ui/checkbox';
import { InputText } from '@primereact/ui/inputtext';
import { Message } from '@primereact/ui/message';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import { type ChangeEvent, type FormEvent, useState } from 'react';

const cities = ['Portland', 'Beaverton', 'Gresham', 'Vancouver', 'Salem'];

export default function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState<string | null>(null);
    const [delivery, setDelivery] = useState(true);
    const [sent, setSent] = useState(false);

    function requestAccount(event: FormEvent) {
        event.preventDefault();
        setSent(true);
    }

    if (sent) {
        return (
            <Message.Root severity="success">
                <Message.Content>
                    <Message.Text>
                        Thanks, {name}. We will email {email} within two working days.
                    </Message.Text>
                </Message.Content>
            </Message.Root>
        );
    }

    return (
        <form className="account-form" onSubmit={requestAccount}>
            <label htmlFor="name">Business name</label>
            <InputText id="name" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} placeholder="Little Owl Café" fluid />
            <label htmlFor="email">Email</label>
            <InputText id="email" type="email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder="orders@littleowl.cafe" fluid />
            <label htmlFor="city">City</label>
            <Select.Root value={city} onValueChange={(e: SelectValueChangeEvent) => setCity(e.value as string)} options={cities} fluid>
                <Select.Trigger id="city">
                    <Select.Value placeholder="Choose a city" />
                    <Select.Indicator>
                        <ChevronDown />
                    </Select.Indicator>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Positioner>
                        <Select.Popup>
                            <Select.List />
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
            <div className="check">
                <Checkbox.Root inputId="delivery" checked={delivery} onCheckedChange={(e: CheckboxRootChangeEvent) => setDelivery(e.checked)}>
                    <Checkbox.Box>
                        <Checkbox.Indicator match="checked">
                            <Check />
                        </Checkbox.Indicator>
                    </Checkbox.Box>
                </Checkbox.Root>
                <label htmlFor="delivery">Weekly delivery</label>
            </div>
            <Button type="submit" disabled={!name || !email || !city}>
                Request account
            </Button>
        </form>
    );
}
