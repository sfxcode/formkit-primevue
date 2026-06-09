<script setup lang="ts">
import type { FormKitFrameworkContext } from '@formkit/core'
import type { ListboxProps } from 'primevue/listbox'
import type { PropType } from 'vue'
import { computed, ref, watch } from 'vue'
import { useFormKitInput } from '../composables'

export interface FormKitPrimeListboxProps {
  pt?: ListboxProps['pt']
  ptOptions?: ListboxProps['ptOptions']
  unstyled?: ListboxProps['unstyled']
  options?: ListboxProps['options']
  optionLabel?: ListboxProps['optionLabel']
  optionValue?: ListboxProps['optionValue']
  multiple?: ListboxProps['multiple']
  filter?: ListboxProps['filter']
  filterIcon?: ListboxProps['filterIcon']
  filterPlaceholder?: ListboxProps['filterPlaceholder']
  filterLocale?: ListboxProps['filterLocale']
  filterMatchMode?: ListboxProps['filterMatchMode']
  autoOptionFocus?: ListboxProps['autoOptionFocus']
  selectOnFocus?: ListboxProps['selectOnFocus']
  optionDisabled?: ListboxProps['optionDisabled']
  optionGroupLabel?: ListboxProps['optionGroupLabel']
  optionGroupChildren?: ListboxProps['optionGroupChildren']
  listStyle?: ListboxProps['listStyle']
  dataKey?: ListboxProps['dataKey']
  metaKeySelection?: ListboxProps['metaKeySelection']
  virtualScrollerOptions?: ListboxProps['virtualScrollerOptions']
  tabindex?: ListboxProps['tabindex']
  ariaLabel?: ListboxProps['ariaLabel']
  ariaLabelledby?: ListboxProps['ariaLabelledby']
  displayMode?: 'single' | 'transfer'
  transferLeftHeaderText?: string
  transferRightHeaderText?: string
  transferHeaderClass?: string
  transferAll?: boolean
  transferButtonSeverity?: string
  transferContainerClass?: string
  transferListContainerClass?: string
  transferButtonClass?: string
  transferDragDrop?: boolean
}

const props = defineProps({
  context: {
    type: Object as PropType<FormKitFrameworkContext & FormKitPrimeListboxProps>,
    required: true,
  },
})

const { validSlotNames, unstyled, isInvalid, handleInput, handleBlur, handleChange, modelValue } = useFormKitInput(props.context)

// Computed properties for transfer mode styling
const transferContainerClass = computed(() => {
  return props.context.transferContainerClass || 'p-formkit-transfer'
})

const transferListContainerClass = computed(() => {
  return props.context.transferListContainerClass || 'p-formkit-transfer-list-container'
})

const transferButtonClass = computed(() => {
  return props.context.transferButtonClass || ''
})

const transferButtonSeverity = computed(() => {
  return props.context.transferButtonSeverity || 'secondary'
})

const transferDragDrop = computed(() => {
  return props.context.transferDragDrop ?? true
})

const transferSlotNames = computed(() => {
  return validSlotNames.value.filter((slotName: string) => slotName !== 'option')
})

// Transfer List functionality
const optionValueKey = computed(() => {
  const key = props.context.optionValue
  return typeof key === 'string' ? key : null
})

// Helper function to convert values to full objects
function valuesToObjects(values: any[]): any[] {
  if (!optionValueKey.value)
    return values
  const options = props.context?.options || []
  return values.map((val: any) => {
    if (typeof val === 'object')
      return val
    return options.find((opt: any) => opt[optionValueKey.value!] === val) || val
  })
}

// Initialize targetItems by converting any values to full objects
const initialTargetItems = Array.isArray(modelValue.value) ? valuesToObjects(modelValue.value) : []
const targetItems = ref<any[]>(initialTargetItems)
const sourceSelection = ref<any[]>([])
const targetSelection = ref<any[]>([])

const transferHeaderClass = computed(() => {
  return props.context.transferHeaderClass || 'text-base font-semibold'
})

const sourceItems = computed(() => {
  const options = props.context?.options || []
  if (!Array.isArray(options))
    return []

  return options.filter((item: any) => {
    const itemValue = optionValueKey.value && typeof item === 'object' ? item[optionValueKey.value] : item
    return !targetItems.value.some((t: any) => {
      const targetValue = optionValueKey.value && typeof t === 'object' ? t[optionValueKey.value] : t
      return targetValue === itemValue
    })
  })
})

type TransferList = 'source' | 'target'

const dragSource = ref<TransferList | null>(null)
const draggedItems = ref<any[]>([])
const activeDropzone = ref<TransferList | null>(null)
const dragOverIndex = ref<number | null>(null)

function getComparableValue(item: any): any {
  const valueKey = optionValueKey.value
  return valueKey && typeof item === 'object' ? item?.[valueKey] : item
}

function isSameOption(left: any, right: any): boolean {
  return getComparableValue(left) === getComparableValue(right)
}

function getUniqueItems(items: any[]): any[] {
  return items.filter((item, index) => items.findIndex(candidate => isSameOption(candidate, item)) === index)
}

function mergeUniqueItems(base: any[], toAdd: any[]): any[] {
  return [...base, ...toAdd.filter(item => !base.some(candidate => isSameOption(candidate, item)))]
}

function getDraggableItems(origin: TransferList, option: any): any[] {
  const selection = origin === 'source' ? sourceSelection.value : targetSelection.value
  if (!selection.length)
    return [option]

  const hasOptionSelected = selection.some(item => isSameOption(item, option))
  return hasOptionSelected ? getUniqueItems(selection) : [option]
}

function clearDragState() {
  dragSource.value = null
  draggedItems.value = []
  activeDropzone.value = null
  dragOverIndex.value = null
}

function canDropInto(target: TransferList): boolean {
  if (!transferDragDrop.value || props.context.disabled || !dragSource.value || draggedItems.value.length === 0)
    return false
  // The target list accepts cross-list moves as well as same-list reordering.
  if (target === 'target')
    return true
  // The source list only accepts items coming from the target (i.e. removal).
  return dragSource.value !== target
}

function handleOptionDragStart(origin: TransferList, option: any, event: DragEvent) {
  if (!transferDragDrop.value || props.context.disabled)
    return

  draggedItems.value = getDraggableItems(origin, option)
  dragSource.value = origin
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/plain', 'formkit-primevue-transfer')
  }
}

function handleOptionDragEnd() {
  clearDragState()
}

function handleDropzoneDragOver(target: TransferList, event: DragEvent) {
  if (!canDropInto(target))
    return

  event.preventDefault()
  activeDropzone.value = target
  // Hovering empty space (not over a specific item) clears the per-item highlight.
  dragOverIndex.value = null
  if (event.dataTransfer)
    event.dataTransfer.dropEffect = 'move'
}

function handleDropzoneDragLeave(target: TransferList) {
  if (activeDropzone.value === target)
    activeDropzone.value = null
}

function handleDropzoneDrop(target: TransferList, event: DragEvent) {
  if (!canDropInto(target)) {
    clearDragState()
    return
  }

  event.preventDefault()
  if (target === 'target') {
    targetItems.value = mergeUniqueItems(targetItems.value, draggedItems.value)
    sourceSelection.value = []
  }
  else {
    targetItems.value = targetItems.value.filter(item => !draggedItems.value.some(dragged => isSameOption(dragged, item)))
    targetSelection.value = []
  }

  clearDragState()
}

function handleTargetItemDragOver(index: number, event: DragEvent) {
  if (!canDropInto('target'))
    return

  // Handle the drop at the item level so it lands at a precise position.
  event.preventDefault()
  event.stopPropagation()
  activeDropzone.value = 'target'
  dragOverIndex.value = index
  if (event.dataTransfer)
    event.dataTransfer.dropEffect = 'move'
}

function handleTargetItemDrop(index: number, event: DragEvent) {
  if (!canDropInto('target')) {
    clearDragState()
    return
  }

  event.preventDefault()
  event.stopPropagation()

  const referenceItem = targetItems.value[index]
  const itemsToInsert = getUniqueItems(draggedItems.value)

  if (dragSource.value === 'target') {
    // Reorder within the target list: move the dragged items to the drop position.
    if (itemsToInsert.some(dragged => isSameOption(dragged, referenceItem))) {
      clearDragState()
      return
    }
    const remaining = targetItems.value.filter(item => !itemsToInsert.some(dragged => isSameOption(dragged, item)))
    let insertAt = remaining.findIndex(item => isSameOption(item, referenceItem))
    if (insertAt === -1)
      insertAt = remaining.length
    remaining.splice(insertAt, 0, ...itemsToInsert)
    targetItems.value = remaining
    targetSelection.value = []
  }
  else {
    // Cross-list move: insert the dragged source items at the drop position.
    const additions = itemsToInsert.filter(item => !targetItems.value.some(candidate => isSameOption(candidate, item)))
    const updated = [...targetItems.value]
    updated.splice(index, 0, ...additions)
    targetItems.value = updated
    sourceSelection.value = []
  }

  clearDragState()
}

function resolveOptionDisabled(option: any): boolean {
  const optionDisabled = props.context.optionDisabled
  if (!optionDisabled)
    return false
  if (typeof optionDisabled === 'function')
    return !!optionDisabled(option)
  if (typeof optionDisabled === 'string')
    return !!option?.[optionDisabled]
  return !!optionDisabled
}

function resolveOptionLabel(option: any): string {
  if (!props.context.optionLabel)
    return String(option)
  if (typeof props.context.optionLabel === 'function')
    return String(props.context.optionLabel(option))
  return String(option?.[props.context.optionLabel] ?? option)
}

function transferSelected() {
  if (sourceSelection.value.length === 0)
    return
  // Use splice-based approach for better performance
  targetItems.value = [...targetItems.value, ...sourceSelection.value]
  sourceSelection.value = []
}

function transferAll() {
  if (sourceItems.value.length === 0)
    return
  targetItems.value = [...targetItems.value, ...sourceItems.value]
  sourceSelection.value = []
}

function removeSelected() {
  if (targetSelection.value.length === 0)
    return

  // Filter out selected items using splice-inspired logic
  const valueKey = optionValueKey.value
  targetItems.value = targetItems.value.filter((item: any) => {
    const itemValue = valueKey && typeof item === 'object' ? item[valueKey] : item
    return !targetSelection.value.some((sel: any) => {
      const selValue = valueKey && typeof sel === 'object' ? sel[valueKey] : sel
      return selValue === itemValue
    })
  })
  targetSelection.value = []
}

function removeAll() {
  if (targetItems.value.length === 0)
    return
  targetItems.value = []
  targetSelection.value = []
}

watch(targetItems, (newVal) => {
  modelValue.value = newVal
  handleInput(newVal)
  handleChange(newVal)
}, { deep: true })

// Watch for external changes to modelValue and update targetItems
watch(() => modelValue.value, (newVal) => {
  if (props.context.displayMode === 'transfer' && Array.isArray(newVal)) {
    const converted = valuesToObjects(newVal)
    // Only update if the values are actually different to avoid infinite loops
    if (JSON.stringify(converted) !== JSON.stringify(targetItems.value)) {
      targetItems.value = converted
    }
  }
}, { deep: true })
</script>

<template>
  <!-- Single Mode (default) -->
  <div v-if="!context.displayMode || context.displayMode === 'single'" class="p-formkit">
    <Listbox
      :id="context.id"
      v-model="modelValue"
      v-bind="context?.attrs"
      :disabled="!!context?.disabled"
      :readonly="context?.attrs.readonly ?? false"
      :list-style="context?.attrs.style"
      :class="context?.attrs?.class"
      :invalid="isInvalid"
      :tabindex="context?.attrs.tabindex"
      :aria-label="context?.attrs.ariaLabel"
      :aria-labelledby="context?.attrs.ariaLabelledby"
      :options="context?.options"
      :option-label="context.optionLabel"
      :option-value="context.optionValue"
      :option-disabled="context.optionDisabled"
      :option-group-label="context.optionGroupLabel"
      :option-group-children="context.optionGroupChildren"
      :multiple="context.multiple ?? false"
      :filter="context.filter ?? false"
      :filter-icon="context.filterIcon"
      :filter-placeholder="context.filterPlaceholder"
      :filter-locale="context.filterLocale"
      :filter-match-mode="context.filterMatchMode"
      :auto-option-focus="context.autoOptionFocus ?? true"
      :select-on-focus="context.selectOnFocus ?? false"
      :data-key="context.dataKey"
      :meta-key-selection="context.metaKeySelection ?? false"
      :virtual-scroller-options="context.virtualScrollerOptions"
      :pt="context.pt"
      :pt-options="context.ptOptions"
      :unstyled="unstyled"
      @update:model-value="handleInput"
      @change="handleChange"
      @blur="handleBlur"
    >
      <template v-for="slotName in validSlotNames" :key="slotName" #[slotName]="slotProps">
        <component :is="context?.slots[slotName]" v-bind="{ ...context, ...slotProps }" />
      </template>
    </Listbox>
  </div>

  <!-- Transfer Mode -->
  <div
    v-if="context.displayMode === 'transfer'"
    :class="transferContainerClass"
  >
    <!-- Source List -->
    <div
      :class="[transferListContainerClass, { 'p-formkit-transfer-dropzone-active': activeDropzone === 'source' }]"
      @dragover="handleDropzoneDragOver('source', $event)"
      @dragleave="handleDropzoneDragLeave('source')"
      @drop="handleDropzoneDrop('source', $event)"
    >
      <span
        v-if="context.transferLeftHeaderText"
        :class="transferHeaderClass"
      >{{ context.transferLeftHeaderText }}</span>
      <Listbox
        :id="`${context.id}-transfer-source`"
        v-model="sourceSelection"
        v-bind="context?.attrs"
        :disabled="!!context?.disabled"
        :readonly="context?.attrs.readonly ?? false"
        :list-style="context?.attrs.style"
        :class="context?.attrs?.class"
        :invalid="isInvalid"
        :tabindex="context?.attrs.tabindex"
        :aria-label="context?.attrs.ariaLabel || 'Source list'"
        :aria-labelledby="context?.attrs.ariaLabelledby"
        :options="sourceItems"
        :option-label="context.optionLabel"
        :option-disabled="context.optionDisabled"
        :option-group-label="context.optionGroupLabel"
        :option-group-children="context.optionGroupChildren"
        :data-key="context.dataKey"
        :multiple="true"
        :filter="context.filter ?? false"
        :filter-icon="context.filterIcon"
        :filter-placeholder="context.filterPlaceholder"
        :filter-locale="context.filterLocale"
        :filter-match-mode="context.filterMatchMode"
        :auto-option-focus="context.autoOptionFocus ?? true"
        :select-on-focus="context.selectOnFocus ?? false"
        :meta-key-selection="context.metaKeySelection ?? false"
        :virtual-scroller-options="context.virtualScrollerOptions"
        :pt="context.pt"
        :pt-options="context.ptOptions"
        :unstyled="unstyled"
        @blur="handleBlur"
      >
        <template #option="slotProps">
          <div
            :draggable="transferDragDrop && !context.disabled && !resolveOptionDisabled(slotProps.option)"
            class="p-formkit-transfer-option"
            :class="{ 'p-formkit-transfer-option-draggable': transferDragDrop && !context.disabled && !resolveOptionDisabled(slotProps.option) }"
            @dragstart="handleOptionDragStart('source', slotProps.option, $event)"
            @dragend="handleOptionDragEnd"
          >
            <component
              :is="context?.slots.option"
              v-if="context?.slots?.option"
              v-bind="{ ...context, ...slotProps }"
            />
            <span v-else>{{ resolveOptionLabel(slotProps.option) }}</span>
          </div>
        </template>
        <template v-for="slotName in transferSlotNames" :key="slotName" #[slotName]="slotProps">
          <component :is="context?.slots[slotName]" v-bind="{ ...context, ...slotProps }" />
        </template>
      </Listbox>
    </div>

    <!-- Transfer Buttons -->
    <div class="p-formkit-transfer-buttons">
      <Button
        icon="pi pi-angle-right"
        :severity="transferButtonSeverity"
        :class="transferButtonClass"
        outlined
        :disabled="sourceSelection.length === 0"
        :aria-label="context.transferAll ? 'Move selected to target' : 'Move to target'"
        @click="transferSelected"
      />
      <Button
        v-if="context.transferAll"
        icon="pi pi-angle-double-right"
        :severity="transferButtonSeverity"
        :class="transferButtonClass"
        outlined
        :disabled="sourceItems.length === 0"
        aria-label="Move all to target"
        @click="transferAll"
      />
      <Button
        icon="pi pi-angle-left"
        :severity="transferButtonSeverity"
        :class="transferButtonClass"
        outlined
        :disabled="targetSelection.length === 0"
        :aria-label="context.transferAll ? 'Move selected to source' : 'Move to source'"
        @click="removeSelected"
      />
      <Button
        v-if="context.transferAll"
        icon="pi pi-angle-double-left"
        :severity="transferButtonSeverity"
        :class="transferButtonClass"
        outlined
        :disabled="targetItems.length === 0"
        aria-label="Move all to source"
        @click="removeAll"
      />
    </div>

    <!-- Target List -->
    <div
      :class="[transferListContainerClass, { 'p-formkit-transfer-dropzone-active': activeDropzone === 'target' }]"
      @dragover="handleDropzoneDragOver('target', $event)"
      @dragleave="handleDropzoneDragLeave('target')"
      @drop="handleDropzoneDrop('target', $event)"
    >
      <span
        v-if="context.transferRightHeaderText"
        :class="transferHeaderClass"
      >{{ context.transferRightHeaderText }}</span>
      <Listbox
        :id="`${context.id}-transfer-target`"
        v-model="targetSelection"
        v-bind="context?.attrs"
        :disabled="!!context?.disabled"
        :readonly="context?.attrs.readonly ?? false"
        :list-style="context?.attrs.style"
        :class="context?.attrs?.class"
        :invalid="isInvalid"
        :tabindex="context?.attrs.tabindex"
        :aria-label="context?.attrs.ariaLabel || 'Target list'"
        :aria-labelledby="context?.attrs.ariaLabelledby"
        :options="targetItems"
        :option-label="context.optionLabel"
        :option-disabled="context.optionDisabled"
        :option-group-label="context.optionGroupLabel"
        :option-group-children="context.optionGroupChildren"
        :data-key="context.dataKey"
        :multiple="true"
        :filter="context.filter ?? false"
        :filter-icon="context.filterIcon"
        :filter-placeholder="context.filterPlaceholder"
        :filter-locale="context.filterLocale"
        :filter-match-mode="context.filterMatchMode"
        :auto-option-focus="context.autoOptionFocus ?? true"
        :select-on-focus="context.selectOnFocus ?? false"
        :meta-key-selection="context.metaKeySelection ?? false"
        :virtual-scroller-options="context.virtualScrollerOptions"
        :pt="context.pt"
        :pt-options="context.ptOptions"
        :unstyled="unstyled"
        @blur="handleBlur"
      >
        <template #option="slotProps">
          <div
            :draggable="transferDragDrop && !context.disabled && !resolveOptionDisabled(slotProps.option)"
            class="p-formkit-transfer-option"
            :class="{
              'p-formkit-transfer-option-draggable': transferDragDrop && !context.disabled && !resolveOptionDisabled(slotProps.option),
              'p-formkit-transfer-option-dragover': dragOverIndex === slotProps.index,
            }"
            @dragstart="handleOptionDragStart('target', slotProps.option, $event)"
            @dragend="handleOptionDragEnd"
            @dragover="handleTargetItemDragOver(slotProps.index, $event)"
            @drop="handleTargetItemDrop(slotProps.index, $event)"
          >
            <component
              :is="context?.slots.option"
              v-if="context?.slots?.option"
              v-bind="{ ...context, ...slotProps }"
            />
            <span v-else>{{ resolveOptionLabel(slotProps.option) }}</span>
          </div>
        </template>
        <template v-for="slotName in transferSlotNames" :key="slotName" #[slotName]="slotProps">
          <component :is="context?.slots[slotName]" v-bind="{ ...context, ...slotProps }" />
        </template>
      </Listbox>
    </div>
  </div>
</template>

<style scoped>
.p-formkit-transfer :deep(.p-listbox) {
  width: 100%;
  height: 100%;
}

.p-formkit-transfer :deep(.p-listbox-list-container) {
  max-height: none;
}

.p-formkit-transfer-dropzone-active :deep(.p-listbox) {
  outline: 2px dashed var(--p-primary-color);
  outline-offset: 2px;
}

.p-formkit-transfer-option-dragover {
  box-shadow: inset 0 2px 0 0 var(--p-primary-color);
}
</style>
