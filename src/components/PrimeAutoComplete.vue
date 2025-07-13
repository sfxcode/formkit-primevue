<script setup lang='ts'>
import type { FormKitFrameworkContext } from '@formkit/core'
import type { AutoCompleteCompleteEvent, AutoCompleteProps } from 'primevue/autocomplete'

import type { PropType } from 'vue'
import { ref } from 'vue'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeAutoCompleteProps {
  pt?: AutoCompleteProps['pt']
  ptOptions?: AutoCompleteProps['ptOptions']
  unstyled?: AutoCompleteProps['unstyled']
  dropdown?: AutoCompleteProps['dropdown']
  multiple?: AutoCompleteProps['multiple']
  typeahead?: AutoCompleteProps['typeahead']
  optionLabel?: AutoCompleteProps['optionLabel']
  options?: any[] | undefined
  size?: AutoCompleteProps['size']
  minLength?: AutoCompleteProps['minLength']
  placeholder?: AutoCompleteProps['placeholder']
  fluid?: AutoCompleteProps['fluid']
  separators?: string[] | []
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeAutoCompleteProps>,
    required: true,
  },
})

const { validSlotNames, unstyled, isInvalid, handleInput, handleBlur } = useFormKitInput(props.context)

const suggestions = ref(['', {}])
suggestions.value = []
const loading = ref(false)

/**
 * Searches for suggestions based on the input query.
 * If options and optionLabel are provided, it filters the options.
 * Otherwise, it calls the complete function from the context to fetch suggestions.
 * @param event - The AutoCompleteCompleteEvent containing the query.
 */
async function search(event: AutoCompleteCompleteEvent) {
  if (props.context?.options && props.context?.optionLabel) {
    suggestions.value = props.context.options.filter((option) => {
      return option[`${props.context.optionLabel}`].toString().toLowerCase().includes(event.query.toLowerCase())
    })
  }
  else {
    loading.value = true
    try {
      suggestions.value = await props.context?.attrs.complete(event.query)
    }
    catch (error) {
      console.error('Error fetching suggestions:', error)
      suggestions.value = []
    }
    finally {
      loading.value = false
    }
  }
}

/**
 * Handles paste event to transform a string separated by any of the provided separators into multiple items.
 * @param event - The paste event from the input.
 */
function handlePaste(event: ClipboardEvent) {
  if (!props.context?.multiple)
    return
  const clipboardData = event.clipboardData
  if (!clipboardData)
    return
  const pastedText = clipboardData.getData('text')
  const separators = Array.isArray(props.context?.separators) && props.context.separators.length > 0
    ? props.context.separators
    : [',']
  // Create a regex to split by any separator, escaping special regex characters
  const regex = new RegExp(`[${separators.map(s => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('')}]`)
  if (pastedText && regex.test(pastedText)) {
    event.preventDefault()
    const items = pastedText
      .split(regex)
      .map(item => item.trim())
      .filter(item => item.length > 0)
    if (Array.isArray(props.context._value)) {
      props.context._value.push(...items)
    }
    else {
      props.context._value = items
    }
    props.context?.node?.input?.(props.context?._value)
  }
}
</script>

<template>
  <div class="p-formkit">
    <AutoComplete
      :id="context.id"
      v-model="context._value"
      v-bind="context?.attrs"
      :disabled="!!context?.disabled"
      :class="context?.attrs?.class"
      :invalid="isInvalid"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :size="context?.size ?? undefined"
      :suggestions="suggestions"
      :option-label="context?.optionLabel"
      :dropdown="context?.dropdown ?? false"
      :multiple="context?.multiple ?? false"
      :typeahead="context?.typeahead ?? true"
      :min-length="context?.minLength ?? undefined"
      :placeholder="context?.placeholder ?? undefined"
      :fluid="context?.fluid ?? undefined"
      :pt="context?.pt"
      :pt-options="context?.ptOptions"
      :unstyled="unstyled"
      :loading="loading"
      @keydown.enter.prevent
      @complete="search"
      @change="handleInput"
      @blur="handleBlur"
      @paste="handlePaste"
    >
      <template v-for="slotName in validSlotNames" :key="slotName" #[slotName]="slotProps">
        <component :is="context?.slots[slotName]" v-bind="{ ...context, ...slotProps }" />
      </template>
    </AutoComplete>
  </div>
</template>
