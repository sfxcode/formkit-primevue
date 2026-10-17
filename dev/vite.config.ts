import * as path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import pkg from '../package.json' with { type: 'json' }

// eslint-disable-next-line node/prefer-global/process
process.env.VITE_APP_BUILD_EPOCH = Date.now().toString()
// eslint-disable-next-line node/prefer-global/process
process.env.VITE_APP_VERSION = pkg.version
// the versions the demo shows in its footer are the ones the library depends on, without the range prefix
// eslint-disable-next-line node/prefer-global/process
process.env.VITE_APP_FORMKIT_VERSION = pkg.dependencies['@formkit/vue'].replace(/^[\^~]/, '')
// eslint-disable-next-line node/prefer-global/process
process.env.VITE_APP_PRIMEVUE_VERSION = pkg.dependencies.primevue.replace(/^[\^~]/, '')

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
  build: {
    // The two big chunks are vendor code: PrimeVue with its theme (about 0.9 MB) and the JSON editor (about 1 MB),
    // which is only loaded by the pages that show an editor. The code of the demo itself is a small chunk.
    chunkSizeWarningLimit: 1100,
    // Rolldown's automatic chunk-splitting placed its runtime helpers
    // (e.g. __exportAll) into the json-editor-vue chunk, which itself imports
    // Vue from the shared components chunk -> circular chunk dependency
    // ("e is not a function" at runtime). Pin runtime and vendors to their own
    // chunks so the chunk graph stays acyclic.
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'rolldown-runtime', test: /rolldown[\\/]runtime/, priority: 100 },
            { name: 'vue', test: /node_modules[\\/](?:\.pnpm[\\/])?(?:@vue|vue)[\\/@]/, priority: 50 },
            { name: 'primevue', test: /node_modules[\\/].*(?:primevue|@primeuix|@primevue)[\\/]/, priority: 40 },
            { name: 'formkit', test: /node_modules[\\/].*@formkit[\\/]/, priority: 30 },
          ],
        },
      },
    },
  },
  plugins: [
    Unocss({
      configFile: './dev/uno.config.ts',
    }),
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
      '@': path.resolve(import.meta.dirname, '.'),
      '~': path.resolve(import.meta.dirname, 'node_modules/'),
      'my-library': path.resolve(import.meta.dirname, '../src'),
      'my-library-components': path.resolve(import.meta.dirname, '../src/components'),

    },
  },

})
