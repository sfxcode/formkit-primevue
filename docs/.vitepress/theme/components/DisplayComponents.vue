<script setup lang='ts'>
import { ref } from 'vue'

const inputs = ['CascadeSelect', 'Checkbox', 'Select', 'Editor (HTML Editor)', 'InputMask', 'InputNumber', 'InputOtp', 'InputSwitch', 'InputText', 'InputTextarea', 'MultiSelect', 'Password', 'Ranking', 'Chips', 'Knob', 'ColorPicker', 'Listbox', 'ToggleButton', 'SelectButton', 'TriStateCheckbox', 'RadioButton', 'TreeSelect']
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
