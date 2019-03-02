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
      <el-dropdown-menu slot="dropdown">
        <slot name="menu"></slot>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { DropdownMenu as ElDropdownMenu } from "element-ui";
import MvButton from "../Button.vue";

export default {
  name: "TableAction",
  components: {
    ElDropdownMenu,
    MvButton
  },
  props: {},
  computed: {},
  methods: {}
};
</script>
