<template>
  <el-container
    :class="`mv-page mv-page--${application.layout}`"
    :direction="application.layout === 'horizontal' ? 'vertical' : 'horizontal'"
    sticky-container
  >
    <el-header v-if="application.layout === 'horizontal'" class="mv-page-header" height="120px">
      <div class="mv-page-top">
        <logo></logo>
        <div class="mv-page-title">
          <slot name="title">
            <main-title></main-title>
          </slot>
        </div>
        <div class="mv-page-user">
          <slot name="user">
            <user></user>
          </slot>
        </div>
      </div>
      <div v-sticky class="mv-page-menu" :sticky-z-index="2001" :sticky-offset="0">
        <slot name="menu">
          <main-menu :routes="routes"></main-menu>
        </slot>
      </div>
    </el-header>
    <el-aside v-else class="mv-page-aside" width="320px">
      <logo></logo>
      <div class="mv-page-title">
        <slot name="title">
          <main-title></main-title>
        </slot>
      </div>
      <div class="mv-page-user">
        <slot name="user">
          <user></user>
        </slot>
      </div>
      <div class="mv-page-menu">
        <slot name="menu">
          <main-menu :routes="routes"></main-menu>
        </slot>
      </div>
      <div class="mv-page-author">
        <slot name="author">
          <authorship/>
        </slot>
      </div>
    </el-aside>
    <el-main class="mv-page-main">
      <slot></slot>
    </el-main>
    <el-footer v-if="application.layout === 'horizontal'" class="mv-page-footer" height="auto">
      <div class="mv-page-author">
        <slot name="author">
          <authorship/>
        </slot>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import {
  Container as ElContainer,
  Header as ElHeader,
  Aside as ElAside,
  Main as ElMain,
  Footer as ElFooter
} from "element-ui";
import Authorship from "../parts/Authorship.vue";
import Logo from "../parts/Logo.vue";
import User from "../parts/User.vue";
import MainTitle from "../parts/MainTitle.vue";
import MainMenu from "../MainMenu.vue";

export default {
  name: "PageLayout",
  inject: ["application"],
  prop: ["title"],
  components: {
    ElContainer,
    ElHeader,
    ElAside,
    ElMain,
    ElFooter,
    Authorship,
    Logo,
    User,
    MainTitle,
    MainMenu
  },
  computed: {
    routes() {
      return this.findRoot(this.application.routes) || this.application.routes;
    }
  },
  methods: {
    findRoot(routes) {
      const root = routes.find(({ meta }) => !!meta && meta.root);
      if (root) return root.children || [];
      const childRoutes = routes.reduce(
        (all, { children }) =>
          children && children.length ? [...all, ...children] : all,
        []
      );
      if (!childRoutes.length) return null;
      return this.findRoot(childRoutes);
    }
  }
};
</script>

<style lang="scss">
@import "../../theme/_variables.scss";

.mv-page {
  &-logo {
    background: transparent url("../../assets/logo.png") no-repeat center center;
    background-size: 100% 100%;
    height: 76px;
    margin: auto;
    width: 240px;
    .mv-page--vertical & {
      margin: 22px auto;
      min-height: 76px;
    }
  }
  &-user {
    text-overflow: ellipsis;
    width: 240px;
    .mv-page--vertical & {
    }
  }
  &-author {
    color: $--color-text-regular;
    .mv-page--vertical & {
      color: $--color-white;
      margin-top: auto;
    }
  }
  &-title {
    .mv-page--vertical & {
      background: $--color-secondary-dark;
    }
    .mv-page--horizontal & {
      flex: 1;
      line-height: 56px;
      font-size: 16px;
    }
  }
  &-menu {
    .mv-page--horizontal & {
      background: $--color-secondary-dark;
      clear: both;
      display: flex;
      width: 100%;
    }
  }

  &-header {
    background: $--color-menu url("../../assets/background-h.png") no-repeat top
      center;
    color: $--color-white;
    padding: 0;
    @include image-retina("../../assets/background-h@2x.png", 1440px, 120px);
  }
  &-top {
    display: flex;
  }
  &-aside {
    @include image-retina("../../assets/background-v@2x.png", 320px, 1024px);
    background: $--color-menu url("../../assets/background-v.png") no-repeat top
      center;
    bottom: 0;
    color: $--color-white;
    display: flex;
    flex-direction: column;
    position: fixed;
    overflow: auto;
    top: 0;
  }
  &-main {
    &.el-main {
      padding: 0;
    }
    .mv-page--vertical & {
      margin-left: 320px;
    }
  }
  &-footer {
    padding: 30px 0 5px 0;
  }
}
</style>
