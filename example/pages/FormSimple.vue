<template>
  <mv-content-layout :form="form" :with-tabs="false" @submit="submitForm" v-loading="loading">
    <template v-slot:actions>
      <mv-button ghost icon="arrow-left" @click="$router.back()">Annuler</mv-button>
      <mv-button success icon-right="check" type="submit">Enregistrer</mv-button>
    </template>
    <mv-form-group title="Groupe de champs">
      <template v-slot:description>
        <p>Ma description</p>
        <hr>
        <el-switch v-model="form.published" active-text="Publié"/>
      </template>
      <mv-panel>
        <mv-form-row>
          <mv-form-column>
            <mv-form-item label="Slider" required>
              <el-slider v-model="form.radio" :show-tooltip="false" :max="3"></el-slider>
            </mv-form-item>
          </mv-form-column>
          <mv-form-column>
            <mv-form-item label="Input number">
              <el-input-number v-model="form.radio" :min="0" :max="3"></el-input-number>
            </mv-form-item>
          </mv-form-column>
        </mv-form-row>
        <mv-form-item label="Fichier">
          <mv-form-upload></mv-form-upload>
        </mv-form-item>
        <mv-form-item label="Radio buttons">
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
        </mv-form-item>
        <mv-button icon-left="lock" icon-right="save" @click="form.radio = 2">Set 2</mv-button>
        <mv-button icon="wand" primary>Primaire</mv-button>
        <mv-button icon-right="desktop" secondary>Secondaire</mv-button>
      </mv-panel>
    </mv-form-group>

    <mv-form-group v-if="form.radio < 2" title="Mon groupe de champs 3">
      <template v-slot:description>
        <p>Ma description</p>
        <hr>
        <el-switch v-model="form.published" active-text="Publié"/>
      </template>
      <mv-panel>
        <mv-form-row>
          <mv-form-column>
            <mv-form-item label="Slider" required>
              <el-slider v-model="form.radio" :show-tooltip="false" :max="3"></el-slider>
            </mv-form-item>
          </mv-form-column>
          <mv-form-column>
            <mv-form-item label="Input number">
              <el-input-number v-model="form.radio" :min="0" :max="3"></el-input-number>
            </mv-form-item>
          </mv-form-column>
        </mv-form-row>
        <mv-form-item label="Radio buttons">
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
        </mv-form-item>
        <el-button @click="form.radio = 2">Set 2</el-button>
        <mv-button primary>Primaire</mv-button>
        <mv-button secondary>Secondaire</mv-button>
      </mv-panel>
    </mv-form-group>
  </mv-content-layout>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        published: false,
        radio: 0
      }
    };
  },
  methods: {
    submitForm(data) {
      this.loading = true;
      window.setTimeout(() => {
        this.loading = false;
        this.$notify({
          type: "success",
          title: "Formulaire validé",
          message: `Le formulaire a été validé, merci (${JSON.stringify(
            data
          )}).`
        });
      }, 1500);
    }
  }
};
</script>
