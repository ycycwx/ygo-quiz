import {defineConfig} from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        ignores: [
            'node_modules/**',
            '.next/**',
            'out/**',
            'build/**',
            'next-env.d.ts',
            'components/ui/**',
        ],
    },
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            curly: 'error',
            '@stylistic/indent': ['error', 4],
            '@stylistic/brace-style': ['error', 'stroustrup'],
            '@stylistic/jsx-curly-spacing': 'error',
            '@stylistic/max-len': [
                'error',
                120,
                4,
                {
                    ignoreUrls: true,
                },
            ],
            '@stylistic/no-multi-spaces': [
                'error',
                {
                    exceptions: {
                        Property: false,
                    },
                    ignoreEOLComments: false,
                    includeTabs: true,
                },
            ],
            '@stylistic/no-multiple-empty-lines': [
                'error',
                {
                    max: 1,
                    maxEOF: 0,
                    maxBOF: 0,
                },
            ],
            '@stylistic/object-curly-spacing': 'error',
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/space-in-parens': ['error', 'never'],
            '@stylistic/comma-dangle': ['error', 'always-multiline'],
        },
    },
]);
