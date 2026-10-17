import type { App } from 'vue'
import type { Router, RouteRecordRaw } from 'vue-router'

export interface ModuleContext {
  app: App
  router: Router
  routes: RouteRecordRaw[]
}

/**
 * A file in `modules/` exports one of these as `install`. It runs before the app is mounted.
 */
export type UserModule = (ctx: ModuleContext) => void
