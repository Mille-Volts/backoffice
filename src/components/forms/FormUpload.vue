<template>
  <el-upload
    :thumbnail-mode="thumbnailMode"
    :fileList="fileList"
    :multiple="multiple"
    :limit="multiple ? limit : 1"
    :disabled="disabled"
    :listType="listType"
    v-bind="attrs"
    v-on="listeners"
    class="mv-formUpload"
    :class="{
      'mv-formUpload--cannot-upload': !canUpload,
      [`mv-formUpload--${listType || 'text'}`]: 1
    }"
  >
    <template v-if="$slots.trigger" v-slot:trigger>
      <slot name="trigger"></slot>
    </template>
    <template v-if="$slots.tip" v-slot:tip="tipProps">
      {JSON.stringify(tipProps)}
      <slot name="tip"></slot>
    </template>
    <slot>
      <span @click="preventUpload" class="mv-formUpload-defaultButton">
        <span v-if="listType === 'picture-card'">
          <mv-icon name="upload"></mv-icon>Sélectionner un fichier&hellip;
        </span>
        <mv-button
          v-else
          :disabled="!canUpload"
          size="mini"
          icon="upload"
          secondary
          >Sélectionner un fichier&hellip;</mv-button
        >
      </span>
    </slot>
  </el-upload>
</template>

<script>
import { Upload as ElUpload } from "element-ui";
import MvButton from "../Button.vue";
import MvIcon from "../Icon.vue";

export default {
  name: "FormUpload",
  inject: ["upload"],
  props: {
    folder: String,
    thumbnailMode: Boolean,
    data: Object,
    listType: String,
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
    MvButton,
    MvIcon
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
        httpRequest,
        ...otherUploadAttrs
      } = this.upload.attrs;
      return {
        data: { folder: this.folder, ...this.data },
        ...((!!httpRequest || !!self.httpRequest) && {
          httpRequest() {
            httpRequest && httpRequest.call(this, ...arguments);
            self.httpRequest && self.httpRequest(...arguments);
          }
        }),
        onRemove() {
          onRemove && onRemove.call(this, ...arguments);
          self.onRemove && self.onRemove(...arguments);
        },
        onSuccess() {
          onSuccess && onSuccess.call(this, ...arguments);
          self.onSuccess && self.onSuccess(...arguments);
        },
        onChange() {
          onChange && onChange.call(this, ...arguments);
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
    .el-upload__input {
      // Prevent uploading by hiding the input file
      display: none;
    }
    .el-upload {
      // Hides the button
      display: none;
    }
    &.mv-formUpload--picture-card .el-upload {
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    }
  }
  &-defaultButton {
    display: inline-block;
  }
  &--picture-card {
    .el-upload-list--picture-card .el-upload-list__item {
      transition: none;
    }
    .el-upload-list--picture-card .el-upload-list__item-thumbnail {
      margin-left: 50%;
      max-width: none;
      transform: translateX(-50%);
      width: auto;
    }
    .mv-formUpload-defaultButton {
      align-items: center;
      display: flex;
      font-size: 12px;
      justify-content: center;
      height: 100%;
      line-height: 100%;
      text-align: center;
      i {
        display: block;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
