<template>
  <div class="logo" :style="{width: `${width}px`, height: `${height}px`}"></div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    height: { type: Number, default: 76 },
    width: { type: Number, default: 240 }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";

.logo {
  background: transparent url("../../assets/logo.png") no-repeat center center;
  background-size: 100% 100%;
}
</style>
