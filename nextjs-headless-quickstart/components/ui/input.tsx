"use client";

import { useInputText } from "@primereact/headless/inputtext";
import { cn } from "@/lib/utils";

// Headless: behavior/a11y from useInputText's rootProps, styling is yours.
export default function Input({
  className,
  ...props
}: React.ComponentProps<"input">) {
  const { rootProps } = useInputText();

  return (
    <input
      {...rootProps}
      {...props}
      className={cn(
        "w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 hover:border-neutral-400 focus-visible:border-neutral-900 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:hover:border-neutral-600 dark:focus-visible:border-neutral-100",
        className,
      )}
    />
  );
}
