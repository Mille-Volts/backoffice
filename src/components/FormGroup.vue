<template>
  <el-container>
    <el-aside width="240px">
      <slot name="header">
        <h2 v-if="title" v-text="title"></h2>
        <slot name="description"></slot>
      </slot>
    </el-aside>
    <el-main>
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "FormGroup",
  props: ["title"],
  computed: {}
};
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";

.el-container {
}
.el-aside {
  padding: 40px 0;
}
.el-main {
  padding-right: 0;
}
</style>