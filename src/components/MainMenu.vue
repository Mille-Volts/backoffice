<template>
  <el-menu :mode="application.layout" :router="true">
    <template v-for="(item, i) in routes">
      <el-submenu
        :key="`${item.path}-${i}`"
        v-if="item.children && item.children.length"
        :index="item.path"
      >
        <template v-slot:title v-text="item.label || item.name"></template>
        <el-menu-item
          v-for="(subItem, si) in item.children"
          :key="`${subItem.path}-${si}`"
          v-text="subItem.label || subItem.name"
          :index="subItem.path"
          :disabled="subItem.disabled"
        ></el-menu-item>
      </el-submenu>
      <el-menu-item
        :key="`${item.path}-${i}`"
        v-else
        v-text="item.label || item.name"
        :index="item.path"
        :disabled="item.disabled"
      ></el-menu-item>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: "MainMenu",
  inject: ["application"],
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
  }
};
</script>
