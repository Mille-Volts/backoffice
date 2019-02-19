<template>
  <el-container class="authentication-container">
    <el-header>
      <slot name="logo">
        <logo></logo>
      </slot>
    </el-header>
    <el-main>
      <panel>
        <slot>
          <h1>Bienvenue</h1>
          <local-login/>
          <hr>
          <guest-login/>
        </slot>
      </panel>
    </el-main>
  </el-container>
</template>

<script>
import LocalLogin from "../authentication/LocalLogin.vue";
import GuestLogin from "../authentication/GuestLogin.vue";
import Logo from "../parts/Logo.vue";

export default {
  name: "AuthenticationLayout",
  inject: ["application"],
  components: {
    LocalLogin,
    GuestLogin,
    Logo
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
.el-main {
}
</style>
