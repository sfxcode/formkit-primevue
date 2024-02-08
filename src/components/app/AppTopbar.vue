<script setup lang='ts'>
function redirectToGithub() {
  window.open('https://github.com/sfxcode/formkit-primevue', '_blank')
}

function redirectToFormKit() {
  window.open('https://formkit.com/', '_blank')
}

function redirectToPrimeVue() {
  window.open('https://primevue.org', '_blank')
}

function redirectToDocs() {
  window.open('https://sfxcode.github.io/formkit-primevue/', '_blank')
}

const version = ref(import.meta.env.VITE_APP_VERSION)

const items = ref([
  {
    label: 'Demo -> ',
    class: '',
  },
  {
    label: 'Components',
    icon: 'pi pi-box',
    class: 'ml-2',
    items: [
      [
        {
          label: 'Edit',
          items: [
            { label: 'InputText', icon: 'pi pi-fw pi-user-edit', route: '/demo/inputText' },
            { label: 'Textarea', icon: 'pi pi-fw pi-user-edit', route: '/demo/textArea' },
            { label: 'InputNumber', icon: 'pi pi-fw pi-user-edit', route: '/demo/inputNumber' },
            { label: 'InputMask', icon: 'pi pi-fw pi-user-edit', route: '/demo/inputMask' },
            { label: 'Calendar', icon: 'pi pi-fw pi-user-edit', route: '/demo/calendar' },
            { label: 'Chips', icon: 'pi pi-fw pi-user-edit', route: '/demo/chips' },
            { label: 'Editor', icon: 'pi pi-fw pi-user-edit', route: '/demo/editor' },
            { label: 'Password', icon: 'pi pi-fw pi-user-edit', route: '/demo/password' },
          ],
        },
        {
          label: 'Check',
          items: [
            { label: 'Checkbox', icon: 'pi pi-fw pi-user-edit', route: '/demo/checkBox' },
            { label: 'TriStateCheckbox', icon: 'pi pi-fw pi-user-edit', route: '/demo/triStateCheckbox' },
            { label: 'InputSwitch', icon: 'pi pi-fw pi-user-edit', route: '/demo/inputSwitch' },
          ],
        },
      ],
      [
        {
          label: 'Select',
          items: [
            { label: 'CascadeSelect', icon: 'pi pi-fw pi-user-edit', route: '/demo/cascadeSelect' },
            { label: 'Dropdown', icon: 'pi pi-fw pi-user-edit', route: '/demo/dropdown' },
            { label: 'Listbox', icon: 'pi pi-fw pi-user-edit', route: '/demo/listbox' },
            { label: 'MultiSelect', icon: 'pi pi-fw pi-user-edit', route: '/demo/multiSelect' },
            { label: 'SelectButton', icon: 'pi pi-fw pi-user-edit', route: '/demo/selectButton' },
            { label: 'ToggleButton', icon: 'pi pi-fw pi-user-edit', route: '/demo/toggleButton' },
            { label: 'RadioButton', icon: 'pi pi-fw pi-user-edit', route: '/demo/radioButton' },
          ],
        },
        {
          label: 'Misc',
          items: [
            { label: 'AutoComplete', icon: 'pi pi-fw pi-user-edit', route: '/demo/autoComplete' },
            { label: 'ColorPicker', icon: 'pi pi-fw pi-user-edit', route: '/demo/colorPicker' },
            { label: 'Knob', icon: 'pi pi-fw pi-user-edit', route: '/demo/knob' },
            { label: 'Slider', icon: 'pi pi-fw pi-user-edit', route: '/demo/slider' },
            { label: 'Rating', icon: 'pi pi-fw pi-user-edit', route: '/demo/rating' },
          ],
        },
      ],
    ],
  },
  {
    label: 'More',
    icon: 'pi pi-box',
    class: 'ml-2',

    items: [
      [
        {
          label: 'Styling',
          items: [
            { label: 'Basic', icon: 'pi pi-fw pi-user-edit', route: '/demo/styling' },
            { label: 'Pass Through', icon: 'pi pi-fw pi-user-edit', route: '/demo/passThrough' },
            { label: 'Grid', icon: 'pi pi-fw pi-user-edit', route: '/demo/grid' },
          ],
        },
      ],
    ],
  },

])
</script>

<template>
  <nav class="pb-4">
    <Toolbar>
      <template #start>
        <router-link to="/" class="">
          <span class="text-3xl">Formkit PrimeVue Demo</span>
        </router-link>
      </template>

      <template #center />

      <template #end>
        <Button label="FormKit" class="mr-2" @click="redirectToFormKit" />
        <Button icon="pi pi-prime" label="PrimeVue" class="mr-2" @click="redirectToPrimeVue" />
        <Button icon="pi pi-book" label="Docs" class="mr-2" @click="redirectToDocs" />
        <Button icon="pi pi-github" @click="redirectToGithub" />
      </template>
    </Toolbar>
  </nav>
  <MegaMenu :model="items" class="w-134">
    <template #item="{ item }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a v-ripple :href="href" class="text-lg" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else v-ripple :href="item.url" :target="item.target">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
      </a>
    </template>
  </MegaMenu>
</template>

<style scoped lang='scss'>
a {
  color: var(--primary-color);
}
</style>
