<template>
  <component
    :is="form? 'mv-form': 'div'"
    class="parent-container"
    :class="`parent-container--${application.layout}`"
    :model="form"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-container>
      <el-header ref="header" v-if="!noHeader" height="auto" v-sticky :sticky-z-index="9000">
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
            <div v-if="$slots.tabs || (groups && groups.length > 1)" class="tabs">
              <slot name="tabs">
                <el-tabs class="content-tabs" v-model="tabActive">
                  <el-tab-pane
                    v-for="{label, name} in tabs"
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
      <el-main ref="main">
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
import VueScrollTo from "vue-scrollto";

export default {
  name: "ContentLayout",
  inject: ["application"],
  provide() {
    return {
      content: this
    };
  },
  props: {
    title: String,
    noHeader: Boolean,
    tabScroll: Boolean,
    form: Object
  },
  data() {
    return {
      groups: [],
      tabActive: "0"
    };
  },
  computed: {
    breadcrumb() {
      return this.$route.matched || [];
    },
    pageTitle() {
      return this.title || (this.$route.label || this.$route.name);
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
      if (this.tabScroll) {
        VueScrollTo.scrollTo(this.groups[newTab].$el, 350, {
          offset: (this.noHeader ? 0 : -this.$refs.header.$el.offsetHeight) - 30
        });
      } else {
        this.groups[oldTab].$emit("hide");
        this.groups[newTab].$emit("show");
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
.parent-container--vertical {
  .el-header {
  }
  .el-main {
  }
}
</style>

<style>
.content-tabs .el-tabs__header {
  margin-bottom: 0;
}
</style>
