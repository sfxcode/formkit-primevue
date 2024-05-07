<script setup lang='ts'>
import { type PropType, computed } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import type { RatingProps } from 'primevue/rating'

export interface FormKitPrimeRatingProps {
  unstyled?: RatingProps['unstyled']
  stars?: RatingProps['stars']
  cancel?: RatingProps['cancel']
  onIcon?: RatingProps['onIcon']
  offIcon?: RatingProps['offIcon']
  cancelIcon?: RatingProps['cancelIcon']
  ptOptions?: RatingProps['ptOptions']
  pt?: RatingProps['pt']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeRatingProps>,
    required: true,
  },
})

function handleInput(_: any) {
  props.context?.node.input(props.context?._value)
}

function handleBlur(e: Event) {
  props.context?.handlers.blur(e)
}

const styleClass = computed(() => (props.context?.state.validationVisible && !props.context?.state.valid) ? `${props.context?.attrs?.class} p-invalid` : props.context?.attrs?.class)
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
      :class="styleClass"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :stars="context.stars ?? 5"
      :cancel="context.cancel ?? false"
      :on-icon="context.onIcon ?? 'pi pi-star-fill'"
      :off-icon="context.offIcon ?? 'pi pi-star'"
      :cancel-icon="context.cancelIcon ?? 'pi pi-ban'"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="context.unstyled ?? false"
      @change="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
