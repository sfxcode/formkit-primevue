<script setup lang='ts'>
const primeAttributes = 'placeholder, feedback, mediumRegex, strongRegex, promptLabel, weakLabel, mediumLabel, strongLabel, toggleMask'
const schema
  = [
    {
      $formkit: 'primePassword',
      name: 'password',
      label: 'Password',
      help: 'Enter your new password',
      feedback: true,
    },
    {
      $formkit: 'primePassword',
      name: 'password_confirm',
      label: 'Confirm password',
      help: 'Enter your new password again.',
      validation: 'required|confirm',
      toggleMask: true,
      validationLabel: 'password confirmation',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <PrimeInput
      header="PrimePassword" :schema="schema" :data="data"
      :prime-attributes="primeAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
