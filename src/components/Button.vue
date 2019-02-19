<template>
  <el-button
    :plain="plain"
    :type="computedType"
    :native-type="type"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: "Button",
  props: {
    primary: Boolean,
    secondary: Boolean,
    ghost: Boolean,
    text: Boolean,
    success: Boolean,
    warning: Boolean,
    danger: Boolean,
    type: String
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

.el-button {
  font-family: $--font-stack-default;
  font-weight: 600;
}
</style>
