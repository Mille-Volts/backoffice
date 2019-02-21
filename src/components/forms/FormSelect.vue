<template>
  <el-select v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-select>
</template>

<script>
export default {
  name: "FormSelect"
};
</script>

<style lang="scss"></style>
