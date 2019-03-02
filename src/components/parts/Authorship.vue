<template>
  <div class="mv-authorship">
    Réalisé par
    <a
      v-if="application.author.website"
      :href="application.author.website"
      rel="nofollow"
      v-text="application.author.name"
    ></a>
    <span v-else v-text="application.author.name" />
  </div>
</template>

<script>
export default {
  name: "Authorship",
  inject: ["application"]
};
</script>

<style lang="scss">
@import "@/theme/_variables.scss";

.mv-authorship {
  color: inherit;
  font: font-default(12px);
  opacity: 0.5;
  padding: 5px;
  text-align: center;
  a {
    color: inherit;
    font: font-default-bold();
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
