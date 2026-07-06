import { cn } from '@/lib/utils';
import type { InputTextProps } from '@primereact/types/primitive/inputtext';
import { cva, type VariantProps } from 'class-variance-authority';
import { InputText as PRInputText } from 'primereact/inputtext';
import * as React from 'react';

const inputTextVariants = cva(
    `appearance-none rounded-md w-full outline-hidden file:font-medium
    bg-surface-0 dark:bg-surface-950
    text-surface-700 dark:text-surface-0
    placeholder:text-surface-500 dark:placeholder:text-surface-400
    border border-surface-300 dark:border-surface-700
    shadow-[0_1px_2px_0_rgba(18,18,23,0.05)]
    transition-colors duration-200
    hover:border-surface-400 dark:hover:border-surface-600
    focus-visible:border-primary!
    disabled:bg-surface-200 disabled:text-surface-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 dark:disabled:bg-surface-700 dark:disabled:text-surface-400
    data-invalid:border-red-400 dark:data-invalid:border-red-300
    data-invalid:placeholder:text-red-600 dark:data-invalid:placeholder:text-red-400`,
    {
        variants: {
            variant: {
                filled: 'bg-surface-50 dark:bg-surface-800',
                outlined: ''
            },
            size: {
                small: 'py-1 px-2 text-xs',
                normal: 'py-1.5 px-2.5 text-sm',
                large: 'py-2 px-3'
            },
            fluid: {
                true: 'w-full'
            }
        },
        defaultVariants: {
            variant: 'outlined',
            size: 'normal'
        }
    }
);

function InputText({ className, size, variant = 'outlined', fluid, ...props }: InputTextProps & VariantProps<typeof inputTextVariants>) {
    return <PRInputText size={size} variant={variant} className={cn(inputTextVariants({ size, variant, fluid, className }))} {...props} />;
}

export { InputText, inputTextVariants };
