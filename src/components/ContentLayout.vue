<template>
  <component
    :is="form? 'mv-form': 'div'"
    class="parent-container"
    :model="form"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-container>
      <el-header v-if="!noHeader" height="auto">
        <div class="content">
          <slot name="header">
            <div v-if="breadcrumb.length" class="breadcrumb">
              <slot name="breadcrumb">
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/' }">Accueil</el-breadcrumb-item>
                  <el-breadcrumb-item
                    v-for="match in breadcrumb"
                    :key="match.path"
                    :to="match"
                  >{{match.label || match.name || match.path}}</el-breadcrumb-item>
                </el-breadcrumb>
              </slot>
            </div>
            <div class="title">
              <slot name="title">
                <h1 v-text="pageTitle"></h1>
              </slot>
            </div>
            <div v-if="$slots.actions" class="actions">
              <slot name="actions"></slot>
            </div>
            <div v-if="$slots.tabs || tabs" class="tabs">
              <slot name="tabs">
                <el-tabs class="content-tabs" :value="tabActive" @tab-click="onTabChange">
                  <el-tab-pane
                    v-for="(label, name) in tabs"
                    :key="name"
                    :label="label.label || label"
                    :name="label.name || name"
                  ></el-tab-pane>
                </el-tabs>
              </slot>
            </div>
          </slot>
        </div>
      </el-header>
      <el-main>
        <div class="content">
          <slot></slot>
        </div>
      </el-main>
      <el-footer v-if="form">
        <div class="content">
          <div class="actions" v-if="$slots.actions">
            <slot name="actions"></slot>
          </div>
        </div>
      </el-footer>
    </el-container>
  </component>
</template>

<script>
export default {
  name: "ContentLayout",
  inject: ["application"],
  props: {
    title: String,
    tabs: [Array, Object] /* { label: String, value: String } */,
    tabActive: String,
    noHeader: Boolean,
    form: Object
  },
  methods: {
    onTabChange(tab) {
      this.$emit("tab-change", tab);
    }
  },
  computed: {
    breadcrumb() {
      return this.$route.matched || [];
    },
    pageTitle() {
      return this.title || (this.$route.label || this.$route.name);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";

.parent-container,
.el-container {
  min-height: 100%;
}
.content {
  margin: 0 auto;
  max-width: 960px;
}
.el-header {
  background: $--color-white;
  padding: 0 30px;
  .content {
    padding: 30px 0;
    overflow: hidden;
  }
  .breadcrumb {
    margin: -15px 0 15px 0;
  }
  .title {
    float: left;
    margin: 15px 0;
  }
  .actions {
    float: right;
    margin: 15px 0;
  }
  .tabs {
    clear: both;
    margin: 15px 0 -30px 0;
  }
}
.el-main {
  padding: 30px;
}
.el-footer {
  padding: 0 30px;
  .actions {
    text-align: right;
  }
}
</style>

<style>
.content-tabs .el-tabs__header {
  margin-bottom: 0;
}
</style>
