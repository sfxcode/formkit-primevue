<script setup lang='ts'>
import { type PropType, computed } from 'vue';
import { type FormKitFrameworkContext } from '@formkit/core';

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext>,
    required: true,
  },
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}

function handleBlur(e: Event) {
  context?.handlers.blur(e)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div :class="attrs.options_class" class="p-formkit">
    <div v-for="option in attrs.options" :key="option.value" :class="attrs.option_class">
      <RadioButton
        :id="context.id"
        v-model="context._value"
        :disabled="!!context?.disabled"
        :readonly="attrs._readonly ?? false"
        :name="attrs.name"
        :value="option.value"
        :input-style="attrs.style"
        :input-class="styleClass"
        @click="handleChange"
        @change="handleChange"
        @blur="handleChange"
      />
      <label :for="option.value">{{ option.label }}</label>
    </div>
  </div>
</template>
