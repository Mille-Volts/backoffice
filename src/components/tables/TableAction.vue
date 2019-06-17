<template>
  <div class="mv-tableAction inline-block">
    <mv-button
      v-if="!$slots.menu"
      size="mini"
      ghost
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot></slot>
    </mv-button>
    <el-dropdown v-else size="mini" placement="top-end" :show-timeout="0">
      <mv-button
        size="mini"
        ghost
        icon="more"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <slot></slot>
      </mv-button>
      <el-dropdown-menu class="mv-tableAction-dropdownMenu" slot="dropdown">
        <slot name="menu"></slot>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { DropdownMenu as ElDropdownMenu } from "element-ui";
import MvButton from "../Button.vue";

export default {
  name: "MvTableAction",
  components: {
    ElDropdownMenu,
    MvButton
  },
  props: {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
@import "../../theme/_variables.scss";

.mv-tableAction {
  &-dropdownMenu {
    .popper__arrow {
      // Generates a scrollbar :(
      display: none;
    }
  }
}
</style>
