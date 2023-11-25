Getting Started

## Installation steps

### Install depenendencies

```sh
$ pnpm add -D @sfxcode/formkit-primevue
```

### PrimeVue

Make sure all components of PrimeVue you want to use are enabled in your configuration.

### Formkit Config

Add a formkit.config.ts to your root dir and register primeInputs for FormKit.

Sample:

```ts
// formkit.config.ts
import type { DefaultConfigOptions } from '@formkit/vue'
import { primeInputs } from '@sfxcode/formkit-primevue'

const config: DefaultConfigOptions = {
  inputs: primeInputs
}

export default config
```

