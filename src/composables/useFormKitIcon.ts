import { computed } from 'vue'

export function useFormKitIcon(context: any) {
  const hasIcon = computed(() => {
    return context?.attrs?.icon && context?.attrs?.icon.length > 0
  })

  const icon = computed(() => {
    return context?.attrs?.icon
  })

  const iconPosition = computed(() => {
    return context?.attrs?.iconPosition
  })

  return { hasIcon, icon, iconPosition }
}
