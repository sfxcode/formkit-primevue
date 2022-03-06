<template>
  <div class='layout-topbar'>
    <MegaMenu :model="items"/>
    <button class='p-link layout-topbar-button' @click='redirectToGithub'>
      <i class='pi pi-github'> </i>
      <span>Github</span>
    </button>


  </div>
</template>

<script setup lang='ts'>


function redirectToGithub(event: any) {
  window.open('https://github.com/sfxcode/formkit-primevue', '_blank');
}

const items = ref([
  {
    label: 'Input', icon: 'pi pi-fw pi-video',
    items: [
      [
        {
          label: 'Text',
          items: [{label: 'Text', icon: 'pi pi-fw pi-user-edit', to: '/demo/text'}, {label: 'TextArea', icon: 'pi pi-fw pi-user-edit', to: '/demo/text'}]
        },
        {
          label: 'Editor',
          items: [{label: 'HTML Editor', icon: 'pi pi-fw pi-user-edit', to: '/demo/text'}]
        }
      ],
      [
        {
          label: 'Boolean',
          items: [{label: 'CheckBox', icon: 'pi pi-fw pi-user-edit', to: '/demo/text'}, {label: 'Switch', icon: 'pi pi-fw pi-user-edit', to: '/demo/text'}]
        },
        {
          label: 'Editor',
          items: [{label: 'HTML Editor', icon: 'pi pi-fw pi-user-edit', to: '/demo/text'}]
        }
      ]
    ]
  },
]);

</script>


<style scoped>

@media (min-width: 1024px) {
  .lg\:flex {
    display: flex !important;
  }
}
</style>
