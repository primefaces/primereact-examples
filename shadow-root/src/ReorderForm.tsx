import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronUp } from '@primeicons/react/chevron-up';
import { Button } from '@primereact/ui/button';
import { InputNumber, type InputNumberRootValueChangeEvent } from '@primereact/ui/inputnumber';
import { Message } from '@primereact/ui/message';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import { type FormEvent, useState } from 'react';

const coffees = [
    { name: 'House Espresso', origin: 'Brazil and Ethiopia', price: 21 },
    { name: 'Colombia Huila', origin: 'Washed, caramel and red apple', price: 24 },
    { name: 'Ethiopia Guji', origin: 'Natural, blueberry and jasmine', price: 27 }
];

type Coffee = (typeof coffees)[number];

const today = new Date();
const firstThursday = today.getDate() + ((11 - today.getDay()) % 7 || 7);
const deliveryDays = [0, 1, 2, 3].map((week) =>
    new Date(today.getFullYear(), today.getMonth(), firstThursday + week * 7).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
);

export default function ReorderForm() {
    const [coffee, setCoffee] = useState<Coffee | null>(coffees[0]);
    const [bags, setBags] = useState(6);
    const [delivery, setDelivery] = useState(deliveryDays[0]);
    const [placed, setPlaced] = useState(false);

    const total = coffee ? coffee.price * bags : 0;

    function placeOrder(event: FormEvent) {
        event.preventDefault();
        setPlaced(true);
    }

    return (
        <form className="reorder-form" onSubmit={placeOrder}>
            <div className="field">
                <label htmlFor="coffee">Coffee</label>
                <Select.Root value={coffee} onValueChange={(e: SelectValueChangeEvent) => setCoffee(e.value as Coffee)} options={coffees} optionLabel="name" fluid>
                    <Select.Trigger id="coffee">
                        <Select.Value />
                        <Select.Indicator>
                            <ChevronDown />
                        </Select.Indicator>
                    </Select.Trigger>
                    <Select.Portal appendTo="self">
                        <Select.Positioner>
                            <Select.Popup>
                                <Select.List>
                                    {coffees.map((option, index) => (
                                        <Select.Option key={option.name} index={index} uKey={option.name}>
                                            <div className="option">
                                                <span>{option.name}</span>
                                                <small>{option.origin}</small>
                                            </div>
                                        </Select.Option>
                                    ))}
                                </Select.List>
                            </Select.Popup>
                        </Select.Positioner>
                    </Select.Portal>
                </Select.Root>
            </div>
            <div className="row">
                <div className="field">
                    <label htmlFor="bags">Bags</label>
                    <InputNumber.Root value={bags} onValueChange={(e: InputNumberRootValueChangeEvent) => setBags(e.value)} min={1} max={40} fluid>
                        <InputNumber.Input id="bags" />
                        <InputNumber.Group>
                            <InputNumber.Increment>
                                <ChevronUp />
                            </InputNumber.Increment>
                            <InputNumber.Decrement>
                                <ChevronDown />
                            </InputNumber.Decrement>
                        </InputNumber.Group>
                    </InputNumber.Root>
                </div>
                <div className="field">
                    <label htmlFor="delivery">Delivery</label>
                    <Select.Root value={delivery} onValueChange={(e: SelectValueChangeEvent) => setDelivery(e.value as string)} options={deliveryDays} fluid>
                        <Select.Trigger id="delivery">
                            <Select.Value />
                            <Select.Indicator>
                                <ChevronDown />
                            </Select.Indicator>
                        </Select.Trigger>
                        <Select.Portal appendTo="self">
                            <Select.Positioner>
                                <Select.Popup>
                                    <Select.List />
                                </Select.Popup>
                            </Select.Positioner>
                        </Select.Portal>
                    </Select.Root>
                </div>
            </div>
            <div className="summary">
                <span>Total</span>
                <strong>${total}</strong>
            </div>
            <Button type="submit">Place order</Button>
            {placed && (
                <Message.Root severity="success">
                    <Message.Content>
                        <Message.Text>
                            Order placed. {bags} bags of {coffee?.name} arrive on {delivery}.
                        </Message.Text>
                    </Message.Content>
                </Message.Root>
            )}
        </form>
    );
}
