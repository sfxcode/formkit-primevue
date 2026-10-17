<script setup lang="ts">
import AppBreadcrumb from '@/components/app/AppBreadcrumb.vue'
import AppFooter from '@/components/app/AppFooter.vue'
import AppTopBar from '@/components/app/AppTopbar.vue'
</script>

<template>
  <main class="p-2">
    <Toast position="bottom-right" />
    <div class="">
      <AppTopBar />
      <div class="pl-2">
        <AppBreadcrumb />
        <router-view />
      </div>
      <AppFooter />
    </div>
  </main>
</template>

<style lang='scss'>
@use 'App.scss';
</style>
