<template>
  <div class="user" :class="`user--${application.layout}`" v-if="user.authenticated">
    <div class="user_picture user_picture--icon">
      <icon :name="user.data.icon || 'user'"></icon>
    </div>
    <div class="user_info">
      <p class="user_info_name" v-text="user.data.name"></p>
      <mv-button @click="authentication.tryLogout" text>Déconnexion</mv-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  inject: ["user", "authentication", "application"]
};
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";

.user {
  display: flex;
  align-items: center;
  &.user--vertical {
    padding: 15px;
  }
  &.user--horizontal {
    flex-direction: row-reverse;
  }
  &_picture {
    &--icon {
      background: $--color-secondary;
      box-sizing: border-box;
      color: #a1b3c5;
      vertical-align: middle;
      .user--vertical & {
        border: 2px solid #a1b3c5;
        border-radius: 100%;
        font-size: 32px;
        line-height: 32px;
        padding: 14px;
      }
      .user--horizontal & {
        border: 1px solid #a1b3c5;
        border-radius: 2px;
        font-size: 24px;
        line-height: 24px;
        margin: 12px;
        padding: 12px;
      }
    }
  }
  &_info {
    .user--vertical & {
      padding: 0 12px;
      text-align: left;
    }
    .user--horizontal & {
      text-align: right;
    }
    &_name {
      font: 600 16px/20px $--font-stack-default;
      margin: 0;
      padding: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
    }
    .el-button {
      color: #a1b3c5;
      font: normal 14px/18px $--font-stack-default;
      padding: 0;
      text-decoration: underline;
      &:hover {
        color: $--color-white;
        text-decoration: none;
      }
    }
  }
}
</style>
