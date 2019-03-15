<template>
  <el-container class="mv-authenticationLayout">
    <el-header height="auto" class="mv-authenticationLayout-header">
      <slot name="header">
        <mv-logo :ratio="1.5"></mv-logo>
      </slot>
    </el-header>
    <el-main class="mv-authenticationLayout-main">
      <div class="mv-authenticationLayout-content">
        <mv-main-title></mv-main-title>
        <mv-panel class="mv-authenticationLayout-login-panel">
          <slot>
            <h1>Welcome</h1>
            <mv-guest-login/>
          </slot>
        </mv-panel>
        <div class="mv-authenticationLayout-authorship">
          <mv-authorship></mv-authorship>
        </div>
      </div>
    </el-main>
    <el-footer height="auto" class="mv-authenticationLayout-footer">
      <slot name="header">
        <mv-logo :ratio="1.5"></mv-logo>
      </slot>
    </el-footer>
  </el-container>
</template>

<script>
import {
  Container as ElContainer,
  Header as ElHeader,
  Main as ElMain,
  Footer as ElFooter
} from "element-ui";
import MvAuthorship from "../parts/Authorship.vue";
import MvLogo from "../parts/Logo.vue";
import MvMainTitle from "../parts/MainTitle.vue";
import MvPanel from "../Panel.vue";

import MvGuestLogin from "../authentication/GuestLogin.vue";

export default {
  name: "AuthenticationLayout",
  inject: ["application"],
  components: {
    ElContainer,
    ElHeader,
    ElMain,
    ElFooter,
    MvGuestLogin,
    MvLogo,
    MvAuthorship,
    MvMainTitle,
    MvPanel
  }
};
</script>

<style lang="scss">
@import "../../theme/_variables.scss";

.mv-authenticationLayout {
  @include image-retina("../../assets/background@2x.png", 1440px, 1024px);
  background: $--color-menu url("../../assets/background.png") no-repeat center
    center;

  &-header,
  &-footer {
    &.el-header,
    &.el-footer {
      align-items: center;
      display: flex;
      flex: 1 0 auto;
      justify-content: center;
      text-align: center;
    }
  }
  &-footer {
    &.el-footer {
      visibility: hidden;
    }
  }
  &-main {
    &.el-main {
      align-items: center;
      display: flex;
      flex: 4 0 auto;
      flex-grow: 0;
      flex-shrink: 0;
      justify-content: start;
    }
  }
  &-content {
    margin-left: 50%;
    width: 440px;
  }
  &-authorship {
    color: $--color-white;
  }
  &-login-panel {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    padding: 30px;
  }
}
</style>
