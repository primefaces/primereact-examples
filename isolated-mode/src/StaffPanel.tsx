import { useIsolation } from '@primereact/core';
import { Button } from '@primereact/ui/button';
import { Dialog, type DialogRootChangeEvent } from '@primereact/ui/dialog';
import { InputNumber, type InputNumberRootValueChangeEvent } from '@primereact/ui/inputnumber';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup, type ToggleButtonGroupValueChangeEvent } from '@primereact/ui/togglebuttongroup';
import { ToggleSwitch, type ToggleSwitchRootChangeEvent } from '@primereact/ui/toggleswitch';
import { getActionsInstance } from '@primeuix/styled';
import { palette } from '@primeuix/themes';
import { useState } from 'react';

type Item = { name: string; bags: number; visible: boolean };

const colors = [
    { label: 'Indigo', color: '#6366f1' },
    { label: 'Rose', color: '#e11d48' }
];

export default function StaffPanel() {
    const isolation = useIsolation();

    const [stock, setStock] = useState<Item[]>([
        { name: 'House Espresso', bags: 42, visible: true },
        { name: 'Colombia Huila', bags: 18, visible: true },
        { name: 'Ethiopia Guji', bags: 3, visible: true },
        { name: 'Guatemala Huehue', bags: 0, visible: false }
    ]);
    const [panelColor, setPanelColor] = useState('Indigo');
    const [soldOut, setSoldOut] = useState<Item | null>(null);
    const [open, setOpen] = useState(false);

    function update(name: string, changes: Partial<Item>) {
        setStock((items) => items.map((item) => (item.name === name ? { ...item, ...changes } : item)));
    }

    function confirmSoldOut(item: Item) {
        setSoldOut(item);
        setOpen(true);
    }

    function markSoldOut() {
        if (soldOut) update(soldOut.name, { bags: 0, visible: false });
        setOpen(false);
    }

    function changePanelColor(event: ToggleButtonGroupValueChangeEvent) {
        const next = colors.find((item) => item.label === event.value);

        if (next && isolation) {
            setPanelColor(next.label);
            getActionsInstance(isolation.theme).updatePrimaryPalette(palette(next.color));
        }
    }

    return (
        <div className="staff">
            <header className="staff-header">
                <h2>Staff panel</h2>
                <ToggleButtonGroup value={panelColor} onValueChange={changePanelColor} allowEmpty={false} size="small">
                    {colors.map((item) => (
                        <ToggleButton.Root key={item.label} value={item.label}>
                            <ToggleButton.Indicator>{item.label}</ToggleButton.Indicator>
                        </ToggleButton.Root>
                    ))}
                </ToggleButtonGroup>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Coffee</th>
                        <th>Bags</th>
                        <th>Listed</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {stock.map((item) => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>
                                <InputNumber.Root value={item.bags} onValueChange={(e: InputNumberRootValueChangeEvent) => update(item.name, { bags: e.value })} min={0}>
                                    <InputNumber.Input style={{ width: '4.5rem' }} />
                                </InputNumber.Root>
                            </td>
                            <td>
                                <ToggleSwitch.Root checked={item.visible} onCheckedChange={(e: ToggleSwitchRootChangeEvent) => update(item.name, { visible: e.checked })}>
                                    <ToggleSwitch.Control>
                                        <ToggleSwitch.Handle />
                                    </ToggleSwitch.Control>
                                </ToggleSwitch.Root>
                            </td>
                            <td>
                                <Button severity="danger" variant="text" size="small" disabled={item.bags === 0} onClick={() => confirmSoldOut(item)}>
                                    Sold out
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Dialog.Root open={open} onOpenChange={(e: DialogRootChangeEvent) => setOpen(e.value as boolean)} modal>
                <Dialog.Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Popup style={{ width: '24rem' }}>
                            <Dialog.Header>
                                <Dialog.Title>Mark as sold out</Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Content>
                                <p>{soldOut?.name} will be hidden from the shop until you add stock again.</p>
                            </Dialog.Content>
                            <Dialog.Footer>
                                <Button variant="text" onClick={() => setOpen(false)}>
                                    Cancel
                                </Button>
                                <Button severity="danger" onClick={markSoldOut}>
                                    Mark sold out
                                </Button>
                            </Dialog.Footer>
                        </Dialog.Popup>
                    </Dialog.Positioner>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}
