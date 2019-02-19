<template>
  <el-container
    :direction="application.layout === 'horizontal' ? 'vertical' : 'horizontal'"
    :class="`page-container--${application.layout}`"
    sticky-container
  >
    <el-header height="120px" v-if="application.layout === 'horizontal'">
      <div class="top">
        <logo></logo>
        <div class="title">
          <slot name="title">
            <main-title></main-title>
          </slot>
        </div>
        <div class="user">
          <slot name="user">
            <user></user>
          </slot>
        </div>
      </div>
      <div class="menu" v-sticky :sticky-z-index="2001" :sticky-offset="0">
        <slot name="menu">
          <main-menu :routes="routes"></main-menu>
        </slot>
      </div>
    </el-header>
    <el-aside v-else width="320px">
      <logo></logo>
      <div class="title">
        <slot name="title">
          <main-title></main-title>
        </slot>
      </div>
      <div class="user">
        <slot name="user">
          <user></user>
        </slot>
      </div>
      <div class="menu">
        <slot name="menu">
          <main-menu :routes="routes"></main-menu>
        </slot>
      </div>
      <div class="author">
        <slot name="author">
          <authorship/>
        </slot>
      </div>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer height="auto" v-if="application.layout === 'horizontal'">
      <div class="author">
        <slot name="author">
          <authorship/>
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

.logo {
  background: transparent url("../../assets/logo.png") no-repeat center center;
  background-size: 100% 100%;
  height: 76px;
  width: 240px;
}

.user {
  text-overflow: ellipsis;
  width: 240px;
}
.author {
  color: $--color-text-regular;
}

.el-aside {
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

  .logo {
    margin: 22px auto;
    min-height: 76px;
  }
  .title {
    background: $--color-secondary-dark;
  }
  .author {
    color: $--color-white;
    margin-top: auto;
  }
}
.el-header {
  background: $--color-menu url("../../assets/background-h.png") no-repeat top
    center;
  color: $--color-white;
  padding: 0;
  @include image-retina("../../assets/background-h@2x.png", 1440px, 120px);

  .top {
    display: flex;
  }
  .title {
    flex: 1;
    line-height: 56px;
    font-size: 16px;
  }
  .menu {
    background: $--color-secondary-dark;
    clear: both;
    display: flex;
    width: 100%;
  }
}
.el-main,
.el-footer {
  padding: 0;
}
.page-container--vertical {
  .el-main {
    margin-left: 320px;
  }
}
</style>
