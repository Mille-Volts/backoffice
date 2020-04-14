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
      <slot v-if="!$slots.aside"></slot>
      <mv-row v-else class="mv-panel-aside-container">
        <el-col
          class="mv-panel-aside"
          :span="8"
          :xs="24"
          :sm="24"
          :md="8"
          :lg="8"
        >
          <slot name="aside"></slot>
        </el-col>
        <el-col
          :span="16"
          :xs="24"
          :sm="24"
          :md="16"
          :lg="16"
          class="mv-panel-content"
        >
          <slot></slot>
        </el-col>
      </mv-row>
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
  name: "MvPanel",
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

  &-aside-container {
    display: flex;
    flex-direction: column;
  }

  &-content {
    padding-top: 20px;
  }

  &-aside {
    border-bottom: 1px solid #dcdfe6;
    padding-bottom: 20px;
  }

  @media only screen and (min-width: 992px) {
    &-aside-container {
      flex-direction: row-reverse;
    }

    &-content {
      padding-right: 20px;
      padding-top: 0;
    }

    &-aside {
      border-left: 1px solid #dcdfe6;
      padding-left: 20px;
      border-bottom: 0;
      padding-bottom: 0;
    }
  }
}
</style>
