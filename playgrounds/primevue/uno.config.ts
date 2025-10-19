import {
  defineConfig,
  presetIcons,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

function convert(color: string) {
  return `color-mix(in srgb, ${color} 100%, transparent)`
}

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: false,
      },
    }),
    presetIcons({
      scale: 1.2,
      unit: 'em',
    }),
  ],
  theme: {
    colors: {
      'primary': convert('var(--p-primary-color)'),
      'primary-emphasis': convert('var(--p-primary-hover-color)'),
      'primary-emphasis-alt': convert('var(--p-primary-active-color)'),
      'primary-contrast': convert('var(--p-primary-contrast-color)'),
      'primary-50': convert('var(--p-primary-50)'),
      'primary-100': convert('var(--p-primary-100)'),
      'primary-200': convert('var(--p-primary-200)'),
      'primary-300': convert('var(--p-primary-300)'),
      'primary-400': convert('var(--p-primary-400)'),
      'primary-500': convert('var(--p-primary-500)'),
      'primary-600': convert('var(--p-primary-600)'),
      'primary-700': convert('var(--p-primary-700)'),
      'primary-800': convert('var(--p-primary-800)'),
      'primary-900': convert('var(--p-primary-900)'),
      'primary-950': convert('var(--p-primary-950)'),
      'surface-0': convert('var(--p-surface-0)'),
      'surface-50': convert('var(--p-surface-50)'),
      'surface-100': convert('var(--p-surface-100)'),
      'surface-200': convert('var(--p-surface-200)'),
      'surface-300': convert('var(--p-surface-300)'),
      'surface-400': convert('var(--p-surface-400)'),
      'surface-500': convert('var(--p-surface-500)'),
      'surface-600': convert('var(--p-surface-600)'),
      'surface-700': convert('var(--p-surface-700)'),
      'surface-800': convert('var(--p-surface-800)'),
      'surface-900': convert('var(--p-surface-900)'),
      'surface-950': convert('var(--p-surface-950)'),
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },

  },
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  content: {
    pipeline: {
      include: ['./**/*.vue', './**/*.md'],
    },
  },
})
