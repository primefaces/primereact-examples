import Link from "next/link";

import ThemeSwitcher from "@/components/theme-switcher";

const EXAMPLES = [
  {
    href: "/react-hook-form",
    title: "React Hook Form",
    description: "useForm + Controller with a zodResolver.",
  },
  {
    href: "/tanstack-form",
    title: "TanStack Form",
    description: "useForm + form.Field with a Standard Schema validator.",
  },
  {
    href: "/formik",
    title: "Formik",
    description: "useFormik with a zod validation schema.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-10">
      <div className="absolute right-4 top-4">
        <ThemeSwitcher />
      </div>

      <div className="w-full max-w-md flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold text-surface-900 dark:text-surface-0">
            PrimeReact form examples
          </h1>
          <p className="text-sm text-surface-500 dark:text-surface-400">
            The same deploy form built with three form libraries.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {EXAMPLES.map((example) => (
            <Link
              key={example.href}
              href={example.href}
              className="rounded-lg border border-surface-200 dark:border-surface-800 bg-surface-0 dark:bg-surface-950 px-4 py-3 transition-colors hover:border-surface-300 dark:hover:border-surface-700"
            >
              <div className="text-sm font-medium text-surface-900 dark:text-surface-0">
                {example.title}
              </div>
              <div className="text-sm text-surface-500 dark:text-surface-400">
                {example.description}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
