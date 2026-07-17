"use client";

import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

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

type FormValues = z.infer<typeof schema>;

const labelCls =
  "flex items-center gap-1 text-sm font-medium text-surface-800 dark:text-surface-100";

export default function FormikPage() {
  const formik = useFormik<FormValues>({
    initialValues: {
      projectName: "",
      framework: "",
      rootDir: "./",
      environments: [],
    },
    validationSchema: toFormikValidationSchema(schema),
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 700));
      toast({
        title: "Deployment queued",
        description: (
          <pre className="mt-1 whitespace-pre-wrap font-mono text-xs">
            {JSON.stringify(values, null, 2)}
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
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-6 px-6 py-6"
        >
          {/* Project name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="projectName" className={labelCls}>
              Project name
              <span className="text-red-500">*</span>
            </Label>
            <InputText
              id="projectName"
              name="projectName"
              value={formik.values.projectName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              invalid={!!(formik.touched.projectName && formik.errors.projectName)}
              fluid
              placeholder="my-app"
            />
            {formik.touched.projectName && formik.errors.projectName && (
              <Message.Root severity="error" variant="simple" size="small">
                <Message.Content>
                  <Message.Text>{formik.errors.projectName}</Message.Text>
                </Message.Content>
              </Message.Root>
            )}
          </div>

          {/* Framework preset */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="framework" className={labelCls}>
              Framework preset
              <span className="text-red-500">*</span>
            </Label>
            <Select.Root
              value={formik.values.framework}
              onValueChange={(e: SelectValueChangeEvent) =>
                formik.setFieldValue("framework", e.value)
              }
              options={FRAMEWORKS}
              optionLabel="label"
              optionValue="value"
              invalid={!!(formik.touched.framework && formik.errors.framework)}
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
            {formik.touched.framework && formik.errors.framework && (
              <Message.Root severity="error" variant="simple" size="small">
                <Message.Content>
                  <Message.Text>{formik.errors.framework}</Message.Text>
                </Message.Content>
              </Message.Root>
            )}
          </div>

          {/* Root directory */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="rootDir" className={labelCls}>
              Root directory
              <span className="text-red-500">*</span>
            </Label>
            <InputText
              id="rootDir"
              name="rootDir"
              value={formik.values.rootDir}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              invalid={!!(formik.touched.rootDir && formik.errors.rootDir)}
              fluid
              placeholder="./"
            />
            {formik.touched.rootDir && formik.errors.rootDir && (
              <Message.Root severity="error" variant="simple" size="small">
                <Message.Content>
                  <Message.Text>{formik.errors.rootDir}</Message.Text>
                </Message.Content>
              </Message.Root>
            )}
          </div>

          {/* Environments */}
          <div className="flex flex-col gap-2">
            <Label className={labelCls}>
              Environments
              <span className="text-red-500">*</span>
            </Label>
            <CheckboxGroup
              value={formik.values.environments}
              onValueChange={(e: { value: unknown }) =>
                formik.setFieldValue("environments", e.value)
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
            {formik.touched.environments && formik.errors.environments && (
              <Message.Root severity="error" variant="simple" size="small">
                <Message.Content>
                  <Message.Text>
                    {formik.errors.environments as string}
                  </Message.Text>
                </Message.Content>
              </Message.Root>
            )}
          </div>

          {/* actions */}
          <div className="flex items-center justify-end gap-3 pt-1">
            <Button
              type="button"
              severity="secondary"
              variant="outlined"
              onClick={() => formik.resetForm()}
            >
              Reset
            </Button>
            <Button type="submit" disabled={formik.isSubmitting}>
              {formik.isSubmitting && <Spinner className="animate-spin" />}
              {formik.isSubmitting ? "Deploying…" : "Deploy"}
            </Button>
          </div>
        </form>
      </div>

      <p className="mt-6 text-xs text-surface-400 dark:text-surface-500">
        Formik + zod
      </p>
    </div>
  );
}
