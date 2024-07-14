<script setup lang='ts'>
import { type PropType, ref } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'

import type { AutoCompleteCompleteEvent, AutoCompleteProps } from 'primevue/autocomplete'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeAutoCompleteProps {
  pt?: AutoCompleteProps['pt']
  ptOptions?: AutoCompleteProps['ptOptions']
  unstyled?: AutoCompleteProps['unstyled']
  dropdown?: AutoCompleteProps['dropdown']
  multiple?: AutoCompleteProps['multiple']
  typeahead?: AutoCompleteProps['typeahead']
  wrapperClass?: string
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeAutoCompleteProps>,
    required: true,
  },
})

const { styleClass, wrapperClass, handleInput, handleBlur } = useFormKitInput(props.context)

const suggestions = ref([])

function search(event: AutoCompleteCompleteEvent) {
  suggestions.value = props.context?.attrs.complete(event.query)
}
</script>

<template>
  <div :class="wrapperClass">
    <AutoComplete
      :id="context.id"
      v-model="context._value"
      v-bind="context?.attrs"
      :disabled="!!context?.disabled"
      :class="styleClass"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :suggestions="suggestions"
      :dropdown="context?.dropdown ?? false"
      :multiple="context?.multiple ?? false"
      :typeahead="context?.typeahead ?? true"
      :pt="context?.pt"
      :pt-options="context?.ptOptions"
      :unstyled="context?.unstyled ?? false"
      @keydown.enter.prevent
      @complete="search"
      @change="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
