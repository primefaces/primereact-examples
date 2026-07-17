'use client';
import { PrimeReactProvider, PrimeReactStyleSheet } from '@primereact/core';
import { useServerInsertedHTML } from 'next/navigation';
import * as React from 'react';
import Noir from "@/themes/noir";

const styledStyleSheet = new PrimeReactStyleSheet();

export default function PrimeSSRProvider({
    children
}: Readonly<{
    children?: React.ReactNode;
}>) {
    useServerInsertedHTML(() => {
        const styleElements = styledStyleSheet.getAllElements();

        styledStyleSheet.clear();

        return <>{styleElements}</>;
    });

    const primereact = {
        theme: {
            preset: Noir,
            options: {
                darkModeSelector: '.dark'
            }
        },
        license: 'PrimeUI-Commercial-Key...'
    };

    return (
        <PrimeReactProvider {...primereact} stylesheet={styledStyleSheet}>
            {children}
        </PrimeReactProvider>
    );
}
