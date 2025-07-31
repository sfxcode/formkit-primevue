## v3.0.2

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v3.0.1...v3.0.2)

### 🏡 Chore

- Update primevue, @primeuix/themes, and typescript versions in package.json ([7042268](https://github.com/sfxcode/formkit-primevue/commit/7042268))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v3.0.1

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v3.0.0...v3.0.1)

### 🚀 Enhancements

- Add prefix and suffix icon click handlers to output components ([838a607](https://github.com/sfxcode/formkit-primevue/commit/838a607))
- Remove Editor route from AppTopbar navigation ([ee3e0f7](https://github.com/sfxcode/formkit-primevue/commit/ee3e0f7))
- Replace FormKit components with custom FormKitDataEdit and FormKitDataView ([4a129a9](https://github.com/sfxcode/formkit-primevue/commit/4a129a9))
- Add help text to InputText component ([014e4ea](https://github.com/sfxcode/formkit-primevue/commit/014e4ea))
- Add demo label plugin for FormKit nodes with help text support by title and hide help section ([a44d2a2](https://github.com/sfxcode/formkit-primevue/commit/a44d2a2))
- Add PrimeLabel component with help text support for FormKit nodes showing custom plugin sample for demo ([d4023e3](https://github.com/sfxcode/formkit-primevue/commit/d4023e3))
- Remove unused inputClass variable from PrimeInput component ([bcf5b93](https://github.com/sfxcode/formkit-primevue/commit/bcf5b93))
- Add type safety to iconClass and onClick props in FormKit components ([7dcd135](https://github.com/sfxcode/formkit-primevue/commit/7dcd135))
- Remove unused imports of defineProps in FormKitIcon, FormKitPrefix, and FormKitSuffix components ([54e8dc6](https://github.com/sfxcode/formkit-primevue/commit/54e8dc6))

### 🏡 Chore

- **release:** Update release script to use patch versioning ([18affbb](https://github.com/sfxcode/formkit-primevue/commit/18affbb))
- Update package versions in package.json and pnpm-lock.yaml ([12c112f](https://github.com/sfxcode/formkit-primevue/commit/12c112f))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v3.0.0

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.9.9...v3.0.0)

### 🏡 Chore

- **dependencies:** Update package versions for improved compatibility ([3978388](https://github.com/sfxcode/formkit-primevue/commit/3978388))
- **release:** Update release script to use major versioning ([e0ef4b7](https://github.com/sfxcode/formkit-primevue/commit/e0ef4b7))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.9.9

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.9.8...v2.9.9)

### 🚀 Enhancements

- **PrimeAutoComplete:** Enhance paste handling to support direct value assignment when no separators are provided ([8d41299](https://github.com/sfxcode/formkit-primevue/commit/8d41299))

### 🩹 Fixes

- **PrimeAutoComplete:** Improve v-model synchronization and handle paste events with local state ([c65c4a6](https://github.com/sfxcode/formkit-primevue/commit/c65c4a6))
- **AppTopbar:** Remove 'Form Editor' sample for the moment ([157618e](https://github.com/sfxcode/formkit-primevue/commit/157618e))

### 🏡 Chore

- **dependencies:** Update package versions for improved compatibility ([b5a8487](https://github.com/sfxcode/formkit-primevue/commit/b5a8487))
- **dependencies:** Downgrade quill to version 1.3.7 and update related dependencies - fix dev:build error when importing Editor Component ([7c75a11](https://github.com/sfxcode/formkit-primevue/commit/7c75a11))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.9.8

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.9.7...v2.9.8)

### 🚀 Enhancements

- **PrimeAutoComplete:** Default use commas as separator on paste, add support for multiple custom separators in paste handling, ([2de6dca](https://github.com/sfxcode/formkit-primevue/commit/2de6dca))

### 🏡 Chore

- **dependencies:** Update package versions for improved compatibility ([493566e](https://github.com/sfxcode/formkit-primevue/commit/493566e))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.9.7

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.9.6...v2.9.7)

### 🚀 Enhancements

- **demo:** Add another AutoComplete sample with async complete function and new props (fluid, placeholder, minLength) ([6a949e6](https://github.com/sfxcode/formkit-primevue/commit/6a949e6))
- **primeSelect:** Replace deprecated properties panelStyle/panelClass with overlayStyle/overlayClass ([d33735b](https://github.com/sfxcode/formkit-primevue/commit/d33735b))

### 🩹 Fixes

- **primeAutoComplete:** Fix custom input definition for additional props (minLength, placeholder, fluid) ([52cf18a](https://github.com/sfxcode/formkit-primevue/commit/52cf18a))

### ❤️ Contributors

- Henry Jobst <github@jobst-berlin.de>

## v2.9.6

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.9.5...v2.9.6)

### 💅 Refactors

- **useFormKitSection:** Replace uuid with crypto.randomUUID for ID generation ([48f27a0](https://github.com/sfxcode/formkit-primevue/commit/48f27a0))

### 🏡 Chore

- **dependencies:** Update package versions for improved compatibility ([6aeafcd](https://github.com/sfxcode/formkit-primevue/commit/6aeafcd))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.9.5

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.9.4...v2.9.5)

### 🚀 Enhancements

- **primeAutoComplete:** Enable async complete functions with loading state, add additional properties (minLength, placeholder, fluid) ([2fcd37a](https://github.com/sfxcode/formkit-primevue/commit/2fcd37a))
- **primeAutoComplete:** Enable async complete functions with loading state, add additional properties (minLength, placeholder, fluid) ([a8d8535](https://github.com/sfxcode/formkit-primevue/commit/a8d8535))

### 🏡 Chore

- **dependencies:** Update to PrimeVue 4.3.5 ([18eced4](https://github.com/sfxcode/formkit-primevue/commit/18eced4))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))
- Henry Jobst <github@jobst-berlin.de>

## v2.9.4

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.9.3...v2.9.4)

### 💅 Refactors

- Better deal with nullish values ([6299a59](https://github.com/sfxcode/formkit-primevue/commit/6299a59))
- Make h and m case insensitive ([a9c1252](https://github.com/sfxcode/formkit-primevue/commit/a9c1252))
- Tests ([5ac3b77](https://github.com/sfxcode/formkit-primevue/commit/5ac3b77))
- Make code null safe and add tests ([fc23eba](https://github.com/sfxcode/formkit-primevue/commit/fc23eba))
- Make code null safe ([899c244](https://github.com/sfxcode/formkit-primevue/commit/899c244))

### 🎨 Styles

- **linting:** Fix error ([2c39e2b](https://github.com/sfxcode/formkit-primevue/commit/2c39e2b))
- **linting:** Fix error ([fa70814](https://github.com/sfxcode/formkit-primevue/commit/fa70814))
- **linting:** Fix error ([d014e15](https://github.com/sfxcode/formkit-primevue/commit/d014e15))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.9.3

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.9.2...v2.9.3)

### 🚀 Enhancements

- **demo:** Add MultiStep sample ([11bca00](https://github.com/sfxcode/formkit-primevue/commit/11bca00))
- **demo:** Add MultiStep sample ([53df6d2](https://github.com/sfxcode/formkit-primevue/commit/53df6d2))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.9.2

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.9.1...v2.9.2)

### 💅 Refactors

- **Editor:** Make Editor Optional ([fbe99d2](https://github.com/sfxcode/formkit-primevue/commit/fbe99d2))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.9.1

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.9.0...v2.9.1)

### 💅 Refactors

- **Editor:** Make Editor Optional ([56ef07f](https://github.com/sfxcode/formkit-primevue/commit/56ef07f))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.9.0

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.8.7...v2.9.0)

### 💅 Refactors

- **Editor:** ⚠️  Make Editor Optional ([bd92474](https://github.com/sfxcode/formkit-primevue/commit/bd92474))
- **dependencies:** ⚠️  Make @formkit/drag-and-drop Optional - because it is only used in demo app ([b27924d](https://github.com/sfxcode/formkit-primevue/commit/b27924d))
- **dependencies:** ⚠️  Make vue-i18n Optional - because it is only used if register primeOutput components  - needs to be imported if needed ([0cf32cc](https://github.com/sfxcode/formkit-primevue/commit/0cf32cc))

### 🏡 Chore

- **release:** Change next version to minor ([76054a4](https://github.com/sfxcode/formkit-primevue/commit/76054a4))

#### ⚠️ Breaking Changes

- **Editor:** ⚠️  Make Editor Optional ([bd92474](https://github.com/sfxcode/formkit-primevue/commit/bd92474))
- **dependencies:** ⚠️  Make @formkit/drag-and-drop Optional - because it is only used in demo app ([b27924d](https://github.com/sfxcode/formkit-primevue/commit/b27924d))
- **dependencies:** ⚠️  Make vue-i18n Optional - because it is only used if register primeOutput components  - needs to be imported if needed ([0cf32cc](https://github.com/sfxcode/formkit-primevue/commit/0cf32cc))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.8.7

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.8.6...v2.8.7)

### 🚀 Enhancements

- **primeOutputList:** Add listStyles: span, div, ul, ol ([4867beb](https://github.com/sfxcode/formkit-primevue/commit/4867beb))

### 💅 Refactors

- **header:** List Style featured ([3f792d0](https://github.com/sfxcode/formkit-primevue/commit/3f792d0))

### 🏡 Chore

- **dependencies:** Update dependencies ([5ba9ac1](https://github.com/sfxcode/formkit-primevue/commit/5ba9ac1))

### 🎨 Styles

- **linting:** Fix error ([b6f195b](https://github.com/sfxcode/formkit-primevue/commit/b6f195b))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.8.6

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.8.5...v2.8.6)

### 🏡 Chore

- **dependencies:** Update dependencies ([47fa629](https://github.com/sfxcode/formkit-primevue/commit/47fa629))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.8.5

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.8.4...v2.8.5)

### 💅 Refactors

- **unocss:** Change to presetWind3 ([9e927fc](https://github.com/sfxcode/formkit-primevue/commit/9e927fc))
- **components:** Add needed values for PrimeVue 4.3.4 ([3cad665](https://github.com/sfxcode/formkit-primevue/commit/3cad665))

### 🏡 Chore

- **dependencies:** Update to PrimeVue 4.3.4 ([6cd2f03](https://github.com/sfxcode/formkit-primevue/commit/6cd2f03))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.8.4

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.8.3...v2.8.4)

### 🏡 Chore

- **dependencies:** Update dependencies ([596fb40](https://github.com/sfxcode/formkit-primevue/commit/596fb40))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.8.3

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.8.2...v2.8.3)

### 🏡 Chore

- **dependencies:** Update dependencies to latest versions ([a0f541a](https://github.com/sfxcode/formkit-primevue/commit/a0f541a))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.8.2

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.8.1...v2.8.2)

### 🩹 Fixes

- **FormKitDataEdit:** Data was not submitted by dataSaved ([6295920](https://github.com/sfxcode/formkit-primevue/commit/6295920))
- **FormKitDataEdit:** Data was not submitted by dataSaved ([bfcc5dd](https://github.com/sfxcode/formkit-primevue/commit/bfcc5dd))

### 📖 Documentation

- **vitepress:** Add additional documentation files ([4cee2c5](https://github.com/sfxcode/formkit-primevue/commit/4cee2c5))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.8.1

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.8.0...v2.8.1)

### 📖 Documentation

- **vitepress:** Add additional documentation files ([895daf1](https://github.com/sfxcode/formkit-primevue/commit/895daf1))

### 🏡 Chore

- **release:** Change next version to patch ([593921f](https://github.com/sfxcode/formkit-primevue/commit/593921f))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.8.0

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.7.9...v2.8.0)

### 🚀 Enhancements

- **reset:** Add reset to FormKitDataEdit component ([0afe6fc](https://github.com/sfxcode/formkit-primevue/commit/0afe6fc))
- **components:** FormKitDataEdit / FormKitDataView - Add optional v-model for form data ([519d199](https://github.com/sfxcode/formkit-primevue/commit/519d199))

### 🩹 Fixes

- Typescript Errors ([109683c](https://github.com/sfxcode/formkit-primevue/commit/109683c))

### 🏡 Chore

- **dependencies:** Update to primevue 4.3.3 ([c1eb176](https://github.com/sfxcode/formkit-primevue/commit/c1eb176))
- **release:** Change next version to minor ([8d72649](https://github.com/sfxcode/formkit-primevue/commit/8d72649))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.7.9

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.7.8...v2.7.9)

### 🏡 Chore

- **dependencies:** Update to primevue 4.3.02 - Fixes Autocomplete Issues ([005ae09](https://github.com/sfxcode/formkit-primevue/commit/005ae09))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.7.8

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.7.7...v2.7.8)

### 🩹 Fixes

- **linting:** Prefer typeof syntax ([e0cdd3b](https://github.com/sfxcode/formkit-primevue/commit/e0cdd3b))

### 🏡 Chore

- **dependencies:** Update dependencies to latest versions - PrimeVue 4.3.1 ([91d1fb2](https://github.com/sfxcode/formkit-primevue/commit/91d1fb2))

### ❤️ Contributors

- Sfxcode ([@sfxcode](https://github.com/sfxcode))

## v2.7.7

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.7.6...v2.7.7)

### 🩹 Fixes

- **Textarea:** Add rows to FormKitPrimeTextareaProps ([6a9e44f](https://github.com/sfxcode/formkit-primevue/commit/6a9e44f))

### 🏡 Chore

- **dependencies:** Update to primevue 4.3.0 ([5254c7f](https://github.com/sfxcode/formkit-primevue/commit/5254c7f))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.7.6

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.7.5...v2.7.6)

### 📦 Build

- **github:** Update Workflow ([1ee7153](https://github.com/sfxcode/formkit-primevue/commit/1ee7153))
- **github:** Update Workflow ([d7a257b](https://github.com/sfxcode/formkit-primevue/commit/d7a257b))

### 🏡 Chore

- **dependencies:** Update to latest versions ([f3f9001](https://github.com/sfxcode/formkit-primevue/commit/f3f9001))
- **dependencies:** Update to latest versions ([a2ff1da](https://github.com/sfxcode/formkit-primevue/commit/a2ff1da))
- **dependencies:** Update to latest versions ([26b29a6](https://github.com/sfxcode/formkit-primevue/commit/26b29a6))
- **dependencies:** Update minor dependencies ([27e4038](https://github.com/sfxcode/formkit-primevue/commit/27e4038))
- **dependencies:** Update minor dependencies - "@formkit/drag-and-drop 0.4.0 ([65fa1d7](https://github.com/sfxcode/formkit-primevue/commit/65fa1d7))

### 🎨 Styles

- **linting:** Fix lint problems ([4e746ae](https://github.com/sfxcode/formkit-primevue/commit/4e746ae))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.7.5

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.7.4...v2.7.5)

### 🏡 Chore

- **dependencies:** Update all dependencies ([fe6c0d4](https://github.com/sfxcode/formkit-primevue/commit/fe6c0d4))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.7.4

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.7.3...v2.7.4)

### 🏡 Chore

- **dependencies:** Update formkit drag and drop ([4a2550d](https://github.com/sfxcode/formkit-primevue/commit/4a2550d))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.7.3

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.7.2...v2.7.3)

### 🚀 Enhancements

- **wrappedPrimeInputs:** Move export to definitions ([c55efc6](https://github.com/sfxcode/formkit-primevue/commit/c55efc6))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.7.2

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.7.1...v2.7.2)

### 🚀 Enhancements

- **wrappedPrimeInputs:** List of PrimeVue inputs used by this Library plus Button needed for Form ([a683bb5](https://github.com/sfxcode/formkit-primevue/commit/a683bb5))

### 🏡 Chore

- **dependencies:** Update i18n to intlify version 11.x ([ab75afa](https://github.com/sfxcode/formkit-primevue/commit/ab75afa))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.7.1

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.7.0...v2.7.1)

### 💅 Refactors

- **sass:** Use latest sass version and replace @import with @use in scss files ([33746bd](https://github.com/sfxcode/formkit-primevue/commit/33746bd))

### 🏡 Chore

- **release:** Switch back to patch releases ([107d89a](https://github.com/sfxcode/formkit-primevue/commit/107d89a))
- **dependencies:** Update i18n to intlify version 10.x ([1905735](https://github.com/sfxcode/formkit-primevue/commit/1905735))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.7.0

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.6.11...v2.7.0)

### 🏡 Chore

- **dependencies:** PrimeVue 4.2.4 and update other dependencies ([69d8a78](https://github.com/sfxcode/formkit-primevue/commit/69d8a78))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.6.11

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.6.10...v2.6.11)

### 🚀 Enhancements

- **InputText:** Add a prop to set the underlying input type #67 ([#67](https://github.com/sfxcode/formkit-primevue/issues/67))

### 🏡 Chore

- **dependencies:** Update ([565bc23](https://github.com/sfxcode/formkit-primevue/commit/565bc23))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.6.10

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.6.9...v2.6.10)

## v2.6.9

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.6.8...v2.6.9)

### 🩹 Fixes

- **Textarea:** Property 'rows' does not exist on type 'TextareaProps' ([38862e4](https://github.com/sfxcode/formkit-primevue/commit/38862e4))

### 🏡 Chore

- **dependencies:** PrimeVue 4.2.4 ([3928ebd](https://github.com/sfxcode/formkit-primevue/commit/3928ebd))
- **dependencies:** Revert to typescript 5.6 ([7fa6ae1](https://github.com/sfxcode/formkit-primevue/commit/7fa6ae1))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.6.8

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.6.7...v2.6.8)

### 🚀 Enhancements

- **types:** Add options attribute to custom component types #66 ([#66](https://github.com/sfxcode/formkit-primevue/issues/66))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.6.7

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.6.6...v2.6.7)

### 🏡 Chore

- **dependencies:** FormKit 1.6.9 ([2612038](https://github.com/sfxcode/formkit-primevue/commit/2612038))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.6.6

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.6.5...v2.6.6)

### 🏡 Chore

- **dependencies:** PrimeVue 4.2.2 - FormKit 1.6.8 ([db5233d](https://github.com/sfxcode/formkit-primevue/commit/db5233d))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.6.5

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.6.4...v2.6.5)

### 🚀 Enhancements

- **inputs:** Add size attributes (introduced in primevue 4.2) ([e4382a5](https://github.com/sfxcode/formkit-primevue/commit/e4382a5))
- **types:** Add custom component types #41 ([#41](https://github.com/sfxcode/formkit-primevue/issues/41))

### 🏡 Chore

- **dependencies:** Update ([5d2ff06](https://github.com/sfxcode/formkit-primevue/commit/5d2ff06))
- **linting:** Add more directories ([d727617](https://github.com/sfxcode/formkit-primevue/commit/d727617))
- **linting:** Exclude dev ([ecaabd6](https://github.com/sfxcode/formkit-primevue/commit/ecaabd6))
- **linting:** Exclude dev ([3934715](https://github.com/sfxcode/formkit-primevue/commit/3934715))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.6.4

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.6.3...v2.6.4)

### 📖 Documentation

- Update to [FormKit-PrimeVue-Nuxt](https://github.com/sfxcode/formkit-primevue-nuxt) ([0d5c891](https://github.com/sfxcode/formkit-primevue/commit/0d5c891))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.6.3

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.6.2...v2.6.3)

### 🚀 Enhancements

- **usePrimeInputs:** Add Button ([cd5b2e9](https://github.com/sfxcode/formkit-primevue/commit/cd5b2e9))
- **usePrimeInputs:** Add Button ([3ca892f](https://github.com/sfxcode/formkit-primevue/commit/3ca892f))

### 📦 Build

- **release:** Add test step ([10cd286](https://github.com/sfxcode/formkit-primevue/commit/10cd286))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.6.2

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.6.1...v2.6.2)

### 📦 Build

- **release:** Add test step ([7af963b](https://github.com/sfxcode/formkit-primevue/commit/7af963b))

### 🏡 Chore

- **dependencies:** PrimeVue 4.2.1 ([0161169](https://github.com/sfxcode/formkit-primevue/commit/0161169))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.6.1

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.5.12...v2.6.1)

### 🚀 Enhancements

- **FormEditor:** Remember last used Editor Tab ([931953e](https://github.com/sfxcode/formkit-primevue/commit/931953e))
- **JsonEditor:** Prevent Table tab to expand to full width ([20c2475](https://github.com/sfxcode/formkit-primevue/commit/20c2475))
- **useFormKitSchema:** Allow also boolean value for render ([eb11fde](https://github.com/sfxcode/formkit-primevue/commit/eb11fde))
- **useFormKitSchema:** Allow also boolean value for render ([2f0b2b0](https://github.com/sfxcode/formkit-primevue/commit/2f0b2b0))
- **useFormKitSchema:** Allow also boolean value for render property ([ac6ef3d](https://github.com/sfxcode/formkit-primevue/commit/ac6ef3d))

### 🏡 Chore

- **dependencies:** Update ([55fde26](https://github.com/sfxcode/formkit-primevue/commit/55fde26))
- **dependencies:** PrimeVue 4.2.0 ([f6f1193](https://github.com/sfxcode/formkit-primevue/commit/f6f1193))
- **dependencies:** PrimeVue 4.2.0 ([909b621](https://github.com/sfxcode/formkit-primevue/commit/909b621))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.5.12

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.5.11...v2.5.12)

### 🚀 Enhancements

- **FormKitDataEdit:** Add named slots for messages / submit ([976f184](https://github.com/sfxcode/formkit-primevue/commit/976f184))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.5.11

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.5.10...v2.5.11)

### 🩹 Fixes

- **dependabot:** Fix cookie security issue ([fe84224](https://github.com/sfxcode/formkit-primevue/commit/fe84224))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.5.10

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.5.9...v2.5.10)

### 🩹 Fixes

- **typescript:** Use vue-tsc in build step / fix typescript errors in src  #41 ([#41](https://github.com/sfxcode/formkit-primevue/issues/41))

### 🏡 Chore

- **dependencies:** Update unocss and formkit  drag and drop ([efa9792](https://github.com/sfxcode/formkit-primevue/commit/efa9792))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.5.9

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.5.8...v2.5.9)

### 🏡 Chore

- **dependencies:** PrimeVue 4.1.1 ([bd777c8](https://github.com/sfxcode/formkit-primevue/commit/bd777c8))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.5.8

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.5.7...v2.5.8)

### 🩹 Fixes

- **datepicker:** Multiple and range not working #62 ([#62](https://github.com/sfxcode/formkit-primevue/issues/62))

### 🏡 Chore

- **dependencies:** Vue 3.5.11 ([8c2ebbe](https://github.com/sfxcode/formkit-primevue/commit/8c2ebbe))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.5.7

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.5.6...v2.5.7)

### 🚀 Enhancements

- **PrimeAutoComplete:** Add options support with sample #61 ([#61](https://github.com/sfxcode/formkit-primevue/issues/61))

### 💅 Refactors

- **FormKitDataEdit:** Add button class prop ([d3aa040](https://github.com/sfxcode/formkit-primevue/commit/d3aa040))

### 📦 Build

- **dependencies:** Revert to unbuild 2.0.0 ([5bb44fc](https://github.com/sfxcode/formkit-primevue/commit/5bb44fc))

### 🏡 Chore

- **dependencies:** PrimeVue 4.1.0 ([d5a312a](https://github.com/sfxcode/formkit-primevue/commit/d5a312a))
- **dependencies:** PrimeVue 4.1.0 ([1661cb2](https://github.com/sfxcode/formkit-primevue/commit/1661cb2))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.5.6

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.5.5...v2.5.6)

### 🏡 Chore

- **dependencies:** Vue  3.5.11 ([504b08a](https://github.com/sfxcode/formkit-primevue/commit/504b08a))
- **dependencies:** Vue i18n ([89e67e9](https://github.com/sfxcode/formkit-primevue/commit/89e67e9))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.5.5

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.5.4...v2.5.5)

### 🎨 Styles

- **sass:** Replace unocss apply with css expression ([3b176f3](https://github.com/sfxcode/formkit-primevue/commit/3b176f3))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.5.4

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.5.3...v2.5.4)

### 🏡 Chore

- **dependencies:** Stay with vue-i18n@9.x ([26c0d41](https://github.com/sfxcode/formkit-primevue/commit/26c0d41))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.5.3

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.5.2...v2.5.3)

### 🩹 Fixes

- **PrimeOutputText:** Remove wrapper span ([1308ae1](https://github.com/sfxcode/formkit-primevue/commit/1308ae1))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.5.2

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.5.1...v2.5.2)

### 🩹 Fixes

- **PrimeOutputText:** Remove wrapper span ([db72166](https://github.com/sfxcode/formkit-primevue/commit/db72166))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.5.1

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.5.0...v2.5.1)

### 🩹 Fixes

- **PrimeOutputText:** Add import for computed ([2274bfb](https://github.com/sfxcode/formkit-primevue/commit/2274bfb))

### 🏡 Chore

- **release:** Revert changelogen back to patch ([f0177be](https://github.com/sfxcode/formkit-primevue/commit/f0177be))
- **dependencies:** Update ([4623969](https://github.com/sfxcode/formkit-primevue/commit/4623969))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.5.0

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.19...v2.5.0)

### 🚀 Enhancements

- **PrimeOutputText:** IsTranslationKey prop added and i18n handling ([cc51941](https://github.com/sfxcode/formkit-primevue/commit/cc51941))
- **PrimeOutputText:** IsTranslationKey prop added and i18n handling ([69debed](https://github.com/sfxcode/formkit-primevue/commit/69debed))

### 💅 Refactors

- **FormKitDataEdit:** Use FormKit form slots and PrimeVue Button component - try to fix #59 - add some more styling ([#59](https://github.com/sfxcode/formkit-primevue/issues/59))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.19

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.18...v2.4.19)

### 🚀 Enhancements

- **slots:** Support Slots ([87a3119](https://github.com/sfxcode/formkit-primevue/commit/87a3119))
- **slots:** Add default slots to data components ([c4005f4](https://github.com/sfxcode/formkit-primevue/commit/c4005f4))
- **demos:** Add Data Demos including Slots ([161acba](https://github.com/sfxcode/formkit-primevue/commit/161acba))

### 💅 Refactors

- **demos:** Update and create messages composable ([248e3dc](https://github.com/sfxcode/formkit-primevue/commit/248e3dc))

### 🏡 Chore

- **cleanup:** Remove unused files ([71097d1](https://github.com/sfxcode/formkit-primevue/commit/71097d1))
- **dependencies:** Update and add quill as dependency #55 ([#55](https://github.com/sfxcode/formkit-primevue/issues/55))
- **dependencies:** Update and add quill as dependency #55 ([#55](https://github.com/sfxcode/formkit-primevue/issues/55))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.18

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.17...v2.4.18)

### 🚀 Enhancements

- **inputs:** Remove defaults in components pointing to prime icons because the actual default use svg #57 ([#57](https://github.com/sfxcode/formkit-primevue/issues/57))

### 🏡 Chore

- Update dependencies ([693ebbf](https://github.com/sfxcode/formkit-primevue/commit/693ebbf))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.17

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.16...v2.4.17)

### 🚀 Enhancements

- **inputs:** Use no icon field wrapper if no icons are defined #54 ([#54](https://github.com/sfxcode/formkit-primevue/issues/54))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.16

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.15...v2.4.16)

### 🚀 Enhancements

- **registerInputs:** Move to index.ts ([003daef](https://github.com/sfxcode/formkit-primevue/commit/003daef))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.15

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.14...v2.4.15)

### 🩹 Fixes

- **InputNumber:** Add import for watch #53 ([#53](https://github.com/sfxcode/formkit-primevue/issues/53))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.14

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.13...v2.4.14)

### 🩹 Fixes

- **InputNumber:** Number was not updated correctly when using min value, fix rounding issue #53 ([#53](https://github.com/sfxcode/formkit-primevue/issues/53))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.13

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.12...v2.4.13)

## v2.4.12

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.11...v2.4.12)

### 🩹 Fixes

- **InputNumber:** Number was not updated correctly #53 ([#53](https://github.com/sfxcode/formkit-primevue/issues/53))
- **InputMask:** Changes was not reflected properly ([46eee08](https://github.com/sfxcode/formkit-primevue/commit/46eee08))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.11

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.10...v2.4.11)

### 🚀 Enhancements

- **unstyled:** Safer handling of usePrimeVue ([50b8af7](https://github.com/sfxcode/formkit-primevue/commit/50b8af7))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.10

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.9...v2.4.10)

### 🚀 Enhancements

- **unstyled:** Reflect changes in primevue config ([1547f2d](https://github.com/sfxcode/formkit-primevue/commit/1547f2d))
- **unstyled:** Reflect changes in primevue config ([e80678a](https://github.com/sfxcode/formkit-primevue/commit/e80678a))

### 📖 Documentation

- **badges:** Add ([0cac8d6](https://github.com/sfxcode/formkit-primevue/commit/0cac8d6))
- **badges:** Add ([6a5e9c8](https://github.com/sfxcode/formkit-primevue/commit/6a5e9c8))

### 🏡 Chore

- Update dependencies ([a9e62bd](https://github.com/sfxcode/formkit-primevue/commit/a9e62bd))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.9

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.8...v2.4.9)

### 🏡 Chore

- Dependencies use intlify 9.14 ([777e770](https://github.com/sfxcode/formkit-primevue/commit/777e770))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.8

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.7...v2.4.8)

### 🏡 Chore

- Update dependencies Vue 3.5, FormKit 1.6.6, PrimeVue 4.0.7 ([f59dcf6](https://github.com/sfxcode/formkit-primevue/commit/f59dcf6))
- Linting ([fd823aa](https://github.com/sfxcode/formkit-primevue/commit/fd823aa))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.7

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.6...v2.4.7)

### 🩹 Fixes

- Null safe value for PrimeOutputLink ([73d0115](https://github.com/sfxcode/formkit-primevue/commit/73d0115))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.6

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.5...v2.4.6)

### 🚀 Enhancements

- **primeInputs:** Create composable for easy setup of the needed components ([104976a](https://github.com/sfxcode/formkit-primevue/commit/104976a))

### 💅 Refactors

- **demo:** Update Footer ([78435d3](https://github.com/sfxcode/formkit-primevue/commit/78435d3))
- **demo:** Add usePrimeInputs ([2a9d8e0](https://github.com/sfxcode/formkit-primevue/commit/2a9d8e0))

### 🏡 Chore

- Update dependencies ([b887014](https://github.com/sfxcode/formkit-primevue/commit/b887014))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.5

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.4...v2.4.5)

### 💅 Refactors

- **OutputReference:** Remove the direct import for vue router RouterLink and use only the component name as default #50 ([#50](https://github.com/sfxcode/formkit-primevue/issues/50))

### 🏡 Chore

- Update dependencies to latest primevue version ([f1ddf55](https://github.com/sfxcode/formkit-primevue/commit/f1ddf55))
- Linting ([4bf4b22](https://github.com/sfxcode/formkit-primevue/commit/4bf4b22))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.4

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.3...v2.4.4)

### 🩹 Fixes

- **demo:** JsonEditorVue Live Update was broken ([da72199](https://github.com/sfxcode/formkit-primevue/commit/da72199))
- **demo:** JsonEditorVue Live Update was broken ([4dd6702](https://github.com/sfxcode/formkit-primevue/commit/4dd6702))
- **demo:** Update Styling Homepage ([b4edb49](https://github.com/sfxcode/formkit-primevue/commit/b4edb49))

### 💅 Refactors

- **css:** Remove unused css ([43602a3](https://github.com/sfxcode/formkit-primevue/commit/43602a3))
- **css:** Use css by Aura Theme ([d8e4a43](https://github.com/sfxcode/formkit-primevue/commit/d8e4a43))
- **OutputList:** Use custom p-chip-item styling from sass ([64a7344](https://github.com/sfxcode/formkit-primevue/commit/64a7344))

### 🏡 Chore

- Update dependencies ([521ce8c](https://github.com/sfxcode/formkit-primevue/commit/521ce8c))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.3

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.2...v2.4.3)

### 💅 Refactors

- **Outputs:** Add some more properties and add new PrimeOutputReference component ([730f20e](https://github.com/sfxcode/formkit-primevue/commit/730f20e))
- **demo:** Update Output demos ([0e8db2d](https://github.com/sfxcode/formkit-primevue/commit/0e8db2d))
- **OutputReference:** Add title in definition ([1c34a31](https://github.com/sfxcode/formkit-primevue/commit/1c34a31))
- **InputEditor:** Better handling of empty values - add innerClass and wrapperClass to Style section ([c7ef469](https://github.com/sfxcode/formkit-primevue/commit/c7ef469))
- **FormEditor:** Update UI ([f0a46e8](https://github.com/sfxcode/formkit-primevue/commit/f0a46e8))

### 📖 Documentation

- **README:** Add PrimeOutputs and some minor text changes ([774572f](https://github.com/sfxcode/formkit-primevue/commit/774572f))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.2

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.1...v2.4.2)

### 🚀 Enhancements

- **PrimeOutputBoolean:** Add new Properties trueValue and falseValue ([417f20a](https://github.com/sfxcode/formkit-primevue/commit/417f20a))
- **PrimeOutputBoolean:** Add new Properties trueValue and falseValue ([185aad1](https://github.com/sfxcode/formkit-primevue/commit/185aad1))
- **PrimeOutputList:** Introduce Divider and more styling options - Add Chips Demo ([d5f6eca](https://github.com/sfxcode/formkit-primevue/commit/d5f6eca))

### 💅 Refactors

- **Menu:** Update Input Matrix ([00651a0](https://github.com/sfxcode/formkit-primevue/commit/00651a0))

### 🏡 Chore

- **dependencies:** Update to PrimeVue 4.0.3 ([cdf4cab](https://github.com/sfxcode/formkit-primevue/commit/cdf4cab))
- **dependencies:** Update to PrimeVue 4.0.4 ([598826e](https://github.com/sfxcode/formkit-primevue/commit/598826e))
- **dependencies:** Switch to unbuild 3 ([cdbb1c6](https://github.com/sfxcode/formkit-primevue/commit/cdbb1c6))
- Use linting ([0e25c05](https://github.com/sfxcode/formkit-primevue/commit/0e25c05))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.1

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.4.0...v2.4.1)

### 🩹 Fixes

- **imports:** Add missing imports for FormKitDataEdit and FormKitDataView ([41e9068](https://github.com/sfxcode/formkit-primevue/commit/41e9068))

### 📖 Documentation

- **vitepress:** Update files and add new content ([ed228ff](https://github.com/sfxcode/formkit-primevue/commit/ed228ff))

### 🏡 Chore

- Switch release to patch ([0f22987](https://github.com/sfxcode/formkit-primevue/commit/0f22987))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.4.0

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.3.11...v2.4.0)

### 💅 Refactors

- **icons:** Breaking change name of leftIcon property to iconPrefix and right icon property to iconSuffix to prevent conflicts with formkits icon resolver #49 ([#49](https://github.com/sfxcode/formkit-primevue/issues/49))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.3.11

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.3.10...v2.3.11)

### 🩹 Fixes

- **style:** Move p-formkit-data-debug to upper level ([2f1d09d](https://github.com/sfxcode/formkit-primevue/commit/2f1d09d))

### 💅 Refactors

- **uuid:** Use uuid 4 from uuid packacke ([03c60f2](https://github.com/sfxcode/formkit-primevue/commit/03c60f2))
- **uuid:** Use uuid 4 from uuid package ([805cf3c](https://github.com/sfxcode/formkit-primevue/commit/805cf3c))
- **uuid:** Use uuid 4 from uuid package ([75d7655](https://github.com/sfxcode/formkit-primevue/commit/75d7655))
- Use only p-formkit-data-debug for styling ([24f6df3](https://github.com/sfxcode/formkit-primevue/commit/24f6df3))
- **checkbox:** Use Label class for suffix and prefix ([22415f6](https://github.com/sfxcode/formkit-primevue/commit/22415f6))

### 🏡 Chore

- **dependencies:** Add UUID ([d19eaa6](https://github.com/sfxcode/formkit-primevue/commit/d19eaa6))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.3.10

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.3.9...v2.3.10)

### 🩹 Fixes

- **samples:** Some minor fixes ([953d78d](https://github.com/sfxcode/formkit-primevue/commit/953d78d))

### 💅 Refactors

- **repeater:** Style by class ([d166f6d](https://github.com/sfxcode/formkit-primevue/commit/d166f6d))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.3.9

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.3.8...v2.3.9)

### 💅 Refactors

- **inputs:** Use prefix and suffix instead of labelLeft and labelRight ([206fbea](https://github.com/sfxcode/formkit-primevue/commit/206fbea))
- **RadioButton:** Use flex styling for better aligning in default ([68c7950](https://github.com/sfxcode/formkit-primevue/commit/68c7950))
- **Outputs:** Add prefix, iconPrefix, suffix, iconSuffix to definition ([3b1579a](https://github.com/sfxcode/formkit-primevue/commit/3b1579a))
- **editor:** Use Columns ([433439d](https://github.com/sfxcode/formkit-primevue/commit/433439d))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.3.8

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.3.7...v2.3.8)

### 💅 Refactors

- **data:** Data Edit / View ([ab95443](https://github.com/sfxcode/formkit-primevue/commit/ab95443))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.3.7

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.3.6...v2.3.7)

### 🚀 Enhancements

- **data:** Add formClass to DataEdit and DataView - add demo for formkit class styling ([b656541](https://github.com/sfxcode/formkit-primevue/commit/b656541))
- **editor:** Add option to display a text as number if possible ([e281dd1](https://github.com/sfxcode/formkit-primevue/commit/e281dd1))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.3.6

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.3.5...v2.3.6)

### 🚀 Enhancements

- **output:** Add components to editor ([629bc39](https://github.com/sfxcode/formkit-primevue/commit/629bc39))

### 🩹 Fixes

- **components:** Remove wrapperClass because of clash with fromkit class handling ([4f4f640](https://github.com/sfxcode/formkit-primevue/commit/4f4f640))

### 💅 Refactors

- **components:** Use formkit notation for icons ([8e7e2cf](https://github.com/sfxcode/formkit-primevue/commit/8e7e2cf))
- **PrimeInputText:** Use forkit notation for icons ([c2ba491](https://github.com/sfxcode/formkit-primevue/commit/c2ba491))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.3.5

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.3.4...v2.3.5)

### 🩹 Fixes

- **i18n:** Add missing import ([b13acef](https://github.com/sfxcode/formkit-primevue/commit/b13acef))
- **components:** Add missing import ([c5d87d9](https://github.com/sfxcode/formkit-primevue/commit/c5d87d9))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.3.4

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.3.3...v2.3.4)

### 🩹 Fixes

- **i18n:** Add missing import ([046afa7](https://github.com/sfxcode/formkit-primevue/commit/046afa7))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.3.3

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.3.2...v2.3.3)

### 🚀 Enhancements

- **Outputs:** Add Form Output (Some outputs need https://vue-i18n.intlify.dev/ for formatting reasons) ([17a0094](https://github.com/sfxcode/formkit-primevue/commit/17a0094))
- **Outputs:** Add demos ([079eeba](https://github.com/sfxcode/formkit-primevue/commit/079eeba))

### 🩹 Fixes

- **InputText:** Icons ([9f0df8c](https://github.com/sfxcode/formkit-primevue/commit/9f0df8c))

### 🏡 Chore

- **linting:** Fix errors ([0820bf2](https://github.com/sfxcode/formkit-primevue/commit/0820bf2))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.3.2

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.3.1...v2.3.2)

### 🚀 Enhancements

- **FormEditor:** First version ([1cc6bfd](https://github.com/sfxcode/formkit-primevue/commit/1cc6bfd))
- **FormEditor:** First version ([0f75a0b](https://github.com/sfxcode/formkit-primevue/commit/0f75a0b))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.3.1

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.3.0...v2.3.1)

### 🩹 Fixes

- **InputEditor:** Options to JSON / code ([0c77410](https://github.com/sfxcode/formkit-primevue/commit/0c77410))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.3.0

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.2.3...v2.3.0)

### 🚀 Enhancements

- **plugins:** Add Asterisk Plugin ([4f4f91e](https://github.com/sfxcode/formkit-primevue/commit/4f4f91e))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.2.3

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.2.2...v2.2.3)

### 💅 Refactors

- **InputEditor:** Update to prime 4 and add some more styling ([06fd35a](https://github.com/sfxcode/formkit-primevue/commit/06fd35a))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.2.2

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.2.0...v2.2.2)

## v2.2.0

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.0.6...v2.2.0)

### 🚀 Enhancements

- Add missing definitions ([39e1ea9](https://github.com/sfxcode/formkit-primevue/commit/39e1ea9))

### 🩹 Fixes

- PrimeInputSwitch => primeToggleSwitch ([529c603](https://github.com/sfxcode/formkit-primevue/commit/529c603))

### 💅 Refactors

- **demo:** Remove chips ([695bc64](https://github.com/sfxcode/formkit-primevue/commit/695bc64))
- Move styleClasses functions from useFormKitInput ([a09d242](https://github.com/sfxcode/formkit-primevue/commit/a09d242))
- Move styleClasses functions from useFormKitInput ([12368c0](https://github.com/sfxcode/formkit-primevue/commit/12368c0))
- Use styleClass and some functions from useFormKitInput ([71aae45](https://github.com/sfxcode/formkit-primevue/commit/71aae45))
- Add composable for common input functions ([111fd1e](https://github.com/sfxcode/formkit-primevue/commit/111fd1e))
- Use new wrapperClass and add some new samples ([8b32d18](https://github.com/sfxcode/formkit-primevue/commit/8b32d18))

### 📖 Documentation

- **readme:** Update for PrimeVue 4 ([0e7f0f8](https://github.com/sfxcode/formkit-primevue/commit/0e7f0f8))

### 🏡 Chore

- **release:** Prepare 2.1 Releases and update dependencies ([962f4fa](https://github.com/sfxcode/formkit-primevue/commit/962f4fa))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.0.6

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.0.5...v2.0.6)

### 🩹 Fixes

- **autocomplete:** Typeahead and prevent submit on enter ([4d39672](https://github.com/sfxcode/formkit-primevue/commit/4d39672))
- **autocomplete:** Typeahead and prevent submit on enter ([7a0965a](https://github.com/sfxcode/formkit-primevue/commit/7a0965a))

### 📖 Documentation

- **readme:** Update for PrimeVue 4 ([87e37d5](https://github.com/sfxcode/formkit-primevue/commit/87e37d5))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.0.5

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.0.3...v2.0.5)

### 🩹 Fixes

- **imports:** Removed direct import of PrimeVue components - ([b77c679](https://github.com/sfxcode/formkit-primevue/commit/b77c679))
- **imports:** Removed direct import of PrimeVue components - ([c8ee640](https://github.com/sfxcode/formkit-primevue/commit/c8ee640))

### 📖 Documentation

- **readme:** Hint to Version 2.0.0 for PrimeVue 4 ([78bd380](https://github.com/sfxcode/formkit-primevue/commit/78bd380))
- **readme:** Hint to Version 2.0.0 for PrimeVue 4 ([b935a73](https://github.com/sfxcode/formkit-primevue/commit/b935a73))

### 🏡 Chore

- **build:** Add pnpm as default package manager ([0ab7f8b](https://github.com/sfxcode/formkit-primevue/commit/0ab7f8b))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.0.3

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.0.2...v2.0.3)

### 🩹 Fixes

- **imports:** Removed direct import of PrimeVue components - ([6ef02e8](https://github.com/sfxcode/formkit-primevue/commit/6ef02e8))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.0.2

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.0.1...v2.0.2)

### 🩹 Fixes

- **primevue4:** Remove TriStateCheckBox and add direct import of components ([fd8f4a9](https://github.com/sfxcode/formkit-primevue/commit/fd8f4a9))
- **primevue4:** Remove TriStateCheckBox and add direct import of components ([7562160](https://github.com/sfxcode/formkit-primevue/commit/7562160))
- **PrimeInputText:** Add imports ([57d8a39](https://github.com/sfxcode/formkit-primevue/commit/57d8a39))

### 💅 Refactors

- **primevue4:** Remove Imports for input components used by formkit ([f7411f5](https://github.com/sfxcode/formkit-primevue/commit/f7411f5))
- **primevue4:** Some changes in demo app ([4231bbb](https://github.com/sfxcode/formkit-primevue/commit/4231bbb))
- **primevue4:** Some changes in demo app ([c94c961](https://github.com/sfxcode/formkit-primevue/commit/c94c961))
- **Toast:** Show header in meessage ([7a53172](https://github.com/sfxcode/formkit-primevue/commit/7a53172))

### 🏡 Chore

- **build:** Add pnpm as default package manager ([96facc6](https://github.com/sfxcode/formkit-primevue/commit/96facc6))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.0.1

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v2.0.0...v2.0.1)

### 🩹 Fixes

- **PrimeInputText:** Remove iconPosition from IconField - property no longer exists in V4 ([314bf89](https://github.com/sfxcode/formkit-primevue/commit/314bf89))

### 🏡 Chore

- **dependencies:** Update to primevue 4 RC 3 ([485318b](https://github.com/sfxcode/formkit-primevue/commit/485318b))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v2.0.0

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v1.11.3...v2.0.0)

### 💅 Refactors

- **primevue:** Update to primevue 4 ([2987e55](https://github.com/sfxcode/formkit-primevue/commit/2987e55))
- **primevue:** Update to primevue 4 ([765d9e1](https://github.com/sfxcode/formkit-primevue/commit/765d9e1))

### 🏡 Chore

- **dependencies:** Update all ([3c826c5](https://github.com/sfxcode/formkit-primevue/commit/3c826c5))
- **dependencies:** Update all ([ca00768](https://github.com/sfxcode/formkit-primevue/commit/ca00768))
- **dependencies:** Update all ([6dbde4b](https://github.com/sfxcode/formkit-primevue/commit/6dbde4b))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v1.11.3

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v1.11.1...v1.11.3)

### 🏡 Chore

- **formkit:** Update to 1.6.5 ([35deeb5](https://github.com/sfxcode/formkit-primevue/commit/35deeb5))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v1.11.1

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v1.11.0...v1.11.1)

### 📖 Documentation

- **readme:** Add Limitation Entry #43 ([#43](https://github.com/sfxcode/formkit-primevue/issues/43))

### 🏡 Chore

- **formkit:** Update to 1.6.3 ([483132a](https://github.com/sfxcode/formkit-primevue/commit/483132a))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v1.11.0

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v1.10.1...v1.11.0)

### 🚀 Enhancements

- **schema:** Input Editor from schema ([599f57b](https://github.com/sfxcode/formkit-primevue/commit/599f57b))
- **schema:** Input Editor add key =s in schema for conditional parts ([61a764b](https://github.com/sfxcode/formkit-primevue/commit/61a764b))
- **schema:** Editor output tuning ([be8ff8c](https://github.com/sfxcode/formkit-primevue/commit/be8ff8c))

### 📖 Documentation

- **readme:** Add useInputEditorSchema ([c43dbfe](https://github.com/sfxcode/formkit-primevue/commit/c43dbfe))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v1.10.1

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v1.9.12...v1.10.1)

### 🩹 Fixes

- **demo:** _disabled replaced by disabled ([8435268](https://github.com/sfxcode/formkit-primevue/commit/8435268))
- **demo:** _disabled replaced by disabled ([697f835](https://github.com/sfxcode/formkit-primevue/commit/697f835))

### 💅 Refactors

- **attributes:** Change _readonly to readonly ([97865b8](https://github.com/sfxcode/formkit-primevue/commit/97865b8))

### 🏡 Chore

- **dependencies:** Update all ([d2f4dbb](https://github.com/sfxcode/formkit-primevue/commit/d2f4dbb))
- **dependencies:** Update all ([630d4b6](https://github.com/sfxcode/formkit-primevue/commit/630d4b6))
- **dependencies:** Update all ([043e205](https://github.com/sfxcode/formkit-primevue/commit/043e205))
- **lint:** Fixes ([771da34](https://github.com/sfxcode/formkit-primevue/commit/771da34))

### ✅ Tests

- **useFormKitSchema:** Add tests for group and list ([c909c59](https://github.com/sfxcode/formkit-primevue/commit/c909c59))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v1.9.12

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v1.9.11...v1.9.12)

### 🏡 Chore

- **dependencies:** Update and remove .eslintignore file - since eslint 9 it is not supported anymore ([93f7843](https://github.com/sfxcode/formkit-primevue/commit/93f7843))
- **dependencies:** Update all ([3eb7e25](https://github.com/sfxcode/formkit-primevue/commit/3eb7e25))
- **dependencies:** Update PrimeVue to 3.52 ([f8604f6](https://github.com/sfxcode/formkit-primevue/commit/f8604f6))
- **linting:** Fix some issues ([421a35c](https://github.com/sfxcode/formkit-primevue/commit/421a35c))

### ✅ Tests

- **vitest:** Create config and first test ([2684d25](https://github.com/sfxcode/formkit-primevue/commit/2684d25))
- **coverage:** Create coverage config ([54411fd](https://github.com/sfxcode/formkit-primevue/commit/54411fd))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v1.9.11

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v1.9.10...v1.9.11)

### 🏡 Chore

- **dependencies:** Update FormKit to 1.6.2 ([ad0afb9](https://github.com/sfxcode/formkit-primevue/commit/ad0afb9))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v1.9.10

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v1.9.8...v1.9.10)

### 💅 Refactors

- **build:** Move definitions to own folder ([4abc985](https://github.com/sfxcode/formkit-primevue/commit/4abc985))

### 🏡 Chore

- **dependencies:** Update PrimeVue to 3.51 ([506bf4e](https://github.com/sfxcode/formkit-primevue/commit/506bf4e))
- **linting:** Fix some issues ([fddf492](https://github.com/sfxcode/formkit-primevue/commit/fddf492))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v1.9.8

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v1.9.6...v1.9.8)

### 💅 Refactors

- **build:** Move definitions to own folder ([e525a13](https://github.com/sfxcode/formkit-primevue/commit/e525a13))
- **build:** Move definitions to own folder ([df375f0](https://github.com/sfxcode/formkit-primevue/commit/df375f0))

### 🏡 Chore

- **dependencies:** Update FormKit to 1.6.1 ([61b1467](https://github.com/sfxcode/formkit-primevue/commit/61b1467))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))

## v1.9.6

[compare changes](https://github.com/sfxcode/formkit-primevue/compare/v1.9.5...v1.9.6)

### 🩹 Fixes

- Allow reactivity of icon attribute ([34feb7a](https://github.com/sfxcode/formkit-primevue/commit/34feb7a))
- Remove debug output in html ([d9b4ca6](https://github.com/sfxcode/formkit-primevue/commit/d9b4ca6))
- Use icon and iconPosition prop defined in formkit component, to allow kebab-cased props in non-schema definitions ([c7d61b4](https://github.com/sfxcode/formkit-primevue/commit/c7d61b4))

### 📖 Documentation

- Update CHANGELOG.md for v1.9.5 [skip ci] ([b801812](https://github.com/sfxcode/formkit-primevue/commit/b801812))

### 🏡 Chore

- **release:** Add unjs / changelogen ([0a318c7](https://github.com/sfxcode/formkit-primevue/commit/0a318c7))

### ❤️ Contributors

- Sfxcode ([@sfxcode](http://github.com/sfxcode))
- Kswzr <kevin@wzr.es>

## [v1.9.5] - 2024-03-16
### :wrench: Chores
- [`c75fb09`](https://github.com/sfxcode/formkit-primevue/commit/c75fb09e184a54c1b93cb5bb421c02a4ac219401) - **dependencies**: Update PrimeVue to 3.50 *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`36899b7`](https://github.com/sfxcode/formkit-primevue/commit/36899b79b18ce8d75e9f1cb013cef6a3aba5f9e7) - **linting**: fix some issues *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`cd9e896`](https://github.com/sfxcode/formkit-primevue/commit/cd9e89628bfa58072e870279d817d09ea8c83965) - **release**: New Version *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.9.4] - 2024-03-13
### :sparkles: New Features
- [`5149d2f`](https://github.com/sfxcode/formkit-primevue/commit/5149d2ff589730e6a662498b0e141ef96009431b) - **RadioButton**: Add Label class [#37](https://github.com/sfxcode/formkit-primevue/pull/37) *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`da4c322`](https://github.com/sfxcode/formkit-primevue/commit/da4c3226d56581fd71102240009de20e953c1dd4) - **InputOtp**: Add new component *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`06d7fed`](https://github.com/sfxcode/formkit-primevue/commit/06d7fed46f808c7e2174f0e2f3821b79872298eb) - **RadioButton**: Add Label class [#37](https://github.com/sfxcode/formkit-primevue/pull/37) *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`0c495b3`](https://github.com/sfxcode/formkit-primevue/commit/0c495b30b6433ddc8c64f2a6be6b24445a62056c) - **dependencies**: Update *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`bde1bfb`](https://github.com/sfxcode/formkit-primevue/commit/bde1bfb1e70459bfd84ee136a318bc8a447ce13c) - **release**: New Version *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.9.3] - 2024-03-11
### :sparkles: New Features
- [`adc032c`](https://github.com/sfxcode/formkit-primevue/commit/adc032cae5a28a3e357bd02b93e3930b6ab99268) - **addElement**: Allow single child as string *(commit by [@sfxcode](https://github.com/sfxcode))*

### :bug: Bug Fixes
- [`639259b`](https://github.com/sfxcode/formkit-primevue/commit/639259b82b6f3a077875955eb9c467a69a58df8b) - **RadioButton**: option_class was not used *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`e6eb5ab`](https://github.com/sfxcode/formkit-primevue/commit/e6eb5ab7a9caa6945457437ce2ff87a95b4d8582) - **release**: New Version *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.9.2] - 2024-03-11
### :recycle: Refactors
- [`a3c6a1b`](https://github.com/sfxcode/formkit-primevue/commit/a3c6a1ba9e1052c15c891d847e930313e7ab0553) - **addListGroupFunctions**: rename node parameter to parentNode *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`8ddfafa`](https://github.com/sfxcode/formkit-primevue/commit/8ddfafa3b1de5b07babce57a19528a1de8dc2b2f) - **dependencies**: Update FormKit to 1.6.0 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.9.1] - 2024-03-08
### :sparkles: New Features
- [`ce10c14`](https://github.com/sfxcode/formkit-primevue/commit/ce10c14396c187819742af5adf000ac223d37909) - **addListGroupFunctions**: add default object for add node- change insertNode to copyNode *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`73ce845`](https://github.com/sfxcode/formkit-primevue/commit/73ce8453be0c7281200c7679d0f6abfe079f86b1) - **demo**: add schema based repeater demo *(commit by [@sfxcode](https://github.com/sfxcode))*

### :bug: Bug Fixes
- [`65162c9`](https://github.com/sfxcode/formkit-primevue/commit/65162c9db9e29af05939dfe17e09fec7c2cb9ebe) - **addListGroupFunctions**: insertDuplicate should clone existing object *(commit by [@sfxcode](https://github.com/sfxcode))*

### :recycle: Refactors
- [`2021561`](https://github.com/sfxcode/formkit-primevue/commit/2021561772e7f117620def931157ede8bf523d0f) - **demo**: update paths *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`a27b427`](https://github.com/sfxcode/formkit-primevue/commit/a27b42723fc855fd1015996bae4a44880c405aca) - **linting**: fix issues *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`6317ae2`](https://github.com/sfxcode/formkit-primevue/commit/6317ae2931f764502f1363945b682cdb80fe03da) - **dependencies**: update all *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.9.0] - 2024-03-05
### :sparkles: New Features
- [`45dc148`](https://github.com/sfxcode/formkit-primevue/commit/45dc148b568e574da2e49d6bd25c974f56b466d1) - import deps and add formkit prop type
- [`de9a026`](https://github.com/sfxcode/formkit-primevue/commit/de9a0265ec966ae845511aa2e5084e39f56c8ed2) - use handle blur correct
- [`ed015f3`](https://github.com/sfxcode/formkit-primevue/commit/ed015f3c7bd887d1acf429f7b8ddb9972f0ca0f2) - add types (for intellisense) and allow to have kebab-cased component attributes instead of formkit attrs
- [`ca65896`](https://github.com/sfxcode/formkit-primevue/commit/ca658965c550f78da6909b4a62cf1f7d2a22d8fd) - add icon left right on input mask

### :bug: Bug Fixes
- [`2d62a4b`](https://github.com/sfxcode/formkit-primevue/commit/2d62a4b87c23c9c3694062f6934899d1daf40b4b) - use only formkit disabled state instead of attrs which could lead into false disabled states
- [`ba3aff9`](https://github.com/sfxcode/formkit-primevue/commit/ba3aff9cc32cd641baf241e5ddd7522125712fe7) - do not store attrs in a variable, otherwise reactivity on attrs are not working
- [`4ebc0a8`](https://github.com/sfxcode/formkit-primevue/commit/4ebc0a89e7db74be2b803b752cbd87b4bc15f177) - cleanup and reactivity fixes
- [`be8e01e`](https://github.com/sfxcode/formkit-primevue/commit/be8e01e9a51ffec15306efe412346ba45b03d9f4) - move components to correct destination, which had wrong path due to rebase
- [`41f3235`](https://github.com/sfxcode/formkit-primevue/commit/41f3235ed3124dd93321abcb4230bd9b7c20546a) - rebase conflicts
- [`aea515a`](https://github.com/sfxcode/formkit-primevue/commit/aea515a24dc239d8990ef25f87128be227867847) - **PrimeAutoComplete**: add styleClass *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`bdd82fb`](https://github.com/sfxcode/formkit-primevue/commit/bdd82fbd565634ac119a87bf03514996e912573a) - **components**: :value should be preferred instead of v-bind *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`73d5b98`](https://github.com/sfxcode/formkit-primevue/commit/73d5b98b6061e7c145271e19b9f2075da2b056fb) - **linting**: remove lint problems with lint:fix *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`173e2b7`](https://github.com/sfxcode/formkit-primevue/commit/173e2b74eb380b1d1bb07afcfa708e58e3aa6724) - **linting**: fix some issues *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`8037d57`](https://github.com/sfxcode/formkit-primevue/commit/8037d572a0c5d24b47d067085cb84019693ae971) - fix some minor issues *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`787889f`](https://github.com/sfxcode/formkit-primevue/commit/787889f337ab3887f1938ab5728c9625cbba1ffd) - **release**: New Version *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.8.6] - 2024-03-04
### :recycle: Refactors
- [`8fd602f`](https://github.com/sfxcode/formkit-primevue/commit/8fd602f5d7aa1d39f781fae2930e3c0ba84681e0) - **components**: cosmetics *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.8.5] - 2024-03-04
### :bug: Bug Fixes
- [`8d074ef`](https://github.com/sfxcode/formkit-primevue/commit/8d074ef8805931a08cf36b538e650f61345d626a) - **package**: add missing exports *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`b22ab30`](https://github.com/sfxcode/formkit-primevue/commit/b22ab30485b72f8726b5029565c1fc7a231d6a3c) - **components**: add as plugin *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`f175e63`](https://github.com/sfxcode/formkit-primevue/commit/f175e6316be42d9ac4548b4fc0af69a288321565) - **components**: add imports *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.8.1] - 2024-03-03
### :sparkles: New Features
- [`6f4ccf9`](https://github.com/sfxcode/formkit-primevue/commit/6f4ccf9a443712fe126dd0850f1f10f3d1649ae3) - **schema**: add schema helper functions composable: useFormKitSchema *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`2045488`](https://github.com/sfxcode/formkit-primevue/commit/2045488b3829dd69af8d0a2f1d2034169f10b82e) - **release**: Next Version 1.8.1 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.8.0] - 2024-02-28
### :boom: BREAKING CHANGES
- due to [`be00f9b`](https://github.com/sfxcode/formkit-primevue/commit/be00f9b92ef84424967ff06b9277c588bb6a88a2) - Icons *(commit by [@sfxcode](https://github.com/sfxcode))*:

  IconField and InputIcon from latest PrimeVue 3.39.x is required for showing Icons - displaying icons on both sides is not longer supported


### :bug: Bug Fixes
- [`7cb09aa`](https://github.com/sfxcode/formkit-primevue/commit/7cb09aa9e945c91509993a4766950bd15436480d) - **state**: Missing input disabled state, while submitting a form via XHR/Fetch request. [#35](https://github.com/sfxcode/formkit-primevue/pull/35) *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`80396b0`](https://github.com/sfxcode/formkit-primevue/commit/80396b0b2acf0917d2d428c3a1e8fda87000343f) - **ui**: Typo for TriStateCheckbox *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`6f137aa`](https://github.com/sfxcode/formkit-primevue/commit/6f137aadc1bc58c0b444950491fc14c471932fca) - **demo**: Some more styling for editor was needed *(commit by [@sfxcode](https://github.com/sfxcode))*

### :recycle: Refactors
- [`be00f9b`](https://github.com/sfxcode/formkit-primevue/commit/be00f9b92ef84424967ff06b9277c588bb6a88a2) - **InputText**: Icons *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`9e2520e`](https://github.com/sfxcode/formkit-primevue/commit/9e2520e710a3ccaf27307362bccc9bac000757d6) - **Inputs**: Use v-bind for Attributed to passthrouh the maximum of all available attributes for PrimeVue components - however, some attributes has to be defined to work ... *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`878c706`](https://github.com/sfxcode/formkit-primevue/commit/878c7066d2786d091e051c670143aa0ffc7c92a5) - **release**: Next Version 1.7.3 *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`ad693bc`](https://github.com/sfxcode/formkit-primevue/commit/ad693bcd9679905014b5f1c8b00fa63a5e2f9576) - **release**: Next Version 1.7.4 *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`cf8da49`](https://github.com/sfxcode/formkit-primevue/commit/cf8da495913621df5f3d6f180035e52d47a13dfe) - **release**: Next Version 1.7.4 *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`567627b`](https://github.com/sfxcode/formkit-primevue/commit/567627b28abc255d5ec60115bd24f34bfef2179b) - **release**: Next Version 1.7.4 *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`e7689dc`](https://github.com/sfxcode/formkit-primevue/commit/e7689dcbba749020feb0760f808efba3282b3862) - **dependencies**: PrimeVue 3.49.1 *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`9342532`](https://github.com/sfxcode/formkit-primevue/commit/9342532cec1b2802235533765cb30b24d0328d24) - **release**: Next Version 1.8.0 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.7.4] - 2024-02-24
### :wrench: Chores
- [`ad693bc`](https://github.com/sfxcode/formkit-primevue/commit/ad693bcd9679905014b5f1c8b00fa63a5e2f9576) - **release**: Next Version 1.7.4 *(commit by [@sfxcode](https://github.com/sfxcode))*

## [v1.7.3] - 2024-02-24
### :bug: Bug Fixes
- [`7cb09aa`](https://github.com/sfxcode/formkit-primevue/commit/7cb09aa9e945c91509993a4766950bd15436480d) - **Components**: fix(state): Missing input disabled state, while submitting a form via XHR/Fetch request. #35 sfxcode  *(commit by [@sfxcode](https://github.com/sfxcode))*

## [v1.7.1] - 2024-02-15
### :sparkles: New Features
- [`35b0cba`](https://github.com/sfxcode/formkit-primevue/commit/35b0cba12bf5dc6701f72d20f9ee840eb5318c12) - **TreeSelect**: Base Support *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`9a69fbb`](https://github.com/sfxcode/formkit-primevue/commit/9a69fbb2ab8fe7e474063acaf02405a465e4de2e) - **dependencies**: FormKit 1.5.9 *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`27a22e4`](https://github.com/sfxcode/formkit-primevue/commit/27a22e48994d899ceba3ed764115f381f2bc04d7) - **release**: Next Version *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`41dc5b4`](https://github.com/sfxcode/formkit-primevue/commit/41dc5b4cfe41300a10c0179f749163f7958b9867) - **release**: Next Version *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.7.0] - 2024-02-08
### :sparkles: New Features
- [`2c1d9ae`](https://github.com/sfxcode/formkit-primevue/commit/2c1d9ae50acc94a9580b33bb4b56e861a4de705b) - **CascadeSelect**: Add new Form Element *(commit by [@sfxcode](https://github.com/sfxcode))*

### :recycle: Refactors
- [`6409206`](https://github.com/sfxcode/formkit-primevue/commit/64092067943faf063cd950cdbb10a5f9a38f396d) - **demo**: Better Visibility of Menu Items *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`fa66550`](https://github.com/sfxcode/formkit-primevue/commit/fa6655033afcbd321a8976ec7a24ea994d7a9eb0) - **dependencies**: PrimeVue 3.48 *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`27eb2a7`](https://github.com/sfxcode/formkit-primevue/commit/27eb2a782a8dc68a472f5b0ffe866386fb21b7d0) - **release**: Next Version *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.6.5] - 2024-02-02
### :sparkles: New Features
- [`fb8f595`](https://github.com/sfxcode/formkit-primevue/commit/fb8f59514a2010e9d4776b888ac4fc7f20596307) - **PrimeCalendar**: Support clearing value *(commit by [@edwmurph](https://github.com/edwmurph))*

### :wrench: Chores
- [`414fc23`](https://github.com/sfxcode/formkit-primevue/commit/414fc230fbc1e612446a9b12468e7c11cbe70abb) - **dependencies**: FormKit 1.5.3 *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`1eadf86`](https://github.com/sfxcode/formkit-primevue/commit/1eadf86b27c394c34230c7e5a0f1f00ada22fe14) - **release**: Next Version *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.6.4] - 2024-01-24
### :bug: Bug Fixes
- [`45d830a`](https://github.com/sfxcode/formkit-primevue/commit/45d830a223d08d64c2b7fcbe1720fcf4ede7aad0) - **Components**: CheckBoxes should listen to change events *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.6.3] - 2024-01-24
### :wrench: Chores
- [`a7bf107`](https://github.com/sfxcode/formkit-primevue/commit/a7bf107010a0eab4860616ef69112f6283964880) - **dependencies**: PrimeVue 3.47 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.6.2] - 2024-01-21
### :wrench: Chores
- [`07206b6`](https://github.com/sfxcode/formkit-primevue/commit/07206b69b43eca8784a11d6bf8b0ab8d3dabc1f1) - **dependencies**: FormKit 1.5.1 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.6.1] - 2024-01-17
### :sparkles: New Features
- [`3b1a55e`](https://github.com/sfxcode/formkit-primevue/commit/3b1a55e2cae23e7eb570a56664eafc0e2a096e35) - **InputMask**: Add some more Demos [#33](https://github.com/sfxcode/formkit-primevue/pull/33) *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`a33ef4f`](https://github.com/sfxcode/formkit-primevue/commit/a33ef4feaa27cb1f534d6f20636aaceecc108274) - **dependencies**: FormKit 1.5.0 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.6.0] - 2024-01-13
### :boom: BREAKING CHANGES
- due to [`5fa0972`](https://github.com/sfxcode/formkit-primevue/commit/5fa0972f9b26dc143577a991403f3663ca5b3888) - Merge pull request [#31](https://github.com/sfxcode/formkit-primevue/pull/31) from DanielleHuisman/fix/option-defaults *(commit by [@sfxcode](https://github.com/sfxcode))*:

  OptionLabel or OptionValue has to be set

- due to [`3133dc0`](https://github.com/sfxcode/formkit-primevue/commit/3133dc0803cdf73a1e795bc3f9965d020631fe17) - optionLabel and optionValue has no default values anymore *(commit by [@sfxcode](https://github.com/sfxcode))*:

  OptionLabel or OptionValue has to be set manually


### :recycle: Refactors
- [`5fa0972`](https://github.com/sfxcode/formkit-primevue/commit/5fa0972f9b26dc143577a991403f3663ca5b3888) - **Options**: Merge pull request [#31](https://github.com/sfxcode/formkit-primevue/pull/31) from DanielleHuisman/fix/option-defaults *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`3133dc0`](https://github.com/sfxcode/formkit-primevue/commit/3133dc0803cdf73a1e795bc3f9965d020631fe17) - **Options**: optionLabel and optionValue has no default values anymore *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`e863176`](https://github.com/sfxcode/formkit-primevue/commit/e863176501c082f2ab9b188ad2fbb021370396b3) - **footer**: Footer in demo has now updated versions *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.5.10] - 2024-01-13
### :wrench: Chores
- [`dc9010b`](https://github.com/sfxcode/formkit-primevue/commit/dc9010be8667292eea525b654b40ccd7fc3f4366) - **dependencies**: PrimeVue 3.46, VUE 3.4.x *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.5.9] - 2023-12-15
### :wrench: Chores
- [`f8145be`](https://github.com/sfxcode/formkit-primevue/commit/f8145be20900f52d61b84c669eb926c489df6507) - **dependencies**: PrimeVue 3.44 *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`19c3dae`](https://github.com/sfxcode/formkit-primevue/commit/19c3dae367c77f82229ee13dd4bf087e6ed13e44) - **dependencies**: Update all *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`aeef2e6`](https://github.com/sfxcode/formkit-primevue/commit/aeef2e6b2d8df8735a8679df16bc81dd3a90b3d2) - **release**: Next Version 1.5.9 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.5.8] - 2023-12-13
### :sparkles: New Features
- [`c20ba7d`](https://github.com/sfxcode/formkit-primevue/commit/c20ba7d24847332c0ada47fcfa5fdfc43f6c7013) - **Components**: support more props on inputnumber *(commit by [@edwmurph](https://github.com/edwmurph))*

### :wrench: Chores
- [`05fbf9d`](https://github.com/sfxcode/formkit-primevue/commit/05fbf9dc97be735d88bb74d24339859a457d4a7c) - **dependencies**: Update all *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`2c728c0`](https://github.com/sfxcode/formkit-primevue/commit/2c728c025e63533437f629bf2fa0eba0674fb3b7) - **release**: Next Version *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.5.7] - 2023-12-07
### :wrench: Chores
- [`365b23d`](https://github.com/sfxcode/formkit-primevue/commit/365b23d6cd3e1febb463dd7ef81d9f668625ddfe) - **dependencies**: Update vue, vite, unocss *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`130b8d2`](https://github.com/sfxcode/formkit-primevue/commit/130b8d2925f985abdc803296b5a9d4fa7f8b4cc2) - **demo**: Add missing password attributes in playground *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`b7fd077`](https://github.com/sfxcode/formkit-primevue/commit/b7fd07737d8a9a3ccec1429cc24884c1193d7de9) - **dependencies**: PrimeVue 3.43, FormKit 1.4.0 *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`959e8a7`](https://github.com/sfxcode/formkit-primevue/commit/959e8a74c1898f3a058b2aa32bd81f2bbe6e7bbf) - **feature**: add autoAnimate plugin *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`4aeaa98`](https://github.com/sfxcode/formkit-primevue/commit/4aeaa986d33d8fde7568bd901e3ef5fb47b250f4) - **release**: Next Version *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.5.6] - 2023-12-03
### :wrench: Chores
- [`832bf64`](https://github.com/sfxcode/formkit-primevue/commit/832bf64e5625cc568ee5463a5b5f08c0fca81fad) - **dependencies**: PrimeVue 3.42 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.5.2] - 2023-11-25
### :sparkles: New Features
- [`66f43e8`](https://github.com/sfxcode/formkit-primevue/commit/66f43e8e5beb0920975d8c3c6db1658a72330fad) - **textarea**: Textarea auto resize props [#27](https://github.com/sfxcode/formkit-primevue/pull/27) *(commit by [@sfxcode](https://github.com/sfxcode))*

### :bug: Bug Fixes
- [`50ea352`](https://github.com/sfxcode/formkit-primevue/commit/50ea35223d47f8790bec180372e0725e17f3ecc4) - **modules**: Fix Vite 5 based problems *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`4c35b02`](https://github.com/sfxcode/formkit-primevue/commit/4c35b02591ace6c206073d511de824c9767d1803) - **dependencies**: PrimeVue 3.41.1 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.5.1] - 2023-11-12
### :wrench: Chores
- [`94c8377`](https://github.com/sfxcode/formkit-primevue/commit/94c8377952dc18362be2933f655dc7e5d6720ca1) - **release**: Next Version *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`f53eff4`](https://github.com/sfxcode/formkit-primevue/commit/f53eff4a1979febe6c6312ac12cd206481dcdc19) - **release**: Fix Version *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.4.5] - 2023-11-02
### :bug: Bug Fixes
- [`5a48d8e`](https://github.com/sfxcode/formkit-primevue/commit/5a48d8ec6a809e029a0ddcb3f00f362738f4d4ff) - **Build**: Build was broken in 1.4.4 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.4.4] - 2023-11-01
### :sparkles: New Features
- [`7b6bf53`](https://github.com/sfxcode/formkit-primevue/commit/7b6bf533128fc2ea5c2f450d65a8a36e66af1d11) - **PrimeAutoComplete**: Add to demos *(commit by [@sfxcode](https://github.com/sfxcode))*

### :bug: Bug Fixes
- [`09d5f0d`](https://github.com/sfxcode/formkit-primevue/commit/09d5f0d4f227297c58ab534e4b22c769c1ea7997) - **PrimeInputText**: icon tag was shown even when no icons should be used *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`aa79a53`](https://github.com/sfxcode/formkit-primevue/commit/aa79a53ccda76faca7b8fd6ba9fb122bd8623323) - **PrimeCalendar**: does not trigger error when validation: 'required" on blur [#22](https://github.com/sfxcode/formkit-primevue/pull/22) *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`1d90b92`](https://github.com/sfxcode/formkit-primevue/commit/1d90b929f7c060ae332d96e7e6a8ee01b6a39bf8) - **dependencies**: PrimeVue 3.38.1 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.4.3] - 2023-10-20
### :recycle: Refactors
- [`3545e23`](https://github.com/sfxcode/formkit-primevue/commit/3545e238af31742a0d758a1d3b1b9de55c3178d5) - **styling**: change some px to rem *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`b24cf50`](https://github.com/sfxcode/formkit-primevue/commit/b24cf50d09580aba1a367b5c022b76978080b86e) - **dependencies**: PrimeVue 3.37.0 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.4.2] - 2023-10-18
### :sparkles: New Features
- [`7de1387`](https://github.com/sfxcode/formkit-primevue/commit/7de13876a7d9e856aeb3bcc3e74c8395d72df918) - **footer**: update versions *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`d58e5f9`](https://github.com/sfxcode/formkit-primevue/commit/d58e5f9c4ff54d28694b3ff8affa539abb33d6ba) - **Validation**: Add p-invalid to class attribute if not valid and validationVisible *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`196b699`](https://github.com/sfxcode/formkit-primevue/commit/196b6995f584013e9cbd4e1547e0bf3d6072a5ef) - **Input**: Add RadioButton *(commit by [@sfxcode](https://github.com/sfxcode))*

### :bug: Bug Fixes
- [`8a70cbc`](https://github.com/sfxcode/formkit-primevue/commit/8a70cbc076a243c0fe7843edacffe0936b70cfd8) - **Dropdown**: p-invalid was not added to input class *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`d8d473d`](https://github.com/sfxcode/formkit-primevue/commit/d8d473d3b94586b020f31a8fdc878b0c6ab7a692) - **Calendar**: primeCalendar input does not show placeholder [#21](https://github.com/sfxcode/formkit-primevue/pull/21) *(commit by [@sfxcode](https://github.com/sfxcode))*

### :recycle: Refactors
- [`b05bd5b`](https://github.com/sfxcode/formkit-primevue/commit/b05bd5bb1bede8e52c5e53515f823fe75ffffd06) - **inputs**: Surround with div tag *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`329eed2`](https://github.com/sfxcode/formkit-primevue/commit/329eed212045d9d14c5d787378c066eff5219ac4) - **inputs**: Surround with div tag *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`712e5a7`](https://github.com/sfxcode/formkit-primevue/commit/712e5a75de7e22a2a684fd21addd5339f6265bbb) - **styling**: remove formkit-messages margin-left *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`9757c9f`](https://github.com/sfxcode/formkit-primevue/commit/9757c9f6404772bfc04093b8ecd5a932aab37c15) - **dependencies**: PrimeVue *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`54daf1e`](https://github.com/sfxcode/formkit-primevue/commit/54daf1e3dea6f4c58dcefffdbc9e1ee9a00cec9c) - **dependencies**: PrimeVue *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`ad29572`](https://github.com/sfxcode/formkit-primevue/commit/ad29572bdd6de866e805e565c1ebbdf7f9bf3c28) - **dependencies**: PrimeVue *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`fc3e168`](https://github.com/sfxcode/formkit-primevue/commit/fc3e168de53d17b180139b623752a423f92d2119) - **dependencies**: PrimeVue *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`35a6646`](https://github.com/sfxcode/formkit-primevue/commit/35a66460e6f293d31bdbda7a96ce223fec58ab60) - **dependencies**: update all *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`6d5dd4d`](https://github.com/sfxcode/formkit-primevue/commit/6d5dd4de4afcf0a1a16e8d9340f347fc7d7f1de3) - **dependencies**: update all *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`df19578`](https://github.com/sfxcode/formkit-primevue/commit/df195781994f402d25c76049ae8d23d13142f142) - **dependencies**: update all *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`d782243`](https://github.com/sfxcode/formkit-primevue/commit/d7822431d30aa7dab3270b0fb90606f03accad20) - **dependencies**: Formkit 0.17.0 - primevue 3.29.0 *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`4313104`](https://github.com/sfxcode/formkit-primevue/commit/43131041e3f72d3b93d9fcd8911b6f43c2eaa2a4) - **dependencies**: Formkit 0.17.0 - primevue 3.29.0 *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`8b205f0`](https://github.com/sfxcode/formkit-primevue/commit/8b205f018b632466437a77bfe08b3625ce6ae35e) - **dependencies**: PrimeVue 3.30.0 *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`a4cccd7`](https://github.com/sfxcode/formkit-primevue/commit/a4cccd7561e87a15568260c10f1c08546075e900) - **dependencies**: Formkit 1.1.0 *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`69ea7c2`](https://github.com/sfxcode/formkit-primevue/commit/69ea7c26f0b128e948208273976b8d993a45a6ff) - **dependencies**: Update *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`60e11c3`](https://github.com/sfxcode/formkit-primevue/commit/60e11c38dfda1c0eac19b6461c54a7689b606fbf) - **Version**: Prepare Release *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.4.1] - 2023-10-14
### :recycle: Refactors
- [`e308a1d`](https://github.com/sfxcode/formkit-primevue/commit/e308a1d226ca72cc88a2767f93143249189c6c2b) - **styles**: set width of inputs, dropdowns, ... to 100 % *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`29c63f1`](https://github.com/sfxcode/formkit-primevue/commit/29c63f1b94808f909d8dd063b65fd10143798d62) - **dependencies**: PrimeVue 3.36.0 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.4.0] - 2023-10-09
### :boom: BREAKING CHANGES
- due to [`cdb256c`](https://github.com/sfxcode/formkit-primevue/commit/cdb256c665c240f2d71a5c62070cf6dd663f0f7e) - Remove formkit-prime-inputs.scss *(commit by [@sfxcode](https://github.com/sfxcode))*:

  Remove formkit-prime-inputs.scss


### :sparkles: New Features
- [`d0a2fd0`](https://github.com/sfxcode/formkit-primevue/commit/d0a2fd05df0a8054fe6da8a0ec9da3bcf656f2b8) - **Components**: Add p-formkit to each outer div for better styling *(commit by [@sfxcode](https://github.com/sfxcode))*

### :recycle: Refactors
- [`c57b16c`](https://github.com/sfxcode/formkit-primevue/commit/c57b16c4107a8f21073fb563c5b11c4a90de8752) - **styles**: Remove all fixed With *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`cdb256c`](https://github.com/sfxcode/formkit-primevue/commit/cdb256c665c240f2d71a5c62070cf6dd663f0f7e) - **styles**: Remove formkit-prime-inputs.scss *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`33222fb`](https://github.com/sfxcode/formkit-primevue/commit/33222fb8f04e54c4f02e8655ba5b894e34a3c8ec) - **styles**: remove some margins *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`00bdba3`](https://github.com/sfxcode/formkit-primevue/commit/00bdba34cd64ae5f8dcc0ca9c1ea606ad3d0a881) - **styles**: extract error color *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`1a689cf`](https://github.com/sfxcode/formkit-primevue/commit/1a689cfcf2554d5e853a235bef0343f92f9853de) - **dependencies**: Formkit 1.2.2 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.3.5] - 2023-10-01
### :wrench: Chores
- [`aec7626`](https://github.com/sfxcode/formkit-primevue/commit/aec7626c3eeac6443fcf63f8df3e8b06c0d52aa4) - **dependencies**: Formkit 1.2.0, PrimeVue 3.35.0 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.3.4] - 2023-09-24
### :bug: Bug Fixes
- [`27c3f94`](https://github.com/sfxcode/formkit-primevue/commit/27c3f941cb1d19f4ebc520873f828cef948ae56a) - **Knob**: listen to update model value *(commit by [@sfxcode](https://github.com/sfxcode))*

### :wrench: Chores
- [`f640b3e`](https://github.com/sfxcode/formkit-primevue/commit/f640b3e75ad1a5295fca844f07a5b1098b58122a) - **dependencies**: Formkit 1.1.0 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.3.3] - 2023-09-17
### :bug: Bug Fixes
- [`43ea7e3`](https://github.com/sfxcode/formkit-primevue/commit/43ea7e3caa5b529530651d9a16bdabfe4f1b9ed0) - **Typo**: Import AutoComplete *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.3.0] - 2023-09-02
### :wrench: Chores
- [`88c43fc`](https://github.com/sfxcode/formkit-primevue/commit/88c43fc81a0832dfa5fbce891f2ac4257d2bb020) - **dependencies**: Formkit 1.0.0 PrimeVue 3.33.0 *(commit by [@sfxcode](https://github.com/sfxcode))*


## [v1.2.9] - 2023-08-28
### :wrench: Chores
- [`49da165`](https://github.com/sfxcode/formkit-primevue/commit/49da1650be7f0671a63e1c7b7300b11bc592de4a) - **dependencies**: update dependencies *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`3e8dc54`](https://github.com/sfxcode/formkit-primevue/commit/3e8dc54b848e4270090d43466e14828dc47eefe9) - **dependencies**: update dependencies *(commit by [@sfxcode](https://github.com/sfxcode))*
- [`709a452`](https://github.com/sfxcode/formkit-primevue/commit/709a452fdd7ccea673e99a0f431b28da62d9c12b) - **release**: update package because of deprecation *(commit by [@sfxcode](https://github.com/sfxcode))*


## [1.2.1](https://github.com/sfxcode/formkit-primevue/compare/v1.2.0...v1.2.1) (2023-07-18)


### Maintenance

* **dependencies:** PrimeVue 3.30.1 ([162464d](https://github.com/sfxcode/formkit-primevue/commit/162464d215d46df335ad4e48d1246883f6f76684))

## [1.2.0](https://github.com/sfxcode/formkit-primevue/compare/v1.1.2...v1.2.0) (2023-07-12)


### Features

* **Input:** Add RadioButton ([38be693](https://github.com/sfxcode/formkit-primevue/commit/38be693223f369b8ad03b3a4248f4058cb195d28))
* **Input:** Add RadioButton ([7c4b3d7](https://github.com/sfxcode/formkit-primevue/commit/7c4b3d7a75aa2f3aea52238fc4fca67dcb1e8931))
* **Input:** Add RadioButton ([54295a7](https://github.com/sfxcode/formkit-primevue/commit/54295a7197281437522a3bd2c7ab40efe127635b))
* **Input:** Add RadioButton ([380a5b5](https://github.com/sfxcode/formkit-primevue/commit/380a5b5e17396b67dd628220ea4fbb5c2c3078a8))


### Maintenance

* **dependencies:** Formkit 0.17.3 - primevue 3.29.2 ([d3b7836](https://github.com/sfxcode/formkit-primevue/commit/d3b7836cec31535dde8b6a07ae9a0e6aa5410610))
* **dependencies:** Formkit 0.17.4 ([ed34919](https://github.com/sfxcode/formkit-primevue/commit/ed34919da554a5c6995c9dd3f33a388ecc7b4111))
* **dependencies:** Formkit 0.17.4 ([5b6328b](https://github.com/sfxcode/formkit-primevue/commit/5b6328ba14e96ffa25adbf1053b6d76177201323))
* **dependencies:** PrimeVue 3.30.0 ([047c258](https://github.com/sfxcode/formkit-primevue/commit/047c258357108da5b7239e2408d3aef95e7a113b))
* **dependencies:** PrimeVue 3.30.0 ([db746df](https://github.com/sfxcode/formkit-primevue/commit/db746df91ff432804f1ab346709e5d03f931241f))
* **dependencies:** update dependencies ([55f3dd9](https://github.com/sfxcode/formkit-primevue/commit/55f3dd967ebd3a63dc962b42c7c5dab4e7c6b868))
* **dependencies:** Vue 3.3.4 ([2d0129f](https://github.com/sfxcode/formkit-primevue/commit/2d0129f836388a9625580e5ca2b484eda1e235fa))

## [1.1.2](https://github.com/sfxcode/formkit-primevue/compare/v1.1.0...v1.1.2) (2023-05-14)


### Maintenance

* **dependencies:** Formkit 0.17.0 - primevue 3.29.0 ([cc34762](https://github.com/sfxcode/formkit-primevue/commit/cc347620b545c1bc869f7d7f831bb4d2528be7b3))
* **dependencies:** Formkit 0.17.0 - primevue 3.29.0 ([4af4952](https://github.com/sfxcode/formkit-primevue/commit/4af49527f8a0702b57b46a6be599af0b8d64a561))
* **dependencies:** updates ([94f1b6e](https://github.com/sfxcode/formkit-primevue/commit/94f1b6e47e2719eb84402843cfe4c4f3a114562b))
* **dependencies:** updates ([53b311c](https://github.com/sfxcode/formkit-primevue/commit/53b311c76dad85e80c1602d32faf527cd9a6fedd))

## [1.1.0](https://github.com/sfxcode/formkit-primevue/compare/v1.0.0...v1.1.0) (2023-04-26)


### Bug Fixes

* **Calendar:** wrong icon ([9e421a7](https://github.com/sfxcode/formkit-primevue/commit/9e421a7cfa13fd24fd38d4246eac510e8be36d97))


### Features

* **footer:** update versions ([30240cc](https://github.com/sfxcode/formkit-primevue/commit/30240cc6e42e0d87e9cd5db3e7b6e8ba6ec04162))
* **Validation:** Add p-invalid to class attribute if not valid ([96802d2](https://github.com/sfxcode/formkit-primevue/commit/96802d23143b556121d5cc5a556f9189aa5eb592))
* **Validation:** Add p-invalid to class attribute if not valid and validationVisible ([6a66826](https://github.com/sfxcode/formkit-primevue/commit/6a668269c3378cb4ef3b408118e13d799cfe3c8a))
* **Validation:** Add p-invalid to class attribute if not valid and validationVisible ([6c2ea44](https://github.com/sfxcode/formkit-primevue/commit/6c2ea44325d035df22c827bfc3d263e8fb5b5efd))


### Maintenance

* **build:** add index.d.ts ([036ef20](https://github.com/sfxcode/formkit-primevue/commit/036ef20ce5a5abf5253602c166d048bf739e49ce))
* **dependencies:** Formkit 0.16.5 ([bcde6bb](https://github.com/sfxcode/formkit-primevue/commit/bcde6bba45cb6fa843c89cc2219d804ea7b8af70))
* **dependencies:** PrimeVue ([98139fc](https://github.com/sfxcode/formkit-primevue/commit/98139fc3e4c2090cfa6ba89cfc5f7baa877cd79f))
* **dependencies:** PrimeVue 3.25.0 ([91c1184](https://github.com/sfxcode/formkit-primevue/commit/91c1184ec8b84e021c193c1d970c937e19add21b))
* **dependencies:** PrimeVue 3.27.0 ([3b965b5](https://github.com/sfxcode/formkit-primevue/commit/3b965b5ab9617b24b1ccc0aa2630a0d69c151c89))
* **dependencies:** PrimeVue, Formkit ([89ca028](https://github.com/sfxcode/formkit-primevue/commit/89ca028415481199dc3ac1080c2984f76beb1c58))
* **dependencies:** update all ([aa92369](https://github.com/sfxcode/formkit-primevue/commit/aa92369a722a3b1b54fc4dae317fa699b063cc78))
* **dependencies:** update all ([85050df](https://github.com/sfxcode/formkit-primevue/commit/85050dff8dbe6af471a1a1697f1e8241d0553a16))
* **dependencies:** update all ([f55d22c](https://github.com/sfxcode/formkit-primevue/commit/f55d22cc4972900263d6a4fa312028f687f35bbd))
* **dependencies:** updates ([2beb295](https://github.com/sfxcode/formkit-primevue/commit/2beb295afb4efcc341f9261691eaab8b440ed671))
* **dependencies:** updates ([5cdaf2b](https://github.com/sfxcode/formkit-primevue/commit/5cdaf2b990bc5842a3ecf1ddec94d7adad43a257))
* **dependencies:** updates ([5c6399a](https://github.com/sfxcode/formkit-primevue/commit/5c6399a040bab8a92f8c45dafc677844a4155a33))

## [1.0.0](https://github.com/sfxcode/formkit-primevue/compare/v0.9.5...v1.0.0) (2023-03-08)


### Code Refactoring

* **PrimeInput:** Change link to docs ([b60a042](https://github.com/sfxcode/formkit-primevue/commit/b60a04201165f2ce417a341c6f96756653400fbe))
* **PrimeInput:** Change link to docs ([2898a9c](https://github.com/sfxcode/formkit-primevue/commit/2898a9c138a2130e37292abd4c1236e3c8a5e6ea))


### Maintenance

* **dependencies:** PrimeVue ([048cb1e](https://github.com/sfxcode/formkit-primevue/commit/048cb1ed21c223148182e46006214ff56011dc99))
* **dependencies:** PrimeVue, Formkit ([021d0e7](https://github.com/sfxcode/formkit-primevue/commit/021d0e71ecc46c6c8e3ab30cdeebe5ee1a17a7c0))
* **dependencies:** PrimeVue, Formkit ([ba6f8b7](https://github.com/sfxcode/formkit-primevue/commit/ba6f8b7bfd9ec104bd7e3dce6a95c7f96053f4a4))
* **dependencies:** PrimeVue, Formkit ([0dcd81b](https://github.com/sfxcode/formkit-primevue/commit/0dcd81b4c50c97d23a3e8ec6d5cde4f79f59b497))

## [0.9.5](https://github.com/sfxcode/formkit-primevue/compare/v0.9.4...v0.9.5) (2023-01-22)


### Maintenance

* **dependencies:** PrimeVue, Formkit ([16b1db2](https://github.com/sfxcode/formkit-primevue/commit/16b1db240f65c5f3d0ed6085f7d955c7d7abe1b8))

## [0.9.4](https://github.com/sfxcode/formkit-primevue/compare/v0.9.3...v0.9.4) (2022-11-19)


### Maintenance

* **dependencies:** PrimeVue ([9256b4a](https://github.com/sfxcode/formkit-primevue/commit/9256b4a49630e7d0e91c837f26c91392c7beb922))
* **dependencies:** PrimeVue ([2056bf4](https://github.com/sfxcode/formkit-primevue/commit/2056bf4d3796125f2b00f280e9b1f1d3594ef8bf))

## [0.9.3](https://github.com/sfxcode/formkit-primevue/compare/v0.9.1...v0.9.3) (2022-11-17)


### Code Refactoring

* **inputs:** Surround with div tag ([39ae86e](https://github.com/sfxcode/formkit-primevue/commit/39ae86e31f63f8ab23a6f16a6a69100444f08e9a))
* **inputs:** Surround with div tag ([8b375bd](https://github.com/sfxcode/formkit-primevue/commit/8b375bd1694e551cc067305e26d3f13088eb2404))


### Maintenance

* **dependencies:** PrimeVue ([28d20bc](https://github.com/sfxcode/formkit-primevue/commit/28d20bc17f059c7eeaa6c94f740172d6ea08adce))

## [0.9.1](https://github.com/sfxcode/formkit-primevue/compare/v0.9.0...v0.9.1) (2022-11-16)


### ⚠ BREAKING CHANGES

* **Inputs:** PrimeInputTextArea => PrimeTextArea
  Name alignment with PrimeVue

### Code Refactoring

* **Inputs:** Rena PrimeInputTextArea ([991b6de](https://github.com/sfxcode/formkit-primevue/commit/991b6de0420ddb655d2e58389d005732c864762e))


### Maintenance

* **dependencies:** PrimeVue ([4cecf64](https://github.com/sfxcode/formkit-primevue/commit/4cecf64c019dc3bed051681cd42132890209c464))

## [0.9.0](https://github.com/sfxcode/formkit-primevue/compare/v0.8.4...v0.9.0) (2022-11-15)


### ⚠ BREAKING CHANGES

* **Inputs:** PrimeCheckBox => PrimeCheckbox
  Name alignment with PrimeVue

### Code Refactoring

* **Inputs:** Add Editor for Demos ([6da62f4](https://github.com/sfxcode/formkit-primevue/commit/6da62f4416ded7cc5e2131ec9929cddfe5e01f8f))
* **Inputs:** Add missing properties and create demo for each ([744fca3](https://github.com/sfxcode/formkit-primevue/commit/744fca3210d5adfca3c9d9f71e6e131516f91c91))
* **Inputs:** Add some styling tweaks ([f6a88ab](https://github.com/sfxcode/formkit-primevue/commit/f6a88ab923f977e8dd3b53a72cf9d9724ad999fe))
* **Inputs:** Add tabindex and aria ([64cc6fc](https://github.com/sfxcode/formkit-primevue/commit/64cc6fc42127be7880f411fe902e9229da56f189))
* **Inputs:** Refactor Elements and create Demo for each ([d4f9166](https://github.com/sfxcode/formkit-primevue/commit/d4f9166b451ba2f39e162c1e6770a82fd9aaaeb0))
* **Inputs:** Refactor Elements and create Demo for each ([62df6ff](https://github.com/sfxcode/formkit-primevue/commit/62df6ff959db0b527ebd9281654ff8e8fff3f209))
* **Inputs:** Refactor Elements and create Demo for each ([fa389c2](https://github.com/sfxcode/formkit-primevue/commit/fa389c2bfe84d42a3899a5534f866708e6853371))
* **Inputs:** Refactor Elements and create Demo for each ([4925f71](https://github.com/sfxcode/formkit-primevue/commit/4925f710125985a658d63f9a97e7fb365cbda7f6))


### Features

* **Input:** Add TriStateCheckbox ([7d9b29f](https://github.com/sfxcode/formkit-primevue/commit/7d9b29f61eeb02c6d693cc1539bdb0930cc3ea33))

## [0.8.4](https://github.com/sfxcode/formkit-primevue/compare/0194d445051ac1e1e2295a05f6eacb79d9abb9f5...v0.8.4) (2022-11-10)


### Features

* **build:** Add inputs ([0881796](https://github.com/sfxcode/formkit-primevue/commit/0881796363bee5a62e4bbc33763800705403f0df))
* **build:** Add primevue-formkit.css ([9371fbf](https://github.com/sfxcode/formkit-primevue/commit/9371fbf1b73b50dafc0a27c098080c463476b76d))
* **chore:** Build Types ([4712e64](https://github.com/sfxcode/formkit-primevue/commit/4712e641903261951ada6f4188b43f1e6d054f62))
* **Input:** Add Chips ([e6aa855](https://github.com/sfxcode/formkit-primevue/commit/e6aa855286657ba97dc562454c638df10af9b51a))
* **Input:** Add Knob ([f92bc37](https://github.com/sfxcode/formkit-primevue/commit/f92bc37281cf6d410e5f62eb494e8fc832aefbec))
* **Input:** Add SelectButton ([8b99cec](https://github.com/sfxcode/formkit-primevue/commit/8b99cec2c86a7c355149d072d8ecf7738d3786a0))
* **Input:** Calendar ([c3f178f](https://github.com/sfxcode/formkit-primevue/commit/c3f178ffcfd3ab8a097b432f0003118cb82694f0))
* **Input:** Calendar ([634ae29](https://github.com/sfxcode/formkit-primevue/commit/634ae29abc9333074177847f845eef411c70d44d))
* **Input:** Calendar ([6bf3c6c](https://github.com/sfxcode/formkit-primevue/commit/6bf3c6c7d683def91069fbfb3d52f734daf5c139))
* **Input:** Dropdown ([939a946](https://github.com/sfxcode/formkit-primevue/commit/939a946e792d9269e8d9aff2523b8567c6ccd43c))
* **Input:** InputMask and Rating ([f50c372](https://github.com/sfxcode/formkit-primevue/commit/f50c372c37c3178a5393cd399833ff2c7c2c1c22))
* **Input:** MultiSelect ([758291b](https://github.com/sfxcode/formkit-primevue/commit/758291bb38a64c8643dceaa5e0eb9074263ff486))
* **Input:** Password ([574646c](https://github.com/sfxcode/formkit-primevue/commit/574646cb43a816b7b4c53d6fe63c4c812c14fbda))
* **Input:** primeInputs ([0ad88de](https://github.com/sfxcode/formkit-primevue/commit/0ad88de32f28d429711824063a69ab30b4c5a7b8))
* **inputs:** Add Checkbox, TextArea and Editor ([89f8593](https://github.com/sfxcode/formkit-primevue/commit/89f85935d976c3cdc0d2390c6b89ef9316162030))
* **inputs:** Add InputSwitch ([1c4ce68](https://github.com/sfxcode/formkit-primevue/commit/1c4ce6850865de8a205c7c3dbbd66c00d82c5e7c))
* **inputs:** Add InputSwitch ([bb37a67](https://github.com/sfxcode/formkit-primevue/commit/bb37a67cba747d21d0482653969dffff0a3c97c7))
* **Input:** Slider ([8aafb2c](https://github.com/sfxcode/formkit-primevue/commit/8aafb2c6f4363bc8c3427ada0fac0dd7c5b41c2f))


### Maintenance

* **Dependencies:** Formkit Beta 10 ([82d35c5](https://github.com/sfxcode/formkit-primevue/commit/82d35c5027f173ab2c19e98c96a31fa56031d633))
* **Dependencies:** Formkit Beta 8 ([2be8d1b](https://github.com/sfxcode/formkit-primevue/commit/2be8d1b3fb9e5c974a2f31a5f6e6dc4dc45b299d))
* **Dependencies:** Formkit Beta 8 ([981239d](https://github.com/sfxcode/formkit-primevue/commit/981239d6ca36cf8344f8dd629e2574fc0d2fbc1a))
* **Dependencies:** Formkit Beta 8 ([9a0e118](https://github.com/sfxcode/formkit-primevue/commit/9a0e118d9286b78bf5a7af4c747ce50ce3591d35))
* **dependencies:** Nuxt3 ([41e7603](https://github.com/sfxcode/formkit-primevue/commit/41e76035d1544a904409479dabb59b90780c24c6))
* **dependencies:** PrimeIcons ([fee2858](https://github.com/sfxcode/formkit-primevue/commit/fee2858b76c25dcfa5de5d5e24600ab8c1dc9fa9))
* **dependencies:** PrimeIcons ([32496ab](https://github.com/sfxcode/formkit-primevue/commit/32496ab4c6414f248a6426c825a07a166823ae89))
* **dependencies:** PrimeVue ([81774b8](https://github.com/sfxcode/formkit-primevue/commit/81774b830cefd72d2e9dc5dc8a99e8391ff1cae4))
* **dependencies:** PrimeVue ([24010f1](https://github.com/sfxcode/formkit-primevue/commit/24010f15686d329d319bfdc8c2a603b62ee8f2e1))
* **dependencies:** PrimeVue ([62bc93f](https://github.com/sfxcode/formkit-primevue/commit/62bc93f069f632607885ec946104e72b0650da45))
* **dependencies:** PrimeVue ([d0e681b](https://github.com/sfxcode/formkit-primevue/commit/d0e681b2372cde6efb60709f6ad6fac08f0a0b4b))
* **Dependencies:** Remove unused ([f879d05](https://github.com/sfxcode/formkit-primevue/commit/f879d056f12b928f88abad4a3531cdcc839c9919))
* **Dependencies:** Remove unused ([444c67b](https://github.com/sfxcode/formkit-primevue/commit/444c67b1d201200663d5af9a2937e4f2f6bc6996))
* **dependencies:** Update ([fc15e02](https://github.com/sfxcode/formkit-primevue/commit/fc15e0276e69589cad40c3b354815bb03d527edf))
* **Dependencies:** Updates ([fdb61e3](https://github.com/sfxcode/formkit-primevue/commit/fdb61e3064bb25d7b534f47a3955f726eddf5a8b))
* **dependencies:** Vite 3 ([4a2d40a](https://github.com/sfxcode/formkit-primevue/commit/4a2d40aec605583c96aeda7f9b2a9811f554a9df))
* **dependencies:** Vite 3 ([92592bd](https://github.com/sfxcode/formkit-primevue/commit/92592bd32722abab4e8007174d4b2410164b9b6c))
* **deps:** Modules ([8124ef0](https://github.com/sfxcode/formkit-primevue/commit/8124ef0ef91c47d5bd67b00a705901a959f27267))
* **deps:** Modules ([0194d44](https://github.com/sfxcode/formkit-primevue/commit/0194d445051ac1e1e2295a05f6eacb79d9abb9f5))
* **feat:** New Inputs ([66371eb](https://github.com/sfxcode/formkit-primevue/commit/66371ebab1c6d7c1e735844108af647d54451e92))
* **Linting:** eslint fix ([f55a411](https://github.com/sfxcode/formkit-primevue/commit/f55a4118ad60081cc2123d831cb5fcc9a5b13fc2))
* **Linting:** eslint fix ([ce8461a](https://github.com/sfxcode/formkit-primevue/commit/ce8461ad31e51de90b4fcd3cdcce57185aed3019))
* **Notes:** Readme and Some package info ([aa9452e](https://github.com/sfxcode/formkit-primevue/commit/aa9452eccbb86c336670d167ed513ac7ef6b49e8))
* **Notes:** Readme and Some package info ([c2af7b0](https://github.com/sfxcode/formkit-primevue/commit/c2af7b07fb288c38abc51fd820fb97772483a48c))
* **release:** new version ([784260f](https://github.com/sfxcode/formkit-primevue/commit/784260f4d141e168df74dec3a5f12f48cbba63ef))


[v1.2.9]: https://github.com/sfxcode/formkit-primevue/compare/v1.2.8...v1.2.9
[v1.3.0]: https://github.com/sfxcode/formkit-primevue/compare/v1.2.9...v1.3.0
[v1.3.3]: https://github.com/sfxcode/formkit-primevue/compare/v1.3.2...v1.3.3
[v1.3.4]: https://github.com/sfxcode/formkit-primevue/compare/v1.3.3...v1.3.4
[v1.3.5]: https://github.com/sfxcode/formkit-primevue/compare/v1.3.4...v1.3.5
[v1.4.0]: https://github.com/sfxcode/formkit-primevue/compare/v1.3.5...v1.4.0
[v1.4.1]: https://github.com/sfxcode/formkit-primevue/compare/v1.4.0...v1.4.1
[v1.4.2]: https://github.com/sfxcode/formkit-primevue/compare/v1.4.1...v1.4.2
[v1.4.3]: https://github.com/sfxcode/formkit-primevue/compare/v1.4.2...v1.4.3
[v1.4.4]: https://github.com/sfxcode/formkit-primevue/compare/v1.4.3...v1.4.4
[v1.4.5]: https://github.com/sfxcode/formkit-primevue/compare/v1.4.4...v1.4.5
[v1.5.1]: https://github.com/sfxcode/formkit-primevue/compare/v1.5.0...v1.5.1
[v1.5.2]: https://github.com/sfxcode/formkit-primevue/compare/v1.5.1...v1.5.2
[v1.5.6]: https://github.com/sfxcode/formkit-primevue/compare/v_1.5.5...v1.5.6
[v1.5.7]: https://github.com/sfxcode/formkit-primevue/compare/v1.5.6...v1.5.7
[v1.5.8]: https://github.com/sfxcode/formkit-primevue/compare/v1.5.7...v1.5.8
[v1.5.9]: https://github.com/sfxcode/formkit-primevue/compare/v1.5.8...v1.5.9
[v1.5.10]: https://github.com/sfxcode/formkit-primevue/compare/v1.5.9...v1.5.10
[v1.6.0]: https://github.com/sfxcode/formkit-primevue/compare/v1.5.10...v1.6.0
[v1.6.1]: https://github.com/sfxcode/formkit-primevue/compare/v1.6.0...v1.6.1
[v1.6.2]: https://github.com/sfxcode/formkit-primevue/compare/v1.6.1...v1.6.2
[v1.6.3]: https://github.com/sfxcode/formkit-primevue/compare/v1.6.2...v1.6.3
[v1.6.4]: https://github.com/sfxcode/formkit-primevue/compare/v1.6.3...v1.6.4
[v1.6.5]: https://github.com/sfxcode/formkit-primevue/compare/v1.6.4...v1.6.5
[v1.7.0]: https://github.com/sfxcode/formkit-primevue/compare/v1.6.11...v1.7.0
[v1.7.1]: https://github.com/sfxcode/formkit-primevue/compare/v1.7.0...v1.7.1
[v1.7.4]: https://github.com/sfxcode/formkit-primevue/compare/v1.7.3...v1.7.4
[v1.8.0]: https://github.com/sfxcode/formkit-primevue/compare/1.7.2...v1.8.0
[v1.8.1]: https://github.com/sfxcode/formkit-primevue/compare/v1.8.0...v1.8.1
[v1.8.5]: https://github.com/sfxcode/formkit-primevue/compare/v1.8.1...v1.8.5
[v1.8.6]: https://github.com/sfxcode/formkit-primevue/compare/v1.8.5...v1.8.6
[v1.9.0]: https://github.com/sfxcode/formkit-primevue/compare/v1.8.6...v1.9.0
[v1.9.1]: https://github.com/sfxcode/formkit-primevue/compare/v1.9.0...v1.9.1
[v1.9.2]: https://github.com/sfxcode/formkit-primevue/compare/v1.9.1...v1.9.2
[v1.9.3]: https://github.com/sfxcode/formkit-primevue/compare/v1.9.2...v1.9.3
[v1.9.4]: https://github.com/sfxcode/formkit-primevue/compare/v1.9.3...v1.9.4
[v1.9.5]: https://github.com/sfxcode/formkit-primevue/compare/v1.9.4...v1.9.5