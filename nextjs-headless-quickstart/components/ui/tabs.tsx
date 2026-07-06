"use client";

import { createContext, useContext } from "react";
import { useTabs } from "@primereact/headless/tabs";
import { cn } from "@/lib/utils";

/**
 * Compound Tabs built on the headless `useTabs` hook.
 *
 *   <Tabs defaultValue="tab1">
 *     <Tabs.List>
 *       <Tabs.Tab value="tab1">Account</Tabs.Tab>
 *       <Tabs.Tab value="tab2">Payment</Tabs.Tab>
 *     </Tabs.List>
 *     <Tabs.Content value="tab1">…</Tabs.Content>
 *   </Tabs>
 *
 * The hook gives behavior + a11y; the markup and Tailwind styling are ours.
 * Each part extends its native element props (React.ComponentProps), so
 * consumers can pass className, id, aria-*, style, handlers, etc.
 */

type TabsContextValue = ReturnType<typeof useTabs>;

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs.* must be used inside <Tabs>");
  return ctx;
}

type TabsProps = React.ComponentProps<"div"> & {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
};

function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  ...props
}: TabsProps) {
  const tabs = useTabs({ defaultValue, value, onValueChange });

  return (
    <TabsContext.Provider value={tabs}>
      <div {...props}>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ className, children, ...props }: React.ComponentProps<"div">) {
  const { getIndicatorProps } = useTabsContext();

  return (
    <div
      {...props}
      className={cn(
        "relative flex border-b border-neutral-200 dark:border-neutral-800",
        className,
      )}
    >
      {children}
      <span
        {...getIndicatorProps()}
        className="absolute -bottom-px left-(--px-active-bar-left) block h-0.5 w-(--px-active-bar-width) bg-neutral-900 transition-all duration-200 ease-out dark:bg-neutral-100"
      />
    </div>
  );
}

type TabsTabProps = React.ComponentProps<"button"> & { value: string };

function TabsTab({ value, className, children, ...props }: TabsTabProps) {
  const { getTabProps, isItemActive } = useTabsContext();
  const active = isItemActive(value);

  return (
    <button
      {...props}
      {...getTabProps(value)}
      className={cn(
        "cursor-pointer select-none px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-1 focus-visible:-outline-offset-1 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100",
        active
          ? "text-neutral-900 dark:text-neutral-100"
          : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200",
        className,
      )}
    >
      {children}
    </button>
  );
}

type TabsContentProps = React.ComponentProps<"div"> & { value: string };

function TabsContent({ value, className, children, ...props }: TabsContentProps) {
  const { isItemActive } = useTabsContext();
  if (!isItemActive(value)) return null;

  return (
    <div {...props} role="tabpanel" className={cn("p-4", className)}>
      {children}
    </div>
  );
}

Tabs.List = TabsList;
Tabs.Tab = TabsTab;
Tabs.Content = TabsContent;

export default Tabs;
