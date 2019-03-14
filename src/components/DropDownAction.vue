<template>
  <el-dropdown-item
    :divided="divided"
    class="mv-dropdownAction"
    :class="`mv-dropdownAction--${computedType}`"
  >
    <mv-button
      class="mv-dropdownAction-button"
      text
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot></slot>
    </mv-button>
  </el-dropdown-item>
</template>

<script>
import { DropdownItem as ElDropdownItem } from "element-ui";
import MvButton from "./Button.vue";

export default {
  name: "DropDownAction",
  components: {
    ElDropdownItem,
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
@import "../theme/_variables.scss";

.mv-dropdownAction {
  &_button {
    color: $--color-text-primary;
    .mv-dropdownAction--success & {
      color: $--color-success;
    }
    .mv-dropdownAction--warning & {
      color: $--color-warning;
    }
    .mv-dropdownAction--danger & {
      color: $--color-danger;
    }
    .button-icon--left {
      float: left;
      margin-left: 0;
      margin-right: 8px;
    }
    .button-icon--right {
      float: right;
      margin-left: 8px;
      margin-right: 0;
    }
  }
}
</style>
