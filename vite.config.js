import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';
import { fileURLToPath } from 'url';
import copy from 'rollup-plugin-copy';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    resolve: {
        alias: {
            '@modules': path.resolve(__dirname, 'modules')
        },
    },
    build: {
        lib: {
            entry: './index.js', // main entry point for your lib
            formats: ['es', 'cjs'], // output both ESM (.mjs) and CJS (.js)
            fileName: (format) => format === 'es' ? 'index.mjs' : 'index.js',
        },
        outDir: 'build',
        rollupOptions: {
            external: ['chalk', 'moment', 'sprintf-js', 'strip-ansi', 'traverse'],
            plugins: [
                copy({
                    targets: [
                        { src: 'package.json', dest: 'build/' } // Copy package.json to build
                    ]
                })
            ]
        }
    },
    plugins: [
        dts({
            include: ['index.js', 'modules'], // Include your source files for dts generation
            insertTypesEntry: true,
            outDir: 'build'
        })
    ]
});
