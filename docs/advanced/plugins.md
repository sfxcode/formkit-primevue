# Plugins

Plugins are a powerful way to extend the functionality of FormKit. They allow you to add new features, modify existing ones, or integrate with third-party services.

## AsteriskPlugin

The AsteriskPlugin is a simple plugin that adds an asterisk to the end of the label of any input that has validation rules.
This is useful for indicating to users that the field is required.

### Usage

To use the AsteriskPlugin, you need to import it and add it to your FormKit configuration file.

```ts
plugins: [
  addPrimeAsteriskPlugin,
]
```

## AutoAnimatePlugin

`createAutoAnimatePlugin` animates inputs and sections when they are added, removed or moved, for example the items of a `primeRepeater`.
It is a drop-in replacement for `createAutoAnimatePlugin` from `@formkit/addons` and takes the same arguments.

The addons plugin calls `autoAnimate()` again on every marked element each time a new input is created.
AutoAnimate does not dedupe, so each call adds another `MutationObserver` to the element.
After a few inserts or clones in a repeater the same element is watched by several observers and every change is animated again and again, which turns the animation fast and glitchy.
This plugin marks the same sections but attaches each element only once.

### Usage

Import it from `@sfxcode/formkit-primevue/plugins` instead of `@formkit/addons` and add it to your FormKit configuration file.

```ts
import { createAutoAnimatePlugin } from '@sfxcode/formkit-primevue/plugins'

plugins: [
  createAutoAnimatePlugin(
    {
      /* optional AutoAnimate config */
      duration: 250,
      easing: 'ease-in-out',
    },
    {
      /* optional animation targets: input type (or `global`) -> sections */
      global: ['outer', 'inner'],
      form: ['form'],
      primeRepeater: ['input'],
    },
  ),
]
```

A single section can also opt in with its own options through `meta.autoAnimate` in a custom schema.

::: tip
`createAutoAnimatePlugin` only touches the DOM in the browser, so it is safe to use with SSR.
:::
