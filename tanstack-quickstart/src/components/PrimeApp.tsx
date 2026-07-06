import { Check } from "@primeicons/react/check";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Star,
  StarFill,
  Times,
} from "@primeicons/react";
import { Carousel } from "@primereact/ui/carousel";
import { Checkbox } from "@primereact/ui/checkbox";
import { CheckboxGroup } from "@primereact/ui/checkboxgroup";
import { Label } from "@primereact/ui/label";
import { RadioButton } from "@primereact/ui/radiobutton";
import { RadioButtonGroup } from "@primereact/ui/radiobuttongroup";
import { InputText } from "@primereact/ui/inputtext";
import { MeterGroup } from "@primereact/ui/metergroup";
import { Button } from "@primereact/ui/button";
import { ButtonGroup } from "@primereact/ui/buttongroup";
import { ToggleSwitch } from "@primereact/ui/toggleswitch";
import { ToggleButton } from "@primereact/ui/togglebutton";
import { ToggleButtonGroup } from "@primereact/ui/togglebuttongroup";
import { Tag } from "@primereact/ui/tag";
import { Slider } from "@primereact/ui/slider";
import { Rating } from "@primereact/ui/rating";
import { InputNumber } from "@primereact/ui/inputnumber";
import { InputOtp } from "@primereact/ui/inputotp";
import { Accordion } from "@primereact/ui/accordion";
import { Tabs } from "@primereact/ui/tabs";
import { Popover } from "@primereact/ui/popover";
import { Menu } from "@primereact/ui/menu";
import ThemeSwitcher from "#/components/theme-switcher";

function Slide({ children }: { children: React.ReactNode }) {
  return (
    <Carousel.Item>
      <div className="select-none size-80 shrink-0 relative flex flex-col items-center justify-center gap-5 rounded-lg border border-surface-200 dark:border-surface-800 bg-surface-50/75 dark:bg-surface-900/75 p-6">
        {children}
      </div>
    </Carousel.Item>
  );
}

export default function PrimeApp() {
  return (
    <div className="flex items-center justify-center min-h-screen py-6">
      <main className="flex flex-col gap-6 w-full">
        <div className="flex items-center justify-between px-6 max-w-md mx-auto w-full">
          <img
            className="dark:filter-[brightness(0)_invert(1)]"
            src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/common.images/logo/primereact-logo.svg"
            alt="PrimeReact Logo"
            width={150}
            height={50}
          />
          <ThemeSwitcher />
        </div>

        <div className="flex flex-col gap-2 px-6 max-w-md mx-auto w-full">
          <h1 className="text-2xl font-semibold text-surface-900 dark:text-surface-0 text-balance">
            Get started with PrimeReact
          </h1>
          <p className="text-surface-500 dark:text-surface-400 text-pretty">
            A TanStack Start starter with Tailwind and dark mode. Edit{" "}
            <code className="text-surface-700 dark:text-surface-200">
              src/routes/index.tsx
            </code>{" "}
            to begin.
          </p>
        </div>

        <Carousel.Root
          align="center"
          loop={false}
          autoSize
          className="relative w-full"
        >
          <Carousel.Content className="px-6">
            <Slide>
              <CheckboxGroup
                defaultValue={[2]}
                className="flex flex-wrap justify-center gap-4"
              >
                {[
                  { id: "cb-1", value: 1, label: "Accessible" },
                  { id: "cb-2", value: 2, label: "TypeScript" },
                  { id: "cb-3", value: 3, label: "Headless" },
                ].map((item) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <Checkbox.Root inputId={item.id} value={item.value}>
                      <Checkbox.Box>
                        <Checkbox.Indicator match="checked">
                          <Check />
                        </Checkbox.Indicator>
                      </Checkbox.Box>
                    </Checkbox.Root>
                    <Label htmlFor={item.id}>{item.label}</Label>
                  </div>
                ))}
              </CheckboxGroup>
            </Slide>

            <Slide>
              <Slider.Root defaultValue={50} className="w-full max-w-3xs">
                <Slider.Track>
                  <Slider.Range />
                </Slider.Track>
                <Slider.Handle />
              </Slider.Root>
            </Slide>

            <Slide>
              <Accordion.Root className="w-full text-sm">
                <Accordion.Panel value="1">
                  <Accordion.Header>
                    <Accordion.Trigger className="flex justify-between items-center w-full">
                      Is my data secure?
                      <ChevronDown className="transition-transform [[data-content-open]>&]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>
                    <p className="text-surface-500">
                      End-to-end encrypted and backed up.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="2">
                  <Accordion.Header>
                    <Accordion.Trigger className="flex justify-between items-center w-full">
                      Can I upgrade later?
                      <ChevronDown className="transition-transform [[data-content-open]>&]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>
                    <p className="text-surface-500">
                      Anytime from your settings.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion.Root>
            </Slide>

            <Slide>
              <div className="flex flex-col gap-3 w-40">
                {[
                  { id: "sw-1", label: "Discord", on: true },
                  { id: "sw-2", label: "Slack", on: false },
                  { id: "sw-3", label: "Email", on: true },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-2"
                  >
                    <Label htmlFor={item.id}>{item.label}</Label>
                    <ToggleSwitch.Root inputId={item.id} defaultChecked={item.on}>
                      <ToggleSwitch.Control>
                        <ToggleSwitch.Handle />
                      </ToggleSwitch.Control>
                    </ToggleSwitch.Root>
                  </div>
                ))}
              </div>
            </Slide>

            <Slide>
              <Tabs.Root defaultValue="tab1" className="w-full">
                <Tabs.List>
                  <Tabs.Tab value="tab1">Account</Tabs.Tab>
                  <Tabs.Tab value="tab2">Payment</Tabs.Tab>
                  <Tabs.Indicator />
                </Tabs.List>
                <Tabs.Panels>
                  <Tabs.Panel value="tab1">
                    <p className="text-sm text-surface-500 mt-2">
                      Update your profile info.
                    </p>
                  </Tabs.Panel>
                  <Tabs.Panel value="tab2">
                    <p className="text-sm text-surface-500 mt-2">
                      Manage your subscription.
                    </p>
                  </Tabs.Panel>
                </Tabs.Panels>
              </Tabs.Root>
            </Slide>

            <Slide>
              <RadioButtonGroup defaultValue="startup" className="flex flex-col gap-3">
                {[
                  { id: "rb-1", value: "hobby", label: "Hobby" },
                  { id: "rb-2", value: "startup", label: "Startup" },
                  { id: "rb-3", value: "business", label: "Business" },
                ].map((item) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <RadioButton.Root inputId={item.id} name="plan" value={item.value}>
                      <RadioButton.Box>
                        <RadioButton.Indicator match="checked" />
                      </RadioButton.Box>
                    </RadioButton.Root>
                    <Label htmlFor={item.id}>{item.label}</Label>
                  </div>
                ))}
              </RadioButtonGroup>
            </Slide>

            <Slide>
              <ButtonGroup>
                <Button>Save</Button>
                <Menu.Root>
                  <Menu.Trigger as={Button} iconOnly aria-label="More options">
                    <ChevronDown />
                  </Menu.Trigger>
                  <Menu.Portal>
                    <Menu.Positioner sideOffset={4} align="end">
                      <Menu.Popup className="w-44">
                        <Menu.List>
                          <Menu.Item>Save as draft</Menu.Item>
                          <Menu.Item>Save and publish</Menu.Item>
                          <Menu.Separator />
                          <Menu.Item>Export as PDF</Menu.Item>
                        </Menu.List>
                      </Menu.Popup>
                    </Menu.Positioner>
                  </Menu.Portal>
                </Menu.Root>
              </ButtonGroup>
            </Slide>

            <Slide>
              <InputText placeholder="Enter your name" className="w-full" />
            </Slide>

            <Slide>
              <Popover.Root>
                <Popover.Trigger as={Button} severity="secondary" variant="outlined">
                  Show Popover
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Positioner sideOffset={12} side="bottom" align="center">
                    <Popover.Popup className="max-w-64 w-full">
                      <Popover.Arrow />
                      <Popover.Header>
                        <Popover.Title>New Workspace</Popover.Title>
                        <Popover.Close
                          as={Button}
                          severity="secondary"
                          variant="text"
                          size="small"
                          iconOnly
                        >
                          <Times />
                        </Popover.Close>
                      </Popover.Header>
                      <Popover.Content>
                        <Popover.Description>
                          Name your workspace to get started.
                        </Popover.Description>
                        <InputText
                          placeholder="Workspace Name"
                          className="mt-3 w-full"
                        />
                      </Popover.Content>
                    </Popover.Popup>
                  </Popover.Positioner>
                </Popover.Portal>
              </Popover.Root>
            </Slide>

            <Slide>
              <MeterGroup.Root className="w-full">
                <MeterGroup.Meters>
                  <MeterGroup.Meter value={20} color="var(--p-blue-500)" />
                  <MeterGroup.Meter value={30} color="var(--p-emerald-500)" />
                  <MeterGroup.Meter value={15} color="var(--p-amber-500)" />
                  <MeterGroup.Meter value={15} color="var(--p-violet-500)" />
                </MeterGroup.Meters>
              </MeterGroup.Root>
            </Slide>

            <Slide>
              <ToggleButtonGroup defaultValue={["bold"]} multiple fluid className="w-full">
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
            </Slide>

            <Slide>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Tag severity="success">
                  <ChevronUp />
                  12.56%
                </Tag>
                <Tag severity="danger">
                  <ChevronDown />
                  4.07%
                </Tag>
                <Tag severity="info">
                  <ChevronRight />
                  1.25%
                </Tag>
              </div>
            </Slide>

            <Slide>
              <Rating.Root defaultValue={3.5} className="[&_svg]:size-6!">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Rating.Option key={i} index={i}>
                      <Rating.On>
                        <StarFill />
                      </Rating.On>
                      <Rating.Off>
                        <Star />
                      </Rating.Off>
                    </Rating.Option>
                  ))}
              </Rating.Root>
            </Slide>

            <Slide>
              <InputNumber.Root defaultValue={42723}>
                <InputNumber.Input />
              </InputNumber.Root>
            </Slide>

            <Slide>
              <InputOtp.Root>
                <InputOtp.Text index={0} />
                <InputOtp.Text index={1} />
                <InputOtp.Text index={2} />
                <InputOtp.Text index={3} />
              </InputOtp.Root>
            </Slide>
          </Carousel.Content>
        </Carousel.Root>

        <div className="flex flex-wrap items-center gap-4 px-6 max-w-md mx-auto w-full">
          <Button
            as="a"
            href="https://primeui.store/"
            target="_blank"
            rounded
            className="flex-1 min-w-40"
            size="large"
          >
            Get all access
          </Button>
          <Button
            as="a"
            href="https://primereact.org"
            target="_blank"
            variant="outlined"
            rounded
            className="flex-1 min-w-40"
            size="large"
          >
            Read our docs
          </Button>
        </div>
      </main>
    </div>
  );
}
