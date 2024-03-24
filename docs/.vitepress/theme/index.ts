import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import 'uno.css'
import type { Theme } from 'vitepress'
import Todo from './components/Todo.vue'
import DisplayComponents from './components/DisplayComponents.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('Todo', Todo)
    app.component('DisplayComponents', DisplayComponents)
  },
} satisfies Theme
