<template>
  <el-button
    :plain="plain"
    :type="computedType"
    :native-type="type"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <icon
      class="icon icon--left"
      v-if="icon || iconLeft"
      :name="icon || iconLeft"
    />
    <slot></slot>
    <icon class="icon icon--right" v-if="iconRight" :name="iconRight" />
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
  overflow: hidden;
  .icon--left {
    float: left;
    margin-left: -8px;
    margin-right: 8px;
  }
  .icon--right {
    float: right;
    margin-left: 8px;
    margin-right: -8px;
  }
}
</style>
