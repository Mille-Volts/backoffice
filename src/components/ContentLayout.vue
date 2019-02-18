<template>
  <el-container>
    <el-header height="auto">
      <div class="content">
        <slot name="header">
          <div v-if="$slots.breadcrumb" class="breadcrumb">
            <slot name="breadcrumb"></slot>
          </div>
          <div v-if="$slots.title || title" class="title">
            <slot name="title">
              <h1 v-text="title"></h1>
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
  </el-container>
</template>

<script>
export default {
  name: "ContentLayout",
  inject: ["application"],
  model: {
    prop: "tabActive"
  },
  props: {
    title: String,
    tabs: [Array, Object] /* { label: String, value: String } */,
    tabActive: String
  },
  methods: {
    onTabChange(tab) {
      this.$emit("change", tab);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";

.el-container {
  min-height: calc(100% + 40px);
  margin: -20px;
}
.el-header {
  background: $--color-white;
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
.content {
  margin: 0 auto;
  max-width: 960px;
}
</style>

<style>
.content-tabs .el-tabs__header {
  margin-bottom: 0;
}
</style>
