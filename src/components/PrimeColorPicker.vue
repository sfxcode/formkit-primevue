<script setup lang='ts'>
import { type PropType, computed } from 'vue';
import { type FormKitFrameworkContext } from '@formkit/core';
import { ColorPickerProps } from 'primevue/colorpicker'

export type FormKitPrimeColorPickerProps = {
  defaultColor?: ColorPickerProps['defaultColor'];
  inline?: ColorPickerProps['inline'];
  format?: ColorPickerProps['format'];
  pt?: ColorPickerProps['pt'];
  ptOptions?: ColorPickerProps['ptOptions'];
  unstyled?: ColorPickerProps['unstyled'];
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeColorPickerProps>,
    required: true,
  },
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleChange(e: any) {
  context?.node.input(props.context?._value)
}
</script>

<template>
  <div class="p-formkit">
    <ColorPicker
      v-model="context._value"
      :disabled="!!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :style="attrs.style"
      :panel-class="attrs.class"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :default-color="context.defaultColor ?? 'ff0000'"
      :inline="context.inline ?? false"
      :format="context.format"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleChange"
    />
  </div>
</template>
