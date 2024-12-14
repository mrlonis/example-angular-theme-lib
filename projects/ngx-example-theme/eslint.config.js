// @ts-check
const tseslint = require('typescript-eslint');
const rootConfig = require('../../eslint.config.js');

module.exports = tseslint.config(...rootConfig, {
  files: ['**/*.ts'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.lib.json', './tsconfig.lib.prod.json', './tsconfig.spec.json', '../../tsconfig.json'],
      },
    },
  },
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.lib.json', './tsconfig.lib.prod.json', './tsconfig.spec.json', '../../tsconfig.json'],
      tsconfigRootDir: __dirname,
    },
  },
  rules: {
    '@angular-eslint/directive-selector': [
      'error',
      {
        type: 'attribute',
        prefix: 'lib',
        style: 'camelCase',
      },
    ],
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: 'lib',
        style: 'kebab-case',
      },
    ],
  },
});
