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
            { label: 'InputText', icon: 'pi pi-fw pi-user-edit', route: '/inputs/inputText' },
            { label: 'Textarea', icon: 'pi pi-fw pi-user-edit', route: '/inputs/textArea' },
            { label: 'InputNumber', icon: 'pi pi-fw pi-user-edit', route: '/inputs/inputNumber' },
            { label: 'InputOtp', icon: 'pi pi-fw pi-user-edit', route: '/inputs/inputOtp' },
            { label: 'InputMask', icon: 'pi pi-fw pi-user-edit', route: '/inputs/inputMask' },
            { label: 'DatePicker', icon: 'pi pi-fw pi-user-edit', route: '/inputs/datePicker' },
            { label: 'Editor', icon: 'pi pi-fw pi-user-edit', route: '/inputs/editor' },
            { label: 'Password', icon: 'pi pi-fw pi-user-edit', route: '/inputs/password' },
          ],
        },
        {
          label: 'Check',
          items: [
            { label: 'Checkbox', icon: 'pi pi-fw pi-user-edit', route: '/inputs/checkBox' },
            { label: 'ToggleSwitch', icon: 'pi pi-fw pi-user-edit', route: '/inputs/toggleSwitch' },
          ],
        },
      ],
      [
        {
          label: 'Select',
          items: [
            { label: 'CascadeSelect', icon: 'pi pi-fw pi-user-edit', route: '/inputs/cascadeSelect' },
            { label: 'Select', icon: 'pi pi-fw pi-user-edit', route: '/inputs/select' },
            { label: 'Listbox', icon: 'pi pi-fw pi-user-edit', route: '/inputs/listbox' },
            { label: 'MultiSelect', icon: 'pi pi-fw pi-user-edit', route: '/inputs/multiSelect' },
            { label: 'RadioButton', icon: 'pi pi-fw pi-user-edit', route: '/inputs/radioButton' },
            { label: 'SelectButton', icon: 'pi pi-fw pi-user-edit', route: '/inputs/selectButton' },
            { label: 'ToggleButton', icon: 'pi pi-fw pi-user-edit', route: '/inputs/toggleButton' },
            { label: 'TreeSelect', icon: 'pi pi-fw pi-user-edit', route: '/inputs/treeSelect' },
          ],
        },
        {
          label: 'Misc',
          items: [
            { label: 'AutoComplete', icon: 'pi pi-fw pi-user-edit', route: '/inputs/autoComplete' },
            { label: 'ColorPicker', icon: 'pi pi-fw pi-user-edit', route: '/inputs/colorPicker' },
            { label: 'Knob', icon: 'pi pi-fw pi-user-edit', route: '/inputs/knob' },
            { label: 'Slider', icon: 'pi pi-fw pi-user-edit', route: '/inputs/slider' },
            { label: 'Rating', icon: 'pi pi-fw pi-user-edit', route: '/inputs/rating' },
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
            { label: 'Basic', icon: 'pi pi-fw pi-user-edit', route: '/styling/base' },
            { label: 'Pass Through', icon: 'pi pi-fw pi-user-edit', route: '/styling/passThrough' },
          ],
        },
      ],
      [
        {
          label: 'Samples',
          items: [
            { label: 'Input Editor', icon: 'pi pi-fw pi-user-edit', route: '/samples/inputEditor' },
            { label: 'Form Editor', icon: 'pi pi-fw pi-user-edit', route: '/samples/formEditor' },
            { label: 'Grid', icon: 'pi pi-fw pi-user-edit', route: '/samples/grid' },
            { label: 'Repeater', icon: 'pi pi-fw pi-user-edit', route: '/samples/repeater' },
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

      <template #center>
        <div class="text-lg">
          <span class="text-yellow-600 font-bold">New: </span>
          <router-link to="/samples/inputEditor" class="">
            <span class="">Prime Input Editor</span>
          </router-link>
        </div>
      </template>

      <template #end>
        <Button label="FormKit" class="mr-2" @click="redirectToFormKit" />
        <Button icon="pi pi-prime" label="PrimeVue" class="mr-2" @click="redirectToPrimeVue" />
        <Button icon="pi pi-book" label="Docs" class="mr-2" @click="redirectToDocs" />
        <Button icon="pi pi-github" @click="redirectToGithub" />
      </template>
    </Toolbar>
  </nav>
  <div>
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
  </div>
</template>

<style scoped lang='scss'>
a {
  color: var(--primary-color);
}
</style>
