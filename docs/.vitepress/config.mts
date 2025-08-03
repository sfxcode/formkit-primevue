import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  title: 'FormKit-PrimeVue',
  description: 'Formkit PrimeVue Integration',
  base: '/formkit-primevue/',
  themeConfig: {
    footer: {
      message: 'FormKit PrimeVue Module',
      copyright: 'Copyright © 2024 SFXCode',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sfxcode/formkit-primevue' },
    ],
    editLink: {
      pattern: 'https://github.com/sfxcode/formkit-primevue/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: nav(),
    search: {
      provider: 'local',
    },
    sidebar: {
      '/guide/': sidebarGuide(),
      '/advanced/': sidebarGuide(),
      '/config/': sidebarConfig(),
    },
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  vite: {
    plugins: [
      Unocss({
        configFile: '../../unocss.config.ts',
      }),
    ],
  },
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    { text: 'Advanced', link: '/advanced/', activeMatch: '/advanced/' },
    {
      text: 'Playground',
      link: 'https://formkit-primevue.netlify.app',
    },
    {
      text: 'External Docs',
      items: [
        {
          text: 'PrimeVue',
          link: 'https://www.primefaces.org/primevue',
        },
        {
          text: 'Formkit',
          link: 'https://formkit.com',
        },
      ],
    },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/sfxcode/formkit-primevue/blob/main/CHANGELOG.md',
        },
      ],
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is this?', link: '/guide/' },
        { text: 'Getting started', link: '/guide/getting-started' },
      ],
    },
    {
      text: 'Guide',
      collapsible: true,
      items: [
        { text: 'Usage', link: '/guide/usage' },
        { text: 'Input Components', link: '/guide/inputs' },
        { text: 'Output Components', link: '/guide/outputs' },
        { text: 'Form Components', link: '/guide/form' },
        { text: 'Input Options', link: '/guide/options' },
        { text: 'Styling', link: '/guide/styling' },
        { text: 'Prefix / Suffix', link: '/guide/prefix' },
        { text: 'Examples', link: '/guide/examples' },
      ],
    },
    {
      text: 'Advanced',
      collapsible: true,
      items: [
        { text: 'Composables', link: '/advanced/composables' },
        { text: 'Nuxt', link: '/advanced/nuxt' },
        { text: 'Schema', link: '/advanced/schema' },
        { text: 'Plugins', link: '/advanced/plugins' },
      ],
    },
    ...sidebarComponent(),
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/' },
      ],
    },
  ]
}

function sidebarComponent() {
  return [
    {
      text: 'Input Components',
      collapsible: true,
      items: [
        { text: 'PrimeAutoComplete', link: '/component/PrimeAutoComplete' },
        { text: 'PrimeCascadeSelect', link: '/component/PrimeCascadeSelect' },
        { text: 'PrimeCheckbox', link: '/component/PrimeCheckbox' },
        { text: 'PrimeColorPicker', link: '/component/PrimeColorPicker' },
        { text: 'PrimeDatePicker', link: '/component/PrimeDatePicker' },
        { text: 'PrimeInputMask', link: '/component/PrimeInputMask' },
        { text: 'PrimeInputNumber', link: '/component/PrimeInputNumber' },
        { text: 'PrimeInputOtp', link: '/component/PrimeInputOtp' },
        { text: 'PrimeInputText', link: '/component/PrimeInputText' },
        { text: 'PrimeKnob', link: '/component/PrimeKnob' },
        { text: 'PrimeListbox', link: '/component/PrimeListbox' },
        { text: 'PrimeMultiSelect', link: '/component/PrimeMultiSelect' },
        { text: 'PrimePassword', link: '/component/PrimePassword' },
        { text: 'PrimeRadioButton', link: '/component/PrimeRadioButton' },
        { text: 'PrimeRating', link: '/component/PrimeRating' },
        { text: 'PrimeSelect', link: '/component/PrimeSelect' },
        { text: 'PrimeSelectButton', link: '/component/PrimeSelectButton' },
        { text: 'PrimeSlider', link: '/component/PrimeSlider' },
        { text: 'PrimeTextarea', link: '/component/PrimeTextarea' },
        { text: 'PrimeToggleButton', link: '/component/PrimeToggleButton' },
        { text: 'PrimeToggleSwitch', link: '/component/PrimeToggleSwitch' },
        { text: 'PrimeTreeSelect', link: '/component/PrimeTreeSelect' },
      ],
    },
    {
      text: 'Output Components',
      collapsible: true,
      items: [
        { text: 'PrimeOutputBoolean', link: '/component/PrimeOutputBoolean' },
        { text: 'PrimeOutputDate', link: '/component/PrimeOutputDate' },
        { text: 'PrimeOutputDuration', link: '/component/PrimeOutputDuration' },
        { text: 'PrimeOutputLink', link: '/component/PrimeOutputLink' },
        { text: 'PrimeOutputList', link: '/component/PrimeOutputList' },
        { text: 'PrimeOutputNumber', link: '/component/PrimeOutputNumber' },
        { text: 'PrimeOutputReference', link: '/component/PrimeOutputReference' },
        { text: 'PrimeOutputText', link: '/component/PrimeOutputText' },
      ],
    },
  ]
}
