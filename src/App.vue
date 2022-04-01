<script setup lang="ts">
import AppTopBar from '@/components/app/AppTopbar.vue';</script>

<template>
  <div class="main">
    <div class="main-container">
      <div>
        <AppTopBar/>
      </div>
      <div class='layout-main-container'>
        <div class='layout-main'>
          <router-view/>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang='scss'>
@import 'App.scss';

.layout-main {

}

.main {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
}

.main::before {
  content: "";
  background-image: url('assets/landing_page/landing_gridless.webp');
  // background-image: url('assets/landing_page/overlays/overlay_snow_2.webp');
  background-size: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.1;
}

.main-container {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;

}

.main-container::before {
  content: "";
  background-image: url('assets/landing_page/overlays/overlay_snow_2.webp');
  background-size: auto;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.05;
}
</style>
