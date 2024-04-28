import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    // enable jest-like global test APIs
    globals: true,

    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',

    coverage: {
      exclude: ['dev/**', 'docs/**'],
    },
  },
})
