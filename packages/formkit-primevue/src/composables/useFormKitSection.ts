import { computed } from 'vue'

export function useFormKitSection(context: any) {
  const hasPrefix = computed(() => {
    return Boolean(context?.prefix?.length > 0)
  })

  const hasPrefixIcon = computed(() => {
    return Boolean(context?.iconPrefix?.length > 0)
  })

  const hasSuffixIcon = computed(() => {
    return Boolean(context?.iconSuffix?.length > 0)
  })

  const hasSuffix = computed(() => {
    return Boolean(context?.suffix?.length > 0)
  })

  function generateId() {
    return typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2)
  }

  return { generateId, hasPrefix, hasPrefixIcon, hasSuffix, hasSuffixIcon }
}
