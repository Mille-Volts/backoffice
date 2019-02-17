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
import Application from "@/components/Application.vue";
import PageLayout from "@/components/PageLayout.vue";
import MainMenu from "@/components/Menu.vue";

import { routes } from "./router.js";

export default {
  components: {
    Application,
    PageLayout,
    MainMenu
  },
  data() {
    return {
      routes
    };
  }
};
</script>
