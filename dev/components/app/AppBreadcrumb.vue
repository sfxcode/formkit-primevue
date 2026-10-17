<script setup lang='ts'>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { routeParts } from '../../utils/pageTitle'

const route = useRoute()
const parts = computed(() => routeParts(route.name))
</script>

<template>
  <nav v-if="parts" aria-label="Breadcrumb" class="breadcrumb">
    <ol>
      <li>
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li v-if="parts.section">
        {{ parts.section }}
      </li>
      <li aria-current="page">
        {{ parts.page }}
      </li>
    </ol>
  </nav>
</template>

<style scoped lang='scss'>
.breadcrumb {
  padding: 0.75rem 0 0;
  font-size: 0.875rem;
  color: var(--p-text-muted-color);

  ol {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li + li::before {
    content: '/';
    padding: 0 0.5rem;
  }

  li[aria-current='page'] {
    color: var(--p-text-color);
  }
}
</style>
