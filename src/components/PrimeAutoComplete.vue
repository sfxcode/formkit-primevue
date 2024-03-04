<script setup lang='ts'>
import { type PropType, computed, ref } from 'vue';
import type { FormKitFrameworkContext } from '@formkit/core';
import type {
  AutoCompleteCompleteEvent,
  AutoCompleteProps,
} from 'primevue/autocomplete'

export type FormKitPrimeAutoCompleteProps = {
  pt?: AutoCompleteProps['pt'];
  ptOptions?: AutoCompleteProps['ptOptions'];
  unstyled?: AutoCompleteProps['unstyled'];
  dropdown?: AutoCompleteProps['dropdown'];
  multiple?: AutoCompleteProps['multiple'];
};

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeAutoCompleteProps>,
    required: true,
  },
})

const context = props.context

const suggestions = ref([])

function search(event: AutoCompleteCompleteEvent) {
  suggestions.value = context?.attrs.complete(event.query)
}

function handleInput(e: any) {
  context?.node.input(props.context?._value)
}

const handleBlur = (event: Event) => {
  context?.handlers.blur(event);
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${context?.attrs?.class} p-invalid` : context?.attrs?.class)
</script>

<template>
  <div class="p-formkit">
    <AutoComplete
      :id="context.id"
      v-model="context._value"
      :disabled="!!context?.disabled"
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
