<script setup lang='ts'>
import { ref } from 'vue'

const primeOutputNames = ['OutputBoolean', 'OutputDate', 'OutputDuration', 'OutputLink', 'OutputList', 'OutputNumber', 'OutputText']

const names = ref(primeOutputNames.sort((a, b) => a.localeCompare(b)))
</script>

<template>
  <div>
    <div class="pb-6 grid grid-cols-3 gap-4 content-start ...">
      <div v-for="name in names" :key="name" class="">
        <a :href="`https://formkit-primevue.netlify.app/outputs/${name}`" target="_new">{{ name }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
