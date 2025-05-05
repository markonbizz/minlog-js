import path from 'path';
import { fileURLToPath } from 'url';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';

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

export default outputs.map(({ file, format }) => ({
    input: 'src/index.js',
    output: {
        file,
        format,
    },
    plugins: [
        alias({
            entries: [
                { find: '@modules', replacement: path.resolve(__dirname, 'src/modules') },
            ]
        }),
        commonjs({
            include: 'node_modules/**',
            exclude: ['src/**', 'test/**'],
            extensions: ['.js'],
        }),
        resolve(),
    ],
}));
