<template>
  <el-col :span="12" :xs="24" :sm="24" :md="md" :lg="12">
    <slot></slot>
  </el-col>
</template>

<script>
import { Col as ElCol } from "element-ui";

export default {
  name: "MvFormColumn",
  inject: ["application"],
  components: {
    ElCol
  },
  computed: {
    md() {
      return this.application.layout === "horizontal" ? 12 : 24;
    }
  }
};
</script>
