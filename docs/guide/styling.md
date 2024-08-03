# Styling

PrimeVue has a lot of styling possiblities and the structure of a formkit form gives you all possibilities needed for advanced styling.

## Basic Styling

Basic styling is provided with the **formkit-primevue.scss** file.

Features:

- Width of all text and dropdown elements is set to 100%
- Error Color by variable (--formkit-error-color)
- Some margins, font sizes ...

You can use it or take it as base for your own styling.

## PrimeVue Tailwind / Unstyled mode

Make sure to add a class selector for **p-invalid**.

## Grid

**formkit-primevue.scss** defines a simple grid system based on flex with a 12 columns layout.

For example to place 2 elements side by side give both of them the **outerClass** value **col-6**.

```ts
const formkitItems = [
  {
    $formkit: 'primePassword',
    name: 'password',
    label: 'Password',
    help: 'Enter your new password.',
    validation: 'required|length:5,16',
    feedback: true,
    outerClass: 'col-6',
  },
  {
    $formkit: 'primePassword',
    name: 'password_confirm',
    label: 'Confirm password',
    help: 'Enter your new password again.',
    validation: 'required|confirm',
    validationLabel: 'password confirmation',
    outerClass: 'col-6',
  },
]
```

## Extended Styling

- All components are wrapped in a div with a **p-formkit** class
- Use *outerClass*, *wrapperClass*, *innerClass* to add additional styleclasses to formkit generated classes
- Most Prime Components have access to class / styles attributes
- Some Components have addtional properties for the rendered inputs (eg: optionClass, labelClass in primeRadioButton)
- PT and PTOptions are available ([https://primevue.org/passthrough/](https://primevue.org/passthrough/))
- [Styling](https://formkit-primevue.netlify.app/demo/styling), [Grid](https://formkit-primevue.netlify.app/demo/grid) and [PT](https://formkit-primevue.netlify.app/demo/passThrough) demo available
