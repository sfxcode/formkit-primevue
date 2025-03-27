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
