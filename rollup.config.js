import path from 'path';
import { fileURLToPath } from 'url';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import dts from 'rollup-plugin-dts'; // <--- ADD THIS

// Emulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputs = [
    {
        file: 'build/esm/index.mjs',
        format: 'esm',
    },
    {
        file: 'build/cjs/index.cjs',
        format: 'cjs',
    }
];

const buildConfigs = outputs.map(({ file, format }) => ({
    input: 'src/index.js',
    output: {
        file,
        format,
    },
    external: ['chalk', 'strip-ansi', 'fs', 'path'],
    plugins: [
        alias({
            entries: [
                { find: '@modules', replacement: path.resolve(__dirname, 'src/modules') },
            ]
        }),
        commonjs({
            include: ['node_modules/**', 'src/**'],
            requireReturnsDefault: 'preferred',
        }),
        resolve(),
    ],
}));

// ✨ ADD DTS generation config
const dtsConfig = {
    input: 'src/index.js',
    output: { 
        file: 'build/index.d.ts', 
        format: 'es' 
    },
    external: ['chalk', 'strip-ansi', 'fs', 'path'],
    plugins: [
        alias({
            entries: [
                { find: '@modules', replacement: path.resolve(__dirname, 'src/modules') },
            ]
        }),
        dts()
    ],
};

export default [...buildConfigs, dtsConfig];