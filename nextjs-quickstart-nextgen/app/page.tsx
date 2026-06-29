"use client";
import PrimeReactLogo from "../components/logo";
import { Check } from "@primeicons/react/check";
import { Checkbox } from "@primereact/ui/checkbox";
import { CheckboxGroup } from "@primereact/ui/checkboxgroup";
import { Label } from "@primereact/ui/label";
import { RadioButton } from "@primereact/ui/radiobutton";
import { RadioButtonGroup } from "@primereact/ui/radiobuttongroup";
import { InputText } from "@primereact/ui/inputtext";
import { MeterGroup } from "@primereact/ui/metergroup";
import { Button } from "@primereact/ui/button";
import { ToggleSwitch } from "@primereact/ui/toggleswitch";
import { ToggleButton } from "@primereact/ui/togglebutton";
import { ToggleButtonGroup } from "@primereact/ui/togglebuttongroup";
import { Tag } from "@primereact/ui/tag";
import ThemeSwitcher from "@/components/theme-switcher";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] max-w-[424px] w-full">
        <div className="flex flex-col gap-6 p-8 w-full">
          <div className="flex items-center justify-between">
            <PrimeReactLogo />
            <ThemeSwitcher />
          </div>
          <CheckboxGroup
            defaultValue={[2]}
            className="flex flex-wrap gap-4 p-3 rounded-md border border-surface-200 dark:border-surface-800 border-dashed"
          >
            <div className="flex items-center gap-2">
              <Checkbox.Root inputId="checkbox-id1" value={1}>
                <Checkbox.Box>
                  <Checkbox.Indicator match="checked">
                    <Check />
                  </Checkbox.Indicator>
                </Checkbox.Box>
              </Checkbox.Root>
              <Label htmlFor="checkbox-id1">Accesible</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox.Root inputId="checkbox-id2" value={2}>
                <Checkbox.Box>
                  <Checkbox.Indicator match="checked">
                    <Check />
                  </Checkbox.Indicator>
                </Checkbox.Box>
              </Checkbox.Root>
              <Label htmlFor="checkbox-id2">Typescript</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox.Root inputId="checkbox-id3" value={3}>
                <Checkbox.Box>
                  <Checkbox.Indicator match="checked">
                    <Check />
                  </Checkbox.Indicator>
                </Checkbox.Box>
              </Checkbox.Root>
              <Label htmlFor="checkbox-id3">Headless</Label>
            </div>
          </CheckboxGroup>
          <div className="flex gap-4">
            <RadioButtonGroup className="flex flex-col gap-4 p-3 rounded-md border border-surface-200 dark:border-surface-800 border-dashed">
              <div className="flex items-center gap-2">
                <RadioButton.Root inputId="radio-id1" name="plan">
                  <RadioButton.Box>
                    <RadioButton.Indicator match="checked" />
                  </RadioButton.Box>
                </RadioButton.Root>
                <Label htmlFor="radio-id1">Hobby</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioButton.Root inputId="radio-id2" name="plan">
                  <RadioButton.Box>
                    <RadioButton.Indicator match="checked" />
                  </RadioButton.Box>
                </RadioButton.Root>
                <Label htmlFor="radio-id2">Startup</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioButton.Root inputId="radio-id3" name="plan">
                  <RadioButton.Box>
                    <RadioButton.Indicator match="checked" />
                  </RadioButton.Box>
                </RadioButton.Root>
                <Label htmlFor="radio-id3">Business</Label>
              </div>
            </RadioButtonGroup>
            <div className="flex-1 flex flex-col gap-4 p-3 rounded-md border border-surface-200 dark:border-surface-800 border-dashed">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="switch-id1">Discord</Label>
                <ToggleSwitch.Root inputId="switch-id1">
                  <ToggleSwitch.Control>
                    <ToggleSwitch.Handle />
                  </ToggleSwitch.Control>
                </ToggleSwitch.Root>
              </div>
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="switch-id2">Slack</Label>
                <ToggleSwitch.Root inputId="switch-id2" defaultChecked>
                  <ToggleSwitch.Control>
                    <ToggleSwitch.Handle />
                  </ToggleSwitch.Control>
                </ToggleSwitch.Root>
              </div>
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="switch-id3">Email</Label>
                <ToggleSwitch.Root inputId="switch-id3">
                  <ToggleSwitch.Control>
                    <ToggleSwitch.Handle />
                  </ToggleSwitch.Control>
                </ToggleSwitch.Root>
              </div>
            </div>
          </div>
          <InputText placeholder="Enter your name" />
          <MeterGroup.Root>
            <MeterGroup.Meters>
              <MeterGroup.Meter value={20} color="var(--p-blue-500)" />
              <MeterGroup.Meter value={30} color="var(--p-emerald-500)" />
              <MeterGroup.Meter value={15} color="var(--p-amber-500)" />
              <MeterGroup.Meter value={15} color="var(--p-violet-500)" />
            </MeterGroup.Meters>
          </MeterGroup.Root>
          <ToggleButtonGroup defaultValue={["bold"]} multiple fluid>
            <ToggleButton.Root value="bold">
              <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
            </ToggleButton.Root>
            <ToggleButton.Root value="italic">
              <ToggleButton.Indicator>Italic</ToggleButton.Indicator>
            </ToggleButton.Root>
            <ToggleButton.Root value="underline">
              <ToggleButton.Indicator>Underline</ToggleButton.Indicator>
            </ToggleButton.Root>
          </ToggleButtonGroup>
          <div className="flex flex-wrap items-center justify-center gap-4 p-3 rounded-md border border-surface-200 dark:border-surface-800 border-dashed">
            <Tag severity="success">
              <i className="pi pi-chevron-up !text-xs" />
              12.56%
            </Tag>
            <Tag severity="danger">
              <i className="pi pi-chevron-down !text-xs" />
              4.07%
            </Tag>
            <Tag severity="info">
              <i className="pi pi-chevron-right !text-xs" />
              1.25%
            </Tag>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              as="a"
              href="https://primeui.store/"
              rounded
              className="flex-1 min-w-40"
            >
              Get all access
            </Button>
            <Button
              as="a"
              href="https://primereact.org"
              variant="outlined"
              rounded
              className="flex-1 min-w-40"
            >
              Read our docs
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
