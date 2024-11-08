<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { RatingProps } from 'primevue/rating'

import type { PropType } from 'vue'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeRatingProps {
  unstyled?: RatingProps['unstyled']
  stars?: RatingProps['stars']
  onIcon?: RatingProps['onIcon']
  offIcon?: RatingProps['offIcon']
  ptOptions?: RatingProps['ptOptions']
  pt?: RatingProps['pt']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeRatingProps>,
    required: true,
  },
})

const { validSlotNames, unstyled, isInvalid, handleInput, handleBlur } = useFormKitInput(props.context)
</script>

<template>
  <div class="p-formkit">
    <Rating
      :id="context.id"
      v-model="context._value"
      v-bind="context?.attrs"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :style="context?.attrs.style"
      :class="context?.attrs?.class"
      :invalid="isInvalid"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :stars="context.stars ?? 5"
      :on-icon="context.onIcon"
      :off-icon="context.offIcon"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="unstyled"
      @change="handleInput"
      @blur="handleBlur"
    >
      <template v-for="slotName in validSlotNames" :key="slotName" #[slotName]="slotProps">
        <component :is="context?.slots[slotName]" v-bind="{ ...context, ...slotProps }" />
      </template>
    </Rating>
  </div>
</template>
