'use client';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from '@primeicons/react';
import type { TabsListProps, TabsPanelProps, TabsPanelsProps, TabsRootProps, TabsTabProps } from '@primereact/types/primitive/tabs';
import { Tabs as PRTabs } from 'primereact/tabs';

function Tabs({ className, ...props }: TabsRootProps) {
    return <PRTabs.Root className={cn('flex flex-col', className)} {...props} />;
}

function TabsList({ className, children, ...props }: TabsListProps) {
    return (
        <PRTabs.List className={cn('flex relative overflow-hidden bg-surface-0 dark:bg-surface-900 border-b border-surface-200 dark:border-surface-700', className)} {...props}>
            <PRTabs.Prev
                className={`absolute shrink-0 top-0 z-20 h-full flex items-center justify-center cursor-pointer
        bg-surface-0 dark:bg-surface-900 text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-0 w-9
        shadow-[0_0_10px_50px_rgba(255,255,255,0.6)] dark:shadow-[0_0_10px_50px] dark:shadow-surface-900/50
        focus-visible:z-10 focus-visible:outline focus-visible:-outline-offset-1 focus-visible:outline-primary
        transition-colors duration-200 inset-s-0`}
            >
                <ChevronLeft />
            </PRTabs.Prev>
            <PRTabs.Content className="grow relative flex min-h-0 overflow-x-auto overflow-y-clip overscroll-y-contain overscroll-x-auto scroll-smooth scrollbar-none">
                {children}
                <PRTabs.Indicator className="absolute z-10 block w-(--px-active-bar-width) left-(--px-active-bar-left) h-px bottom-0 bg-primary transition-[left,width] duration-[250ms] ease-[cubic-bezier(0.35,0,0.25,1)]" />
            </PRTabs.Content>
            <PRTabs.Next
                className={`absolute shrink-0 top-0 z-20 h-full flex items-center justify-center cursor-pointer
        bg-surface-0 dark:bg-surface-900 text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-0 w-9
        shadow-[0_0_10px_50px_rgba(255,255,255,0.6)] dark:shadow-[0_0_10px_50px] dark:shadow-surface-900/50
        focus-visible:z-10 focus-visible:outline focus-visible:-outline-offset-1 focus-visible:outline-primary
        transition-colors duration-200 inset-e-0`}
            >
                <ChevronRight />
            </PRTabs.Next>
        </PRTabs.List>
    );
}

function TabsTab({ className, ...props }: TabsTabProps) {
    return (
        <PRTabs.Tab
            className={cn(
                `shrink-0 cursor-pointer select-none relative whitespace-nowrap inline-flex items-center gap-2 py-3.5 px-4 font-semibold text-sm
        text-surface-500 dark:text-surface-400 transition-colors duration-200
        not-data-active:hover:text-surface-700 dark:not-data-active:hover:text-surface-0
        data-active:text-primary
        disabled:pointer-events-none disabled:opacity-60
        focus-visible:z-10 focus-visible:outline-1 focus-visible:-outline-offset-1 focus-visible:outline-primary`,
                className
            )}
            {...props}
        />
    );
}

function TabsPanels({ className, ...props }: TabsPanelsProps) {
    return <PRTabs.Panels className={cn(`bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0 p-4 pt-3 outline-none`, className)} {...props} />;
}

function TabsPanel({ className, ...props }: TabsPanelProps) {
    return <PRTabs.Panel className={cn('', className)} {...props} />;
}

export { Tabs, TabsList, TabsPanel, TabsPanels, TabsTab };
