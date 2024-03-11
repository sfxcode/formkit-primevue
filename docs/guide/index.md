# Formkit PrimeVue

**formkit-primevue** combines the [PrimeVue](https://www.primefaces.org/primevue) component framework with the validation power of [Formkit](https://formkit.com/) in your Vue/Nuxt application.

The main motivation for this project is to use Formkit Validation by Schema with form elements provided by PrimeVue.

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
