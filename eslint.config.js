import jslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default [{
  files: ["src/**/*.ts"],
  ...jslint.configs.recommended,
  ...prettierConfig,
  languageOptions: {
    parser: tseslint.parser,
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },
}];
