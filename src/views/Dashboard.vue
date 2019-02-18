<template>
  <content-layout title="Tableau de bord">
    <template v-slot:breadcrumb>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Tableau de bord</el-breadcrumb-item>
      </el-breadcrumb>
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
        <p>Test paragraphe</p>
        <hr>
        <p>Test paragraphe</p>
      </panel>
    </div>
  </content-layout>
</template>

<script>
export default {
  name: "dashboard",
  inject: ["application"]
};
</script>
