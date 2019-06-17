<template>
  <div
    class="mv-mainTitle"
    v-html="`Interface d'<strong>administration</strong>`"
  ></div>
</template>

<script>
export default {
  name: "MvMainTitle"
};
</script>

<style scoped lang="scss">
@import "../../theme/_variables.scss";

.mv-mainTitle {
  color: $--color-white;
  font: font-default();
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  strong {
    font-weight: $--font-weight-bold;
  }
}
</style>
