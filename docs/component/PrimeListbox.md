# PrimeListbox

A FormKit wrapper for PrimeVue's Listbox component with optional Transfer List functionality.

[Live Example on Website](https://formkit-primevue.netlify.app/inputs/listbox)

[Comprehensive Transfer Mode Examples](https://formkit-primevue.netlify.app/samples/listboxtransfer)

## Usage
```vue
<FormKit type="primeListbox" :options="options" option-label="label" option-value="value" v-model="selected" />
```

### Object-based Example
```vue
<script setup>
const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Every hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]
const schema = [
  { $formkit: 'primeListbox', name: 'cookie_notice', label: 'Cookie notice', value: 'hourly', optionLabel: 'label', optionValue: 'value', options, help: 'Cookie notice frequency ?' },
  { $formkit: 'primeListbox', name: 'styled', label: 'Styled and Disabled', value: 'hourly', style: { background: 'gray' }, class: 'customClass', optionLabel: 'label', optionValue: 'value', options, disabled: true },
  { $formkit: 'primeListbox', name: 'custom', label: 'With Multiple Select and Filter', multiple: true, filter: true, placeholder: 'Please select', optionLabel: 'label', optionValue: 'value', options, validation: 'required' },
]
const data = {}
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

### Transfer List Example
```vue
<script setup>
const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
]
const selectedCities = ref([])
</script>

<FormKit
  type="primeListbox"
  name="selectedCities"
  label="Select Your Cities"
  display-mode="transfer"
  transfer-left-header-text="Available Cities"
  transfer-right-header-text="Selected Cities"
  transfer-header-class="text-base font-semibold mb-2"
  :transfer-all="true"
  option-label="name"
  option-value="code"
  :options="cities"
  :filter="true"
  filter-placeholder="Search cities..."
  v-model="selectedCities"
/>
```

### Schema-based Transfer List Example
```js
const schema = [
  {
    $formkit: 'primeListbox',
    name: 'selectedCities',
    label: 'Transfer List - Select Your Cities',
    help: 'Move cities between lists using the buttons',
    displayMode: 'transfer',
    transferLeftHeaderText: 'Available Cities',
    transferRightHeaderText: 'Selected Cities',
    transferHeaderClass: 'text-base font-semibold mb-2',
    transferAll: true,
    optionLabel: 'name',
    optionValue: 'code',
    options: cityOptions,
    filter: true,
    filterPlaceholder: 'Search cities...',
  },
]
```

### Custom Styling Example
```vue
<FormKit
  type="primeListbox"
  name="styledTransfer"
  label="Custom Styled Transfer List"
  display-mode="transfer"
  transfer-left-header-text="Available"
  transfer-right-header-text="Selected"
  transfer-header-class="text-lg font-bold text-primary-600"
  transfer-button-severity="primary"
  transfer-container-class="my-custom-transfer-container"
  transfer-list-container-class="my-list-wrapper"
  transfer-button-class="shadow-md hover:shadow-lg"
  :transfer-all="true"
  option-label="name"
  option-value="id"
  :options="items"
  :filter="true"
/>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |
| options      | array     | List of options |
| optionLabel  | string    | Field for label |
| optionValue  | string    | Field for value |
| multiple     | boolean   | Enable multiple selection |
| filter       | boolean   | Enable filtering |
| filterIcon   | string    | Icon for filter |
| filterPlaceholder | string | Placeholder for filter |
| filterLocale | string    | Locale for filter |
| filterMatchMode | string | Filter match mode |
| autoOptionFocus | boolean | Auto focus option |
| selectOnFocus | boolean  | Select on focus |
| displayMode  | string    | Display mode: 'single' or 'transfer' |
| transferLeftHeaderText | string | Header text for source list (transfer mode) |
| transferRightHeaderText | string | Header text for target list (transfer mode) |
| transferHeaderClass | string | CSS class for transfer headers |
| transferAll  | boolean   | Show transfer all/remove all buttons |
| transferButtonSeverity | string | Button severity/color (default: 'secondary') |
| transferContainerClass | string | Custom class for transfer container |
| transferListContainerClass | string | Custom class for list containers |
| transferButtonClass | string | Custom class for transfer buttons |

## Transfer List

The Transfer List feature allows users to move items between two lists (source and target). This is useful for selecting multiple items from a large list.

### Features:
- **Move Selected**: Transfer selected items from source to target
- **Move All**: Transfer all items from source to target (when `transferAll` is enabled)
- **Remove Selected**: Remove selected items from target back to source
- **Remove All**: Remove all items from target (when `transferAll` is enabled)
- **Filtering**: Both lists support filtering
- **Icons**: Uses PrimeIcons (angle-right, angle-double-right, angle-left, angle-double-left)
- **Customizable Styling**: Control button appearance and container classes
- **Accessibility**: Built-in ARIA labels and keyboard navigation support

### Customization Options:

#### Button Styling
Use `transferButtonSeverity` to control the button color theme:
- `secondary` (default) - Neutral gray buttons
- `primary` - Primary color buttons
- `success` - Green buttons
- `info` - Blue buttons
- `warning` - Orange buttons
- `danger` - Red buttons

#### Container Classes
- `transferContainerClass` - Custom class for the entire transfer component
- `transferListContainerClass` - Custom class for each list wrapper
- `transferButtonClass` - Custom class for transfer buttons
- `transferHeaderClass` - Custom class for header text

See [PrimeVue Listbox docs](https://primevue.org/listbox/) for more details.
