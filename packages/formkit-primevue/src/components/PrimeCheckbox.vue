<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { CheckboxProps } from 'primevue/checkbox'

import type { PropType } from 'vue'
import { useFormKitInput, useFormKitSection } from '../composables'

export interface FormKitPrimeCheckboxProps {
  binary?: CheckboxProps['binary']
  trueValue?: CheckboxProps['trueValue']
  falseValue?: CheckboxProps['falseValue']
  pt?: CheckboxProps['pt']
  ptOptions?: CheckboxProps['ptOptions']
  unstyled?: CheckboxProps['unstyled']
  indeterminate?: CheckboxProps['indeterminate']
  variant?: CheckboxProps['variant']
  size?: CheckboxProps['size']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeCheckboxProps>,
    required: true,
  },
})

const { hasPrefix, hasSuffix, generateId } = useFormKitSection(props.context)

const { validSlotNames, unstyled, isInvalid, handleInput, handleBlur } = useFormKitInput(props.context)

const generatedId = generateId()
</script>

<template>
  <div class="p-formkit">
    <label v-if="hasPrefix" :for="generatedId" class="formkit-prefix">
      {{ context?.prefix }}
    </label>
    <Checkbox
      v-model="context._value"
      v-bind="context?.attrs"
      :input-id="generatedId"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :input-style="context?.attrs.style"
      :input-class="context?.attrs?.class"
      :invalid="isInvalid"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :size="context?.size ?? undefined"
      :indeterminate="context.indeterminate ?? undefined"
      :binary="context.binary ?? true"
      :variant="context.variant ?? 'outlined'"
      :true-value="context.trueValue ?? undefined"
      :false-value="context.falseValue ?? undefined"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="unstyled"
      @change="handleInput"
      @blur="handleBlur"
    >
      <template v-for="slotName in validSlotNames" :key="slotName" #[slotName]="slotProps">
        <component :is="context?.slots[slotName]" v-bind="{ ...context, ...slotProps }" />
      </template>
    </Checkbox>
    <label v-if="hasSuffix" :for="generatedId" class="formkit-suffix">
      {{ context?.suffix }}
    </label>
  </div>
</template>
