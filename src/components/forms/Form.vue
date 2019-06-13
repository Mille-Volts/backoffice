<template>
  <el-form
    class="mv-form block"
    :label-position="defaultLabelPosition"
    :model="model"
    :inline="inline"
    :rules="rules"
    hide-required-asterisk
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
import { Form as ElForm } from "element-ui";

export default {
  name: "Form",
  components: {
    ElForm
  },
  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    inline: Boolean
  },
  computed: {
    defaultLabelPosition() {
      return this.labelPosition || this.inline ? "left" : "top";
    }
  },
  methods: {
    validate(callback) {
      return this.$refs.form.validate(callback);
    },
    validateField(field, callback) {
      return this.$refs.form.validateField(field, callback);
    },
    reset() {
      return this.$refs.form.resetFields();
    },
    resetFields() {
      return this.$refs.form.resetFields();
    },
    clear(fields) {
      return this.$refs.form.clearValidate(fields);
    },
    clearValidate(fields) {
      return this.$refs.form.clearValidate(fields);
    },
    onSubmit(event) {
      if (!this.rules) {
        this.$emit("submit-valid", event);
        return this.$emit("submit", event);
      }
      this.$refs.form.validate((valid, errors) => {
        if (!valid) return this.$emit("submit-error", errors);
        this.$emit("submit-valid", event);
        return this.$emit("submit", event);
      });
    }
  }
};
</script>
