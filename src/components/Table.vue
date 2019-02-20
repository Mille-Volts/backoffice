<template>
  <el-table class="table" :data="data" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-table>
</template>

<script>
export default {
  name: "Table",
  props: ["data"],
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
@import "@/scss/common.scss";

.table {
  border-top: $--table-border;
  th {
    background: $--color-background;
  }
}
</style>
