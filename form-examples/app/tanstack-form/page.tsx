"use client";

import type { ChangeEvent } from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";

import { ChevronDown, Check, Spinner } from "@primeicons/react";
import { InputText } from "@primereact/ui/inputtext";
import { Select, type SelectValueChangeEvent } from "@primereact/ui/select";
import { Checkbox } from "@primereact/ui/checkbox";
import { CheckboxGroup } from "@primereact/ui/checkboxgroup";
import { Label } from "@primereact/ui/label";
import { Button } from "@primereact/ui/button";
import { Message } from "@primereact/ui/message";
import { toast } from "@primereact/ui/toaster";

import ThemeSwitcher from "@/components/theme-switcher";

const FRAMEWORKS = [
  { label: "Next.js", value: "nextjs" },
  { label: "Vite", value: "vite" },
  { label: "Astro", value: "astro" },
  { label: "SvelteKit", value: "sveltekit" },
  { label: "Nuxt", value: "nuxt" },
  { label: "Remix", value: "remix" },
];

const ENVIRONMENTS = [
  { label: "Production", value: "production" },
  { label: "Preview", value: "preview" },
  { label: "Development", value: "development" },
];

const schema = z.object({
  projectName: z
    .string()
    .min(1, "Project name is required.")
    .regex(/^[a-z0-9-]+$/, "Lowercase letters, numbers and hyphens only."),
  framework: z.string().min(1, "Please select a framework."),
  rootDir: z.string().min(1, "Root directory is required."),
  environments: z.array(z.string()).min(1, "Select at least one environment."),
});

const labelCls =
  "flex items-center gap-1 text-sm font-medium text-surface-800 dark:text-surface-100";

// TanStack Form surfaces Standard Schema issues as objects; read the message.
function firstError(errors: unknown[]): string | undefined {
  const error = errors[0];
  if (!error) return undefined;
  if (typeof error === "string") return error;
  if (typeof error === "object" && "message" in error) {
    return String((error as { message: unknown }).message);
  }
  return String(error);
}

export default function TanStackFormPage() {
  const form = useForm({
    defaultValues: {
      projectName: "",
      framework: "",
      rootDir: "./",
      environments: [] as string[],
    },
    validators: {
      onChange: schema,
    },
    onSubmit: async ({ value }) => {
      await new Promise((r) => setTimeout(r, 700));
      toast({
        title: "Deployment queued",
        description: (
          <pre className="mt-1 whitespace-pre-wrap font-mono text-xs">
            {JSON.stringify(value, null, 2)}
          </pre>
        ),
      });
    },
  });

  return (
    <div className="relative min-h-screen flex flex-col items-center px-6 py-10">
      <div className="absolute right-4 top-4">
        <ThemeSwitcher />
      </div>

      <div className="w-full max-w-sm rounded-lg border border-surface-200 dark:border-surface-800 bg-surface-0 dark:bg-surface-950 overflow-hidden">
        <div className="flex flex-col gap-1 px-6 pt-6">
          <h1 className="text-base font-semibold text-surface-900 dark:text-surface-0">
            Deploy a new project
          </h1>
          <p className="text-sm text-surface-500 dark:text-surface-400">
            Configure your project before the first deployment.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="flex flex-col gap-6 px-6 py-6"
        >
          {/* Project name */}
          <form.Field name="projectName">
            {(field) => (
              <div className="flex flex-col gap-2">
                <Label htmlFor="projectName" className={labelCls}>
                  Project name
                  <span className="text-red-500">*</span>
                </Label>
                <InputText
                  id="projectName"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    field.handleChange(e.target.value)
                  }
                  onBlur={field.handleBlur}
                  invalid={!field.state.meta.isValid}
                  fluid
                  placeholder="my-app"
                />
                {!field.state.meta.isValid && (
                  <Message.Root severity="error" variant="simple" size="small">
                    <Message.Content>
                      <Message.Text>
                        {firstError(field.state.meta.errors)}
                      </Message.Text>
                    </Message.Content>
                  </Message.Root>
                )}
              </div>
            )}
          </form.Field>

          {/* Framework preset */}
          <form.Field name="framework">
            {(field) => (
              <div className="flex flex-col gap-2">
                <Label htmlFor="framework" className={labelCls}>
                  Framework preset
                  <span className="text-red-500">*</span>
                </Label>
                <Select.Root
                  value={field.state.value}
                  onValueChange={(e: SelectValueChangeEvent) =>
                    field.handleChange(e.value as string)
                  }
                  options={FRAMEWORKS}
                  optionLabel="label"
                  optionValue="value"
                  invalid={!field.state.meta.isValid}
                  className="w-full"
                >
                  <Select.Trigger type="button">
                    <Select.Value placeholder="Select a framework" />
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
                {!field.state.meta.isValid && (
                  <Message.Root severity="error" variant="simple" size="small">
                    <Message.Content>
                      <Message.Text>
                        {firstError(field.state.meta.errors)}
                      </Message.Text>
                    </Message.Content>
                  </Message.Root>
                )}
              </div>
            )}
          </form.Field>

          {/* Root directory */}
          <form.Field name="rootDir">
            {(field) => (
              <div className="flex flex-col gap-2">
                <Label htmlFor="rootDir" className={labelCls}>
                  Root directory
                  <span className="text-red-500">*</span>
                </Label>
                <InputText
                  id="rootDir"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    field.handleChange(e.target.value)
                  }
                  onBlur={field.handleBlur}
                  invalid={!field.state.meta.isValid}
                  fluid
                  placeholder="./"
                />
                {!field.state.meta.isValid && (
                  <Message.Root severity="error" variant="simple" size="small">
                    <Message.Content>
                      <Message.Text>
                        {firstError(field.state.meta.errors)}
                      </Message.Text>
                    </Message.Content>
                  </Message.Root>
                )}
              </div>
            )}
          </form.Field>

          {/* Environments */}
          <form.Field name="environments">
            {(field) => (
              <div className="flex flex-col gap-2">
                <Label className={labelCls}>
                  Environments
                  <span className="text-red-500">*</span>
                </Label>
                <CheckboxGroup
                  value={field.state.value}
                  onValueChange={(e: { value: unknown }) =>
                    field.handleChange(e.value as string[])
                  }
                  className="flex flex-wrap gap-x-6 gap-y-3 rounded-lg border border-surface-200 dark:border-surface-800 p-3"
                >
                  {ENVIRONMENTS.map((env) => (
                    <div key={env.value} className="flex items-center gap-2">
                      <Checkbox.Root inputId={env.value} value={env.value}>
                        <Checkbox.Box>
                          <Checkbox.Indicator match="checked">
                            <Check />
                          </Checkbox.Indicator>
                        </Checkbox.Box>
                      </Checkbox.Root>
                      <Label
                        htmlFor={env.value}
                        className="text-sm text-surface-700 dark:text-surface-200 cursor-pointer"
                      >
                        {env.label}
                      </Label>
                    </div>
                  ))}
                </CheckboxGroup>
                {!field.state.meta.isValid && (
                  <Message.Root severity="error" variant="simple" size="small">
                    <Message.Content>
                      <Message.Text>
                        {firstError(field.state.meta.errors)}
                      </Message.Text>
                    </Message.Content>
                  </Message.Root>
                )}
              </div>
            )}
          </form.Field>

          {/* actions */}
          <div className="flex items-center justify-end gap-3 pt-1">
            <Button
              type="button"
              severity="secondary"
              variant="outlined"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <form.Subscribe selector={(state) => state.isSubmitting}>
              {(isSubmitting) => (
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && <Spinner className="animate-spin" />}
                  {isSubmitting ? "Deploying…" : "Deploy"}
                </Button>
              )}
            </form.Subscribe>
          </div>
        </form>
      </div>

      <p className="mt-6 text-xs text-surface-400 dark:text-surface-500">
        TanStack Form + zod
      </p>
    </div>
  );
}
