<template>
  <el-row :gutter="20">
    <slot></slot>
  </el-row>
</template>

<script>
import { Row as ElRow } from "element-ui";

export default {
  name: "MvFormRow",
  components: {
    ElRow
  }
};
</script>
