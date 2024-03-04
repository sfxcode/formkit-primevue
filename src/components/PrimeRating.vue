<script setup lang='ts'>
import { type PropType, computed } from 'vue';
import { type FormKitFrameworkContext } from '@formkit/core';
import { type RatingProps } from 'primevue/rating'

export type FormKitPrimeRatingProps = {
  unstyled?: RatingProps['unstyled'];
  stars?: RatingProps['stars'];
  cancel?: RatingProps['cancel'];
  onIcon?: RatingProps['onIcon'];
  offIcon?: RatingProps['offIcon'];
  cancelIcon?: RatingProps['cancelIcon'];
  ptOptions?: RatingProps['ptOptions'];
  pt?: RatingProps['pt'];
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeRatingProps>,
    required: true,
  },
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleInput(e: any) {
  context?.node.input(props.context?._value)
}

function handleBlur(e: Event) {
  context?.handlers.blur(e)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <Rating
      :id="context.id"
      v-model="context._value"
      :disabled="!!context?.disabled"
      :readonly="attrs._readonly ?? false"
      :style="attrs.style"
      :class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
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
