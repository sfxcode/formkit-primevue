import { usePrimeVue } from 'primevue/config'
import { computed } from 'vue'

export function useFormKitInput(context: any) {
  const primevue = usePrimeVue()

  const isInvalid = computed(() => {
    return context?.state.validationVisible && !context?.state.valid
  })

  const styleClass = computed(() => {
    return (context?.state.validationVisible && !context?.state.valid) ? `${context?.attrs?.class} p-invalid` : context?.attrs?.class
  })

  const unstyled = computed(() => {
    return context?.unstyled ?? primevue?.config?.unstyled
  })

  function handleBlur(event: Event) {
    context?.handlers.blur(event)
  }

  function handleChange(_: any) {
    context?.node.input(context?._value)
  }

  function handleInput(_: any) {
    context?.node.input(context?._value)
  }

  function handleSelect(e: any) {
    context?.node.input(e)
  }

  return { isInvalid, styleClass, unstyled, handleBlur, handleChange, handleInput, handleSelect }
}
