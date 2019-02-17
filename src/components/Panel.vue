<template>
  <el-container>
    <el-header height="auto">
      <slot name="header">
        <span class="title">
          <h3 v-if="title" v-text="title"></h3>
        </span>
        <span class="actions">
          <slot name="actions"></slot>
        </span>
      </slot>
    </el-header>
    <el-main>
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Panel",
  props: {
    title: String
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";

.el-container {
  border-radius: $--card-border-radius;
  border: 1px solid $--card-border-color;
  background-color: $--color-white;
}
.el-header {
  border-bottom: 1px solid $--border-color-base;
  margin: 0 $--card-padding;
  padding: $--card-padding 0;
  .title {
    float: left;
  }
  .actions {
    float: right;
  }
}
.el-main {
  padding: $--card-padding;
}
</style>
