<template>
  <el-select v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-select>
</template>

<script>
import { Select as ElSelect } from "element-ui";

export default {
  name: "MvFormSelect",
  components: {
    ElSelect
  }
};
</script>
