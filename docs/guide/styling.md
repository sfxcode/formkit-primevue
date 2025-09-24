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

## Advanced Styling Examples

### Styling by Class and Style Attribute

You can apply custom classes or direct style attributes to your FormKit PrimeVue components:

```js
const schema = [
  {
    $formkit: 'primeInputText',
    name: 'name',
    label: 'Styling by class',
    class: 'stylingSampleClass',
  },
  {
    $formkit: 'primeInputText',
    name: 'name2',
    label: 'Styling by style attribute',
    style: { color: 'gray', fontWeight: 700 },
  },
]
```

```scss
.p-formkit {
  .stylingSampleClass {
    color: green;
  }
}
```

This allows you to use either a CSS class or inline styles for flexible customization.

---

### Using outerClass and innerClass

You can target the outer or inner wrapper of a component for more granular styling:

```js
const schema = [
  {
    $formkit: 'primeInputText',
    name: 'name',
    label: 'Styling outer class',
    outerClass: 'stylingOuterClass',
  },
  {
    $formkit: 'primeInputText',
    name: 'name2',
    label: 'Styling inner class',
    innerClass: 'stylingSampleClass',
  },
]
```

```scss
.stylingOuterClass {
  color: yellowgreen;
}
.stylingSampleClass input {
  color: green;
}
```

---

### Grid Layout

Use the grid system by assigning `outerClass` values like `col-6`, `col-8`, etc., to arrange fields responsively:

```js
const schema = [
  {
    $formkit: 'primeInputText',
    name: 'name',
    label: 'col-8',
    outerClass: 'col-8',
  },
  {
    $formkit: 'primeInputText',
    name: 'name2',
    label: 'col-4',
    outerClass: 'col-4',
  },
]
```

---

### Horizontal Forms

Combine grid classes and custom layout for horizontal forms:

```js
const schema = [
  {
    $formkit: 'primeInputText',
    name: 'email',
    label: 'Email',
    outerClass: 'col-6',
  },
  {
    $formkit: 'primePassword',
    name: 'password',
    label: 'Password',
    outerClass: 'col-5',
  },
  // ...
]
```

---

### PassThrough Styling

You can use the `pt` property to pass styles or classes directly to PrimeVue components:

```js
const pt_content = {
  root: { style: 'font-weight: 600;color: green;' },
}
const pt_content_style_class = {
  root: { class: '!text-red-500' },
}
const schema = [
  {
    $formkit: 'primeInputText',
    name: 'name',
    label: 'PassThrough with style',
    pt: pt_content,
  },
  {
    $formkit: 'primeInputText',
    name: 'name2',
    label: 'PassThrough with tailwind like style class',
    pt: pt_content_style_class,
  },
]
```

---
