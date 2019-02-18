<template>
  <el-form label-position="top" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-form>
</template>

<script>
export default {
  name: "Form",
  props: [],
  computed: {}
};
</script>