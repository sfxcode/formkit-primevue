# GitHub Copilot Instructions for Working with Vue and Vite

## General Guidelines
- Use the Vue 3 Composition API for all new components and composables.
- Prefer `<script setup lang="ts">` for single-file components (SFCs).
- Use TypeScript for all code (components, composables, utils, etc.).
- Organize components in the `src/components/` directory and composables in `src/composables/`.
- Use named exports for composables and utility functions.
- Follow the existing project structure and naming conventions.

## Vite
- Use Vite for local development and builds (`pnpm dev`, `pnpm build`).
- Place Vite config in `vite.config.ts` and use plugins as needed (e.g., Vue, UnoCSS).
- Use Vite aliases (e.g., `@/` for `src/`) for imports when possible.

## Styling
- Use SCSS for styles and import shared variables/mixins from `src/sass/`.
- Scope styles in components unless global styles are required.
- Use CSS variables for theming and customization.

## Best Practices
- Use `defineProps` and `defineEmits` in `<script setup>` for props and events.
- Use `ref` and `reactive` for state management within components.
- Use `watch` and `computed` for reactive logic.
- Use `defineExpose` to expose component internals if needed.
- Use `defineComponent` only if `<script setup>` is not suitable.
- Prefer composables for reusable logic.

## Testing
- Write unit tests for composables and components in the `test/` directory using Vitest.
- Use the `@vue/test-utils` library for component testing.

## Vitest Best Practices
- Place all test files in the `test/` directory and use the `.test.ts` or `.test.js` suffix.
- Use descriptive test names and group related tests with `describe` blocks.
- Prefer `import { describe, it, expect } from 'vitest'` for consistency.
- Mock dependencies and external modules using Vitest's mocking utilities when needed.
- Use `beforeEach` and `afterEach` for setup and teardown logic.
- Test both typical and edge cases for composables and components.
- Use `@vue/test-utils` for mounting and interacting with Vue components.
- Keep tests isolated and avoid reliance on global state.
- Run tests with `pnpm test` and use `pnpm coverage` to check code coverage.
- Use snapshot testing for components with complex output, but avoid overusing snapshots.
- Document any custom test utilities or setup in a `test/README.md` if needed.

## Documentation
- Document public APIs and complex logic with JSDoc/TSDoc comments.
- Update the `docs/` directory for user-facing documentation.

## Histoire (Storybook Alternative)
- Add stories for all components in the `stories/` directory using Histoire's `<Story>` and `<Variant>` blocks.
- Use the `context` prop for output components to match FormKit conventions.

## FormKit
This project integrates FormKit (https://formkit.com/) with PrimeVue components to create powerful, accessible forms.

### Core Concepts
- **FormKit Schema**: Use schema-based form rendering for dynamic and flexible forms. Schema is a JSON-serializable format that defines form structure.
- **FormKit Context**: The core of FormKit's reactivity system. Every input has a context object that contains node data, props, handlers, and state.
- **FormKit Nodes**: The foundation of FormKit's architecture. Each form element is represented as a node in a tree structure.
- **Input Types**: FormKit provides many built-in input types (text, email, number, etc.) and this project extends them with PrimeVue-based inputs.

### Component Development
- Define custom PrimeVue-based FormKit inputs in `src/components/` directory (e.g., `PrimeInputText.vue`, `PrimeSelect.vue`).
- Define custom output components for displaying data in `src/components/` (e.g., `PrimeOutputText.vue`, `PrimeOutputNumber.vue`).
- Use composables like `useFormKitInput`, `useFormKitSection`, and `useFormKitSchema` for reusable logic.
- Access FormKit context using the `context` prop in custom components.
- Use `context.node` to access the FormKit node and its properties (value, props, children, etc.).
- Emit proper events using `context.handlers.blur`, `context.handlers.touch` for proper validation timing.

### Schema Usage
- Use FormKit schema for programmatic form generation and dynamic forms.
- Schema supports `$el`, `$cmp`, and `$formkit` node types for different rendering needs.
- Use schema functions and conditions for dynamic behavior.
- Leverage schema composition for reusable form sections.

### Validation
- Use FormKit's built-in validation rules (required, email, number, etc.).
- Create custom validation rules as needed and register them with FormKit.
- Use `validation-visibility` prop to control when validation messages appear.
- Access validation state through `context.state.validationVisible` and `context.state.errors`.

### Props and Configuration
- Use `defineProps` with proper TypeScript types for FormKit context and additional props.
- Common props include: `label`, `help`, `placeholder`, `disabled`, `validation`, `validationMessages`.
- Use `props` object from context to access all FormKit props.
- Support `prefix` and `suffix` features using `FormKitPrefix` and `FormKitSuffix` components.

### Styling and Theming
- FormKit uses section-based styling (outer, wrapper, inner, input, label, help, messages, etc.).
- Use `classes` prop or config to customize section classes.
- Integrate with PrimeVue's theming system for consistent UI.
- Use SCSS for custom styles and ensure they work with both light and dark themes.

### Plugins and Extensions
- Keep FormKit configuration and plugin registration in dedicated modules (e.g., `dev/modules/formkit.ts`).
- Create plugins to extend FormKit functionality (custom inputs, validation rules, etc.).
- Use `createInput` helper for registering custom input types.
- Register PrimeVue inputs with proper type definitions.

### Internationalization (i18n)
- FormKit has built-in i18n support for validation messages and UI text.
- Use FormKit's locale system for multi-language support.
- Define custom message translations in locale files.
- Access translated messages through FormKit's message system.

### Testing
- Write unit tests for custom FormKit components and composables in `test/` directory.
- Test validation logic, state management, and event handling.
- Mock FormKit context when testing components in isolation.
- Test schema generation and manipulation functions.

### Best Practices
- Always use TypeScript for type safety with FormKit components.
- Prefer composition API and `<script setup>` for all FormKit components.
- Use FormKit's context object rather than direct DOM manipulation.
- Leverage FormKit's reactivity system instead of managing local state.
- Document custom inputs/outputs with JSDoc comments and examples.
- Keep input components focused on single responsibility.
- Use semantic HTML and proper ARIA attributes for accessibility.
- Follow FormKit naming conventions (e.g., use `context` prop name consistently).

### Resources
- Official FormKit documentation: https://formkit.com/
- FormKit Inputs: https://formkit.com/inputs
- FormKit Schema: https://formkit.com/essentials/schema
- FormKit Validation: https://formkit.com/essentials/validation
- FormKit Plugins: https://formkit.com/advanced/plugins

## VitePress Best Practices
- Organize documentation in the `docs/` directory, following the structure of your codebase for easy navigation.
- Use Markdown (`.md`) files for all documentation pages.
- Use frontmatter (`---`) at the top of each Markdown file for metadata (title, description, etc.).
- Structure guides, API references, and advanced topics in subfolders (e.g., `docs/guide/`, `docs/advanced/`).
- Use code blocks with language annotations (e.g., ```ts, ```vue) for syntax highlighting.
- Keep examples concise and relevant; link to source files or stories for full examples.
- Use VitePress sidebar and navigation configuration for a clear, user-friendly doc site.
- Document all public APIs, configuration options, and usage patterns.
- Keep documentation up to date with code changes and new features.
- Use internal linking (`[text](./other-page.md)`) for easy navigation between docs.
- Prefer relative links for images and assets, and store them in the `docs/assets/` directory.
- Use VitePress custom containers (e.g., :::tip, :::warning) for callouts and important notes.
- Preview documentation locally with `pnpm docs:dev` before publishing changes.

## Miscellaneous
- Use `pnpm` for dependency management.
- Keep dependencies up to date and avoid deprecated packages.
- Use `crypto.randomUUID()` for unique IDs instead of external libraries.
- Use Conventional Commits for commit messages to maintain a clear history.
---

_These instructions are intended to help Copilot and contributors maintain consistency and quality when working with Vue and Vite in this project._
