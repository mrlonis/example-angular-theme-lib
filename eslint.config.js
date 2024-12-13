// @ts-check
const eslint = require('@eslint/js');
const angular = require('angular-eslint');
const tseslint = require('typescript-eslint');
const eslintConfigPrettier = require('eslint-config-prettier');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const importPlugin = require('eslint-plugin-import');
const depend = require('eslint-plugin-depend');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...angular.configs.tsRecommended,
      importPlugin.flatConfigs?.recommended,
      depend.configs['flat/recommended'],
      eslintConfigPrettier,
      eslintPluginPrettierRecommended,
    ],
    processor: angular.processInlineTemplates,
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: [
            'tsconfig.json',
            'projects/ngx-example-theme/tsconfig.lib.json',
            'projects/ngx-example-theme/tsconfig.lib.prod.json',
            'projects/ngx-example-theme/tsconfig.spec.json',
            'projects/example-theme-app/tsconfig.app.json',
            'projects/example-theme-app/tsconfig.spec.json',
          ],
        },
      },
    },
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: '.',
      },
    },
    rules: {
      '@angular-eslint/prefer-standalone': 'error',
      '@angular-eslint/sort-lifecycle-methods': 'error',
      '@typescript-eslint/no-deprecated': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          types: {
            Promise: 'Promise is not allowed, use Observable instead',
          },
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'import/newline-after-import': ['error', { count: 1 }],
      'import/no-absolute-path': 'error',
      'import/no-cycle': 'error',
      'import/no-deprecated': 'error',
      'import/no-self-import': 'error',
      'import/no-unresolved': 'error',
      'import/no-useless-path-segments': [
        'error',
        {
          noUselessIndex: true,
          commonjs: true,
        },
      ],
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'never',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
      eslintConfigPrettier,
      eslintPluginPrettierRecommended,
    ],
    rules: {
      '@angular-eslint/template/no-duplicate-attributes': 'error',
      '@angular-eslint/template/prefer-control-flow': 'error',
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
    },
  },
);
