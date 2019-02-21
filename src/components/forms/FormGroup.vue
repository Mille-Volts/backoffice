<template>
  <el-container v-if="!hide" class="form-group">
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
export default {
  name: "FormGroup",
  props: { title: { type: String, required: true } },
  inject: ["content"],
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
@import "@/scss/common.scss";

.form-group {
  + .form-group {
    margin-top: 30px;
  }
  &_aside {
    padding: 15px 0;
  }
  &_main {
    padding: 0 0 0 30px;
  }
}
</style>

<style lang="scss">
.form-group_aside {
  hr {
    margin: 15px 0;
  }
}
</style>
