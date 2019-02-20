<template>
  <mv-form :model="data" :disabled="isAuthenticating" @submit="tryLocalLogin">
    <h2>Connexion locale</h2>
    <p>
      Utilisez votre identifiant et votre mot de passe pour accéder à
      l'interface d'administration.
    </p>
    <form-item label="Votre identifiant" required>
      <el-input
        v-model="data.username"
        type="text"
        placeholder="adresse@email.com"
        required
      />
    </form-item>
    <form-item label="Votre mot de passe" required>
      <el-input
        v-model="data.password"
        type="password"
        placeholder="******"
        required
      />
    </form-item>
    <p v-if="error" class="local-login_error" v-text="error"></p>
    <mv-button type="submit" icon="lock" :loading="isAuthenticating" success
      >Connexion</mv-button
    >
  </mv-form>
</template>

<script>
export default {
  name: "LocalLogin",
  inject: ["authentication"],

  data() {
    return {
      isAuthenticating: false,
      error: null,
      data: {}
    };
  },
  methods: {
    async tryLocalLogin(data) {
      this.isAuthenticating = true;
      try {
        await this.authentication.tryLogin({ type: "local", ...data });
      } catch (err) {
        console.log(err);
        this.error = err.message;
      } finally {
        this.isAuthenticating = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/common.scss";

.local-login {
  &_error {
    color: $--color-danger;
    font: font-bold(14px);
    padding: 0;
    margin: 15px 0;
  }
}
</style>
