import { Check } from '@primeicons/react/check';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { ChevronUp } from '@primeicons/react/chevron-up';
import { Times } from '@primeicons/react/times';
import { Button } from '@primereact/ui/button';
import { DataTable } from '@primereact/ui/datatable';
import { Dialog, type DialogRootChangeEvent } from '@primereact/ui/dialog';
import { InputNumber, type InputNumberRootValueChangeEvent } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';
import { Select, type SelectValueChangeEvent } from '@primereact/ui/select';
import { Tag } from '@primereact/ui/tag';
import { Toast } from '@primereact/ui/toast';
import { toast, Toaster, type ToasterRegionInstance, type ToastType } from '@primereact/ui/toaster';
import { useState } from 'react';

type Order = { id: number; cafe: string; coffee: string; bags: number; status: 'Roasting' | 'Shipped' | 'Delivered' };

const cafes = ['Little Owl Café', 'Second Street Bakery', 'Harbor Books', 'The Corner Spot'];
const coffees = ['House Espresso', 'Colombia Huila', 'Ethiopia Guji', 'Guatemala Huehue'];

const severities = { Roasting: 'warn', Shipped: 'info', Delivered: 'success' } as const;

export default function OrdersApp() {
    const [orders, setOrders] = useState<Order[]>([
        { id: 1048, cafe: 'Little Owl Café', coffee: 'House Espresso', bags: 12, status: 'Roasting' },
        { id: 1047, cafe: 'Harbor Books', coffee: 'Ethiopia Guji', bags: 4, status: 'Shipped' },
        { id: 1046, cafe: 'Second Street Bakery', coffee: 'Colombia Huila', bags: 8, status: 'Shipped' },
        { id: 1045, cafe: 'The Corner Spot', coffee: 'House Espresso', bags: 20, status: 'Delivered' },
        { id: 1044, cafe: 'Little Owl Café', coffee: 'Guatemala Huehue', bags: 6, status: 'Delivered' }
    ]);
    const [open, setOpen] = useState(false);
    const [cafe, setCafe] = useState<string | null>(null);
    const [coffee, setCoffee] = useState<string | null>(null);
    const [bags, setBags] = useState(6);

    function openNew() {
        setCafe(null);
        setCoffee(null);
        setBags(6);
        setOpen(true);
    }

    function save() {
        if (!cafe || !coffee) return;

        const id = orders[0].id + 1;

        setOrders([{ id, cafe, coffee, bags, status: 'Roasting' }, ...orders]);
        setOpen(false);
        toast.success({ title: `Order #${id} saved`, description: `${bags} bags for ${cafe}`, group: 'orders', duration: 3000 });
    }

    return (
        <section className="orders">
            <header>
                <h1>Orders</h1>
                <Button onClick={openNew}>New order</Button>
            </header>
            <DataTable.Root data={orders}>
                <DataTable.TableContainer>
                    <DataTable.Table>
                        <DataTable.THead>
                            <DataTable.THeadRow>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Order</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Café</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Coffee</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Bags</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                                <DataTable.THeadCell>
                                    <DataTable.THeadTitle>Status</DataTable.THeadTitle>
                                </DataTable.THeadCell>
                            </DataTable.THeadRow>
                        </DataTable.THead>
                        <DataTable.TBody>
                            {({ item }: { item: Order }) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell>#{item.id}</DataTable.Cell>
                                    <DataTable.Cell>{item.cafe}</DataTable.Cell>
                                    <DataTable.Cell>{item.coffee}</DataTable.Cell>
                                    <DataTable.Cell>{item.bags}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <Tag severity={severities[item.status]}>{item.status}</Tag>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )}
                        </DataTable.TBody>
                    </DataTable.Table>
                </DataTable.TableContainer>
            </DataTable.Root>
            <Dialog.Root open={open} onOpenChange={(e: DialogRootChangeEvent) => setOpen(e.value as boolean)} modal>
                <Dialog.Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Popup style={{ width: '26rem' }}>
                            <Dialog.Header>
                                <Dialog.Title>New order</Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Content>
                                <div className="form">
                                    <Label htmlFor="cafe">Café</Label>
                                    <Select.Root value={cafe} onValueChange={(e: SelectValueChangeEvent) => setCafe(e.value as string)} options={cafes} fluid>
                                        <Select.Trigger id="cafe">
                                            <Select.Value placeholder="Choose a café" />
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
                                    <Label htmlFor="coffee">Coffee</Label>
                                    <Select.Root value={coffee} onValueChange={(e: SelectValueChangeEvent) => setCoffee(e.value as string)} options={coffees} fluid>
                                        <Select.Trigger id="coffee">
                                            <Select.Value placeholder="Choose a coffee" />
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
                                    <Label htmlFor="bags">Bags</Label>
                                    <InputNumber.Root value={bags} onValueChange={(e: InputNumberRootValueChangeEvent) => setBags(e.value)} min={1} fluid>
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
                            </Dialog.Content>
                            <Dialog.Footer>
                                <Button variant="text" onClick={() => setOpen(false)}>
                                    Cancel
                                </Button>
                                <Button disabled={!cafe || !coffee} onClick={save}>
                                    Save order
                                </Button>
                            </Dialog.Footer>
                        </Dialog.Popup>
                    </Dialog.Positioner>
                </Dialog.Portal>
            </Dialog.Root>
            <Toaster.Root group="orders">
                <Toaster.Portal>
                    <Toaster.Region>
                        {({ toaster }: ToasterRegionInstance) =>
                            toaster?.toasts.map((item: ToastType) => (
                                <Toast.Root key={item.id} toast={item}>
                                    <Toast.Content>
                                        <Toast.Icon match="success">
                                            <Check />
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
