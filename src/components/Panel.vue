<template>
  <el-container class="mv-panel block">
    <el-header
      v-if="$slots.header || $slots.actions || title"
      class="mv-panel-header"
      height="auto"
    >
      <slot name="header">
        <span v-if="title" class="mv-panel-title">
          <h3 v-text="title"></h3>
        </span>
        <span v-if="$slots.actions" class="mv-panel-actions">
          <slot name="actions"></slot>
        </span>
      </slot>
    </el-header>
    <el-main class="mv-panel-main">
      <el-container>
        <div style="flex:1">
          <slot></slot>
        </div>
        <el-aside v-if="$slots.aside" class="mv-panel-aside" width="33.3333%">
          <slot name="aside"></slot>
        </el-aside>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import {
  Container as ElContainer,
  Header as ElHeader,
  Main as ElMain,
  Aside as ElAside
} from "element-ui";

export default {
  name: "MvPanel",
  components: {
    ElContainer,
    ElHeader,
    ElMain,
    ElAside
  },
  props: {
    title: String,
    noPadding: Boolean
  }
};
</script>

<style lang="scss">
@import "../theme/_variables.scss";

.mv-panel {
  border-radius: $--card-border-radius;
  border: 1px solid $--card-border-color;
  background-color: $--color-white;
  &-header {
    &.el-header {
      border-bottom: 1px solid $--border-color-base;
      margin: 0 $--card-padding;
      padding: $--card-padding/2 0;
    }
  }
  &-title {
    float: left;
    line-height: 20px;
    margin: 10px 0;
  }
  &-actions {
    float: right;
    margin: 0;
  }
  &-main {
    &.el-main {
      clear: both;
      padding: $--card-padding;
    }
    .mv-panel-header ~ & {
      padding: $--margin ($--margin * 2);
    }
    hr {
      margin: $--margin 0;
    }
  }

  &-aside {
    border-left: 1px solid #dcdfe6;
    padding-left: 20px;
  }
}
</style>
