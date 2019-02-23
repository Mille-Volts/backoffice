<template>
  <el-upload v-bind="attrs" v-on="listeners">
    <template v-if="$slots.trigger" v-slot:trigger>
      <slot name="trigger"></slot>
    </template>
    <template v-if="$slots.tip" v-slot:tip>
      <slot name="tip"></slot>
    </template>
    <slot>
      <mv-button size="mini" icon="upload" secondary>Sélectionner un fichier...</mv-button>
    </slot>
  </el-upload>
</template>

<script>
export default {
  name: "FormUpload",
  inject: ["upload"],
  computed: {
    attrs() {
      return { ...this.upload.attrs, ...this.$attrs };
    },
    listeners() {
      return { ...this.upload.listeners, ...this.$listeners };
    }
  }
};
</script>
