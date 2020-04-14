<template>
  <el-form-item v-bind="$attrs" v-on="$listeners" class="mv-item">
    <template v-slot:label>
      <slot name="label"></slot>
    </template>
    <div class="mv-item-content">
      <slot></slot>
    </div>
    <div
      v-if="$slots.help"
      class="mv-item-help text-secondary text-small text-compact"
    >
      <slot name="help"></slot>
    </div>
  </el-form-item>
</template>

<style lang="scss">
.mv-item {
  .el-form-item__content {
    min-height: 40px;
    line-height: 1;
  }

  &-content {
    font-weight: bold;
    font-size: 16px;
  }

  &-help {
    font-weight: normal;
    margin-top: 4px;
  }
}
</style>

<script>
import { FormItem as ElFormItem } from "element-ui";

export default {
  name: "MvItem",
  components: {
    ElFormItem
  }
};
</script>
