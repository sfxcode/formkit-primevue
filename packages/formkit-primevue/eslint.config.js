// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['README.md'],
  },
  {
    rules: {
      'vue/no-mutating-props': ['error', {
        shallowOnly: true,
      }],
      'unicorn/consistent-function-scoping': 'off',
    },

  },
)
