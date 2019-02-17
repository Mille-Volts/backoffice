<template>
  <el-container class="about">
    <el-header>
      <h1>This is an about page</h1>
    </el-header>
    <el-container>
      <el-aside width="200px">Valeur: {{ form.radio }}</el-aside>
      <el-main>
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="Slider">
            <el-slider v-model="form.radio" :show-tooltip="false" :max="3"></el-slider>
          </el-form-item>
          <el-form-item label="Input number">
            <el-input-number v-model="form.radio" :min="0" :max="3"></el-input-number>
          </el-form-item>
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
        </el-form>
      </el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        radio: 0
      }
    };
  }
};
</script>
