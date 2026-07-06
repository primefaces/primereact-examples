import { cn as _cn } from "@primeuix/utils";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: unknown[]) {
  return twMerge(_cn(...inputs));
}
