<template>
  <content-layout title="À propos" :tabs="tabs" v-model="tabActive">
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
    <mv-form ref="form" :model="form">
      <form-group title="Mon groupe de champs">
        <template v-slot:description>
          <p>Ma description</p>
          <hr>
          <el-switch v-model="form.published" active-text="Publié"/>
        </template>
        <panel>
          <form-row>
            <form-column>
              <el-form-item label="Slider" required>
                <el-slider v-model="form.radio" :show-tooltip="false" :max="3"></el-slider>
              </el-form-item>
            </form-column>
            <form-column>
              <el-form-item label="Input number">
                <el-input-number v-model="form.radio" :min="0" :max="3"></el-input-number>
              </el-form-item>
            </form-column>
          </form-row>
          <el-form-item label="Radio buttons">
            <row>
              <column :sm="8">
                <el-radio v-model="form.radio" :label="1">Option A</el-radio>
              </column>
              <column :sm="8">
                <el-radio v-model="form.radio" :label="2">Option B</el-radio>
              </column>
              <column :sm="8">
                <el-radio v-model="form.radio" :label="3">Option C</el-radio>
              </column>
            </row>
          </el-form-item>
          <el-button @click="form.radio = 2">Set 2</el-button>
          <btn primary>Primaire</btn>
          <btn secondary>Secondaire</btn>
        </panel>
      </form-group>
    </mv-form>
  </content-layout>
</template>

<script>
import Panel from "@/components/Panel.vue";
import ContentLayout from "@/components/ContentLayout.vue";
import Btn from "@/components/Button.vue";
import MvForm from "@/components/Form.vue";
import FormGroup from "@/components/FormGroup.vue";
import FormRow from "@/components/FormRow.vue";
import FormColumn from "@/components/FormColumn.vue";

export default {
  components: {
    Panel,
    ContentLayout,
    MvForm,
    FormGroup,
    FormRow,
    FormColumn,
    Btn
  },
  data() {
    return {
      tabs: { tab1: "Onglet 1", tab2: "Onglet 2", tab3: "Onglet 3" },
      tabActive: "tab2",
      form: {
        published: false,
        radio: 0
      }
    };
  }
};
</script>
