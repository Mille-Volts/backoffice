<template>
  <el-select v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-select>
</template>

<script>
import { Select as ElSelect } from "element-ui";

export default {
  name: "FormSelect",
  components: {
    ElSelect
  }
};
</script>

<style lang="scss"></style>
