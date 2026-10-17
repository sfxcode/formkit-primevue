<script setup lang='ts'>
import { sections } from '../utils/menu'

const version = import.meta.env.VITE_APP_VERSION

const installCommand = 'pnpm add -D @sfxcode/formkit-primevue'

const configExample = `// formkit.config.ts
import type { DefaultConfigOptions } from '@formkit/vue'
import { primeInputs, primeOutputs } from '@sfxcode/formkit-primevue'

const config: DefaultConfigOptions = {
  inputs: { ...primeInputs, ...primeOutputs },
}

export default config`

const schemaExample = `const schema = [
  { $formkit: 'primeInputText', name: 'email', label: 'Email', validation: 'required|email' },
  { $formkit: 'primeSelect', name: 'role', label: 'Role', options: ['user', 'admin'] },
]`
</script>

<template>
  <div class="landing">
    <section class="hero">
      <h1 class="page-title">
        FormKit PrimeVue
      </h1>
      <p class="lead">
        Build forms from a FormKit schema with the inputs and outputs of PrimeVue, and validate them with FormKit.
        Every page of this demo shows the live form next to its schema, which you can edit.
      </p>
      <div class="flex flex-wrap gap-2">
        <Button as="router-link" to="/inputs/inputText" icon="pi pi-objects-column" label="Explore the components" />
        <Button as="router-link" to="/samples/register" icon="pi pi-user-plus" label="Try the register form" severity="secondary" />
        <Button as="a" href="https://sfxcode.github.io/formkit-primevue/" target="_blank" rel="noopener noreferrer" icon="pi pi-book" label="Documentation" severity="secondary" />
      </div>
      <p class="version">
        Version {{ version }}
      </p>
    </section>

    <section>
      <h2>Get started</h2>
      <pre class="code"><code>{{ installCommand }}</code></pre>
      <p>Register the inputs in your FormKit configuration. Their names start with <code>prime</code> (<code>primeInputText</code>) or with the library-neutral <code>form</code> (<code>formInputText</code>).</p>
      <pre class="code"><code>{{ configExample }}</code></pre>
      <p>Then use them in a schema.</p>
      <pre class="code"><code>{{ schemaExample }}</code></pre>
    </section>

    <section v-for="section in sections" :key="section.label">
      <h2>{{ section.label }}</h2>
      <div class="groups">
        <div v-for="group in section.columns.flat()" :key="group.label" class="group">
          <h3>{{ group.label }}</h3>
          <ul>
            <li v-for="page in group.pages" :key="page.route">
              <router-link :to="page.route">
                <span :class="`pi pi-fw pi-${page.icon}`" />
                <span>{{ page.label }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang='scss'>
.landing {
  max-width: 72rem;

  section {
    margin-bottom: 2.5rem;
  }

  h2 {
    margin: 0 0 1rem;
  }
}

.lead {
  max-width: 44rem;
  margin: 0 0 1.25rem;
  font-size: 1.125rem;
  line-height: 1.6;
}

.version {
  margin-top: 1rem;
  color: var(--p-text-muted-color);
}

.code {
  margin: 0 0 1rem;
  padding: 0.75rem 1rem;
  overflow-x: auto;
  border: 1px solid var(--p-content-border-color);
  border-radius: var(--p-content-border-radius);
  background: var(--p-content-hover-background);
  font-size: 0.875rem;
  line-height: 1.5;
}

.groups {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  gap: 1rem;
}

.group {
  padding: 1rem;
  border: 1px solid var(--p-content-border-color);
  border-radius: var(--p-content-border-radius);
  background: var(--p-content-background);

  h3 {
    margin: 0 0 0.5rem;
    font-size: 1rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0;
  }
}
</style>
