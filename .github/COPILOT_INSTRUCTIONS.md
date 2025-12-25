# GitHub Copilot Instructions for Working with Vue and Vite

## General Guidelines
- Use the Vue 3 Composition API for all new components and composables.
- Prefer `<script setup lang="ts">` for single-file components (SFCs) - it's the recommended approach for Vue 3.
- Use TypeScript for all code (components, composables, utils, etc.) with strict mode enabled.
- Organize components in the `src/components/` directory and composables in `src/composables/`.
- Use named exports for composables and utility functions.
- Follow the existing project structure and naming conventions.
- Use `defineModel()` macro for v-model bindings in components (Vue 3.4+).
- Leverage TypeScript's `satisfies` operator for type checking without widening types.
- Use generic components with `generic` attribute in `<script setup>` when needed for type safety.

## Vite
- Use Vite for local development and builds (`pnpm dev`, `pnpm build`).
- Place Vite config in `vite.config.ts` and use plugins as needed (e.g., Vue, UnoCSS).
- Use Vite aliases (e.g., `@/` for `src/`) for imports when possible.
- Leverage Vite's built-in code splitting and tree shaking for optimal bundle size.
- Use dynamic imports (`import()`) for route-level code splitting and lazy loading.
- Configure `build.rollupOptions` for manual chunk splitting of large dependencies.
- Use `vite-plugin-inspect` for debugging build issues and bundle analysis.
- Enable CSS code splitting with `build.cssCodeSplit` for better caching.
- Use `vite-plugin-compression` for gzip/brotli compression in production builds.

## Styling
- Use SCSS for styles and import shared variables/mixins from `src/sass/`.
- Scope styles in components unless global styles are required.
- Use CSS variables (custom properties) for theming and customization.
- Prefer modern CSS features: container queries, `has()`, `:where()`, `:is()` selectors.
- Use logical properties (`margin-inline`, `padding-block`) for better RTL support.
- Leverage `color-mix()` and `oklch()` for modern color manipulation.
- Use `@layer` for CSS cascade layer management in complex stylesheets.
- Avoid `!important` - use CSS specificity and layers instead.
- Use BEM or utility-first naming conventions consistently.
- Optimize for dark mode with `prefers-color-scheme` media query and CSS variables.

## Best Practices
- Use `defineProps` and `defineEmits` in `<script setup>` for props and events.
- Use `defineModel()` for two-way binding (v-model) - simplifies prop/emit patterns.
- Use `ref` and `reactive` for state management within components (prefer `ref` for primitives).
- Use `shallowRef` and `shallowReactive` for performance when deep reactivity isn't needed.
- Use `watch` and `computed` for reactive logic - prefer `computed` for derived state.
- Use `watchEffect` for simpler watchers without explicit dependencies.
- Use `defineExpose` to expose component internals if needed.
- Use `defineComponent` only if `<script setup>` is not suitable.
- Prefer composables for reusable logic - follow the `use` prefix convention.
- Use `provide/inject` for dependency injection in component trees.
- Leverage `Suspense` for async component loading and error boundaries.
- Use `Teleport` for rendering content outside the component hierarchy (modals, tooltips).
- Always destructure props with `toRefs()` or `toRef()` to maintain reactivity in composables.
- Use `unref()` and `toValue()` for flexible ref/non-ref handling in utilities.
- Avoid mutating props directly - emit events or use `defineModel()` instead.
- Use TypeScript generics in composables for better type inference.

## TypeScript Best Practices
- Enable strict mode in `tsconfig.json` for maximum type safety.
- Use `as const` for literal types and readonly objects/arrays.
- Prefer `interface` over `type` for object shapes (better error messages).
- Use `type` for unions, intersections, and mapped types.
- Leverage `satisfies` operator to validate types without widening (TypeScript 4.9+).
- Use discriminated unions for complex state management.
- Define proper prop types with `PropType` or TypeScript generics.
- Use `ComponentPublicInstance` type for component refs.
- Avoid `any` - use `unknown` for truly unknown types and narrow with type guards.
- Use template literal types for string patterns and validation.
- Leverage `ReturnType`, `Parameters`, and other utility types.
- Create custom type guards with `is` keyword for runtime type checking.

## Performance Best Practices
- Use `v-once` for static content that never changes.
- Use `v-memo` for expensive list rendering with memoization (Vue 3.2+).
- Implement virtual scrolling for long lists (use libraries like `vue-virtual-scroller`).
- Use `shallowRef` for large objects that don't need deep reactivity.
- Lazy load components and routes with dynamic imports.
- Use `KeepAlive` strategically for expensive components (avoid overuse).
- Debounce/throttle expensive operations (user input, API calls).
- Use Web Workers for CPU-intensive tasks.
- Optimize images: use modern formats (WebP, AVIF), lazy loading, and responsive images.
- Minimize bundle size: analyze with `vite-plugin-visualizer`, code split properly.
- Use `defer` attribute for non-critical scripts.
- Implement proper caching strategies (Cache-Control headers, service workers).
- Profile with Vue DevTools and Chrome DevTools Performance tab.

## Accessibility (a11y) Best Practices
- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, etc.).
- Provide proper ARIA labels and roles when semantic HTML isn't sufficient.
- Ensure keyboard navigation works for all interactive elements.
- Use `aria-live` regions for dynamic content updates.
- Provide sufficient color contrast (WCAG AA: 4.5:1 for normal text).
- Support focus management in modals and complex interactions.
- Add `alt` text for images and `aria-label` for icon-only buttons.
- Use `aria-describedby` and `aria-labelledby` for complex relationships.
- Test with screen readers (NVDA, JAWS, VoiceOver).
- Implement skip links for keyboard users.
- Ensure form inputs have associated labels.
- Use `role="status"` or `role="alert"` for notifications.
- Support prefers-reduced-motion for animations.

## Security Best Practices
- Sanitize user input before rendering with `v-html` (prefer `v-text` when possible).
- Use Content Security Policy (CSP) headers.
- Validate and sanitize data on both client and server.
- Use HTTPS for all production deployments.
- Keep dependencies updated - run `pnpm audit` regularly.
- Use environment variables for sensitive config (never commit secrets).
- Implement proper CORS policies.
- Use `SameSite` cookies for authentication.
- Implement rate limiting for API endpoints.
- Use `noopener` and `noreferrer` for external links with `target="_blank"`.
- Validate file uploads (type, size, content).
- Use cryptographically secure random values (`crypto.randomUUID()`).

## Testing
- Write unit tests for composables and components in the `test/` directory using Vitest.
- Use the `@vue/test-utils` library for component testing.

## Vitest Best Practices
- Place all test files in the `test/` directory and use the `.test.ts` or `.test.js` suffix.
- Use descriptive test names and group related tests with `describe` blocks.
- Prefer `import { describe, it, expect, vi } from 'vitest'` for consistency.
- Mock dependencies and external modules using Vitest's mocking utilities (`vi.mock`, `vi.fn`).
- Use `beforeEach` and `afterEach` for setup and teardown logic.
- Test both typical and edge cases for composables and components.
- Use `@vue/test-utils` for mounting and interacting with Vue components.
- Keep tests isolated and avoid reliance on global state.
- Run tests with `pnpm test` and use `pnpm coverage` to check code coverage.
- Use snapshot testing sparingly - prefer explicit assertions.
- Mock async operations with `vi.useFakeTimers()` for predictable testing.
- Test error states and loading states for async components.
- Use `userEvent` from `@testing-library/user-event` for realistic user interactions.
- Test accessibility with `@testing-library/jest-dom` matchers.
- Aim for high test coverage (80%+) but prioritize meaningful tests over 100% coverage.
- Document any custom test utilities or setup in a `test/README.md` if needed.

## Documentation
- Document public APIs and complex logic with JSDoc/TSDoc comments.
- Update the `docs/` directory for user-facing documentation.

## Histoire (Storybook Alternative)
- Add stories for all components in the `stories/` directory using Histoire's `<Story>` and `<Variant>` blocks.
- Use the `context` prop for output components to match FormKit conventions.

## PrimeVue Best Practices
- Follow PrimeVue theming system with CSS variables for customization.
- Use PrimeVue's built-in accessibility features (ARIA attributes, keyboard navigation).
- Leverage PrimeVue's responsive design patterns and breakpoint system.
- Use PrimeVue composables (`useToast`, `useConfirm`) for global services.
- Ensure proper event handling with PrimeVue components in FormKit context.
- Use PrimeVue's `pt` (pass-through) props for fine-grained component customization.
- Configure PrimeVue globally in plugin registration with proper TypeScript types.
- Use unstyled mode for complete styling control when needed.
- Implement proper theme switching (light/dark) with PrimeVue themes.
- Test PrimeVue components thoroughly as they integrate with FormKit validation.

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
- Use schema functions and conditions (`$if`, `$for`) for dynamic behavior.
- Leverage schema composition for reusable form sections and DRY principles.
- Use `$get()` and `$set()` helpers for accessing and modifying form data within schema.
- Implement schema extensions for project-specific patterns and reusable components.
- Use schema partials for complex, reusable form sections.
- Type-check schemas with TypeScript using FormKit's schema types.

### Validation
- Use FormKit's built-in validation rules (required, email, number, min, max, etc.).
- Create custom validation rules as needed and register them with FormKit.
- Use `validation-visibility` prop to control when validation messages appear (blur, live, dirty, submit).
- Access validation state through `context.state.validationVisible` and `context.state.errors`.
- Implement async validation for server-side checks (debounce appropriately).
- Use cross-field validation with FormKit's node access for complex validation logic.
- Leverage validation rule parameters for configurable validation (e.g., `min:5`, `max:100`).
- Provide user-friendly validation messages using `validation-messages` prop or i18n.

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
- Use `createInput` helper for registering custom input types with proper schema.
- Register PrimeVue inputs with proper type definitions and TypeScript support.
- Implement plugins for cross-cutting concerns (logging, analytics, persistence).
- Use node hooks (`hook:input`, `hook:commit`) for lifecycle interception.
- Create reusable plugin factories for common patterns.
- Test plugins independently from components for better maintainability.

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

## PNPM Best Practices
- Use `pnpm` for all dependency management (faster, more efficient than npm/yarn).
- Use workspace protocol (`workspace:*`) for monorepo package references.
- Leverage PNPM catalog for centralized dependency version management.
- Run `pnpm audit` regularly to check for security vulnerabilities.
- Use `pnpm dedupe` to optimize dependency tree and reduce duplicates.
- Use `.npmrc` for project-specific PNPM configuration.
- Prefer `pnpm add -D` for dev dependencies and `pnpm add` for runtime dependencies.
- Use `pnpm outdated` to check for package updates.
- Configure `shamefully-hoist=true` only if needed for compatibility.

## Miscellaneous
- Keep dependencies up to date and avoid deprecated packages.
- Use `crypto.randomUUID()` for unique IDs instead of external libraries.
- Use Conventional Commits for commit messages to maintain a clear history.
- Implement proper error boundaries with `onErrorCaptured` lifecycle hook.
- Use environment-specific configs (`.env.development`, `.env.production`).
- Implement proper logging with different levels (debug, info, warn, error).
- Use feature flags for gradual rollouts and A/B testing.
- Implement analytics and monitoring (error tracking, performance monitoring).
- Use progressive enhancement - ensure core functionality works without JS.
- Optimize Core Web Vitals (LCP, FID/INP, CLS) for better user experience.
- Implement proper SEO with meta tags, structured data, and semantic HTML.
- Use service workers for offline functionality and improved performance.
---

_These instructions are intended to help Copilot and contributors maintain consistency and quality when working with Vue and Vite in this project._
