import { defineConfig } from 'vite';

export default defineConfig({
    base: '/themes/custom/paanapay/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            input: {
                main: './assets/javascripts/main.js',
            },
        },
    },
    server: {
        http: true,
        strictPort: true,
        port: 3000,
        hmr: {
            host: 'localhost',
        },
    }
});