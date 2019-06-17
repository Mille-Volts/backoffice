<template>
  <el-form-item v-bind="$attrs" v-on="$listeners">
    <template v-slot:label>
      <slot name="label"></slot>
    </template>
    <slot></slot>
    <div
      v-if="$slots.help"
      class="form-item-help text-secondary text-small text-compact"
    >
      <slot name="help"></slot>
    </div>
  </el-form-item>
</template>

<style>
.form-item-help {
  margin-top: 4px;
}
</style>

<script>
import { FormItem as ElFormItem } from "element-ui";

export default {
  name: "MvFormItem",
  components: {
    ElFormItem
  }
};
</script>
