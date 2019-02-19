<template>
  <el-form
    label-position="top"
    :model="model"
    v-bind="$attrs"
    v-on="$listeners"
    @submit.native.prevent="onSubmit"
  >
    <slot></slot>
    <div v-if="$slots.actions">
      <slot name="actions"></slot>
    </div>
  </el-form>
</template>

<script>
export default {
  name: "Form",
  props: ["model"],
  computed: {},
  methods: {
    onSubmit(event) {
      if (!this.$listeners.submit) return;
      this.$listeners.submit(this.model, event);
    }
  }
};
</script>
