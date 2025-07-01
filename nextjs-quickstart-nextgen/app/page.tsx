"use client";
import PrimeReactLogo from "../components/logo";
import { Checkbox } from "primereact/checkbox";
import { Label } from "primereact/label";
import { RadioButton } from "primereact/radiobutton";
import { InputText } from "primereact/inputtext";
import { MeterGroup } from "primereact/metergroup";
import { Button } from "primereact/button";
import { Switch } from "primereact/switch";
import { ToggleButton } from "primereact/togglebutton";
import { Tag } from "primereact/tag";
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
          <Checkbox.Group
            defaultValue={[2]}
            className="flex-wrap gap-4 p-3 rounded-md border border-surface-200 dark:border-surface-800 border-dashed"
          >
            <div className="flex items-center gap-2">
              <Checkbox inputId="checkbox-id1" value={1} />
              <Label htmlFor="checkbox-id1">Accesible</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox inputId="checkbox-id2" value={2} />
              <Label htmlFor="checkbox-id2">Typescript</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox inputId="checkbox-id3" value={3} />
              <Label htmlFor="checkbox-id3">Headless</Label>
            </div>
          </Checkbox.Group>
          <div className="flex gap-4">
            <RadioButton.Group
              value={1}
              className="flex flex-col gap-4 p-3 rounded-md border border-surface-200 dark:border-surface-800 border-dashed"
            >
              <div className="flex items-center gap-2">
                <RadioButton inputId="radio-id1" value={1} />
                <Label htmlFor="radio-id1">Hobby</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioButton inputId="radio-id2" value={2} />
                <Label htmlFor="radio-id2">Startup</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioButton inputId="radio-id3" value={3} />
                <Label htmlFor="radio-id3">Business</Label>
              </div>
            </RadioButton.Group>
            <div className="flex-1 flex flex-col gap-4 p-3 rounded-md border border-surface-200 dark:border-surface-800 border-dashed">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="switch-id1">Discord</Label>
                <Switch inputId="switch-id1">
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                </Switch>
              </div>
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="switch-id2">Slack</Label>
                <Switch inputId="switch-id2" defaultChecked>
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                </Switch>
              </div>
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="switch-id3">Email</Label>
                <Switch inputId="switch-id3">
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                </Switch>
              </div>
            </div>
          </div>
          <InputText placeholder="Enter your name" />
          <MeterGroup>
            <MeterGroup.Meters>
              <MeterGroup.Meter index={0} value={20} />
              <MeterGroup.Meter index={1} value={30} />
              <MeterGroup.Meter index={2} value={15} />
              <MeterGroup.Meter index={3} value={15} />
            </MeterGroup.Meters>
          </MeterGroup>
          <ToggleButton.Group defaultValue={["bold"]} multiple>
            <ToggleButton value="bold" className="flex-1">
              <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
            </ToggleButton>
            <ToggleButton value="italic" className="flex-1">
              <ToggleButton.Indicator>Italic</ToggleButton.Indicator>
            </ToggleButton>
            <ToggleButton value="underline" className="flex-1">
              <ToggleButton.Indicator>Underline</ToggleButton.Indicator>
            </ToggleButton>
          </ToggleButton.Group>
          <div className="flex flex-wrap items-center justify-center gap-4 p-3 rounded-md border border-surface-200 dark:border-surface-800 border-dashed">
            <Tag severity="success">
              <Tag.Icon>
                <i className="pi pi-chevron-up !text-xs" />
              </Tag.Icon>
              <Tag.Label>12.56%</Tag.Label>
            </Tag>
            <Tag severity="danger">
              <Tag.Icon>
                <i className="pi pi-chevron-down !text-xs" />
              </Tag.Icon>
              <Tag.Label>4.07%</Tag.Label>
            </Tag>
            <Tag severity="info">
              <Tag.Icon>
                <i className="pi pi-chevron-right !text-xs" />
              </Tag.Icon>
              <Tag.Label>1.25%</Tag.Label>
            </Tag>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              as="a"
              href="https://github.com/primefaces/primereact"
              rounded
              className="flex-1 min-w-40"
            >
              <i className="pi pi-star-fill text-yellow-500"></i>
              Give a Star
            </Button>
            <Button
              as="a"
              href="https://www.primareact.org/docs"
              variant="outlined"
              rounded
              className="flex-1 min-w-40"
            >
              Read our Docs
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
