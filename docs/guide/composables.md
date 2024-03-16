# Composables

Composables are used make your development with this library a little easier.

## useFormkitSchema

This composable provides helper functions to simplify building a schema.

Sometimes it provides a little more concise syntax or provide the needed helper functions.

### addComponent

```ts
const { addComponent } = useFormKitSchema()

function addButtonComponent(onClick: string = '', label: string = '', icon: string = '', severity: string = '', render: string = 'true', styleClass: string = 'p-button-sm ml-2'): object {
  return addComponent('Button', { onClick, label, icon, class: styleClass, severity }, render)
}
```

### addElement

Following json in the schema

```json
[
  {
    "$el": "h2",
    "children": ["Register ", "$email"]
  },
  {
    "$el": "h3",
    "children": "Header Text H3"
  }
]
```

can be replaced by:

```ts
const { addElement } = useFormKitSchema()

const formData = ref([
  addElement('h2', ['Register ', '$email']),
  addElement('h3', 'Header Text H3')
  // more form elements ...
])
```

### Repeater

To simplify the build of a repeater you can use:

- addList
- addListGroup
- addListGroupFunctions

A working example can be found in the [repeater demo](https://github.com/sfxcode/formkit-primevue/blob/main/dev/pages/samples/Repeater.vue).
