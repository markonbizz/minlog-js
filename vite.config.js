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
            entry: './index.js',
            formats: ['es', 'cjs'],
            fileName: (format) => format === 'es' ? 'index.mjs' : 'index.js',
        },
        outDir: 'build',
        rollupOptions: {
            external: ['chalk', 'moment', 'sprintf-js', 'strip-ansi', 'traverse'],
            plugins: [
                copy({
                    targets: [
                        { src: 'package.json', dest: 'build' },
                    ],
                    hook: 'writeBundle'
                })
            ]
        }
    },
    plugins: [
        dts({
            include: ['index.js', 'modules'],
            insertTypesEntry: true,
            outDir: 'build'
        }),
    ]
});
