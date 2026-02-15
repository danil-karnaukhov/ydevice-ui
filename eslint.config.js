import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['node_modules', 'build', 'storybook-static']),
  {
    files: ['**/*.{js,ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      reactHooks.configs.flat.recommended,
      jsxA11y.flatConfigs.recommended,
      storybook.configs['flat/recommended'],
    ],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      eqeqeq: 'error',
      camelcase: 'error',
      'no-console': 'warn',
      'no-else-return': 'error',
      'no-nested-ternary': 'error',
      'no-implicit-coercion': ['error', { allow: ['!!'] }],
      'no-duplicate-imports': 'error',
      'import/no-anonymous-default-export': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react.*$', '^@?\\w'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.s?css$'],
          ],
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
])
