// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['README.md'],
  },
  {
    rules: {
      'unicorn/consistent-function-scoping': 'off',
      'e18e/prefer-static-regex': 'off',
    },

  },
  {
    // TypeScript syntax in <template> is emitted as-is into dist and breaks consumer bundlers
    files: ['src/**/*.vue'],
    rules: {
      'vue/no-restricted-syntax': ['error', ...['TSAsExpression', 'TSNonNullExpression', 'TSTypeAssertion', 'TSSatisfiesExpression'].map(selector => ({
        selector,
        message: 'TypeScript syntax is not allowed in <template>; move the typing to <script setup>.',
      }))],
    },
  },
)
