<template>
  <el-table-column
    class="mv-tableColumn"
    :formatter="defaultFormatter"
    :align="defaultAlign"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-if="$scopedSlots.header" v-slot:header="slotProps">
      <slot name="header" :row="slotProps.row" :column="slotProps.column"></slot>
    </template>
    <template v-if="$scopedSlots.default" v-slot:default="slotProps">
      <slot :row="slotProps.row" :column="slotProps.column"></slot>
    </template>
  </el-table-column>
</template>

<script>
import { TableColumn as ElTableColumn } from "element-ui";
import moment from "moment";

export default {
  name: "TableColumn",
  component: {
    ElTableColumn
  },
  props: {
    align: String,
    formatter: Function,
    date: { type: [Boolean, String], default: false },
    datetime: { type: [Boolean, String], default: false },
    ago: { type: [Boolean, String], default: false },
    actions: { type: [Boolean, String], default: false }
  },
  computed: {
    defaultAlign() {
      if (this.align) return this.align;
      if (this.date || this.datetime) {
        return "right";
      }
      return "left";
    },
    defaultFormatter() {
      if (this.formatter) return this.formatter;
      if (this.date) {
        return this.generaterDateFormatter(
          this.date !== true ? this.date : "DD/MM/YYYY"
        );
      }
      if (this.datetime) {
        return this.generaterDateFormatter(
          this.datetime !== true ? this.datetime : "DD/MM/YYYY HH:mm"
        );
      }
      if (this.ago) {
        return function(r, c, value) {
          return value ? moment(value).fromNow() : "";
        };
      }
      return null;
    }
  },
  methods: {
    generaterDateFormatter(format) {
      return function(r, c, value) {
        return value ? moment(value).format(format) : "";
      };
    }
  }
};
</script>

<style lang="scss">
@import "../../theme/_variables.scss";

.mv-tableColumn {
  th {
    background: $--color-background;
  }
}
</style>
