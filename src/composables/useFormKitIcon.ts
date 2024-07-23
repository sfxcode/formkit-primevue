import { computed } from 'vue'

export function useFormKitIcon(context: any) {
  const hasIcon = computed(() => {
    if (context?.icon && context?.icon.length > 0)
      return true

    return context?.attrs?.icon && context?.attrs?.icon.length > 0
  })

  const icon = computed(() => {
    return context?.icon ?? context?.attrs?.icon
  })

  const iconPosition = computed(() => {
    return context?.iconPosition ?? context?.attrs?.iconPosition
  })

  return { hasIcon, icon, iconPosition }
}
