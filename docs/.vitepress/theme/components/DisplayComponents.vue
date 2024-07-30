<script setup lang='ts'>
import { defineProps, ref } from 'vue'

const props = defineProps({
  full: {
    type: Boolean,
    default: false,
  },
})

const primeInputWithOptionNames = ['CascadeSelect', 'Listbox', 'MultiSelect', 'RadioButton', 'Select', 'SelectButton', 'TreeSelect']

function primeInputNames() {
  if (props.full)
    return [...primeInputWithOptionNames, 'AutoComplete', 'Checkbox', 'ColorPicker', 'DatePicker', 'Editor', 'InputMask', 'InputNumber', 'InputOtp', 'InputText', 'Knob', 'Password', 'Rating', 'Slider', 'Textarea', 'ToggleButton', 'ToggleSwitch'].sort()
  else
    return primeInputWithOptionNames
}

const names = ref(primeInputNames().sort((a, b) => a.localeCompare(b)))
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
