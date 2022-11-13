<script setup lang='ts'>
function redirectToGithub(event: any) {
  window.open('https://github.com/sfxcode/formkit-primevue', '_blank')
}

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
            { label: 'TextArea', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputTextArea' },
            { label: 'InputNumber', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputNumber' },
            { label: 'InputMask', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputMask' },
            { label: 'Calendar', icon: 'pi pi-fw pi-user-edit', to: '/demo/calendar' },
            { label: 'Chips', icon: 'pi pi-fw pi-user-edit', to: '/demo/chips' },
            { label: 'Editor', icon: 'pi pi-fw pi-user-edit', to: '/demo/editor' }],
        },
        {
          label: 'Check',
          items: [
            { label: 'Checkbox', icon: 'pi pi-fw pi-user-edit', to: '/demo/checkBox' },
            { label: 'InputSwitch', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputSwitch' }],
        },
      ],
      [
        {
          label: 'Select',
          items: [
            { label: 'Dropdown', icon: 'pi pi-fw pi-user-edit', to: '/demo/dropdown' },
            { label: 'Listbox', icon: 'pi pi-fw pi-user-edit', to: '/demo/listbox' }],
        },
        {
          label: 'Misc',
          items: [
            { label: 'ColorPicker', icon: 'pi pi-fw pi-user-edit', to: '/demo/colorPicker' },
            { label: 'Knob', icon: 'pi pi-fw pi-user-edit', to: '/demo/knob' },
          ],
        },
      ],
    ],
  },
])
</script>

<template>
  <div class="layout-topbar">
    <router-link to="/" class="layout-topbar-logo">
      <span>PrimeVue Formkit</span>
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
