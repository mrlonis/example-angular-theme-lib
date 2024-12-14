// @ts-check
const tseslint = require('typescript-eslint');
const rootConfig = require('../eslint.config.js');
const cypressPlugin = require('eslint-plugin-cypress/flat');

module.exports = tseslint.config(...rootConfig, cypressPlugin.configs.recommended);
