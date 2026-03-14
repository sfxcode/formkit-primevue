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
)
