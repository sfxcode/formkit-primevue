<script setup lang='ts'>
import { type PropType, computed, ref } from 'vue'
import type { FormKitFrameworkContext } from '@formkit/core'
import type {
  AutoCompleteCompleteEvent,
  AutoCompleteProps,
} from 'primevue/autocomplete'

export interface FormKitPrimeAutoCompleteProps {
  pt?: AutoCompleteProps['pt']
  ptOptions?: AutoCompleteProps['ptOptions']
  unstyled?: AutoCompleteProps['unstyled']
  dropdown?: AutoCompleteProps['dropdown']
  multiple?: AutoCompleteProps['multiple']
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeAutoCompleteProps>,
    required: true,
  },
})

const suggestions = ref([])

function search(event: AutoCompleteCompleteEvent) {
  suggestions.value = props.context?.attrs.complete(event.query)
}

function handleInput(_: any) {
  props.context?.node.input(props.context?._value)
}

function handleBlur(event: Event) {
  props.context?.handlers.blur(event)
}

const styleClass = computed(() => (props.context?.state.validationVisible && !props.context?.state.valid) ? `${props.context?.attrs?.class} p-invalid` : props.context?.attrs?.class)
</script>

<template>
  <div class="p-formkit">
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
      :pt="context?.pt"
      :pt-options="context?.ptOptions"
      :unstyled="context?.unstyled ?? false"
      @complete="search"
      @change="handleInput"
      @blur="handleBlur"
    />
  </div>
</template>
