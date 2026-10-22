import { Button } from '@primereact/ui/button';
import { Tag } from '@primereact/ui/tag';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup, type ToggleButtonGroupValueChangeEvent } from '@primereact/ui/togglebuttongroup';
import { palette, updatePrimaryPalette } from '@primeuix/themes';
import { useState } from 'react';

const coffees = [
    { name: 'House Espresso', notes: 'Chocolate, hazelnut, brown sugar', price: 21, roast: 'Medium dark' },
    { name: 'Colombia Huila', notes: 'Caramel, red apple, cocoa', price: 24, roast: 'Medium' },
    { name: 'Ethiopia Guji', notes: 'Blueberry, jasmine, lemon', price: 27, roast: 'Light' },
    { name: 'Guatemala Huehue', notes: 'Toffee, orange, almond', price: 23, roast: 'Medium' }
];

const seasons = [
    { label: 'Autumn', color: '#c2410c' },
    { label: 'Evergreen', color: '#10b981' },
    { label: 'Winter', color: '#0284c7' }
];

export default function ShopApp() {
    const [season, setSeason] = useState('Evergreen');
    const [cart, setCart] = useState(0);

    function changeSeason(event: ToggleButtonGroupValueChangeEvent) {
        const next = seasons.find((item) => item.label === event.value);

        if (next) {
            setSeason(next.label);
            updatePrimaryPalette(palette(next.color));
        }
    }

    return (
        <div className="shop">
            <header className="shop-header">
                <span className="brand">Northside Roasters</span>
                <ToggleButtonGroup value={season} onValueChange={changeSeason} allowEmpty={false}>
                    {seasons.map((item) => (
                        <ToggleButton.Root key={item.label} value={item.label}>
                            <ToggleButton.Indicator>{item.label}</ToggleButton.Indicator>
                        </ToggleButton.Root>
                    ))}
                </ToggleButtonGroup>
                <Button variant="outlined">Cart ({cart})</Button>
            </header>
            <h1>This week's coffee</h1>
            <ul className="coffees">
                {coffees.map((coffee) => (
                    <li key={coffee.name}>
                        <div>
                            <h2>{coffee.name}</h2>
                            <p>{coffee.notes}</p>
                        </div>
                        <Tag severity="secondary">{coffee.roast}</Tag>
                        <strong>${coffee.price}</strong>
                        <Button onClick={() => setCart(cart + 1)}>Add to cart</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
