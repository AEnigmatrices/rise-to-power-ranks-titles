// @ts-check
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default defineConfig(
    {
        ignores: [
            'dist/**',
            'node_modules/**',
            'playwright-report/**',
            'test-results/**',
            '.astro/**',
        ],
    },
    {
        files: ['**/*.{js,mjs,ts}'],
        extends: [js.configs.recommended, tseslint.configs.recommended],
    },
    ...eslintPluginAstro.configs.recommended,
    {
        files: ['**/*.astro'],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
            },
        },
    },
    {
        rules: {
            'no-console': ['warn', { allow: ['warn', 'error'] }],
        },
    },
);
