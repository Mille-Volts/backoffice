<template>
  <el-row
    class="mv-row"
    :class="{ 'mv-row--border': !!border }"
    v-bind="$attrs"
    v-on="$listeners"
    :gutter="gutterComputed"
  >
    <slot></slot>
  </el-row>
</template>

<script>
import { Row as ElRow } from "element-ui";

export default {
  name: "Row",
  components: {
    ElRow
  },
  props: {
    border: Boolean,
    gutter: [String, Number]
  },
  computed: {
    gutterComputed() {
      return this.gutter ? parseInt(this.gutter, 10) : this.border ? 30 : 0;
    }
  }
};
</script>

<style lang="scss">
@import "../theme/_variables.scss";

.mv-row {
  &--border {
    .el-col {
      &:before {
        border-left: 1px solid $--card-border-color;
        content: "";
        height: 100%;
        margin-left: -15px;
        position: absolute;
      }
      &:first-child:before {
        display: none;
      }
    }
  }
}
</style>
