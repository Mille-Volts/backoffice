<template>
  <el-container :direction="application.layout === 'horizontal'? 'vertical': 'horizontal'">
    <el-header height="120px" v-if="application.layout === 'horizontal'">
      <slot name="menu"></slot>
    </el-header>
    <el-aside width="320px" v-else>
      <slot name="menu"></slot>
    </el-aside>
    <el-main>
      <div class="content">
        <slot></slot>
      </div>
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

.el-aside,
.el-header {
  background: $--color-menu;
  color: #ffffff;
}

.el-main > .content {
  margin: 0 auto;
  width: 960px;
}
</style>
