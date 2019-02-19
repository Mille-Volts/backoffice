<template>
  <el-container
    :direction="application.layout === 'horizontal' ? 'vertical' : 'horizontal'"
    :class="`page-container--${application.layout}`"
    sticky-container
  >
    <el-header height="120px" v-if="application.layout === 'horizontal'">
      <div class="top">
        <div class="logo"></div>
        <div class="title">
          <slot name="title">
            <span class="default">
              Interface d'
              <strong>administration</strong>
            </span>
          </slot>
        </div>
        <div class="user"></div>
      </div>
      <div class="menu" v-sticky :sticky-z-index="2001" :sticky-offset="0">
        <slot name="menu"></slot>
      </div>
    </el-header>
    <el-aside v-else width="320px">
      <div class="logo"></div>
      <div class="title">
        <slot name="title">
          <span class="default">
            Interface d'
            <strong>administration</strong>
          </span>
        </slot>
      </div>
      <div class="menu">
        <slot name="menu"></slot>
      </div>
    </el-aside>
    <el-main>
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "PageLayout",
  inject: ["application"],
  prop: ["title"]
};
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";

.logo {
  background: transparent url("../assets/logo.png") no-repeat center center;
  background-size: 100% 100%;
  height: 76px;
  width: 240px;
}

.title {
  padding: 10px;
  text-align: center;
  .default {
    text-transform: uppercase;
    strong {
      font-weight: 600;
    }
  }
}

.user {
  text-overflow: ellipsis;
  width: 240px;
}

.el-aside {
  @include image-retina("../assets/background-v@2x.png", 320px, 1024px);
  background: $--color-menu url("../assets/background-v.png") no-repeat top
    center;
  bottom: 0;
  color: $--color-white;
  position: fixed;
  overflow: auto;
  top: 0;

  .logo {
    margin: 22px auto;
  }
  .title {
    background: $--color-secondary-dark;
  }
}
.el-header {
  background: $--color-menu url("../assets/background-h.png") no-repeat top
    center;
  color: $--color-white;
  padding: 0;
  @include image-retina("../assets/background-h@2x.png", 1440px, 120px);

  .top {
    display: flex;
  }
  .logo {
  }
  .title {
    flex: 1;
    line-height: 56px;
    font-size: 16px;
    text-align: center;
  }
  .user {
  }
  .menu {
    background: $--color-secondary-dark;
    clear: both;
    display: flex;
    width: 100%;
  }
}
.el-main {
  padding: 0;
}
.page-container--vertical {
  .el-main {
    margin-left: 320px;
  }
}
</style>
