<template>
  <el-form
    class="mv-form block"
    :label-position="defaultLabelPosition"
    :model="model"
    :inline="inline"
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
  props: { model: Object, labelPosition: String, inline: Boolean },
  computed: {
    defaultLabelPosition() {
      return this.labelPosition || this.inline ? "left" : "top";
    }
  },
  methods: {
    onSubmit(event) {
      if (!this.$listeners.submit) return;
      this.$listeners.submit(this.model, event);
    }
  }
};
</script>
