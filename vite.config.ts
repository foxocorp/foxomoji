import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'foxomoji',
            fileName: (format) => `foxomoji.${format}.js`,
            formats: ['es', 'cjs', 'umd'],
        },
        rollupOptions: {
            external: ['path'],
            output: {
                globals: {
                    path: 'path',
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});