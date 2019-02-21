<template>
  <div class="table-action">
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
export default {
  name: "TableAction",
  props: {},
  computed: {},
  methods: {}
};
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";

.table-action {
  display: inline-block;
  + .table-action {
    margin-left: 5px;
  }
}
</style>
