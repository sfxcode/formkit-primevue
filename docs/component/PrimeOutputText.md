# PrimeOutputText

A FormKit wrapper for PrimeVue's OutputText component.

[Live Example on Website](https://formkit-primevue.netlify.app/outputs/outputtext)

## Usage
```vue
<FormKit type="primeoutputtext" v-model="text" />
```

### Object-based Example
```vue
<script setup>
function prefixClicked() {
  console.error('Prefix Icon Clicked')
}
function suffixClicked() {
  console.error('Suffix Icon Clicked')
}
const schema = [
  { $formkit: 'primeOutputText', name: 'name', label: 'Basic' },
  { $formkit: 'primeOutputText', name: 'toTranslate', isTranslationKey: true, label: 'Translated' },
  { $formkit: 'primeOutputText', name: 'html', label: 'HTML as Text (Default)' },
  { $formkit: 'primeOutputText', name: 'html', html: true, label: 'HTML Output (v-html)', help: 'Only use on trusted content or sanitize after input !' },
  { $formkit: 'primeOutputText', id: 'icon', name: 'iconLeft', label: 'Icon Left', iconPrefix: 'pi pi-check', onIconPrefixClicked: prefixClicked },
  { $formkit: 'primeOutputText', name: 'iconRight', label: 'Icon Right', iconSuffix: 'pi pi-check text-yellow-500', onIconSuffixClicked: suffixClicked },
]
const data = { name: 'Harry Potter', toTranslate: 'sample', iconLeft: 'Some Text ...', iconRight: 'Another Text ...', html: '<b style="color: gold">Bold Hello World</b>' }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| html         | boolean   | Render as HTML (v-html) |
| isTranslationKey | boolean | Use i18n translation |
| iconPrefix   | string    | Icon for prefix |
| iconSuffix   | string    | Icon for suffix |
| prefix       | string    | Prefix text |
| suffix       | string    | Suffix text |
| ...          | ...       | See PrimeOutputText source for all props |

See [PrimeOutputText source](../../src/components/PrimeOutputText.vue) for more details.
