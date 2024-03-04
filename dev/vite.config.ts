import * as path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import pkg from '../package.json'

process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString()
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
      template: {
        compilerOptions: {
          directiveTransforms: {
            styleclass: () => ({
              props: [],
              needRuntime: true,
            }),
            ripple: () => ({
              props: [],
              needRuntime: true,
            }),
          },
        },
      },
    }),

    Components({
      dirs: ['components'],
      dts: 'components.d.ts',
      resolvers: [
      ],
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
            beforeEnter: (route) => {

              // console.log(route)
            },
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

    },
  },

})
