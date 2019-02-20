<template>
  <el-button
    class="button"
    :plain="plain"
    :type="computedType"
    :native-type="type"
    :loading="loading"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <icon
      v-if="!loading && (icon || iconLeft)"
      class="button_icon button_icon--left"
      :name="icon || iconLeft"
    />
    <slot></slot>
    <icon
      v-if="iconRight"
      class="button_icon button_icon--right"
      :name="iconRight"
    />
  </el-button>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  name: "Button",
  components: {
    Icon
  },
  props: {
    icon: String,
    iconLeft: String,
    iconRight: String,
    primary: Boolean,
    secondary: Boolean,
    ghost: Boolean,
    text: Boolean,
    success: Boolean,
    warning: Boolean,
    danger: Boolean,
    type: String,
    loading: Boolean
  },
  computed: {
    plain() {
      return this.secondary || this.ghost;
    },
    computedType() {
      switch (true) {
        case this.primary:
          return "primary";
        case this.secondary:
          return "primary";
        case this.ghost:
          return "";
        case this.text:
          return "text";
        case this.success:
          return "success";
        case this.warning:
          return "warning";
        case this.danger:
          return "danger";
        default:
          return "";
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/common.scss";

.button {
  font: font-default-bold(1em, 1);
  overflow: hidden;
  &_icon--left {
    float: left;
    margin-left: -8px;
    margin-right: 8px;
  }
  &_icon--right {
    float: right;
    margin-left: 8px;
    margin-right: -8px;
  }
  .el-icon-loading {
    float: left;
    margin-left: -8px;
    margin-right: 3px;
  }
}
</style>
