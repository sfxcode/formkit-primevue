<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import type { RatingProps } from 'primevue/rating'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeRatingProps {
  unstyled?: RatingProps['unstyled']
  stars?: RatingProps['stars']
  onIcon?: RatingProps['onIcon']
  offIcon?: RatingProps['offIcon']
  ptOptions?: RatingProps['ptOptions']
  pt?: RatingProps['pt']
  wrapperClass?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeRatingProps>,
    required: true,
  },
})

const { styleClass, wrapperClass, handleInput, handleBlur } = useFormKitInput(props.context)
</script>

<template>
  <div :class="wrapperClass">
    <Rating
      :id="context.id"
      v-model="context._value"
      v-bind="context?.attrs"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :style="context?.attrs.style"
      :class="styleClass"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :stars="context.stars ?? 5"
      :on-icon="context.onIcon ?? 'pi pi-star-fill'"
      :off-icon="context.offIcon ?? 'pi pi-star'"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
