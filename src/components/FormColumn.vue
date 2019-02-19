<template>
  <el-col :span="12" :xs="24" :sm="24" :md="md" :lg="12">
    <slot></slot>
  </el-col>
</template>

<script>
export default {
  name: "FormColumn",
  inject: ["application"],
  computed: {
    md() {
      return this.application.layout === "horizontal" ? 12 : 24;
    }
  }
};
</script>
