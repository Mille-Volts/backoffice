<template>
  <el-container class="authentication-container">
    <el-header height="auto">
      <slot name="header">
        <logo :ratio="1.5"></logo>
      </slot>
    </el-header>
    <el-main>
      <div class="content">
        <main-title></main-title>
        <panel class="login-panel">
          <slot>
            <h1>Bienvenue</h1>
            <local-login/>
            <hr>
            <guest-login/>
          </slot>
        </panel>
        <div class="author">
          <authorship></authorship>
        </div>
      </div>
    </el-main>
    <el-footer height="auto">
      <slot name="header">
        <logo :ratio="1.5"></logo>
      </slot>
    </el-footer>
  </el-container>
</template>

<script>
import Authorship from "../parts/Authorship.vue";
import Logo from "../parts/Logo.vue";
import MainTitle from "../parts/MainTitle.vue";

import LocalLogin from "../authentication/LocalLogin.vue";
import GuestLogin from "../authentication/GuestLogin.vue";

export default {
  name: "AuthenticationLayout",
  inject: ["application"],
  components: {
    LocalLogin,
    GuestLogin,
    Logo,
    Authorship,
    MainTitle
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";

.authentication-container {
  @include image-retina("../../assets/background@2x.png", 1440px, 1024px);
  background: $--color-menu url("../../assets/background.png") no-repeat center
    center;
}
.el-header,
.el-footer {
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  text-align: center;
}
.el-footer {
  visibility: hidden;
}
.el-main {
  align-items: center;
  display: flex;
  flex: 4 0 auto;
  justify-content: start;
  .content {
    margin-left: 50%;
    width: 440px;
  }
  .author {
    color: $--color-white;
  }
  .login-panel {
    padding: 30px;
  }
}
</style>
