<template>
  <el-container :direction="application.layout === 'horizontal'? 'vertical': 'horizontal'">
    <el-header height="120px" v-if="application.layout === 'horizontal'">
      <slot name="menu"></slot>
    </el-header>
    <el-aside width="320px" v-else>
      <slot name="menu"></slot>
    </el-aside>
    <el-main>
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "PageLayout",
  inject: ["application"]
};
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";

.el-aside {
  background: $--color-menu url("../assets/background-v.png") no-repeat top
    center;
  color: $--color-white;
  @include image-retina("../assets/background-v@2x.png", 320px, 1024px);
}
.el-header {
  background: $--color-menu url("../assets/background-h.png") no-repeat top
    center;
  color: $--color-white;
  @include image-retina("../assets/background-h@2x.png", 1440px, 120px);
}
</style>
