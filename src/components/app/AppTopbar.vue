<script setup lang='ts'>
function redirectToGithub(event: any) {
  window.open('https://github.com/sfxcode/formkit-primevue', '_blank')
}

const items = ref([
  {
    label: 'Input Elements',
    icon: 'pi pi-fw pi-video',
    items: [
      [
        {
          label: 'Text',
          items: [
            { label: 'InputText', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputText' },
            { label: 'InputNumber', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputNumber' },
            { label: 'TextArea', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputText' }],
        },
        {
          label: 'Editor',
          items: [
            { label: 'HTML Editor', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputText' }],
        },
      ],
      [
        {
          label: 'Boolean',
          items: [
            { label: 'CheckBox', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputText' },
            { label: 'Switch', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputText' }],
        },
        {
          label: 'Editor',
          items: [{ label: 'HTML Editor', icon: 'pi pi-fw pi-user-edit', to: '/demo/inputText' }],
        },
      ],
    ],
  },
])
</script>

<template>
  <div class="layout-topbar">
    <div>
      <a href="/" class="text-2xl mr-4">PrimeVue Formkit</a>
    </div>
    <MegaMenu :model="items" />
    <button class="p-link layout-topbar-button" @click="redirectToGithub">
      <i class="pi pi-github" />
      <span>Github</span>
    </button>
  </div>
</template>

<style scoped>
</style>
