import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  title: 'FormKit-PrimeVue',
  description: 'Formkit PrimeVue Integration',
  base: '/formkit-primevue/',
  themeConfig: {
    footer: {
      message: 'Nuxt 3 PrimeVue Module',
      copyright: 'Copyright © 2023 SFXCode',
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
      provider: 'local'
    },
    sidebar: {
      '/guide/': sidebarGuide(),
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
        { text: 'PrimeVue Inputs', link: '/guide/inputs' },
        { text: 'Sample Apps', link: '/guide/examples' },
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
