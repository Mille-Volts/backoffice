<template>
  <el-container class="mv-authenticationLayout">
    <el-header height="auto" class="mv-authenticationLayout-header">
      <slot name="header">
        <logo :ratio="1.5"></logo>
      </slot>
    </el-header>
    <el-main class="mv-authenticationLayout-main">
      <div class="mv-authenticationLayout-content">
        <main-title></main-title>
        <panel class="mv-authenticationLayout-login-panel">
          <slot>
            <h1>Welcome</h1>
            <guest-login />
          </slot>
        </panel>
        <div class="mv-authenticationLayout-authorship">
          <authorship></authorship>
        </div>
      </div>
    </el-main>
    <el-footer height="auto" class="mv-authenticationLayout-footer">
      <slot name="header">
        <logo :ratio="1.5"></logo>
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
import Authorship from "../parts/Authorship.vue";
import Logo from "../parts/Logo.vue";
import MainTitle from "../parts/MainTitle.vue";

import GuestLogin from "../authentication/GuestLogin.vue";

export default {
  name: "AuthenticationLayout",
  inject: ["application"],
  components: {
    ElContainer,
    ElHeader,
    ElMain,
    ElFooter,
    GuestLogin,
    Logo,
    Authorship,
    MainTitle
  }
};
</script>

<style lang="scss">
@import "@/theme/_variables.scss";

.mv-authenticationLayout {
  @include image-retina("../../assets/background@2x.png", 1440px, 1024px);
  background: $--color-menu url("../../assets/background.png") no-repeat center
    center;

  &-header,
  &-footer {
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    text-align: center;
  }
  &-footer {
    visibility: hidden;
  }
  &-main {
    align-items: center;
    display: flex;
    flex: 4 0 auto;
    justify-content: start;
  }
  &-content {
    margin-left: 50%;
    width: 440px;
  }
  &-authorship {
    color: $--color-white;
  }
  &-login-panel {
    padding: 30px;
  }
}
</style>
