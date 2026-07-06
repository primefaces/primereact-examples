"use client";

import { Tabs as TabsPrimitive } from "primereact/tabs";
import type {
  TabsRootProps,
  TabsListProps,
  TabsContentProps,
  TabsTabProps,
  TabsIndicatorProps,
  TabsPanelsProps,
  TabsPanelProps,
} from "@primereact/types/primitive/tabs";
import { cn } from "@/lib/utils";

/**
 * Styled wrappers over PrimeReact's *primitive* Tabs (`primereact/tabs`).
 *
 *   <Tabs.Root defaultValue="tab1">
 *     <Tabs.List>
 *       <Tabs.Content>
 *         <Tabs.Tab value="tab1">One</Tabs.Tab>
 *         <Tabs.Tab value="tab2">Two</Tabs.Tab>
 *         <Tabs.Indicator />
 *       </Tabs.Content>
 *     </Tabs.List>
 *     <Tabs.Panels>
 *       <Tabs.Panel value="tab1">…</Tabs.Panel>
 *     </Tabs.Panels>
 *   </Tabs.Root>
 *
 * The primitive brings composition + behavior + a11y (and `data-active` on the
 * active tab); we only add Tailwind styling — the shadcn approach.
 */

function Root(props: TabsRootProps) {
  return <TabsPrimitive.Root {...props} />;
}

function List({ className, ...props }: TabsListProps) {
  return <TabsPrimitive.List className={cn(className)} {...props} />;
}

function Content({ className, ...props }: TabsContentProps) {
  return (
    <TabsPrimitive.Content
      className={cn(
        "relative flex border-b border-neutral-200 dark:border-neutral-800",
        className,
      )}
      {...props}
    />
  );
}

function Tab({ className, ...props }: TabsTabProps) {
  return (
    <TabsPrimitive.Tab
      className={cn(
        "cursor-pointer select-none px-4 py-3 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-800 focus-visible:outline-1 focus-visible:-outline-offset-1 focus-visible:outline-neutral-900 data-[active]:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus-visible:outline-neutral-100 dark:data-[active]:text-neutral-100",
        className,
      )}
      {...props}
    />
  );
}

function Indicator({ className, ...props }: TabsIndicatorProps) {
  return (
    <TabsPrimitive.Indicator
      className={cn(
        "absolute -bottom-px left-(--px-active-bar-left) h-0.5 w-(--px-active-bar-width) bg-neutral-900 transition-all duration-200 ease-out dark:bg-neutral-100",
        className,
      )}
      {...props}
    />
  );
}

function Panels({ className, ...props }: TabsPanelsProps) {
  return <TabsPrimitive.Panels className={cn("p-4", className)} {...props} />;
}

function Panel({ className, ...props }: TabsPanelProps) {
  return <TabsPrimitive.Panel className={cn(className)} {...props} />;
}

export const Tabs = { Root, List, Content, Tab, Indicator, Panels, Panel };
