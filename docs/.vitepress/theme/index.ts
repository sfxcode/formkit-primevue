import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import 'uno.css'
import type { Theme } from 'vitepress'
import Todo from './components/Todo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('Todo', Todo)
  },
} satisfies Theme
