<template>
  <el-container v-if="!hide" class="mv-formGroup block">
    <el-aside class="mv-formGroup-aside" width="240px">
      <slot name="header">
        <h2 v-if="title" v-text="title"></h2>
        <slot name="description"></slot>
      </slot>
    </el-aside>
    <el-main class="mv-formGroup-main">
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script>
import {
  Container as ElContainer,
  Aside as ElAside,
  Main as ElMain
} from "element-ui";

export default {
  name: "FormGroup",
  inject: ["content"],
  components: {
    ElContainer,
    ElAside,
    ElMain
  },
  props: { title: { type: String } },
  data() {
    return { hide: false };
  },
  created() {
    this.$on("hide", function() {
      this.hide = true;
    });
    this.$on("show", function() {
      this.hide = false;
    });
  },
  mounted() {
    if (this.content) {
      this.content.$emit("add-group", this);
    }
  },
  beforeDestroy() {
    if (this.content) {
      this.content.$emit("remove-group", this);
    }
  }
};
</script>

<style lang="scss">
@import "../../theme/_variables.scss";

.mv-formGroup {
  + .mv-formGroup {
    margin-top: ($--margin * 2);
  }
  &-aside {
    padding: $--margin 0;
    .mv-panel & {
      padding-top: 0;
    }
    hr {
      margin: $--margin 0;
    }
  }
  &-main {
    &.el-main {
      overflow: hidden;
      padding: 0 0 0 ($--margin * 2);
    }
  }
}
</style>
