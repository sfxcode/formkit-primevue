<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = context?.attrs

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs?.class} p-invalid` : attrs?.class)
</script>

<template>
  <div :class="attrs.options_class">
    <div v-for="option in attrs.options" :key="option.value" :class="attrs.option_class">
      <RadioButton
        v-model="context._value"
        :name="attrs.name"
        :value="option.value"
        :input-style="attrs.style"
        :input-class="styleClass"
        :pt="attrs.pt"
        @click="handleChange"
        @change="handleChange"
      />
      <label :for="option.value">{{ option.label }}</label>
    </div>
  </div>
</template>
