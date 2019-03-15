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
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script>
import {
  Container as ElContainer,
  Header as ElHeader,
  Main as ElMain
} from "element-ui";

export default {
  name: "Panel",
  components: {
    ElContainer,
    ElHeader,
    ElMain
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
    border-bottom: 1px solid $--border-color-base;
    margin: 0 $--card-padding;
    padding: $--card-padding/2 0;
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
    padding: $--card-padding;
    .mv-panel-header ~ & {
      padding: $--margin ($--margin * 2);
    }
    hr {
      margin: $--margin 0;
    }
  }
}
</style>
