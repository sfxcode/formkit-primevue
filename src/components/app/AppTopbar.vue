<script setup lang='ts'>
function redirectToGithub(event: any) {
  window.open('https://github.com/sfxcode/formkit-primevue', '_blank')
}

const version = ref(import.meta.env.VITE_APP_VERSION)

const items = ref([
  {
    label: 'Demo',
    icon: 'pi pi-fw pi-video',
    items: [
      [
        {
          label: 'Edit',
          items: [
            { label: 'InputText', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputText' },
            { label: 'Textarea', icon: 'pi pi-fw pi-user-edit', to: '/demo/textArea' },
            { label: 'InputNumber', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputNumber' },
            { label: 'InputMask', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputMask' },
            { label: 'Calendar', icon: 'pi pi-fw pi-user-edit', to: '/demo/calendar' },
            { label: 'Chips', icon: 'pi pi-fw pi-user-edit', to: '/demo/chips' },
            { label: 'Editor', icon: 'pi pi-fw pi-user-edit', to: '/demo/editor' },
            { label: 'Password', icon: 'pi pi-fw pi-user-edit', to: '/demo/password' }],
        },
        {
          label: 'Check',
          items: [
            { label: 'Checkbox', icon: 'pi pi-fw pi-user-edit', to: '/demo/checkBox' },
            { label: 'TriStateCheckbox', icon: 'pi pi-fw pi-user-edit', to: '/demo/triStateCheckbox' },
            { label: 'InputSwitch', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputSwitch' }],
        },
      ],
      [
        {
          label: 'Select',
          items: [
            { label: 'Dropdown', icon: 'pi pi-fw pi-user-edit', to: '/demo/dropdown' },
            { label: 'Listbox', icon: 'pi pi-fw pi-user-edit', to: '/demo/listbox' },
            { label: 'MultiSelect', icon: 'pi pi-fw pi-user-edit', to: '/demo/multiSelect' },
            { label: 'SelectButton', icon: 'pi pi-fw pi-user-edit', to: '/demo/selectButton' },
            { label: 'ToggleButton', icon: 'pi pi-fw pi-user-edit', to: '/demo/toggleButton' },
            { label: 'RadioButton', icon: 'pi pi-fw pi-user-edit', to: '/demo/radioButton' },
          ],
        },
        {
          label: 'Misc',
          items: [
            { label: 'ColorPicker', icon: 'pi pi-fw pi-user-edit', to: '/demo/colorPicker' },
            { label: 'Knob', icon: 'pi pi-fw pi-user-edit', to: '/demo/knob' },
            { label: 'Slider', icon: 'pi pi-fw pi-user-edit', to: '/demo/slider' },
            { label: 'Rating', icon: 'pi pi-fw pi-user-edit', to: '/demo/rating' },
          ],
        },
      ],

    [
        {
          label: 'Styling',
          items: [
            { label: 'Basic', icon: 'pi pi-fw pi-user-edit', to: '/demo/styling' },
            { label: 'Pass Through', icon: 'pi pi-fw pi-user-edit', to: '/demo/passThrough' },
            { label: 'Grid', icon: 'pi pi-fw pi-user-edit', to: '/demo/grid' },
          ],
        },
    ],
        ]
  },
])
</script>

<template>
  <div class="layout-topbar">
    <router-link to="/" class="layout-topbar-logo">
      <span>Formkit-PrimeVue {{ version }}</span>
    </router-link>
    <MegaMenu :model="items" />
    <button class="p-link layout-topbar-button" @click="redirectToGithub">
      <i class="pi pi-github" />
      <span>Github</span>
    </button>
  </div>
</template>

<style scoped>
</style>
