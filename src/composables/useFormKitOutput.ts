import { computed } from 'vue'

export function useFormKitOutput(context: any, componentClass: string = '') {
  const wrapperClass = computed(() => {
    return context?.wrapperClass ? `p-formkit ${componentClass} ${context?.wrapperClass}` : `p-formkit ${componentClass}`
  })

  return { wrapperClass }
}
