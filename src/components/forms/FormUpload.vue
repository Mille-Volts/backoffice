<template>
  <el-upload
    :thumbnail-mode="thumbnailMode"
    :fileList="fileList"
    :multiple="multiple"
    :limit="multiple ? limit : 1"
    :disabled="disabled"
    v-bind="attrs"
    v-on="listeners"
    class="mv-formUpload"
    :class="{ 'mv-formUpload--cannot-upload': !canUpload }"
  >
    <template v-if="$slots.trigger" v-slot:trigger>
      <slot name="trigger"></slot>
    </template>
    <template v-if="$slots.tip" v-slot:tip="tipProps">
      {JSON.stringify(tipProps)}
      <slot name="tip"></slot>
    </template>
    <slot>
      <span @click="preventUpload">
        <i v-if="attrs['list-type'] === 'picture-card'" class="ti-upload avatar-uploader-icon"></i>
        <mv-button
          v-else
          :disabled="!canUpload"
          size="mini"
          icon="upload"
          secondary
        >Sélectionner un fichier...</mv-button>
      </span>
    </slot>
  </el-upload>
</template>

<script>
import { Upload as ElUpload } from "element-ui";
import MvButton from "../Button.vue";

export default {
  name: "FormUpload",
  inject: ["upload"],
  props: {
    folder: String,
    thumbnailMode: Boolean,
    data: Object,
    fileList: {
      type: Array,
      default() {
        return [];
      }
    },
    onSuccess: Function,
    onRemove: Function,
    onChange: Function,
    multiple: Boolean,
    disabled: Boolean,
    limit: Number
  },
  components: {
    ElUpload,
    MvButton
  },
  computed: {
    canUpload() {
      return (
        !this.disabled &&
        (!this.fileList || !this.fileList.length || !!this.multiple)
      );
    },
    attrs() {
      const self = this;
      const {
        onRemove,
        onSuccess,
        onChange,
        ...otherUploadAttrs
      } = this.upload.attrs;
      return {
        data: { folder: this.folder, ...this.data },
        onRemove() {
          onRemove && onRemove(...arguments);
          self.onRemove && self.onRemove(...arguments);
        },
        onSuccess() {
          onSuccess && onSuccess(...arguments);
          self.onSuccess && self.onSuccess(...arguments);
        },
        onChange() {
          onChange && onChange(...arguments);
          self.onChange && self.onChange(...arguments);
        },
        ...otherUploadAttrs,
        ...this.$attrs
      };
    },
    listeners() {
      return { ...this.upload.listeners, ...this.$listeners };
    }
  },
  methods: {
    preventUpload(evt) {
      if (this.canUpload) return;
      evt.stopPropagation();
      evt.preventDefault();
    }
  }
};
</script>

<style lang="scss">
@import "../../theme/_variables.scss";

.mv-formUpload {
  &--cannot-upload {
    .el-upload {
      display: none;
    }
  }
}
</style>
