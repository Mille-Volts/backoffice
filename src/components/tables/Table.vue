<template>
  <div class="mv-table block">
    <div class="mv-table-header">
      <slot name="header"></slot>
    </div>
    <div v-if="currentlySelected" class="mv-table-selected">
      <el-alert
        class="mv-table-selected-message"
        :title="
          currentlySelected === 1
            ? `Un élément sélectionné`
            : `${currentlySelected} éléments sélectionnés`
        "
        type="info"
        :closable="false"
      >
        <slot name="selection"></slot>
      </el-alert>
    </div>
    <el-table
      ref="table"
      class="mv-table-content"
      :data="data"
      @selection-change="onSelectionChange"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <mv-table-column v-if="$scopedSlots.expand" type="expand">
        <template v-slot:default="{ row }">
          <slot name="expand" :row="row"></slot>
        </template>
      </mv-table-column>
      <mv-table-column v-if="selection || $listeners.updateSelection" type="selection" width="55"></mv-table-column>
      <slot></slot>
    </el-table>
    <div v-if="!noFooter" class="mv-table-footer">
      <slot name="footer">
        <div class="mv-table-results">
          <slot name="results">
            <span v-if="total">
              <strong
                v-text="
                  results
                    ? results === 1
                      ? `Un résultat`
                      : `${results} résultats`
                    : `Aucun résultat`
                "
              ></strong>
              /
              <span v-text="`${total} au total`"></span>
            </span>
          </slot>
        </div>
        <div class="mv-table-pagination">
          <slot name="pagination">
            <div v-if="total">
              <el-pagination
                layout="prev, pager, next"
                :page-size="limit"
                :current-page="page"
                @update:currentPage="$emit('update:page', $event)"
                :total="results"
              ></el-pagination>
            </div>
          </slot>
        </div>
        <div class="mv-table-limit">
          <slot name="limit">
            <label>Afficher :
              <mv-form-select
                class="mv-table-limit_select"
                size="mini"
                :value="limit"
                @change="$emit('update:limit', $event)"
              >
                <el-option
                  v-for="item in limits"
                  :key="item"
                  :label="`${item} par page`"
                  :value="item"
                ></el-option>
              </mv-form-select>
            </label>
          </slot>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import {
  Option as ElOption,
  Pagination as ElPagination,
  Table as ElTable,
  Alert as ElAlert
} from "element-ui";
import MvFormSelect from "../forms/FormSelect.vue";
import MvTableColumn from "./TableColumn.vue";

export default {
  name: "Table",
  components: {
    ElAlert,
    ElOption,
    ElPagination,
    ElTable,
    MvFormSelect,
    MvTableColumn
  },
  props: {
    data: Array,
    selection: Array,
    selected: Number,
    results: Number,
    total: Number,
    noFooter: Boolean,
    page: { type: Number, default: 1 },
    limit: { type: Number, default: 10 },
    limits: { type: Array, default: () => [10, 25, 50, 100] }
  },
  computed: {
    currentlySelected() {
      return this.selected || (this.selection && this.selection.length);
    }
  },
  updated() {
    if (this.data !== this._data) {
      this._dataForSelection = [this.data, this.selection];
    }
    this._data = this.data;
    this.data.forEach(row => {
      const wasSelected = (this._selection || []).indexOf(row) !== -1;
      const isSelected = (this.selection || []).indexOf(row) !== -1;
      if (wasSelected === isSelected) return;
      this.$refs.table.toggleRowSelection(row, isSelected);
    });
    this._selection = this.selection;
  },
  methods: {
    onSelectionChange(selection) {
      // If old selection array differs from this selection array, we consider this selection-change
      // comes from a change of data, so we do not update the array (sets to empty array)
      if (this._selection !== this.selection) return;
      return this.$emit("update:selection", selection);
    }
  }
};
</script>

<style lang="scss">
@import "../../theme/_variables.scss";

.mv-table {
  &-selected {
    &-message {
      margin-bottom: 15px;
    }
  }
  &-content {
    th {
      background: $--color-background;
      .el-input {
        display: block;
        padding: 0;
      }
    }
    .panel & {
      border-top: $--table-border;
    }
  }
  &-footer {
    align-items: center;
    display: flex;
    margin-top: 15px;
  }
  &-results {
    color: $--color-text-secondary;
    flex: 1;
    text-align: left;
    strong {
      color: $--color-text-primary;
    }
  }
  &-pagination {
    flex: 1;
    text-align: center;
  }
  &-limit {
    flex: 1;
    text-align: right;
    &-select {
      width: 120px;
    }
  }
  .cell {
    line-height: 1.2;
  }
}
</style>
