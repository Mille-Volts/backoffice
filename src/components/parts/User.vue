<template>
  <div
    v-if="user.authenticated && user.data"
    class="mv-user"
    :class="`mv-user--${application.layout}`"
  >
    <div class="mv-user-picture mv-user-picture--icon">
      <mv-icon :name="user.data.icon || 'user'"></mv-icon>
    </div>
    <div class="mv-user-info">
      <p class="mv-user-name" v-text="user.data.name"></p>
      <mv-button text @click="authentication.logout">Déconnexion</mv-button>
    </div>
  </div>
</template>

<script>
import MvButton from "../Button.vue";
import MvIcon from "../Icon.vue";

export default {
  name: "User",
  inject: ["user", "authentication", "application"],
  components: {
    MvButton,
    MvIcon
  }
};
</script>

<style lang="scss">
@import "../../theme/_variables.scss";

.mv-user {
  display: flex;
  align-items: center;
  &--vertical {
    padding: 15px;
  }
  &--horizontal {
    flex-direction: row-reverse;
  }
  &-picture {
    &--icon {
      background: $--color-secondary;
      box-sizing: border-box;
      color: #a1b3c5;
      vertical-align: middle;
      .mv-user--vertical & {
        border: 2px solid #a1b3c5;
        border-radius: 100%;
        font-size: 32px;
        line-height: 32px;
        padding: 14px;
      }
      .mv-user--horizontal & {
        border: 1px solid #a1b3c5;
        border-radius: 2px;
        font-size: 24px;
        line-height: 24px;
        margin: 12px;
        padding: 12px;
      }
    }
  }
  &-info {
    .mv-user--vertical & {
      padding: 0 12px;
      text-align: left;
    }
    .mv-user--horizontal & {
      text-align: right;
    }
    .el-button {
      color: #a1b3c5;
      font: font-default(14px, 18px);
      padding: 0;
      text-decoration: underline;
      &:hover {
        color: $--color-white;
        text-decoration: none;
      }
    }
  }
  &-name {
    font: font-default-bold(16px, 20px);
    margin: 0;
    padding: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
  }
}
</style>
