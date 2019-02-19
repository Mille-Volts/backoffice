<template>
  <div class="user" v-if="user.authenticated">
    <p v-text="user.data.name"></p>
    <mv-button @click="authentication.tryLogout" text>Déconnexion</mv-button>
  </div>
</template>

<script>
export default {
  name: "User",
  inject: ["user", "authentication"]
};
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";

.authorship {
  color: inherit;
  font-size: 12px;
  opacity: 0.5;
  padding: 5px;
  text-align: center;
  a {
    color: inherit;
    font-weight: 600;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
