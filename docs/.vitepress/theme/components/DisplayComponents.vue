<script setup lang='ts'>
import { ref } from 'vue'

const inputs = ['AutoComplete', 'CascadeSelect', 'Checkbox', 'ColorPicker', 'DatePicker', 'Editor', 'InputMask', 'InputNumber', 'InputOtp', 'InputText', 'Knob', 'Listbox', 'MultiSelect', 'Password', 'RadioButton', 'Rating', 'Select', 'SelectButton', 'Slider', 'Textarea', 'ToggleButton', 'ToggleSwitch', 'TreeSelect']
const names = ref(inputs.sort((a, b) => a.localeCompare(b)))
</script>

<template>
  <div>
    <div class="pb-6 grid grid-cols-3 gap-4 content-start ...">
      <div v-for="name in names" :key="name" class="">
        <a :href="`https://formkit-primevue.netlify.app/inputs/${name}`" target="_new">{{ name }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
