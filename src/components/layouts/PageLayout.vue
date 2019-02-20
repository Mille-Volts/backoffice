<template>
  <el-container
    :class="`page page--${application.layout}`"
    :direction="application.layout === 'horizontal' ? 'vertical' : 'horizontal'"
    sticky-container
  >
    <el-header
      v-if="application.layout === 'horizontal'"
      class="page_header"
      height="120px"
    >
      <div class="page_top">
        <logo></logo>
        <div class="page_title">
          <slot name="title">
            <main-title></main-title>
          </slot>
        </div>
        <div class="page_user">
          <slot name="user">
            <user></user>
          </slot>
        </div>
      </div>
      <div v-sticky class="page_menu" :sticky-z-index="2001" :sticky-offset="0">
        <slot name="menu">
          <main-menu :routes="routes"></main-menu>
        </slot>
      </div>
    </el-header>
    <el-aside v-else class="page_aside" width="320px">
      <logo></logo>
      <div class="page_title">
        <slot name="title">
          <main-title></main-title>
        </slot>
      </div>
      <div class="page_user">
        <slot name="user">
          <user></user>
        </slot>
      </div>
      <div class="page_menu">
        <slot name="menu">
          <main-menu :routes="routes"></main-menu>
        </slot>
      </div>
      <div class="page_author">
        <slot name="author">
          <authorship />
        </slot>
      </div>
    </el-aside>
    <el-main class="page_main">
      <router-view></router-view>
    </el-main>
    <el-footer
      v-if="application.layout === 'horizontal'"
      class="page_footer"
      height="auto"
    >
      <div class="page_author">
        <slot name="author">
          <authorship />
        </slot>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import Authorship from "../parts/Authorship.vue";
import Logo from "../parts/Logo.vue";
import User from "../parts/User.vue";
import MainTitle from "../parts/MainTitle.vue";

export default {
  name: "PageLayout",
  inject: ["application"],
  prop: ["title"],
  components: {
    Authorship,
    Logo,
    User,
    MainTitle
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
      const childRoutes = routes.reduc(
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

<style scoped lang="scss">
@import "@/scss/common.scss";

.page {
  &_logo {
    background: transparent url("../../assets/logo.png") no-repeat center center;
    background-size: 100% 100%;
    height: 76px;
    width: 240px;
    .page--vertical & {
      margin: 22px auto;
      min-height: 76px;
    }
  }
  &_user {
    text-overflow: ellipsis;
    width: 240px;
    .page--vertical & {
    }
  }
  &_author {
    color: $--color-text-regular;
    .page--vertical & {
      color: $--color-white;
      margin-top: auto;
    }
  }
  &_title {
    .page--vertical & {
      background: $--color-secondary-dark;
    }
    .page--horizontal & {
      flex: 1;
      line-height: 56px;
      font-size: 16px;
    }
  }
  &_menu {
    .page--horizontal & {
      background: $--color-secondary-dark;
      clear: both;
      display: flex;
      width: 100%;
    }
  }

  &_header {
    background: $--color-menu url("../../assets/background-h.png") no-repeat top
      center;
    color: $--color-white;
    padding: 0;
    @include image-retina("../../assets/background-h@2x.png", 1440px, 120px);
  }
  &_top {
    display: flex;
  }
  &_aside {
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
  &_main {
    padding: 0;
    .page--vertical & {
      margin-left: 320px;
    }
  }
  &_footer {
    padding: 30px 0 5px 0;
  }
}
</style>
