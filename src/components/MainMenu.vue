<template>
  <el-menu
    class="block"
    :mode="application.layout"
    :router="true"
    :default-active="currentPathActive"
  >
    <template v-for="(item, i) in routes">
      <el-submenu
        v-if="getDisplayedChildren(item).length"
        :key="`${item.path}-${i}`"
        :index="item.path"
        :show-timeout="0"
      >
        <template v-slot:title>{{ getName(item) }}</template>
        <el-menu-item
          v-for="(subItem, si) in getDisplayedChildren(item)"
          :key="`${subItem.path}-${si}`"
          :index="`${item.path}/${subItem.path}`"
          :disabled="subItem.disabled"
          v-text="getName(subItem)"
        ></el-menu-item>
      </el-submenu>
      <el-menu-item
        v-else
        :key="`${item.path}-${i}`"
        :index="item.path"
        :disabled="item.disabled"
        v-text="getName(item)"
      ></el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import {
  Menu as ElMenu,
  Submenu as ElSubmenu,
  MenuItem as ElMenuItem
} from "element-ui";

export default {
  name: "MainMenu",
  inject: ["application"],
  components: {
    ElMenu,
    ElSubmenu,
    ElMenuItem
  },
  props: {
    routes: Array
    /*
    {
      path: "/path-to-url",
      label: "label",
      disabled: false,
      children: [

      ]
    }
    */
  },
  data() {
    return {};
  },
  computed: {
    currentPathActive() {
      return this.$route.path;
    }
  },
  methods: {
    getName({ meta, name, path }) {
      return (meta && meta.label) || name || path;
    },
    getDisplayedChildren({ children }) {
      return children
        ? children.filter(({ meta }) => !meta || (meta.menu !== false))
        : [];
    }
  }
};
</script>

<style lang="scss">
@import "../theme/_variables.scss";

.el-menu,
.el-menu.el-menu--horizontal,
.el-menu--horizontal .el-menu {
  border: 0;
  font-weight: $--font-weight-bold;
  .el-submenu .el-menu-item {
    background: lighten($--color-secondary-dark, 3%);
    color: $--menu-item-color;
  }
  .el-menu-item,
  .el-submenu__title,
  .el-submenu .el-menu-item {
    background: $--color-secondary-dark;
    color: $--menu-item-color;
    height: 44px;
    line-height: 44px;
    &:hover,
    &:focus {
      background-color: $--color-secondary-darker;
      color: $--color-white;
    }
    &.is-active {
      background-color: $--color-secondary-darker;
      color: $--color-white;
    }
  }
  .el-submenu:focus .el-submenu__title {
    background-color: $--color-secondary-darker;
    color: $--color-white;
  }
  .el-submenu__icon-arrow {
    margin-top: -5px;
  }
  .el-menu-item,
  .el-submenu__title,
  .el-submenu .el-menu-item {
    border-left: 5px solid transparent;
    &.is-active {
      border-color: $--color-primary;
    }
  }
}
.el-menu.el-menu--horizontal {
  display: inline-block;
  margin: 0 auto;
  .el-menu-item,
  .el-submenu__title {
    border-left: 0;
    border-bottom: 3px solid transparent;
  }
  .el-submenu.is-active .el-submenu__title {
    background-color: $--color-secondary-darker;
    border-bottom: 3px solid $--color-primary;
    color: $--color-white;
  }
}
.el-menu--horizontal .el-menu--popup {
  background: $--color-secondary-dark;
  color: $--menu-item-color;
}
</style>
