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
            { label: 'InputNumber', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputNumber' },
            { label: 'TextArea', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputTextArea' },
            { label: 'Calendar', icon: 'pi pi-fw pi-user-edit', to: '/demo/calendar' },
            { label: 'Chips', icon: 'pi pi-fw pi-user-edit', to: '/demo/chips' },
            { label: 'Editor', icon: 'pi pi-fw pi-user-edit', to: '/demo/editor' }],
        },
        {
          label: 'Check',
          items: [
            { label: 'CheckBox', icon: 'pi pi-fw pi-user-edit', to: '/demo/checkBox' },
            { label: 'Switch', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputText' }],
        },
      ],
      [
        {
          label: 'Select',
          items: [
            { label: 'CheckBox', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputText' },
            { label: 'Switch', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputText' }],
        },
        {
          label: 'Misc',
          items: [
            { label: 'ColorPicker', icon: 'pi pi-fw pi-user-edit', to: '/demo/colorPicker' },
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
