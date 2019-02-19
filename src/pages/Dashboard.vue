<template>
  <content-layout no-header>
    <h1>Tableau de bord</h1>
    <row :gutter="20">
      <column :sm="4">
        <img alt="Logo" src="../assets/logo.png" />
        <icon name="wand" />
      </column>
      <column :sm="10">
        <panel title="Titre du panel">
          <template v-slot:actions>
            <el-radio label="vertical" v-model="application.layout"
              >Vertical</el-radio
            >
            <el-radio label="horizontal" v-model="application.layout"
              >Horizontal</el-radio
            >
          </template>
          <p>Test paragraphe</p>
          <hr />
          <p>Test paragraphe</p>
        </panel>
      </column>
      <column :sm="10">
        <panel title="Titre du panel">
          <template v-slot:actions>
            <el-select v-model="application.layout">
              <el-option value="vertical" label="Vertical"></el-option>
              <el-option value="horizontal" label="Horizontal"></el-option>
            </el-select>
          </template>
          <p>Test paragraphe</p>
          <hr />
          <p>Test paragraphe</p>
        </panel>
      </column>
    </row>
  </content-layout>
</template>

<script>
export default {
  inject: ["application"]
};
</script>
