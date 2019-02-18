<template>
  <application>
    <page-layout>
      <template v-slot:menu>
        <main-menu :routes="routes"></main-menu>
      </template>
      <router-view></router-view>
    </page-layout>
  </application>
</template>

<script>
import { routes } from "./router.js";

export default {
  data() {
    return {
      routes
    };
  }
};
</script>
