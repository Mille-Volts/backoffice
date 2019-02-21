<template>
  <el-form-item v-bind="$attrs" v-on="$listeners">
    <template v-slot:label>
      <slot name="label"></slot>
    </template>
    <slot></slot>
  </el-form-item>
</template>

<script>
export default {
  name: "FormItem"
};
</script>
