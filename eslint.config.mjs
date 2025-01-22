import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2020,
            sourceType: 'module',
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/explicit-function-return-type': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            'semi': ['error', 'always'],
            'quotes': ['error', 'single']
        }
    }
];