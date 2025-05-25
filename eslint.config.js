import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {FlatCompat} from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

/**
 * @type {import('eslint').Linter.Config[]}
 */
const eslintConfig = [
    {
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
        // ignore shadcn/ui components
        ignores: ['components/ui/**'],
    },
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default eslintConfig;
