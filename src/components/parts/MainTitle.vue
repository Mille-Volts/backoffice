<template>
  <div
    class="main-title"
    v-html="`Interface d'<strong>administration</strong>`"
  ></div>
</template>

<style scoped lang="scss">
@import "@/theme/common.scss";

.main-title {
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
