import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    publicDir: false,
    define: { 'process.env.NODE_ENV': JSON.stringify('production') },
    build: {
        lib: { entry: 'src/customers/mount.tsx', formats: ['es'], fileName: () => 'customers.js' },
        outDir: 'public/mfe',
        emptyOutDir: false
    }
});
