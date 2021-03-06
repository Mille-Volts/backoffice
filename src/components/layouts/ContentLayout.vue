<template>
  <component
    ref="form"
    :is="parentComponent"
    class="mv-contentLayout"
    :class="{
      [`mv-contentLayout--${application.layout}`]: 1,
      'mv-contentLayout--form': form
    }"
    v-bind="parentProps"
    v-on="$listeners"
  >
    <el-container sticky-container class="mv-contentLayout-container">
      <el-header
        v-if="!!withHeader"
        ref="header"
        v-sticky
        height="auto"
        class="mv-contentLayout-header"
        :sticky-z-index="2000"
        :sticky-offset="{ top: application.layout === 'horizontal' ? 44 : 0 }"
      >
        <div class="mv-contentLayout-content">
          <slot name="header">
            <div v-if="$slots.headerTop">
              <slot name="headerTop"></slot>
            </div>
            <div v-if="breadcrumb.length" class="mv-contentLayout-breadcrumb">
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
            <div class="mv-contentLayout-title">
              <slot name="title">
                <h1 v-text="pageTitle"></h1>
              </slot>
            </div>
            <div
              v-if="$slots.actions || $slots.topActions"
              class="mv-contentLayout-header-actions"
            >
              <slot name="topActions"></slot>
              <slot name="actions"></slot>
            </div>
            <div v-if="hasTabs" class="mv-contentLayout-tabs">
              <slot name="tabs">
                <el-tabs
                  v-model="tabActive"
                  class="mv-contentLayout-content-tabs"
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
            <div
              v-if="$slots.headerBottom"
              class="mv-contentLayout-header-bottom"
            >
              <slot name="headerBottom"></slot>
            </div>
          </slot>
        </div>
      </el-header>
      <el-main ref="main" class="mv-contentLayout-main">
        <div class="mv-contentLayout-content">
          <slot></slot>
        </div>
      </el-main>
      <el-footer v-if="form" class="mv-contentLayout-footer">
        <div class="mv-contentLayout-content">
          <div
            v-if="$slots.actions || $slots.bottomActions"
            class="mv-contentLayout-footer-actions"
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
import {
  Container as ElContainer,
  Header as ElHeader,
  Main as ElMain,
  Footer as ElFooter,
  Breadcrumb as ElBreadcrumb,
  BreadcrumbItem as ElBreadcrumbItem,
  Tabs as ElTabs,
  TabPane as ElTabPane
} from "element-ui";
import MvForm from "../forms/Form.vue";

export default {
  name: "MvContentLayout",
  inject: ["application"],
  components: {
    ElContainer,
    ElHeader,
    ElMain,
    ElFooter,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElTabs,
    ElTabPane,
    MvForm
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
    form: Object
  },
  data() {
    return {
      groups: [],
      tabActive: "0",
      updateMenuOnScroll: true
    };
  },
  computed: {
    formComponent() {
      if (!this.form)
        throw Error(
          "Content layout is not a form. Please provide the form prop."
        );
      return this.$refs.form;
    },
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
        this.$route.matched
          .filter(({ meta }) => !meta || !meta.root)
          .slice(0, -1) || []
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
        if (!this._inScroll) {
          VueScrollTo.scrollTo(
            (this.groups[newTab] || this.$refs.header).$el,
            350,
            {
              offset:
                (this.noHeader ? 0 : -this.$refs.header.$el.offsetHeight) - 30,
              onStart: () => {
                this.updateMenuOnScroll = false;
              },
              onDone: () => {
                this.updateMenuOnScroll = true;
              }
            }
          );
        }
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
                (this.noHeader ? 0 : -this.$refs.header.$el.offsetHeight) - 30,
              onStart: () => {
                this.updateMenuOnScroll = false;
              },
              onDone: () => {
                this.updateMenuOnScroll = true;
              }
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
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (!this.form || !this.updateMenuOnScroll) return;
      const maxScroll =
        this.$refs.main.$el.clientHeight +
        this.$refs.main.$el.offsetTop -
        window.innerHeight;

      const proportionnalScroll = window.scrollY / maxScroll;

      const groupsAndY = this.groups.map((group, index) => ({
        index: "" + index,
        y:
          (group.$el.offsetTop - this.$refs.main.$el.offsetTop) /
          this.$refs.main.$el.clientHeight
      }));

      const currentGroup = groupsAndY.filter(
        ({ y }) => y <= proportionnalScroll
      );
      const nextTabActive = currentGroup.length
        ? currentGroup[currentGroup.length - 1].index
        : "0";
      if (!this.tabActive !== nextTabActive) {
        window.clearTimeout(this._inScroll);
        this._inScroll = window.setTimeout(() => {
          window.clearTimeout(this._inScroll);
          this._inScroll = null;
        }, 100);
        this.tabActive = nextTabActive;
      }
    },
    addGroup(group) {
      this.groups.push(group);

      if (
        !this.tabScroll &&
        !!this.hasTabs &&
        this.groups.length !== parseInt(this.tabActive, 10)
      ) {
        group.$emit("hide");
      }
    },
    removeGroup(group) {
      this.groups.splice(this.groups.indexOf(group), 1);
    }
  }
};
</script>

<style lang="scss">
@import "../../theme/_variables.scss";

.mv-contentLayout {
  &,
  &-container {
    min-height: 100%;
  }
  &-content {
    margin: 0 auto;
    max-width: 960px;
  }
  &-header {
    background: $--color-white;
    padding: 0 30px;
    .mv-contentLayout-content {
      padding: 30px 0;
      overflow: hidden;
    }
  }
  &-breadcrumb {
    margin: -15px 0 15px 0;
  }
  &-title {
    float: left;
    margin: 15px 0;
  }
  &-header-actions {
    float: right;
    margin: 15px 0;
  }
  &-header-bottom {
    clear: both;
  }
  &-tabs {
    clear: both;
    margin: 15px 0 -30px 0;
  }
  &-main {
    padding: 30px;
  }
  &-footer {
    padding: 0 30px;
  }
  &-footer-actions {
    text-align: right;
  }
}

.mv-contentLayout-tabs .el-tabs__header {
  margin-bottom: 0;
}
</style>
