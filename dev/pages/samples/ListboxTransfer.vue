<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const data = ref({
  cities: ['PRS', 'BER'],
  countries: [],
  skills: [{ name: 'Vue.js', category: 'frontend' }, { name: 'Docker', category: 'devops' }],
  departments: [],
})

const cityOptions = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
  { name: 'Berlin', code: 'BER' },
  { name: 'Tokyo', code: 'TKY' },
  { name: 'Madrid', code: 'MAD' },
  { name: 'Amsterdam', code: 'AMS' },
  { name: 'Vienna', code: 'VIE' },
  { name: 'Barcelona', code: 'BCN' },
  { name: 'Munich', code: 'MUC' },
]

const countryOptions = [
  { label: 'United States', value: 'US' },
  { label: 'Germany', value: 'DE' },
  { label: 'France', value: 'FR' },
  { label: 'Spain', value: 'ES' },
  { label: 'United Kingdom', value: 'UK' },
  { label: 'Italy', value: 'IT' },
  { label: 'Japan', value: 'JP' },
  { label: 'Canada', value: 'CA' },
]

const skillOptions = [
  { name: 'Vue.js', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'AWS', category: 'cloud' },
  { name: 'Azure', category: 'cloud' },
  { name: 'PostgreSQL', category: 'database' },
]

const departmentOptions = [
  'Engineering',
  'Marketing',
  'Sales',
  'Human Resources',
  'Finance',
  'Customer Support',
  'Product Management',
  'Design',
]

const schema = [
  {
    $formkit: 'primeListbox',
    name: 'cities',
    label: 'City Transfer - With Filter & Transfer All',
    help: 'Select and move cities between lists. Use filter to search.',
    displayMode: 'transfer',
    transferLeftHeaderText: 'Available Cities',
    transferRightHeaderText: 'Selected Cities',
    transferHeaderClass: 'text-base font-semibold mb-2',
    transferAll: true,
    transferButtonSeverity: 'secondary',
    optionLabel: 'name',
    optionValue: 'code',
    options: cityOptions,
    filter: true,
    filterPlaceholder: 'Search cities...',
    validation: 'required|min:2',
  },
  {
    $formkit: 'primeListbox',
    name: 'countries',
    label: 'Country Transfer - Basic (No Transfer All)',
    help: 'Simple transfer without transfer all buttons',
    displayMode: 'transfer',
    transferLeftHeaderText: 'Available',
    transferRightHeaderText: 'Selected',
    transferHeaderClass: 'text-sm font-medium text-gray-600',
    transferAll: false,
    transferButtonSeverity: 'primary',
    optionLabel: 'label',
    optionValue: 'value',
    options: countryOptions,
  },
  {
    $formkit: 'primeListbox',
    name: 'skills',
    label: 'Skills Transfer - Custom Styling',
    help: 'Transfer with custom button styling and colors',
    displayMode: 'transfer',
    transferLeftHeaderText: '🎯 Available Skills',
    transferRightHeaderText: '✅ Your Skills',
    transferHeaderClass: 'text-lg font-bold text-blue-600 mb-3',
    transferAll: true,
    transferButtonSeverity: 'success',
    transferButtonClass: 'shadow-md',
    optionLabel: 'name',
    options: skillOptions,
    filter: true,
    filterPlaceholder: 'Search skills...',
  },
  {
    $formkit: 'primeListbox',
    name: 'departments',
    label: 'Department Transfer - Simple Strings',
    help: 'Transfer list with simple string options (no object mapping)',
    displayMode: 'transfer',
    transferLeftHeaderText: 'All Departments',
    transferRightHeaderText: 'Assigned Departments',
    transferAll: true,
    transferButtonSeverity: 'contrast',
    options: departmentOptions,
  },
]
</script>

<template>
  <div>
    <PrimeInput
      header="Listbox Transfer Mode Examples"
      :schema="schema"
      :data="data"
    />
  </div>
</template>

<style lang='scss' scoped>
:deep(.formkit-outer) {
  margin-bottom: 2rem;
}
</style>
