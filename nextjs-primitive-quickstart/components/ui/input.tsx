"use client";

import { InputText } from "primereact/inputtext";
import type { InputTextProps } from "@primereact/types/primitive/inputtext";
import { cn } from "@/lib/utils";

// Primitive: PrimeReact's unstyled InputText, styled with Tailwind.
export default function Input({ className, ...props }: InputTextProps) {
  return (
    <InputText
      className={cn(
        "w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 hover:border-neutral-400 focus-visible:border-neutral-900 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:hover:border-neutral-600 dark:focus-visible:border-neutral-100",
        className,
      )}
      {...props}
    />
  );
}
