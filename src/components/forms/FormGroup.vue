<template>
  <el-container v-if="!hide" class="form-group mv--block">
    <el-aside class="form-group_aside" width="240px">
      <slot name="header">
        <h2 v-if="title" v-text="title"></h2>
        <slot name="description"></slot>
      </slot>
    </el-aside>
    <el-main class="form-group_main">
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
  props: { title: { type: String, required: true } },
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

<style scoped lang="scss">
@import "@/theme/common.scss";

.form-group {
  + .form-group {
    margin-top: ($--margin * 2);
  }
  &_aside {
    padding: $--margin 0;
  }
  &_main {
    padding: 0 0 0 ($--margin * 2);
  }
}
</style>

<style lang="scss">
@import "@/theme/common.scss";

.panel .form-group_aside {
  padding-top: 0;
}
.form-group_aside {
  hr {
    margin: $--margin 0;
  }
}
</style>
