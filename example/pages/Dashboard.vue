<template>
  <content-layout :with-header="false">
    <h1>Tableau de bord</h1>
    <row :gutter="20">
      <column :sm="12">
        <panel title="Titre du panel">
          <template v-slot:actions>
            <el-radio v-model="application.layout" label="vertical">Vertical</el-radio>
            <el-radio v-model="application.layout" label="horizontal">Horizontal</el-radio>
          </template>
          <p>Test paragraphe</p>
          <hr>
          <p>Test paragraphe</p>
        </panel>
      </column>
      <column :sm="12">
        <panel title="Titre du panel">
          <template v-slot:actions>
            <el-select v-model="application.layout">
              <el-option value="vertical" label="Vertical"></el-option>
              <el-option value="horizontal" label="Horizontal"></el-option>
            </el-select>
          </template>
          <p>Test paragraphe</p>
          <hr>
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
