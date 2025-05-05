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
            entry: './index.js',  // Your main entry file
            formats: ['es', 'cjs'],  // ESM (.mjs) and CJS (.cjs)
            fileName: (format) => format === 'es' ? 'index.mjs' : 'index.cjs',
        },
        outDir: 'build',
        rollupOptions: {
            plugins: [
                copy({
                    targets: [
                        { src: './package.json', dest: './build/' }
                    ]
                })
            ]
        }
    },
    optimizeDeps: {
        include: ['chalk', 'moment', 'sprintf-js', 'strip-ansi', 'traverse'],
        exclude: ['@modules']
    },
    plugins: [
        dts({
            include: ['index.js', 'modules'], // Include source files for DTS generation
            insertTypesEntry: true,
            outDir: 'build'
        })
    ]
});
