<template>
  <component
    :is="parentComponent"
    class="content-layout"
    :class="{
      [`content-layout--${application.layout}`]: 1,
      'content-layout--form': form,
      'content-layout--table': table
    }"
    v-bind="parentProps"
    v-on="$listeners"
  >
    <el-container sticky-container class="content-layout_container">
      <el-header
        v-if="!!withHeader"
        ref="header"
        v-sticky
        height="auto"
        class="content-layout_header"
        :sticky-z-index="2000"
        :sticky-offset="{ top: application.layout === 'horizontal' ? 44 : 0 }"
      >
        <div class="content-layout_content">
          <slot name="header">
            <div v-if="breadcrumb.length" class="content-layout_breadcrumb">
              <slot name="breadcrumb">
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/' }"
                    >Accueil</el-breadcrumb-item
                  >
                  <el-breadcrumb-item
                    v-for="match in breadcrumb"
                    :key="match.path"
                    :to="match"
                  >
                    {{
                      (match.meta && match.meta.label) ||
                        match.name ||
                        match.path
                    }}
                  </el-breadcrumb-item>
                </el-breadcrumb>
              </slot>
            </div>
            <div class="content-layout_title">
              <slot name="title">
                <h1 v-text="pageTitle"></h1>
              </slot>
            </div>
            <div
              v-if="$slots.actions || $slots.topActions"
              class="content-layout_header-actions"
            >
              <slot name="topActions"></slot>
              <slot name="actions"></slot>
            </div>
            <div v-if="hasTabs" class="content-layout_tabs">
              <slot name="tabs">
                <el-tabs
                  v-model="tabActive"
                  class="content-layout_content-tabs"
                >
                  <el-tab-pane
                    v-for="{ label, name } in tabs"
                    :key="name"
                    :label="label"
                    :name="name"
                  ></el-tab-pane>
                </el-tabs>
              </slot>
            </div>
          </slot>
        </div>
      </el-header>
      <el-main ref="main" class="content-layout_main">
        <mv-table v-if="table" :data="table">
          <slot></slot>
        </mv-table>
        <div v-else class="content-layout_content">
          <slot></slot>
        </div>
      </el-main>
      <el-footer v-if="form" class="content-layout_footer">
        <div class="content-layout_content">
          <div
            v-if="$slots.actions || $slots.bottomActions"
            class="content-layout_footer-actions"
          >
            <slot name="actions"></slot>
            <slot name="bottomActions"></slot>
          </div>
        </div>
      </el-footer>
    </el-container>
  </component>
</template>

<script>
import VueScrollTo from "vue-scrollto";
import MvForm from "../Form.vue";
import MvTable from "../Table.vue";

export default {
  name: "ContentLayout",
  inject: ["application"],
  components: {
    MvForm,
    MvTable
  },
  provide() {
    return {
      content: this
    };
  },
  props: {
    title: String,
    withHeader: { type: Boolean, default: true },
    withTabs: { type: Boolean, default: true },
    tabScroll: Boolean,
    form: Object,
    table: Array
  },
  data() {
    return {
      groups: [],
      tabActive: "0"
    };
  },
  computed: {
    parentComponent() {
      if (this.form) return "mv-form";
      return "div";
    },
    parentProps() {
      const props = { ...this.$attrs };
      if (this.form) {
        props.model = this.form;
      }
      return props;
    },
    breadcrumb() {
      return (
        this.$route.matched.filter(({ meta }) => !meta || !meta.root) || []
      );
    },
    pageTitle() {
      return (
        this.title ||
        ((this.$route.meta && this.$route.meta.label) || this.$route.name)
      );
    },
    hasTabs() {
      return (
        !!this.withTabs &&
        (this.$slots.tabs || (this.groups && this.groups.length > 1))
      );
    },
    tabs() {
      return this.groups.map(({ title: label }, index) => ({
        label,
        name: "" + index
      }));
    }
  },
  watch: {
    tabActive(newTabStr, oldTabStr) {
      const newTab = parseInt(newTabStr, 10);
      const oldTab = parseInt(oldTabStr, 10);
      if (this.tabScroll || !this.hasTabs) {
        VueScrollTo.scrollTo(
          (this.groups[newTab] || this.$refs.header).$el,
          350,
          {
            offset:
              (this.noHeader ? 0 : -this.$refs.header.$el.offsetHeight) - 30
          }
        );
      } else {
        if (this.groups[oldTab]) this.groups[oldTab].$emit("hide");
        if (this.groups[newTab]) this.groups[newTab].$emit("show");
        VueScrollTo.scrollTo(this.$refs.header.$el, 150);
      }
      this.$emit("set-group", this.groups[newTab]);
    },
    tabScroll(newValue, oldValue) {
      if (newValue === oldValue) return;
      if (newValue) {
        this.groups.forEach(group => group.$emit("show"));
        window.setTimeout(() => {
          VueScrollTo.scrollTo(
            this.groups[parseInt(this.tabActive, 10)].$el,
            350,
            {
              offset:
                (this.noHeader ? 0 : -this.$refs.header.$el.offsetHeight) - 30
            }
          );
        }, 50);
      } else {
        this.groups.forEach((group, index) =>
          group.$emit(index === parseInt(this.tabActive) ? "show" : "hide")
        );
        VueScrollTo.scrollTo(this.$refs.header.$el, 150);
      }
    }
  },
  created() {
    this.$on("add-group", this.addGroup);
    this.$on("remove-group", this.removeGroup);
  },
  methods: {
    addGroup(group) {
      if (
        !this.tabScroll &&
        !!this.hasTabs &&
        this.groups.length !== parseInt(this.tabActive, 10)
      ) {
        group.$emit("hide");
      }
      this.groups.push(group);
    },
    removeGroup(group) {
      this.groups.splice(this.groups.indexOf(group), 1);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";

.content-layout {
  &,
  &_container {
    min-height: 100%;
  }
  &_content {
    margin: 0 auto;
    max-width: 960px;
  }
  &_header {
    background: $--color-white;
    padding: 0 30px;
    .content-layout_content {
      padding: 30px 0;
      overflow: hidden;
    }
  }
  &_breadcrumb {
    margin: -15px 0 15px 0;
  }
  &_title {
    float: left;
    margin: 15px 0;
  }
  &_header-actions {
    float: right;
    margin: 15px 0;
  }
  &_tabs {
    clear: both;
    margin: 15px 0 -30px 0;
  }
  &_main {
    padding: 30px;
    .content-layout--table & {
      padding: 0 0 30px 0;
    }
  }
  &_footer {
    padding: 0 30px;
  }
  &_footer-actions {
    text-align: right;
  }
}
</style>

<style>
.content-layout_tabs .el-tabs__header {
  margin-bottom: 0;
}
</style>
