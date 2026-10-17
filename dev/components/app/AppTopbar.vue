<script setup lang='ts'>
import type { Page } from '../../utils/menu'
import { onKeyStroke } from '@vueuse/core'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTheme } from '../../composables/theme'
import { searchPages, sections, toMegaMenuModel } from '../../utils/menu'

const route = useRoute()
const router = useRouter()
const { isDark, toggleTheme } = useTheme()

const items = toMegaMenuModel()

// the drop-down of the page that is shown is marked, like the page itself in its drop-down
const currentSection = computed(() =>
  sections.find(section => section.columns.flat().some(group => group.pages.some(page => router.resolve(page.route).name === route.name)))?.label,
)

const SEARCH_INPUT_ID = 'page-search'
const query = ref('')
const results = ref<Page[]>([])

function complete(event: { query: string }) {
  results.value = searchPages(event.query)
}

function openPage(event: { value: Page }) {
  query.value = ''
  results.value = []
  router.push(event.value.route)
  document.getElementById(SEARCH_INPUT_ID)?.blur()
}

// Cmd/Ctrl + K moves the focus to the search
onKeyStroke('k', (event) => {
  if (!event.metaKey && !event.ctrlKey)
    return
  event.preventDefault()
  document.getElementById(SEARCH_INPUT_ID)?.focus()
})
</script>

<template>
  <header class="pb-4">
    <Toolbar>
      <template #start>
        <router-link to="/" class="">
          <span class="text-3xl">Formkit PrimeVue Demo</span>
        </router-link>
      </template>  <template #center>
        <div class="text-lg">
          <span class="new-badge font-bold">New: </span>
          <router-link to="/samples/formPrefix">
            <span>form prefix names</span>
          </router-link>
        </div>
      </template>  <template #end>
        <div class="flex flex-wrap gap-2">
          <Button as="a" href="https://formkit.com/" target="_blank" rel="noopener noreferrer" label="FormKit" />
          <Button as="a" href="https://primevue.org" target="_blank" rel="noopener noreferrer" icon="pi pi-prime" label="PrimeVue" />
          <Button as="a" href="https://sfxcode.github.io/formkit-primevue/" target="_blank" rel="noopener noreferrer" icon="pi pi-book" label="Docs" />
          <Button as="a" href="https://github.com/sfxcode/formkit-primevue" target="_blank" rel="noopener noreferrer" icon="pi pi-github" aria-label="GitHub" />
          <Button
            :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
            severity="secondary"
            :aria-label="isDark ? 'Switch to the light theme' : 'Switch to the dark theme'"
            @click="toggleTheme"
          />
        </div>
      </template>
    </Toolbar>
  </header>
  <nav aria-label="Demo pages" class="flex flex-wrap items-start gap-3">
    <MegaMenu :model="items" class="w-134 max-w-full">
      <template #item="{ item }">
        <router-link v-if="item.route" v-slot="{ href, navigate, isActive }" :to="item.route" custom>
          <a v-ripple :href="href" :class="{ 'menu-link-active': isActive }" :aria-current="isActive ? 'page' : undefined" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" :class="{ 'menu-link-active': item.key && item.key === currentSection }">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
    </MegaMenu>
    <AutoComplete
      v-model="query"
      :suggestions="results"
      option-label="label"
      :input-id="SEARCH_INPUT_ID"
      placeholder="Search pages (Ctrl/⌘ K)"
      aria-label="Search pages"
      empty-search-message="No matching page"
      auto-option-focus
      class="w-full sm:w-72"
      input-class="w-full"
      @complete="complete"
      @option-select="openPage"
    >
      <template #option="{ option }">
        <span :class="`pi pi-fw pi-${option.icon}`" />
        <span class="ml-2">{{ option.label }}</span>
        <small class="search-group ml-2">{{ option.group }}</small>
      </template>
    </AutoComplete>
  </nav>
</template>

<style scoped lang='scss'>
// links that are buttons keep the text color of their button
a:not(.p-button) {
  color: var(--p-primary-color);
}

.menu-link-active {
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 0.3em;
}

// `light-dark()` follows the `color-scheme` of the page, set together with the theme
.new-badge {
  color: light-dark(#b45309, #eab308);
}

.search-group {
  color: var(--p-text-muted-color);
}
</style>
