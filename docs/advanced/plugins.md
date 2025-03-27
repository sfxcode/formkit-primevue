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