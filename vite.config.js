import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({

    root: '.',
    base: './',

    build: {
        outDir: 'dist',
        emptyOutDir: true,
        minify: 'esbuild',
    },

    server: {
        port: 5173,
        strictPort: true,
        open: false,
    },

    plugins: [
        tailwindcss()
    ]

});