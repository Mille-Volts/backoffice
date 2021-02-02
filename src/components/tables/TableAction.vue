<template>
  <div class="mv-tableAction inline-block">
    <!-- Button without menu [Button] -->
    <mv-button
      v-if="!$slots.menu"
      size="mini"
      ghost
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot></slot>
    </mv-button>
    <!-- Button with menu and content : [Button|v] -->
    <el-dropdown
      v-else-if="$slots.default"
      size="mini"
      placement="top-end"
      split-button
      class="mv-button mv-button--has-text"
      :class="{ 'mv-button--has-icon': !!$attrs.icon }"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <mv-icon
        :name="$attrs.icon"
        class="mv-button-icon mv-button-icon--left mv-icon ti-pencil"
      />
      <slot />
      <el-dropdown-menu class="mv-tableAction-dropdownMenu" slot="dropdown">
        <slot name="menu"></slot>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- Button with only menu : [...] -->
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
      /* Generates a scrollbar :( */
      display: none;
    }
  }
}
</style>
