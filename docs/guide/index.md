# Formkit PrimeVue

**formkit-primevue** combines the [PrimeVue](https://primevue.org/) component framework (V4) with the validation power of [Formkit](https://formkit.com/) in your Vue/Nuxt application.

The main motivation for this project is to use Formkit Validation by Schema with form elements provided by PrimeVue.

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
