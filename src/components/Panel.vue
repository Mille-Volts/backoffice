<template>
  <el-container class="panel mv--block">
    <el-header
      v-if="$slots.header || $slots.actions || title"
      class="panel_header"
      height="auto"
    >
      <slot name="header">
        <span v-if="title" class="panel_title">
          <h3 v-text="title"></h3>
        </span>
        <span v-if="$slots.actions" class="panel_actions">
          <slot name="actions"></slot>
        </span>
      </slot>
    </el-header>
    <el-main class="panel_main">
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

.panel {
  border-radius: $--card-border-radius;
  border: 1px solid $--card-border-color;
  background-color: $--color-white;
  &_header {
    border-bottom: 1px solid $--border-color-base;
    margin: 0 $--card-padding;
    padding: $--card-padding/2 0;
  }
  &_title {
    float: left;
    line-height: 20px;
    margin: 10px 0;
  }
  &_actions {
    float: right;
    margin: 0;
  }
  &_main {
    padding: $--card-padding;
  }
}
.panel_header ~ .panel_main {
  padding: $--margin ($--margin * 2);
}
</style>
<style lang="scss">
@import "@/scss/common.scss";

.panel_main {
  hr {
    margin: $--margin 0;
  }
}
</style>
