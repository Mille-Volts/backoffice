<template>
  <el-dropdown-item
    :divided="divided"
    class="dropdown-action"
    :class="`dropdown-action--${computedType}`"
  >
    <mv-button
      class="dropdown-action_button"
      text
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot></slot>
    </mv-button>
  </el-dropdown-item>
</template>

<script>
import MvButton from "./Button.vue";

export default {
  name: "DropDownAction",
  components: {
    MvButton
  },
  props: {
    divided: Boolean,
    success: Boolean,
    warning: Boolean,
    danger: Boolean
  },
  computed: {
    computedType() {
      switch (true) {
        case this.success:
          return "success";
        case this.warning:
          return "warning";
        case this.danger:
          return "danger";
        default:
          return "standard";
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/common.scss";

.dropdown-action {
  &_button {
    color: $--color-text-primary;
    .dropdown-action--success & {
      color: $--color-success;
    }
    .dropdown-action--warning & {
      color: $--color-warning;
    }
    .dropdown-action--danger & {
      color: $--color-danger;
    }
    .button_icon--left {
      float: left;
      margin-left: 0;
      margin-right: 8px;
    }
    .button_icon--right {
      float: right;
      margin-left: 8px;
      margin-right: 0;
    }
  }
}
</style>
