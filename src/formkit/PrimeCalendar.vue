<script setup lang='ts'>
import {CalendarBlurEvent} from "primevue/calendar";

const props = defineProps({
  context: Object,
})

const context = props.context
const attrs = computed(() => context?.attrs)

function handleInput(e: any) {
  context?.node.input(context?._value)
}

function handleSelect(e: any) {
  context?.node.input(e)
}

function handleBlur(e: CalendarBlurEvent) {
  context?.handlers.blur(e.value)
}

function handleClearClick() {
  context?.node.input(null)
}

const styleClass = computed(() => (context?.state.validationVisible && !context?.state.valid) ? `${attrs.value?.class} p-invalid` : attrs.value?.class)
</script>

<template>
  <div class="p-formkit">
    <Calendar
      v-model="context._value"
      :input-id="props.context.id"
      :disabled="attrs._disabled ?? false"
      :readonly="attrs._readonly ?? false"
      :input-style="attrs.style"
      :input-class="styleClass"
      :tabindex="attrs.tabindex"
      :aria-label="attrs.ariaLabel"
      :aria-labelledby="attrs.ariaLabelledby"
      :date-format="attrs.dateFormat"
      :placeholder="attrs.placeholder"
      :selection-mode="attrs.selectionMode ?? 'single'"
      :inline="attrs.inline ?? false"
      :show-other-months="attrs.showOtherMonths ?? true"
      :select-other-months="attrs.selectOtherMonths ?? false"
      :icon="attrs.icon"
      :show-icon="context.showIcon"
      :previous-icon="attrs.previousIcon ?? 'pi pi-chevron-left'"
      :next-icon="attrs.nextIcon ?? 'pi pi-chevron-right'"
      :increment-icon="attrs.incrementIcon ?? 'pi pi-chevron-up'"
      :decrement-icon="attrs.decrementIcon ?? 'pi pi-chevron-down'"
      :number-of-months="attrs.numberOfMonths ?? 1"
      :responsive-options="attrs.responsiveOptions"
      :view="attrs.view ?? 'date'"
      :touch-u-i="attrs.touchUI ?? false"
      :min-date="attrs.minDate"
      :max-date="attrs.maxDate"
      :disabled-dates="attrs.disabledDates"
      :disabled-days="attrs.disabledDays"
      :max-date-count="attrs.maxDateCount"
      :show-on-focus="attrs.showOnFocus ?? true"
      :auto-z-index="attrs.autoZIndex ?? true"
      :base-z-index="attrs.baseZIndex ?? 0"
      :show-button-bar="attrs.showButtonBar ?? false"
      :show-time="attrs.showTime ?? false"
      :time-only="attrs.timeOnly ?? false"
      :short-year-cutoff="attrs.shortYearCutoff ?? '+10'"
      :hour-format="attrs.hourFormat ?? '24'"
      :step-hour="attrs.stepHour ?? 1"
      :step-minute="attrs.stepMinute ?? 1"
      :step-second="attrs.stepSecond ?? 1"
      :show-seconds="attrs.showSeconds ?? false"
      :hide-on-date-time-select="attrs.hideOnDateTimeSelect ?? false"
      :hide-on-range-selection="attrs.hideOnRangeSelection ?? false"
      :time-separator="attrs.timeSeparator ?? ':'"
      :show-week="attrs.showWeek ?? false"
      :manual-input="attrs.manualInput ?? true"
      :append-to="attrs.appendTo ?? 'body'"
      :panel-style="attrs.panelStyle"
      :panel-class="attrs.panelClass"
      :pt="attrs.pt"
      :pt-options="attrs.ptOptions"
      :unstyled="attrs.unstyled ?? false"
      @date-select="handleSelect"
      @input="handleInput"
      @blur="handleBlur"
      @clear-click="handleClearClick"
    />
  </div>
</template>
