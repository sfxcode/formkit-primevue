import Aura from '@primeuix/themes/aura'

export const wrappedPrimeInputs: string[] = [
  'AutoComplete',
  'CascadeSelect',
  'Checkbox',
  'Chip',
  'ColorPicker',
  'DatePicker',
  'InputMask',
  'InputNumber',
  'InputOtp',
  'InputText',
  'Knob',
  'Listbox',
  'MultiSelect',
  'Password',
  'RadioButton',
  'Rating',
  'Select',
  'SelectButton',
  'Slider',
  'Textarea',
  'ToggleButton',
  'ToggleSwitch',
  'TreeSelect',
]

export default defineNuxtConfig({
  modules: ['../src/module', '@nuxt/hints'],
  ssr: true,
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-03',
  vite: {
    optimizeDeps: {
      include: [
        '@formkit/addons',
        '@formkit/core',
        '@formkit/i18n',
        '@sfxcode/formkit-primevue',
        '@sfxcode/formkit-primevue/plugins',
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ],
    },
  },
  formkit: {
    configFile: '../src/runtime/formkit.config.ts',
  },
  formkitPrimevue: {
    includePrimeIcons: true,
    includeStyles: true,
    installFormKit: true,
    installI18N: true,
  },
  i18n: {
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'de', file: 'de.json', name: 'German' },
    ],
  },
  primevue: {
    autoImport: false,
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
        },
      },
      ripple: true,
    },
    components: {
      exclude: [...wrappedPrimeInputs, 'Button', 'Form', 'FormField', 'Chart'],
    },
  },
})
