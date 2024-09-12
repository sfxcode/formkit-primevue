import type { Theme } from 'vitepress'
import type { App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import DisplayComponents from './components/DisplayComponents.vue'
import DisplayOutputComponents from './components/DisplayOutputComponents.vue'
import Todo from './components/Todo.vue'
import 'uno.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('Todo', Todo)
    app.component('DisplayComponents', DisplayComponents)
    app.component('DisplayOutputComponents', DisplayOutputComponents)
  },
} satisfies Theme
