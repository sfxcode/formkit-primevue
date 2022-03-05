<template>
  <div class='layout-topbar'>
    <router-link to='/' class='layout-topbar-logo'>
      <span>Vite PrimeVue Starter</span>
    </router-link>
    <button class='p-link layout-menu-button layout-topbar-button' >
      <i class='pi pi-bars'></i>
    </button>


    <ul class='layout-topbar-menu hidden lg:flex origin-top'>
      <li>
        <button class='p-link layout-topbar-button'>
          <i class='pi pi-cog'></i>
          <span>Settings</span>
        </button>
      </li>
      <li>
        <button class='p-link layout-topbar-button'>
          <i class='pi pi-user'></i>
          <span>Profile</span>
        </button>
      </li>
      <li>
        <button class='p-link layout-topbar-button' @click='redirectToGithub'>
          <i class='pi pi-github'> </i>
          <span>Github</span>
        </button>
      </li>
    </ul>

  </div>
</template>

<script setup lang='ts'>


function redirectToGithub(event: any) {
  window.open('https://github.com/sfxcode/vite-primevue-starter', '_blank');
}
</script>

<style scoped>

@media (min-width: 1024px) {
  .lg\:flex {
    display: flex !important;
  }
}
</style>
