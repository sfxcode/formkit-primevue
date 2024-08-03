# Usage Examples

All **Output classes** support the **optional** usage of a prefix (text/icon) and a suffix (text/icon).

**InputText** and **InputMask** uses iconPrefix/iconSuffix, **CheckBox** and **ToggleButton** uses prefix/suffix.

::: warning
FormKit use the props prefixIcon/suffixIcon internal for theme and provides a lookup for available icons when some pattern for props is used.
To prevent the behavior for this framework the property names are switched to **iconPrefix** and **iconSuffix**.
:::
## Sample Definition

```ts
export const primeOutputTextDefinition: FormKitTypeDefinition = createInput(PrimeOutputText, {
  props: ['prefix', 'suffix', 'iconPrefix', 'iconSuffix'],
})
```

Icons are rendered in an i-Tag and requires a class and text in a span-Tag.

## Example

```ts
const schema
= [
  {
    $formkit: 'primeOutputBoolean',
    name: 'falseValue',
    label: 'False',
    prefix: 'prefix',
    iconPrefix: 'pi pi-check',
    suffix: 'suffix',
    iconSuffix: 'pi pi-times',
  }
]
```
