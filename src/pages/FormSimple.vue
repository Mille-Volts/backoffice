<template>
  <content-layout
    :tabs="tabs"
    :tabActive="tabActive"
    @tabChange="tabActive = $event"
    :form="form"
    @submit="submitForm"
  >
    <template v-slot:actions>
      <mv-button ghost @click="$router.back()">Annuler</mv-button>
      <mv-button success type="submit">Enregistrer</mv-button>
    </template>
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
        <mv-button primary>Primaire</mv-button>
        <mv-button secondary>Secondaire</mv-button>
      </panel>
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
        <mv-button primary>Primaire</mv-button>
        <mv-button secondary>Secondaire</mv-button>
      </panel>
    </form-group>
  </content-layout>
</template>

<script>
export default {
  data() {
    return {
      tabs: { tab1: "Onglet 1", tab2: "Onglet 2", tab3: "Onglet 3" },
      tabActive: "tab2",
      form: {
        published: false,
        radio: 0
      }
    };
  },
  methods: {
    submitForm(data, evt) {
      console.log(data, this.form, evt);
    }
  }
};
</script>
