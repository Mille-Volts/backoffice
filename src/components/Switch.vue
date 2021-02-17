<template>
  <el-checkbox-group
    class="mv-switch"
    :value="innerValue !== null ? [innerValue] : []"
    @input="updateValue"
    v-bind="$attrs"
  >
    <el-checkbox-button
      class="mv-switch-button"
      v-for="option in options"
      :key="option.value"
      :label="option.value"
    >
      <mv-icon v-if="option.icon" :name="option.icon" />
      {{ option.label }}
    </el-checkbox-button>
  </el-checkbox-group>
</template>

<style lang="scss">
.mv-switch {
  &-button:last-child:first-child .el-checkbox-button__inner {
    border-radius: 4px;
  }
}
</style>

<script>
export default {
  name: "MvSwitch",
  data() {
    return { innerValue: null };
  },
  props: {
    options: Array,
    value: null,
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        this.innerValue = this.value;
      },
    },
  },
  methods: {
    updateValue(values) {
      const newValue = values.pop(); // We get the last selected element

      // Unselect element if same value selected
      this.innerValue = this.innerValue === newValue ? null : newValue;

      this.$emit("input", this.innerValue);
    },
  },
};
</script>
