<template>
  <el-container class="authentication-layout">
    <el-header height="auto" class="authentication-layout_header">
      <slot name="header">
        <logo :ratio="1.5"></logo>
      </slot>
    </el-header>
    <el-main class="authentication-layout_main">
      <div class="authentication-layout_content">
        <main-title></main-title>
        <panel class="authentication-layout_login-panel">
          <slot>
            <h1>Welcome</h1>
            <guest-login/>
          </slot>
        </panel>
        <div class="authentication-layout_authorship">
          <authorship></authorship>
        </div>
      </div>
    </el-main>
    <el-footer height="auto" class="authentication-layout_footer">
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

.authentication-layout {
  @include image-retina("../../assets/background@2x.png", 1440px, 1024px);
  background: $--color-menu url("../../assets/background.png") no-repeat center
    center;

  &_header,
  &_footer {
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    text-align: center;
  }
  &_footer {
    visibility: hidden;
  }
  &_main {
    align-items: center;
    display: flex;
    flex: 4 0 auto;
    justify-content: start;
  }
  &_content {
    margin-left: 50%;
    width: 440px;
  }
  &_authorship {
    color: $--color-white;
  }
  &_login-panel {
    padding: 30px;
  }
}
</style>
