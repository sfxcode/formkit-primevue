<script setup lang='ts'>
const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div :class="attrs.options_class" class="p-formkit">
    <div v-for="option in attrs.options" :key="option.value" :class="attrs.option_class">
      <RadioButton
        :id="context.id"
        v-model="context._value"
        :disabled="attrs._disabled ?? !!context?.disabled"
        :readonly="attrs._readonly ?? false"
        :name="attrs.name"
        :value="option.value"
        :input-style="attrs.style"
        :input-class="styleClass"
        :pt="attrs.pt"
        :pt-options="attrs.ptOptions"
        :unstyled="attrs.unstyled ?? false"
        @click="handleChange"
        @change="handleChange"
      />
      <label :for="option.value">{{ option.label }}</label>
    </div>
  </div>
</template>
