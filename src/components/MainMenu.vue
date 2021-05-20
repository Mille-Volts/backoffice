<template>
  <el-menu
    class="block"
    :mode="application.layout"
    :router="true"
    :default-active="currentPathActive"
    :default-openeds="defaultOpeneds"
  >
    <template v-for="(item, i) in authorizedRoutes">
      <el-submenu
        v-if="getDisplayedChildren(item).length"
        :key="`${item.path}-${i}`"
        :index="item.path"
        :show-timeout="0"
      >
        <template v-slot:title>
          <mv-icon v-if="!!item.meta.icon" :name="item.meta.icon" />
          <component
            :is="item.meta.labelComponent"
            v-if="item.meta.labelComponent"
            :defaultLabel="getName(item)"
            :item="item"
          />
          <span v-else>{{ getName(item) }}</span>
        </template>
        <el-menu-item
          v-for="(subItem, si) in getDisplayedChildren(item)"
          :key="`${subItem.path}-${si}`"
          :index="`${item.path}/${subItem.path}`"
          :disabled="subItem.disabled"
        >
          <mv-icon v-if="!!subItem.meta.icon" :name="subItem.meta.icon" />
          <component
            :is="subItem.meta.labelComponent"
            v-if="subItem.meta.labelComponent"
            :defaultLabel="getName(subItem)"
            :item="subItem"
          />
          <span v-else>{{ getName(subItem) }}</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item
        v-else
        :key="`${item.path}-${i}`"
        :index="item.path"
        :disabled="item.disabled"
      >
        <template v-slot:title>
          <mv-icon v-if="!!item.meta.icon" :name="item.meta.icon" />
          <component
            :is="item.meta.labelComponent"
            v-if="item.meta.labelComponent"
            :defaultLabel="getName(item)"
            :item="item"
          />
          <span v-else>{{ getName(item) }}</span>
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import {
  Menu as ElMenu,
  Submenu as ElSubmenu,
  MenuItem as ElMenuItem,
} from "element-ui";
import { hasUser, getUser } from "../util/auth";

export default {
  name: "MvMainMenu",
  inject: ["application"],
  components: {
    ElMenu,
    ElSubmenu,
    ElMenuItem,
  },
  props: {
    routes: Array,
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
      const pathsLevels = this.$route.path.split("/");
      return pathsLevels.slice(0, 3).join("/");
    },
    authorizedRoutes() {
      return this.filterAuthorized(this.routes);
    },
    defaultOpeneds() {
      return this.routes
        .filter(({ meta }) => meta.opened)
        .map(({ path }) => path);
    },
  },
  methods: {
    getName({ meta, name, path }) {
      return (meta && meta.label) || name || path;
    },
    isAuthorized({ meta }) {
      if (!meta) return true;
      if (meta.menu === false) return false;
      if (meta.auth) {
        if (meta.checkPermissions) return meta.checkPermissions(getUser());
        else return hasUser();
      }

      return true;
    },
    filterAuthorized(array) {
      return array ? array.filter(this.isAuthorized) : [];
    },
    getDisplayedChildren({ children }) {
      return this.filterAuthorized(children);
    },
  },
};
</script>

<style lang="scss">
@import "../theme/_variables.scss";

.el-menu,
.el-menu.el-menu--horizontal,
.el-menu--horizontal .el-menu {
  border-right: 0 !important;
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
    .mv-icon {
      margin-right: 5px;
      width: 24px;
      text-align: center;
      font-size: 18px;
      vertical-align: middle;
      color: currentColor;
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
