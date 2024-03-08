<script setup lang='ts'>
import PrimeInput from '@/components/demo/PrimeInput.vue'

const primeAttributes = 'placeholder, options, filter, optionLabel, optionValue, multiple'

const options = ref([
  {
    name: 'Australia',
    code: 'AU',
    states: [
      {
        name: 'New South Wales',
        cities: [
          { cname: 'Sydney', code: 'A-SY' },
          { cname: 'Newcastle', code: 'A-NE' },
          { cname: 'Wollongong', code: 'A-WO' },
        ],
      },
      {
        name: 'Queensland',
        cities: [
          { cname: 'Brisbane', code: 'A-BR' },
          { cname: 'Townsville', code: 'A-TO' },
        ],
      },
    ],
  },
  {
    name: 'Canada',
    code: 'CA',
    states: [
      {
        name: 'Quebec',
        cities: [
          { cname: 'Montreal', code: 'C-MO' },
          { cname: 'Quebec City', code: 'C-QU' },
        ],
      },
      {
        name: 'Ontario',
        cities: [
          { cname: 'Ottawa', code: 'C-OT' },
          { cname: 'Toronto', code: 'C-TO' },
        ],
      },
    ],
  },
  {
    name: 'United States',
    code: 'US',
    states: [
      {
        name: 'California',
        cities: [
          { cname: 'Los Angeles', code: 'US-LA' },
          { cname: 'San Diego', code: 'US-SD' },
          { cname: 'San Francisco', code: 'US-SF' },
        ],
      },
      {
        name: 'Florida',
        cities: [
          { cname: 'Jacksonville', code: 'US-JA' },
          { cname: 'Miami', code: 'US-MI' },
          { cname: 'Tampa', code: 'US-TA' },
          { cname: 'Orlando', code: 'US-OR' },
        ],
      },
      {
        name: 'Texas',
        cities: [
          { cname: 'Austin', code: 'US-AU' },
          { cname: 'Dallas', code: 'US-DA' },
          { cname: 'Houston', code: 'US-HO' },
        ],
      },
    ],
  },
])

const schema
  = [
    {
      $formkit: 'primeCascadeSelect',
      name: 'city',
      label: 'Cascade Select',
      optionLabel: 'cname',
      optionGroupLabel: 'name',
      optionGroupChildren: ['states', 'cities'],
      options,
      placeholder: 'Select a City',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="CascadeSelect" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>
