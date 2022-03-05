<script setup lang="ts">
import AppTopBar from '@/components/app/AppTopbar.vue';</script>

<template>
  <div>
    <AppTopBar/>
  </div>
  <div class='layout-main-container'>
    <div class='layout-main'>
      <router-view/>
    </div>
  </div>

</template>

<style lang='scss'>
@import 'App.scss';
</style>
