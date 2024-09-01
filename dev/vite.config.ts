import * as path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import pkg from '../package.json'

// eslint-disable-next-line node/prefer-global/process
process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString()
// eslint-disable-next-line node/prefer-global/process
process.env.VITE_APP_VERSION = pkg.version

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  server: {
    hmr: {
      port: false,
      path: '/ws',
    },
  },
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
  test: {
    globals: true,
    include: ['test/**/*.test.ts'],
    environment: 'happy-dom',
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    exclude: [
      'vue-demi',
    ],
  },
  plugins: [
    Unocss(),
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    Components({
      dirs: ['components'],
      dts: 'components.d.ts',
    }),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
      ],
      exclude: [
        '**/dist/**',
      ],
      dts: 'auto-import.d.ts',
    }),
    Pages({
      dirs: [
        { dir: 'pages', baseRoute: '' },
      ],
      extensions: ['vue', 'md'],
      extendRoute(route) {
        if (route.name === 'about')
          route.props = route => ({ query: route.query.q })

        if (route.name === 'components') {
          return {
            ...route,
          }
        }
      },
    }),

  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      '~': path.resolve(__dirname, 'node_modules/'),
      'my-library': path.resolve(__dirname, '../src'),
      'my-library-components': path.resolve(__dirname, '../src/components'),

    },
  },

})
