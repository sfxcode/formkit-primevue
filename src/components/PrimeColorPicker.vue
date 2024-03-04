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

function handleChange(e: any) {
  props.context?.node.input(props.context?._value)
}
</script>

<template>
  <div class="p-formkit">
    <ColorPicker
      v-model="context._value"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs._readonly ?? false"
      :style="context?.attrs.style"
      :panel-class="context?.attrs.class"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
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
