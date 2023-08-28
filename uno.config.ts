import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      unit: 'em',
      extraProperties: {
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-top',
        'flex-shrink': '0',
        'display': 'inline-block',
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  configDeps: ['../anu-vue/src/presets/theme-default/index.ts'],
  content: {
    pipeline: {
      include: [/.*\/anu-vue\.js(.*)?$/, './**/*.vue', './**/*.md'],
    },
  },
})
