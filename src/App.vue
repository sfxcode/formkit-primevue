<script setup lang="ts">
import AppTopBar from '@/components/app/AppTopbar.vue'
</script>

<template>
  <main class="p-2">
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
@import 'App.scss';
</style>
