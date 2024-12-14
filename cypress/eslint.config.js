// @ts-check
const tseslint = require('typescript-eslint');
const rootConfig = require('../eslint.config.js');
const cypressPlugin = require('eslint-plugin-cypress/flat');

module.exports = tseslint.config(
  ...rootConfig,
  {
    files: ['**/*.ts'],
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['./tsconfig.json'],
        },
      },
    },
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {},
  },
  cypressPlugin.configs.recommended,
);
