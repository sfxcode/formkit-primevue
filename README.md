# Formkit - Primevue

Helper classes for using [Formkit](https://formkit.com/) with the [PrimeVue UI Framework](https://www.primefaces.org/primevue/#/)

## Usages

A Nuxt 3 Module (PrimeVue and Formkit bundled) under [nuxt-primevue](https://github.com/sfxcode/nuxt-primevue)

[Nuxt 3 PrimeVue Starter](https://github.com/sfxcode/nuxt3-primevue-starter) and [Vite PrimeVue Starter](https://github.com/sfxcode/vite-primevue-starter) with Formkit support available

## Supported Inputs

- Calendar
- Checkbox
- Dropdown
- Editor (HTML Editor)
- InputMask
- InputNumber
- InputSwitch
- InputText
- InputTextarea
- MultiSelect
- Password
- Ranking
- Chips
- Knob
- ColorPicker
- Listbox
- ToggleButton
- SelectButton
- TriStateCheckbox
- RadioButton

## Usage

```typescript

import { defaultConfig, plugin } from '@formkit/vue'
import { primeInputs } from '@sfxcode/formkit-primevue'


  app.use(plugin, defaultConfig({
    locales: { de, en },
    // Define the active locale
    locale: 'en',
    inputs: primeInputs,
  }))
```

![](formkit-primevue.png)

