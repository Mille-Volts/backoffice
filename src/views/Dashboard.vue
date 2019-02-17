<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <panel title="Titre du panel">
      <template v-slot:actions>
        <label>
          <input type="radio" name="r" value="vertical" v-model="application.layout"> Vertical
        </label>
        <label>
          <input type="radio" name="r" value="horizontal" v-model="application.layout"> Horizontal
        </label>
      </template>Test
      <p>Test paragraphe</p>
      <hr>
      <p>Test paragraphe</p>
    </panel>
  </div>
</template>

<script>
import Panel from "@/components/Panel.vue";

export default {
  name: "dashboard",
  inject: ["application"],
  components: {
    Panel
  }
};
</script>
