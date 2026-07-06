"use client";

import { useButton } from "@primereact/headless/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:outline-neutral-100",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200",
        secondary:
          "border border-neutral-300 text-neutral-900 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800",
        ghost:
          "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-9 px-3.5 py-2 text-sm",
        lg: "h-11 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

// Headless: behavior/a11y from useButton's rootProps, styling via cva.
export default function Button({
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  const { rootProps } = useButton();

  return (
    <button
      {...rootProps}
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
    />
  );
}
