<template>
  <div class="mv-logo" :style="{ width: `${width * ratio}px`, height: `${height * ratio}px` }"></div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    ratio: { type: Number, default: 1 },
    height: { type: Number, default: 76 },
    width: { type: Number, default: 240 }
  }
};
</script>

<style lang="scss">
@import "../../theme/_variables.scss";

.mv-logo {
  background: transparent url("../../assets/logo.png") no-repeat center center;
  background-size: 100% 100%;
  display: inline-block;
  margin: 0 auto;
}
</style>
