<template>
  <content-layout title="Tableau de bord" :tabs="tabs" v-model="tabActive">
    <template v-slot:breadcrumb>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">dashboard</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/about' }">about</el-breadcrumb-item>
        <el-breadcrumb-item>Tableau de bord</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template v-slot:actions>
      <btn ghost>Annuler</btn>
      <btn success>Enregistrer</btn>
    </template>
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
        <btn primary>Primaire</btn>
        <btn secondary>Secondaire</btn>
        <p>Test paragraphe</p>
        <hr>
        <p>Test paragraphe</p>
      </panel>
    </div>
  </content-layout>
</template>

<script>
import Panel from "@/components/Panel.vue";
import ContentLayout from "@/components/ContentLayout.vue";
import Btn from "@/components/Button.vue";

export default {
  name: "dashboard",
  inject: ["application"],
  components: {
    Panel,
    ContentLayout,
    Btn
  },
  data() {
    return {
      tabs: { tab1: "Onglet 1", tab2: "Onglet 2", tab3: "Onglet 3" },
      tabActive: "tab2"
    };
  }
};
</script>
