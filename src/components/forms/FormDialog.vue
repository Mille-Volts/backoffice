<template>
  <mv-form v-bind="$attrs" v-on="$listeners">
    <el-dialog class="mv-formDialog" width="90%" :visible.sync="visible">
      <template slot="title">
        <el-header height="auto" class="mv-formDialog-header">
          <div class="mv-formDialog-content">
            <slot name="header">
              <div v-if="$slots.headerTop">
                <slot name="headerTop"></slot>
              </div>
              <div class="mv-contentLayout-title">
                <slot name="title">
                  <h1 v-text="title"></h1>
                </slot>
              </div>
              <div
                v-if="$slots.actions || $slots.topActions"
                class="mv-formDialog-header-actions"
              >
                <slot name="topActions"></slot>
                <slot name="actions"></slot>
              </div>
              <div
                v-if="$slots.headerBottom"
                class="mv-formDialog-header-bottom"
              >
                <slot name="headerBottom"></slot>
              </div>
            </slot>
          </div>
        </el-header>
      </template>
      <el-container>
        <el-main ref="main" class="mv-formDialog-main">
          <div class="mv-formDialog-content">
            <slot></slot>
          </div>
        </el-main>
        <el-footer class="mv-formDialog-footer">
          <div class="mv-formDialog-content">
            <div
              v-if="$slots.actions || $slots.bottomActions"
              class="mv-formDialog-footer-actions"
            >
              <slot name="actions"></slot>
              <slot name="bottomActions"></slot>
            </div>
          </div>
        </el-footer>
      </el-container>
    </el-dialog>
  </mv-form>
</template>

<style lang="scss">
@import "../../theme/_variables.scss";

.mv-formDialog {
  .el-dialog {
    background: #f1f4f6;
    max-width: 1400px;
    &__body {
      padding-top: 0;
      word-break: initial;
    }
  }

  &,
  &-container {
    min-height: 100%;
  }
  &-content {
    margin: 0 auto;
    max-width: 960px;
  }
  &-header {
    padding: 0 30px;
    .mv-formDialog-content {
      overflow: hidden;
    }
  }
  &-breadcrumb {
    margin: -15px 0 15px 0;
  }
  &-title {
    float: left;
    margin: 15px 0;
  }
  &-header-actions {
    float: right;
    margin: 15px 0;
  }
  &-header-bottom {
    clear: both;
  }
  &-tabs {
    clear: both;
    margin: 15px 0 -30px 0;
  }
  &-main {
    padding: 30px;
  }
  &-footer {
    padding: 0 30px;
  }
  &-footer-actions {
    text-align: right;
  }
}

.mv-contentLayout-tabs .el-tabs__header {
  margin-bottom: 0;
}
</style>

<script>
import { Dialog as ElDialog } from "element-ui";
import MvForm from "./Form";

export default {
  name: "MvFormDialog",
  props: { title: String, visible: Boolean },
  components: {
    ElDialog,
    MvForm
  },

  watch: {
    visible(visible) {
      this.$emit("update:visible", visible);
    }
  }
};
</script>
