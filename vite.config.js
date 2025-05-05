import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@modules': path.resolve(__dirname, 'modules')
        },
    },
    build: {
        lib: {
            entry: './index.js',
            formats: ['es', 'cjs'],
            fileName: (format) => format === 'es' ? 'index.mjs' : 'index.js',
        },
        outDir: 'build',
        rollupOptions: {
            external: ['chalk', 'moment', 'sprintf-js', 'strip-ansi', 'traverse'],
        }
    },
    plugins: [
        
        dts({
            include: ['modules', 'index.js'],
            outDir: 'build'
        })
    ]
});
