# Formkit PrimeVue

**formkit-primevue** combines the [PrimeVue](https://primevue.org/) component framework (V4) with the validation power of [Formkit](https://formkit.com/) in your Vue/Nuxt application.

The main motivation for this project is to use Formkit Validation by Schema with form elements provided by PrimeVue.

## Alternative: formkit-openvue

[sfxcode/formkit-openvue](https://github.com/sfxcode/formkit-openvue) provides OpenVue based FormKit inputs. It is the natural successor if you want to keep the schema-driven form approach of this project on a fully open source component base, independent of PrimeVue's licensing changes.

[Docs](https://sfxcode.github.io/formkit-openvue/) | [Demo/Playground](https://formkit-openvue.netlify.app/)

## Alternative: nuxt-ui-formkit

[sfxcode/nuxt-ui-formkit](https://github.com/sfxcode/nuxt-ui-formkit) integrates FormKit form handling with [Nuxt UI](https://ui.nuxt.com/) components for Nuxt 4. Choose it if your application is built on Nuxt UI instead of PrimeVue.

[Docs](https://sfxcode.github.io/nuxt-ui-formkit/) | [Demo/Playground](https://nuxt-ui-formkit.netlify.app/)

## Guide Overview

Navigate the guide to learn about all features and usage:

- [Getting Started](getting-started.md): How to install and set up FormKit PrimeVue in your project.
- [Form](form.md): Creating and managing forms with FormKit and PrimeVue.
- [Inputs](inputs.md): Overview and usage of input components.
- [Outputs](outputs.md): Display and output components for showing data.
- [Options](options.md): Working with options, selects, and dropdowns.
- [Prefix](prefix.md): Using prefixes and suffixes in your form fields.
- [Styling](styling.md): Styling your forms and components, including advanced customization.
- [Examples](examples.md): Practical code examples and usage patterns.
- [Usage](usage.md): General usage tips and best practices.
- [History](history.md): Changelog and project history.

## Formkit Schema

[Formkit Schema Documentation](https://formkit.com/essentials/schema)

::: info
FormKit's schema is a JSON-serializable data format for storing DOM structures and component implementations, including FormKit forms. Although created specifically for implementing and generating forms, the format is capable of generating any HTML markup or using any third-party components.
:::

PrimeVue inputs are prefixed with prime and try to use as many properties as possible from their definition.

```ts
const schema = reactive(
  [
    {
      $el: 'h2',
      children: ['Register ', '$email'],
    },
    {
      $el: 'h3',
      children: 'Header Text H3',
    },
    {
      $formkit: 'primeInputText',
      name: 'email',
      label: 'Email',
      help: 'This will be used for your account.',
      validation: 'required|email',
    },
    {
      $formkit: 'primeTextarea',
      name: 'myText',
      label: 'Text',
      validation: '',
      rows: '3',
    }
  ]
)
```
