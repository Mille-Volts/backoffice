<template>
  <el-button :plain="plain" :type="type" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: "Button",
  props: [
    "primary",
    "secondary",
    "ghost",
    "text",
    "success",
    "warning",
    "danger"
  ],
  computed: {
    plain() {
      return this.secondary === "" || this.ghost === "";
    },
    type() {
      switch ("") {
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