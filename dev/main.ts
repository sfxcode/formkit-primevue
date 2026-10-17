import type { UserModule } from '@/types'
import generatedRoutes from 'virtual:generated-pages'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import 'uno.css'

const routes = generatedRoutes

const app = createApp(App)
const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes })
app.use(router)

// install all modules under `modules/`
Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
  .forEach(module => module.install?.({ app, router, routes }))

router.isReady().then(() => app.mount('#app'))
