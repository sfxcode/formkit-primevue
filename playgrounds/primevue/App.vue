<script setup lang="ts">
import AppFooter from '@/components/app/AppFooter.vue'
import AppTopBar from '@/components/app/AppTopbar.vue'
</script>

<template>
  <main class="p-2">
    <Toast position="bottom-right" />
    <div class="">
      <AppTopBar />
      <div class="pl-2">
        <router-view />
      </div>
      <AppFooter />
    </div>
  </main>
</template>

<style lang='scss'>
@use 'App';
</style>
